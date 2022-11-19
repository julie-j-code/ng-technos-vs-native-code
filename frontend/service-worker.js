
const BASE = location.protocol + "//" + location.host;
const PREFIX = "V0";
const CACHED_FILES = [
  `${BASE}/static/js/index.js`,`${BASE}/static/js/Service.js`, `${BASE}/static/js/techno-details.js`, `${BASE}/static/js/techno-list.js`, `${BASE}/static/js/update-techno.js`,`${BASE}/static/js/Techno.js`,`${BASE}/static/pages/add-techno.html`,`${BASE}/static/pages/index.html`,`${BASE}/static/pages/techno-details.html`,`${BASE}/static/pages/technos-list.html`,`${BASE}/pages/update-techno.html`,`${BASE}/index.html`
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      const cache = await caches.open(PREFIX);
      await cache.addAll([...CACHED_FILES, "/offline.html"]);
    })()
  );
  console.log(`${PREFIX} Install`);
});

self.addEventListener("activate", (event) => {
  clients.claim();
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (!key.includes(PREFIX)) {
            return caches.delete(key);
          }
        })
      );
    })()
  );
  console.log(`${PREFIX} Active`);
});


  
self.addEventListener('fetch', (e) => {
  console.log('[Service Worker] Ressource récupérée '+e.request.url);
  e.respondWith(
    caches.match(e.request).then((r) => {
          console.log('[Service Worker] Récupération de la ressource: '+e.request.url);
      return r || fetch(e.request).then((response) => {
                return caches.open(PREFIX).then((cache) => {
          console.log('[Service Worker] Mise en cache de la nouvelle ressource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});