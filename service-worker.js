const CACHE_NAME = 'bdbb-journal-v1';
const ASSETS = [
  'splash.html',
  'index.html',
  'gratitude.html',
  'goals.html',
  'event.html',
  'overview.html',
  'scenarios.html',
  'main-dashboard.jpg',
  'manifest.webmanifest',
  'style.css',
  'app.js'
  // add any other images or CSS/JS files here
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});

      cached || fetch(event.request)
    )
  );
});

