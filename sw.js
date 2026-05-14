const CACHE_NAME = 'portal-v1';

// Zwingt die App, den neuen Code sofort zu aktivieren
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((names) => {
            return Promise.all(names.map(name => caches.delete(name)));
        })
    );
});

// Netzwerk-Zuerst-Strategie: Holt immer den neuesten Code vom Server
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
