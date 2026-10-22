const CACHE_NAME = 'sanga-pwa-v9';
const CACHE_EXTERNAL = 'sanga-external-v9';

// Assets locales pre-cacheados para funcionamiento offline
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css?v=9.0',
  './app.js?v=9.0',
  './manifest.json'
];

// ── Instalación: activar inmediatamente sin esperar ──
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('[SW] Fallo al pre-cachear:', err);
      });
    })
  );
});

// ── Activación: borrar cachés antiguas y tomar control de clientes ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME && k !== CACHE_EXTERNAL)
            .map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

// ── Fetch: Network-First para assets locales (siempre código nuevo), Cache-First para offline ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const isLocal = url.origin === self.location.origin;
  const isNavigate = event.request.mode === 'navigate';

  // Navegación principal → Network-first, fallback a index.html cacheado
  if (isNavigate) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match('./index.html') || caches.match('./'))
    );
    return;
  }

  // Assets locales (CSS, JS, manifest) → NETWORK-FIRST (garantiza la versión más reciente en Vercel)
  if (isLocal) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Recursos externos (CDN, fuentes, imágenes) → Cache-first con actualización en segundo plano
  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetchPromise = fetch(event.request).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_EXTERNAL).then(c => c.put(event.request, clone));
        }
        return res;
      }).catch(() => null);

      return cached || fetchPromise;
    })
  );
});
