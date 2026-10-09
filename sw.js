const CACHE_NAME = 'notas-neon-pwa-v1';
const assetsToCache = [
  './index.html',
  './jogo.html',
  './manifest.json'
];

// Instalação do Service Worker e cache dos ficheiros essenciais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Interceção de pedidos de rede para servir conteúdo offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
