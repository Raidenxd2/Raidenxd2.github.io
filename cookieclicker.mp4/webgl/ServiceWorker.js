const cacheName = "raiden-Cookieclicker.mp4-12_27 (main, d71277b957e9c947ba762f7bc614caecc734b9d8)";
const contentToCache = [
    "Build/bf7e3eba52dd2353d0a9e310b27ab7f0.loader.js",
    "Build/28717facd74787f2d9dd16db93744ece.framework.js",
    "Build/938246a4c400d729c7d8d7f58d4a5e51.data",
    "Build/a781f0bff03de4579ea2a2cf57bea8ef.wasm",
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
