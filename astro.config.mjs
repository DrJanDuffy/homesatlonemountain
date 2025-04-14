import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import db from "@astrojs/db";
import compress from "astro-compress";
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://homesatlonemountain.com',
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
    functionPerRoute: true,
    imageService: 'cloudflare',
    runtime: {
      mode: 'local',
      type: 'pages',
      bindings: {
        ZONE_ID: { type: 'plain_text', value: process.env.CLOUDFLARE_ZONE_ID },
        ACCOUNT_ID: { type: 'plain_text', value: process.env.CLOUDFLARE_ACCOUNT_ID }
      }
    },
    routes: {
      strategy: 'include',
      patterns: ['/*']
    },
    build: {
      split: true,
      minify: true,
      sourcemap: true
    }
  }),
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
      Image: {
        quality: 80,
        format: ['avif', 'webp']
      },
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
      },
      {
        protocol: 'https',
        hostname: '**.imagedelivery.net'
      }
    ],
    service: 'cloudflare',
    domains: {
      'imagedelivery.net': {
        variants: {
          'thumbnail': 'w=400,h=300,fit=cover',
          'gallery': 'w=800,h=600,fit=contain',
          'hero': 'w=1920,h=1080,fit=cover,q=80'
        }
      }
    }
  }
}); 