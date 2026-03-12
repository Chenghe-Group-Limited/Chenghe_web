export const config = {
    runtime: 'edge',
  };
  
  function getCorsHeaders(request) {
    const origin = request.headers.get('origin') || '*';
    return {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
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
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  
    try {
      const formData = await request.formData();
  
      const company = formData.get('company') || '';
      const name = formData.get('name') || '';
      const title = formData.get('title') || '';
      const email = formData.get('email') || '';
      const wechat = formData.get('wechat') || '';
      const message = formData.get('message') || '';
  
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
  
      if (!RESEND_API_KEY || !NOTIFY_EMAIL) {
        return new Response(
          JSON.stringify({ error: 'Server is not configured correctly (missing RESEND_API_KEY or NOTIFY_EMAIL).' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
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
  
      const data = await resendResp.json();
  
      if (!resendResp.ok) {
        return new Response(
          JSON.stringify({
            error: 'Failed to send email via Resend',
            detail: data,
          }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
  
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (err) {
      return new Response(
        JSON.stringify({ error: 'Unexpected server error', detail: String(err && err.message || err) }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  }