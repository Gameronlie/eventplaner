const CACHE_NAME = 'startup-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/icon-512.png'
];

// Installation: Dateien in den Speicher laden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Abrufen: Lädt Dateien auch offline, wenn sie im Cache sind
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});