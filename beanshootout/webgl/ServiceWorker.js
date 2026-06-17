const cacheName = "OneWing-The Great Bean Shootout-0.9.3-PublicBeta_8463 (main, d69b36e5fa980e70367a5e56396174ec65e1d0b8)";
const contentToCache = [
    "Build/BeanShootoutWebGLPWA.loader.js",
    "Build/BeanShootoutWebGLPWA.framework.js",
    "Build/BeanShootoutWebGLPWA.data",
    "Build/BeanShootoutWebGLPWA.wasm",
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
