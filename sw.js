// Source sw.js
const VERSION = "V1";

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", (event) => {
  const request = event.request; 
  // Only GET
  if (request.method !== "GET") {
    return;
  }

  // buscamos en cache
  event.respondWith(cachedResponse(request));

  // actualizamos el cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    // "./",
    // "./Index.html",
    // "./Assets/Index.js",
    // "./Assets/MediaPlayer.js",
    // "./Assets/Plugins/AutoPlay.js",
    // "./Assets/Plugins/AutoPause.js",
    // "./Assets/Index.css",
    // "./Assets/BigBuckBunny.mp4"
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}


// it updates the cache given a request
async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  // Cache.put when status code is 200 
  // Otherwise return a simple promise 
  return response.status === 200 
      ? cache.put(request, response) 
      : new Promise((resolve, reject) => resolve(':D'));    
}