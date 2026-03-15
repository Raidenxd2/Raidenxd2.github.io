const cacheName = "raiden-Cookieclicker2.mp4-3.0.0-PublicRelease-OS_11171 (open-source, affc6e7a245c1e3baee343276d90552e16c17528)";
const contentToCache = [
    "Build/823e2057c1befef83e1bbb0cfc9687de.loader.js",
    "Build/12f034cea83a99b642308643202c812c.framework.js",
    "Build/21716e53f81acdfdeced8126d83ac735.data",
    "Build/3666b4d15b15520d1b943c12b2915d27.wasm",
    "TemplateData/style.css"

];

self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
    e.waitUntil((async function () {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
    })());
});

self.addEventListener('fetch', function (e) {
    e.respondWith((async function () {
      let response = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (response) { return response; }

      response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
});
