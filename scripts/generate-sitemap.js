#!/usr/bin/env node
/**
 * Sitemap Generator Script
 * Generates additional sitemap entries if needed
 * 
 * Note: Next.js handles sitemap.xml via app/sitemap.ts
 * This script is for custom sitemap generation if needed.
 * 
 * Usage: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.homesatlonemountain.com';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap-custom.xml');

// Additional URLs not in main sitemap
const ADDITIONAL_URLS = [
  // Add any URLs that aren't automatically generated
  // { url: '/some-page', priority: 0.8, changefreq: 'monthly' },
];

function generateSitemap() {
  console.log('🗺️  Sitemap Generator Script');
  console.log('=============================\n');

  if (ADDITIONAL_URLS.length === 0) {
    console.log('No additional URLs to add.');
    console.log('Main sitemap is handled by Next.js at /sitemap.xml');
    return;
  }

  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const entry of ADDITIONAL_URLS) {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${entry.url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${entry.changefreq || 'monthly'}</changefreq>\n`;
    xml += `    <priority>${entry.priority || 0.5}</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>';

  fs.writeFileSync(OUTPUT_PATH, xml);
  console.log(`✅ Generated ${OUTPUT_PATH}`);
  console.log(`   Added ${ADDITIONAL_URLS.length} URLs`);
}

// Run
generateSitemap();
