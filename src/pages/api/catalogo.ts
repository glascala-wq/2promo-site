// API route: POST /api/catalogo
// Riceve email → aggiunge a lista 14 Brevo + invia template 30 con link PDF

export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env ?? import.meta.env;
  const BREVO_API_KEY = env.BREVO_API_KEY;
  const BREVO_LIST_ID_CATALOGO = parseInt(env.BREVO_LIST_ID_CATALOGO ?? '14', 10);
  const TURNSTILE_SECRET_KEY = env.TURNSTILE_SECRET_KEY;

  if (!BREVO_API_KEY) {
    return new Response(JSON.stringify({ error: 'Missing BREVO_API_KEY' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let email: string | null = null;
  let honeypot = '';
  let formLoaded = 0;
  let turnstileToken = '';
  const contentType = request.headers.get('content-type') ?? '';

  if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    try {
      const formData = await request.formData();
      email = (formData.get('email') as string | null)?.trim() ?? null;
      honeypot = (formData.get('website') as string | null) ?? '';
      formLoaded = parseInt((formData.get('_form_loaded') as string | null) ?? '0', 10);
      turnstileToken = (formData.get('cf-turnstile-response') as string | null) ?? '';
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid form data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } else {
    // JSON fallback
    try {
      const body = await request.json() as { email?: string; website?: string; _form_loaded?: string; 'cf-turnstile-response'?: string };
      email = body.email?.trim() ?? null;
      honeypot = body.website ?? '';
      formLoaded = parseInt(body._form_loaded ?? '0', 10);
      turnstileToken = body['cf-turnstile-response'] ?? '';
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid request body' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  // === ANTI-SPAM (iter-10) — validato prima di toccare Brevo ===

  // L1: Honeypot → fake success.
  if (honeypot.length > 0) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // L3: Time-based. Submit <3s → bot. Fake success.
  const elapsed = Date.now() - formLoaded;
  if (!formLoaded || elapsed < 3000) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  if (elapsed > 1000 * 60 * 60 * 24) {
    return new Response(JSON.stringify({ error: 'Sessione scaduta, ricarica la pagina' }), {
      status: 410,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // L2: Cloudflare Turnstile (chiamata esterna → per ultima).
  if (!turnstileToken) {
    return new Response(JSON.stringify({ error: 'Verifica anti-spam richiesta' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  if (TURNSTILE_SECRET_KEY) {
    const verifyResp = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET_KEY,
        response: turnstileToken,
        remoteip: request.headers.get('CF-Connecting-IP') ?? '',
      }),
    });
    const verifyData = (await verifyResp.json()) as { success?: boolean };
    if (!verifyData.success) {
      return new Response(JSON.stringify({ error: 'Verifica anti-spam fallita. Riprova.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } else {
    console.error('TURNSTILE_SECRET_KEY mancante: skip verify (configurare env var).');
  }

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Email non valida' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // 1. Crea/aggiorna contatto Brevo → lista catalogo
  const contactResp = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify({
      email,
      listIds: [BREVO_LIST_ID_CATALOGO],
      updateEnabled: true,
      attributes: { FONTE: '2promo-catalogo' },
    }),
  });

  if (!contactResp.ok) {
    const errText = await contactResp.text();
    console.error('Brevo contact error:', contactResp.status, errText);
  }

  // 2. Invia email transazionale con template 30 (link PDF catalogo)
  const emailResp = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify({
      to: [{ email }],
      templateId: 30,
      params: {
        CATALOGO_URL: 'https://view.publitas.com/2promo/catalogo-2024/page/1',
      },
    }),
  });

  if (!emailResp.ok) {
    const errText = await emailResp.text();
    console.error('Brevo email error:', emailResp.status, errText);
    return new Response(JSON.stringify({ error: 'Errore invio email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
