// Performance monitoring and optimization
class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.marks = new Map();
    this.observer = null;
    this.initializeObserver();
  }

  initializeObserver() {
    // Performance Observer for long tasks
    if ('PerformanceObserver' in window) {
      this.observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) { // Long task threshold
            console.warn('Long task detected:', entry);
            this.reportMetric('long-task', {
              duration: entry.duration,
              startTime: entry.startTime,
              name: entry.name
            });
          }
        });
      });

      this.observer.observe({ entryTypes: ['longtask', 'resource', 'navigation'] });
    }
  }

  mark(name) {
    const now = performance.now();
    this.marks.set(name, now);
    performance.mark(name);
  }

  measure(name, startMark, endMark) {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name).pop();
      this.reportMetric(name, measure.duration);
    } catch (e) {
      console.error('Error measuring performance:', e);
    }
  }

  reportMetric(name, value) {
    this.metrics.set(name, value);
    
    // Send to service worker if available
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: 'PERFORMANCE_MEASURE',
        metric: { name, value }
      });
    }

    // Report to analytics if in production
    if (import.meta.env.PROD) {
      // Implement analytics reporting here
    }
  }

  trackResourceTiming() {
    const resources = performance.getEntriesByType('resource');
    resources.forEach(resource => {
      if (resource.name.includes('realscout')) {
        this.reportMetric('realscout-resource', {
          name: resource.name,
          duration: resource.duration,
          transferSize: resource.transferSize,
          decodedBodySize: resource.decodedBodySize
        });
      }
    });
  }

  optimizeResources() {
    // Implement resource optimization strategies
    if ('connection' in navigator) {
      const connection = navigator.connection;
      if (connection.effectiveType === '4g' && !connection.saveData) {
        // Preload resources for fast connections
        this.preloadResources();
      }
    }
  }

  preloadResources() {
    const resources = [
      'https://widgets.realscout.com/latest/realscout-widgets.js'
    ];

    resources.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'script';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }
}

// Initialize performance monitoring
export const performanceMonitor = new PerformanceMonitor();

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(registration => {
        console.log('ServiceWorker registration successful');
        
        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New version available
              if (confirm('New version available! Reload to update?')) {
                window.location.reload();
              }
            }
          });
        });
      })
      .catch(error => {
        console.error('ServiceWorker registration failed:', error);
      });
  });
} 