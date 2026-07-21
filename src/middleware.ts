import { defineMiddleware } from 'astro:middleware';

// custom.2promo.it dismesso (ex progetto yourchoice, ora migrato qui) — collassa
// tutti i path sull'unica pagina /custom. Il file _redirects non si applica
// perché questo sito serve tutto tramite _worker.js (Cloudflare Pages Functions
// non processano _redirects, vedi docs Cloudflare).
export const onRequest = defineMiddleware((context, next) => {
  const host = context.request.headers.get('host');
  if (host === 'custom.2promo.it') {
    return context.redirect('https://www.2promo.it/custom', 301);
  }
  return next();
});
