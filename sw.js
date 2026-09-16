const CACHE_NAME = 'sanga-pwa-v2';

self.addEventListener('install', event => {
  self.skipWaiting(); // Forzar actualización
});

self.addEventListener('activate', event => {
  // Limpiar cachés antiguos
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia Network-First
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
