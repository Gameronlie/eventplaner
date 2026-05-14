const cacheName = 'portal-v1';
const assets = ['./', './index.html', './manifest.json', './Gemini_Generated_Image_bu298gbu298gbu29.png'];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
