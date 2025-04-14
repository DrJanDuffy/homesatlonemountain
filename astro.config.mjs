import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    analytics: true,
    imageService: true,
    webAnalytics: true,
    speedInsights: true,
  }),
  vite: {
    build: {
      minify: true,
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            realscout: ['./src/scripts/realscout-loader.js'],
            performance: ['./src/scripts/performance.js']
          }
        }
      }
    },
    ssr: {
      noExternal: ['@astrojs/vercel']
    }
  }
}); 