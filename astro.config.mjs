import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://homesatlonemountain.com',
  output: 'server',
  adapter: vercel(),
  integrations: [],
  vite: {
    ssr: {
      noExternal: ['@realscout/*', '@percy-ai/*']
    },
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro/client']
          }
        }
      }
    }
  }
}); 