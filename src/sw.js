// Service Worker for Homes at Lone Mountain
const CACHE_VERSION = 'v1';
const CACHE_NAME = `homes-lone-mountain-${CACHE_VERSION}`;

// Assets to cache on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/404.html',
  '/styles/main.css',
  '/scripts/main.js'
];

// RealScout resources to cache
const REALSCOUT_CACHE = 'realscout-cache-v1';
const REALSCOUT_RESOURCES = [
  'https://widgets.realscout.com/target/umd/realscout-components.js'
];

// Install event - cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_ASSETS)),
      caches.open(REALSCOUT_CACHE).then(cache => cache.addAll(REALSCOUT_RESOURCES))
    ])
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            return (
              cacheName.startsWith('homes-lone-mountain-') &&
              cacheName !== CACHE_NAME
            );
          })
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// Fetch event - network first for API and dynamic content, cache first for static assets
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Get the URL and pathname
  const url = new URL(event.request.url);
  const pathname = url.pathname;

  // Handle redirects - skip caching
  if (event.request.redirect || pathname.includes('_redirects')) {
    return;
  }

  // API requests - network first
  if (pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Don't cache redirects or error responses
          if (response.redirected || !response.ok) {
            return response;
          }
          
          // Clone the response before caching
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // RealScout resources - cache first
  if (event.request.url.includes('realscout.com')) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request).then(response => {
            // Don't cache redirects
            if (response.redirected) {
              return response;
            }
            
            const responseToCache = response.clone();
            caches.open(REALSCOUT_CACHE).then(cache => {
              cache.put(event.request, responseToCache);
            });
            
            return response;
          });
        })
    );
    return;
  }

  // Static assets - cache first
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request).then(response => {
          // Don't cache redirects or error responses
          if (response.redirected || !response.ok) {
            return response;
          }
          
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
  );
}); 