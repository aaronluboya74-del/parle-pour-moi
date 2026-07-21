self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('parle-pour-moi-v1').then(cache => {
      return cache.addAll(['parlepourmoi.html']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
