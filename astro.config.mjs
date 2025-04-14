import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import compress from "astro-compress";

export default defineConfig({
  site: 'https://homesatlonemountain.com',
  output: 'server',
  adapter: cloudflare({
    mode: 'directory',
    functionPerRoute: true,
    runtime: {
      mode: 'local',
      type: 'pages'
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
            'performance': ['./src/scripts/performance.js']
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
      noExternal: ['@astrojs/cloudflare']
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
    service: {
      entrypoint: '@astrojs/cloudflare/image'
    }
  }
}); 