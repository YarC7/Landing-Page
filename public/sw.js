const CACHE_NAME = 'delta-atelier-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/images/logo.png',
  // Thêm các assets quan trọng
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Thêm cache strategy
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
