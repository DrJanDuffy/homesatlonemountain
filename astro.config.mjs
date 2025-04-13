import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import db from "@astrojs/db";
import compress from "astro-compress";

export default defineConfig({
  site: 'https://homesatlonemountain.com',
  base: '/',
  output: 'static',
  build: {
    assets: '_assets',
    inlineStylesheets: 'always'
  },
  server: {
    host: true,
    port: 3000
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('draft'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    }),
    db(),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    })
  ],
  vite: {
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro/client'],
            'realscout': ['@realscout/web-components'],
            'database': ['@astrojs/db']
          }
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    css: {
      devSourcemap: false,
      modules: {
        generateScopedName: '[hash:base64:8]'
      }
    },
    ssr: {
      external: ['@realscout/*']
    },
    optimizeDeps: {
      exclude: ['@astrojs/db']
    }
  },
  compressHTML: true,
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.realscout.com'
      }
    ],
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
}); 