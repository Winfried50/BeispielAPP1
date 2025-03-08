// sw.js
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-app-cache').then(function(cache) {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'sw.js',
        'js.js',
        'icon1.png',
        'icon2.png',
        'Ei.jpg',
        'Start.jpg',
        // weitere Ressourcen
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});