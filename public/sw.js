const CACHE_VERSION = 'v1';
const CACHE_NAME = `realscout-cache-${CACHE_VERSION}`;

const CACHED_ASSETS = [
  '/images/feature-icons.svg',
  'https://widgets.realscout.com/latest/realscout-widgets.js'
];

// Install service worker and cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CACHED_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('realscout-cache-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});

// Network-first strategy for RealScout API requests
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Handle RealScout resources
  if (url.hostname === 'widgets.realscout.com') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache successful responses
          if (response.ok) {
            const clonedResponse = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clonedResponse);
            });
          }
          return response;
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(event.request);
        })
    );
    return;
  }

  // Cache-first strategy for static assets
  if (CACHED_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => response || fetch(event.request))
    );
    return;
  }

  // Network-first strategy for API requests
  if (url.pathname.includes('/api/')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
    );
    return;
  }
});

// Handle background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'realscout-sync') {
    event.waitUntil(
      // Implement background sync logic here
      Promise.resolve()
    );
  }
});

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data.type === 'PERFORMANCE_MEASURE') {
    // Log performance metrics
    console.log('Performance metric:', event.data.metric);
  }
}); 