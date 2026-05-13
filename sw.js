self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('event-store').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/manifest.json',
      '/Gemini_Generated_Image_bu298gbu298gbu29.png'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
