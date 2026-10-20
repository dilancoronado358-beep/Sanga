const CACHE_NAME = 'sanga-pwa-v4';
const CACHE_EXTERNAL = 'sanga-external-v4';

// Assets locales que SIEMPRE se cachean al instalar
const ASSETS_TO_CACHE = [
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json'
];

// ── Instalación: pre-cachear assets locales ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// ── Activación: limpiar cachés antiguas ──
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

// ── Fetch: estrategia según tipo de recurso ──
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
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Assets locales (CSS, JS) → Cache-first, luego red
  if (isLocal) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        return cached || fetch(event.request).then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          }
          return res;
        });
      })
    );
    return;
  }

  // Recursos externos (CDN, imágenes Cloudinary, fuentes) → Network-first con caché
  event.respondWith(
    fetch(event.request)
      .then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_EXTERNAL).then(c => c.put(event.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
