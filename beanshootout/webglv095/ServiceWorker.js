const cacheName = "OneWing-The Great Bean Shootout-0.9.5-PublicBeta_8522 (main, 47ca5a9f8f88b7517d73c5bbae8310fdd59a3667)";
const contentToCache = [
    "Build/6973a1ed8fd777dbf907606ac73ddb41.loader.js",
    "Build/0f2a5152f3d9f26aff77efc154467e3d.framework.js",
    "Build/f17e1b11002eb176878114affddcdb7d.data",
    "Build/0c8bca85aa94669a1f57e860d60389fa.wasm",
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
