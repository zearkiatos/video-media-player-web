const VERSION = "v1";
self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  event.respondWith(cachedResponse(request));

  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    "/",
    "/index.html",
    "/scripts/index.js",
    "/scripts/MediaPlayer.js",
    "/scripts/plugins/AutoPlay.js",
    "/scripts/plugins/AutoPause.js",
    "/assets/index.css",
    "/assets/BigBuckBunny.mp4",
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);

  const response = await cache.match(request);

  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);

  const response = await fetch(request);

  return cache.put(request, response);
}
