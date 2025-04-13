// Critical Path Script Loading Sequence

// Core Dependencies
const loadCoreDependencies = async () => {
  // Add core script loading here
};

// Polyfills
const loadPolyfills = async () => {
  if (!('shadowRoot' in Element.prototype)) {
    await import('@webcomponents/webcomponentsjs/webcomponents-bundle.js');
  }
};

// Analytics
const loadAnalytics = async () => {
  // Initialize analytics with custom dimensions
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'cd1': 'unknown', // userType
    'cd2': 'landing', // widgetType
    'cd3': '0', // interactionDepth
    'cd4': '0' // conversionValue
  });
};

// A/B Testing
const loadABTesting = async () => {
  // Initialize A/B testing framework
  const userCohort = localStorage.getItem('userCohort') || Math.random().toString(36).substring(7);
  localStorage.setItem('userCohort', userCohort);
};

// Widgets
const loadWidgets = async () => {
  // RealScout Widget
  const realscoutScript = document.createElement('script');
  realscoutScript.src = 'https://widgets.realscout.com/v3/loader.js';
  realscoutScript.crossOrigin = 'anonymous';
  realscoutScript.integrity = 'sha384-'; // Add actual hash
  document.head.appendChild(realscoutScript);

  // Homebot Widget
  const homebotContainer = document.createElement('div');
  homebotContainer.attachShadow({ mode: 'open' });
  homebotContainer.style.zIndex = '1000';
  homebotContainer.style.minHeight = '480px';
};

// Initialize in sequence
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadCoreDependencies();
    await loadPolyfills();
    await loadAnalytics();
    await loadABTesting();
    
    // Load widgets when 50% visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.5) {
            loadWidgets();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const widgetContainers = document.querySelectorAll('.widget-container');
    widgetContainers.forEach(container => observer.observe(container));
  } catch (error) {
    console.error('Error in critical path loading:', error);
  }
}); 