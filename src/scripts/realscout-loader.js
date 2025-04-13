// RealScout script loader with advanced optimization
const SCRIPT_URL = 'https://widgets.realscout.com/latest/realscout-widgets.js';
const CACHE_KEY = 'realscout_cache_v1';
const LOAD_TIMEOUT = 8000; // 8 seconds timeout

class RealScoutLoader {
  constructor() {
    this.loadPromise = null;
    this.scriptElement = null;
    this.isLoaded = false;
  }

  async preloadScript() {
    // Check if script is already in browser cache
    const cache = await caches.open(CACHE_KEY);
    const cachedResponse = await cache.match(SCRIPT_URL);
    
    if (!cachedResponse) {
      // Preload and cache the script
      try {
        const response = await fetch(SCRIPT_URL);
        if (response.ok) {
          await cache.put(SCRIPT_URL, response.clone());
        }
      } catch (error) {
        console.warn('Failed to preload RealScout script:', error);
      }
    }
  }

  loadScript() {
    if (this.loadPromise) {
      return this.loadPromise;
    }

    if (this.isLoaded) {
      return Promise.resolve();
    }

    this.loadPromise = new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error('RealScout script load timeout'));
      }, LOAD_TIMEOUT);

      this.scriptElement = document.createElement('script');
      this.scriptElement.src = SCRIPT_URL;
      this.scriptElement.async = true;
      this.scriptElement.crossOrigin = 'anonymous';
      
      // Add resource hints
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://widgets.realscout.com';
      document.head.appendChild(preconnect);

      this.scriptElement.onload = () => {
        clearTimeout(timeoutId);
        this.isLoaded = true;
        resolve();
      };

      this.scriptElement.onerror = (error) => {
        clearTimeout(timeoutId);
        this.loadPromise = null;
        reject(error);
      };

      document.head.appendChild(this.scriptElement);
    });

    return this.loadPromise;
  }

  async initializeWidget(container) {
    if (!container) return;

    const widget = container.querySelector('realscout-advanced-search');
    if (!widget) return;

    // Set up performance monitoring
    const startTime = performance.now();
    
    try {
      await this.loadScript();
      
      // Initialize widget with optimized settings
      widget.setAttribute('data-perf-mode', 'high');
      widget.setAttribute('data-lazy-images', 'true');
      
      // Monitor widget initialization
      await new Promise((resolve) => {
        const observer = new MutationObserver((mutations, obs) => {
          if (!widget.getAttribute('data-loading')) {
            obs.disconnect();
            resolve();
          }
        });
        
        observer.observe(widget, {
          attributes: true,
          attributeFilter: ['data-loading']
        });
      });

      // Log performance metrics
      const loadTime = performance.now() - startTime;
      if (loadTime > 3000) {
        console.warn(`RealScout widget took ${Math.round(loadTime)}ms to load`);
      }

      // Show widget
      container.querySelector('.widget-container').style.visibility = 'visible';
      container.querySelector('.loading-skeleton').style.display = 'none';

    } catch (error) {
      console.error('Failed to initialize RealScout widget:', error);
      this.handleError(container);
    }
  }

  handleError(container) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
      <p>Unable to load property search. Please try again.</p>
      <button onclick="window.location.reload()">Retry</button>
    `;
    container.appendChild(errorDiv);
  }
}

// Export singleton instance
export const realScoutLoader = new RealScoutLoader();

// Start preloading immediately
realScoutLoader.preloadScript(); 