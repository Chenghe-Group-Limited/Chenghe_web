/**
 * Cloudflare Worker: 联系表单后端
 * - 接收 multipart/form-data 提交
 * - 附件上传到 R2，邮件中附带下载链接
 * - 通过 Resend 发送通知邮件到 NOTIFY_EMAIL
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
};

export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    if (request.method === 'GET' && url.pathname === '/download' && url.searchParams.has('key') && url.searchParams.has('token')) {
      return handleDownload(request, env, url);
    }
    if (request.method === 'POST' && (url.pathname === '/' || url.pathname === '')) {
      return handleFormSubmit(request, env, url);
    }

    return jsonResponse({ error: 'Not Found' }, 404);
  },
};

async function handleDownload(request, env, url) {
  const key = url.searchParams.get('key');
  const token = url.searchParams.get('token');
  if (!env.DOWNLOAD_TOKEN || token !== env.DOWNLOAD_TOKEN) {
    return new Response('Forbidden', { status: 403, headers: { ...CORS_HEADERS, 'Content-Type': 'text/plain' } });
  }
  if (!env.R2_BUCKET) {
    return new Response('Server error', { status: 500, headers: { ...CORS_HEADERS } });
  }
  try {
    const object = await env.R2_BUCKET.get(key);
    if (!object) return new Response('Not Found', { status: 404, headers: CORS_HEADERS });
    const filename = key.split('/').pop() || 'attachment.pdf';
    return new Response(object.body, {
      headers: {
        ...CORS_HEADERS,
        'Content-Type': object.httpMetadata?.contentType || 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (e) {
    return new Response('Error', { status: 500, headers: CORS_HEADERS });
  }
}

async function handleFormSubmit(request, env, url) {
  const origin = request.headers.get('Origin') || '';
  const cors = { ...CORS_HEADERS, 'Access-Control-Allow-Origin': origin || '*' };

  if (!env.R2_BUCKET || !env.RESEND_API_KEY || !env.NOTIFY_EMAIL) {
    return jsonResponse({ error: 'Server not configured' }, 500, cors);
  }

  const contentType = request.headers.get('Content-Type') || '';
  if (!contentType.includes('multipart/form-data')) {
    return jsonResponse({ error: 'Expected multipart/form-data' }, 400, cors);
  }

  let company = '', name = '', title = '', email = '', wechat = '', message = '';
  let fileKey = null;
  let fileName = '';

  try {
    const formData = await request.formData();
    company = (formData.get('company') || '').toString().trim();
    name = (formData.get('name') || '').toString().trim();
    title = (formData.get('title') || '').toString().trim();
    email = (formData.get('email') || '').toString().trim();
    wechat = (formData.get('wechat') || '').toString().trim();
    message = (formData.get('message') || '').toString().trim();

    if (!company || !name || !title) {
      return jsonResponse({ error: 'Missing required fields' }, 400, cors);
    }
    if (!email && !wechat) {
      return jsonResponse({ error: 'Email or WeChat ID required' }, 400, cors);
    }

    const file = formData.get('attachment');
    if (file && file.size > 0) {
      const rawName = file.name || 'attachment.pdf';
      const safeName = rawName.replace(/[^a-zA-Z0-9._-]/g, '_');
      const r2Name = safeName.toLowerCase().endsWith('.pdf') ? safeName : safeName + '.pdf';
      const date = new Date().toISOString().slice(0, 10);
      const uid = crypto.randomUUID ? crypto.randomUUID().slice(0, 8) : Date.now().toString(36);
      fileKey = `uploads/${date}-${uid}-${r2Name}`;
      fileName = file.name || 'attachment.pdf';
      await env.R2_BUCKET.put(fileKey, file.stream(), {
        httpMetadata: { contentType: file.type || 'application/pdf' },
      });
    }

    const baseUrl = url.origin;
    let attachmentHtml = '';
    if (fileKey && env.DOWNLOAD_TOKEN) {
      const link = `${baseUrl}/download?key=${encodeURIComponent(fileKey)}&token=${encodeURIComponent(env.DOWNLOAD_TOKEN)}`;
      attachmentHtml = `<p><strong>Supporting Materials:</strong> <a href="${link}">Download PDF (${escapeHtml(fileName)})</a></p>`;
    } else if (fileKey) {
      attachmentHtml = '<p>(Attachment uploaded; download link not configured.)</p>';
    }

    const subject = `Contact Form: ${company} – ${name}`;
    const html = `
      <h3>New contact form submission</h3>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Contact Person:</strong> ${escapeHtml(name)}</p>
      <p><strong>Title / Position:</strong> ${escapeHtml(title)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email || '—')}</p>
      <p><strong>WeChat ID:</strong> ${escapeHtml(wechat || '—')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message || '—')}</p>
      ${attachmentHtml}
    `;

    const fromEmail = env.FROM_EMAIL || 'onboarding@resend.dev';
    const fromName = env.FROM_NAME || 'Chenghe Contact Form';

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${fromName} <${fromEmail}>`,
        to: [env.NOTIFY_EMAIL],
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return jsonResponse({ error: 'Email send failed', detail: err }, 502, cors);
    }

    return jsonResponse({ ok: true }, 200, cors);
  } catch (e) {
    return jsonResponse({ error: 'Server error', detail: (e && e.message) || String(e) }, 500, cors);
  }
}

function escapeHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function jsonResponse(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
      ...extraHeaders,
    },
  });
}
