export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Security headers
    const securityHeaders = {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Content-Security-Policy': "default-src 'self' https://*.realscout.com https://*.cloudflare.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.realscout.com https://*.cloudflare.com; style-src 'self' 'unsafe-inline' https://*.realscout.com; img-src 'self' data: https://*.realscout.com https://*.cloudflare.com; connect-src 'self' https://*.realscout.com https://*.cloudflare.com;"
    };

    // Asset caching rules
    const assetExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp', 'avif', 'css', 'js', 'woff2'];
    const isAsset = assetExtensions.some(ext => url.pathname.endsWith(`.${ext}`));

    try {
      // Handle asset requests
      if (isAsset) {
        const response = await env.ASSETS.fetch(request);
        const headers = new Headers(response.headers);
        
        // Cache assets for 1 year
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        
        return new Response(response.body, {
          status: response.status,
          headers: { ...Object.fromEntries(headers), ...securityHeaders }
        });
      }

      // Handle page requests
      const response = await env.ASSETS.fetch(request);
      const headers = new Headers(response.headers);
      
      // Add security headers
      Object.entries(securityHeaders).forEach(([key, value]) => {
        headers.set(key, value);
      });

      // Cache pages for 1 hour
      headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600');

      return new Response(response.body, {
        status: response.status,
        headers
      });

    } catch (error) {
      // Error handling
      return new Response(`Server Error: ${error.message}`, {
        status: 500,
        headers: {
          'Content-Type': 'text/plain',
          ...securityHeaders
        }
      });
    }
  }
}; 