export const config = {
    runtime: 'edge',
  };
  
  function jsonResponse(body, status, corsHeaders) {
    return new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  function getCorsHeaders(request) {
    const origin = request.headers.get('origin') || '*';
    return {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
  }

  function getMissingEnvVars(envMap) {
    return Object.entries(envMap)
      .filter(function(entry) { return !entry[1]; })
      .map(function(entry) { return entry[0]; });
  }

  function summarizeResendError(data) {
    if (!data || typeof data !== 'object') return null;
    return data.message || data.error || data.name || null;
  }
  
  function base64FromArrayBuffer(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    // Edge runtime 里可以用 btoa
    return btoa(binary);
  }
  
  export default async function handler(request) {
    const corsHeaders = getCorsHeaders(request);
  
    if (request.method === 'OPTIONS') {
      return new Response('', { status: 204, headers: corsHeaders });
    }
  
    if (request.method !== 'POST') {
      return jsonResponse({
        ok: false,
        code: 'METHOD_NOT_ALLOWED',
        error: 'Method not allowed',
        hint: 'Use POST to submit the contact form.',
      }, 405, corsHeaders);
    }

    try {
      const formData = await request.formData();

      const company = String(formData.get('company') || '').trim();
      const name = String(formData.get('name') || '').trim();
      const title = String(formData.get('title') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const wechat = String(formData.get('wechat') || '').trim();
      const message = String(formData.get('message') || '').trim();

      if (!company || !name || !title) {
        return jsonResponse({
          ok: false,
          code: 'VALIDATION_ERROR',
          error: 'Missing required fields',
          hint: 'company, name, and title are required.',
        }, 400, corsHeaders);
      }

      if (!email && !wechat) {
        return jsonResponse({
          ok: false,
          code: 'VALIDATION_ERROR',
          error: 'Missing contact info',
          hint: 'At least one of email or wechat is required.',
        }, 400, corsHeaders);
      }

      const attachmentFile = formData.get('attachment');
      let attachments = [];

      if (attachmentFile && typeof attachmentFile === 'object' && attachmentFile.size > 0) {
        const arrayBuffer = await attachmentFile.arrayBuffer();
        const base64 = base64FromArrayBuffer(arrayBuffer);
        attachments.push({
          filename: attachmentFile.name || 'attachment.pdf',
          content: base64,
        });
      }

      const RESEND_API_KEY = process.env.RESEND_API_KEY;
      const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL;
      const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev';
      const FROM_NAME = process.env.FROM_NAME || 'Chenghe Website';

      const missingEnvVars = getMissingEnvVars({
        RESEND_API_KEY,
        NOTIFY_EMAIL,
      });

      if (missingEnvVars.length) {
        return jsonResponse({
          ok: false,
          code: 'SERVER_CONFIG_ERROR',
          error: 'Missing required environment variables',
          missing: missingEnvVars,
          hint: 'Set these variables in Vercel Project Settings > Environment Variables, then redeploy.',
        }, 500, corsHeaders);
      }

      const subject = `New contact inquiry from ${company || name || 'website'}`;

      const textLines = [
        `Company: ${company}`,
        `Name: ${name}`,
        `Title: ${title}`,
        `Email: ${email}`,
        `WeChat: ${wechat}`,
        '',
        'Message:',
        message,
      ];

      const emailBody = {
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        to: [NOTIFY_EMAIL],
        subject,
        text: textLines.join('\n'),
        attachments: attachments.length ? attachments : undefined,
      };

      const resendResp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailBody),
      });

      const data = await resendResp.json().catch(function() {
        return null;
      });
  
      if (!resendResp.ok) {
        return jsonResponse({
          ok: false,
          code: 'RESEND_SEND_FAILED',
          error: 'Failed to send email via Resend',
          resendStatus: resendResp.status,
          resendDetail: data,
          hint: summarizeResendError(data) || 'Check RESEND_API_KEY, FROM_EMAIL domain verification, and NOTIFY_EMAIL.',
        }, 502, corsHeaders);
      }
  
      return jsonResponse({
        ok: true,
        id: data && data.id ? data.id : null,
        message: 'Contact form submitted successfully.',
      }, 200, corsHeaders);
    } catch (err) {
      return jsonResponse({
        ok: false,
        code: 'VERCEL_FUNCTION_ERROR',
        error: 'Unexpected server error',
        detail: String(err && err.message || err),
        hint: 'Check the Vercel function logs for the full stack trace.',
      }, 500, corsHeaders);
    }
  }