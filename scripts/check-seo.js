#!/usr/bin/env node
/**
 * SEO Check Script
 * Validates SEO elements across the site
 * 
 * Usage: node scripts/check-seo.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '../app');
const PUBLIC_DIR = path.join(__dirname, '../public');

console.log('🔍 SEO Check Script');
console.log('====================\n');

// Check required files
const requiredFiles = [
  { path: 'public/robots.txt', alt: 'app/robots.ts' },
  { path: 'public/sitemap.xml', alt: 'app/sitemap.ts' },
  { path: 'public/og-image.jpg' },
  { path: 'public/favicon.png', alt: 'app/icon.png' },
  { path: 'public/images/agent/design 0001_new 2.jpg', alt: 'agent photo' },
  { path: 'public/icons/White Logo Berkshire Hathaway HomeServices Nevada.jpg', alt: 'logo' },
];

console.log('📋 Required Files:');
requiredFiles.forEach(file => {
  const mainPath = path.join(__dirname, '..', file.path);
  const altPath = file.alt ? path.join(__dirname, '..', file.alt) : null;
  
  const mainExists = fs.existsSync(mainPath);
  const altExists = altPath && fs.existsSync(altPath);
  
  if (mainExists || altExists) {
    console.log(`  ✅ ${file.path}${altExists && !mainExists ? ` (via ${file.alt})` : ''}`);
  } else {
    console.log(`  ❌ ${file.path} - MISSING`);
  }
});

// Check pages for metadata
console.log('\n📄 Page Metadata:');
function checkPages(dir, prefix = '') {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('_') && !item.startsWith('.')) {
      checkPages(fullPath, prefix + '/' + item);
    } else if (item === 'page.tsx') {
      const content = fs.readFileSync(fullPath, 'utf8');
      const hasMetadata = content.includes('export const metadata') || content.includes('export async function generateMetadata');
      const hasSchema = content.includes('SchemaMarkup');
      
      const route = prefix || '/';
      const status = [];
      if (hasMetadata) status.push('metadata');
      if (hasSchema) status.push('schema');
      
      if (status.length === 2) {
        console.log(`  ✅ ${route} - ${status.join(', ')}`);
      } else if (status.length === 1) {
        console.log(`  ⚠️  ${route} - ${status.join(', ')} only`);
      } else {
        console.log(`  ❌ ${route} - no metadata or schema`);
      }
    }
  }
}
checkPages(APP_DIR);

// Summary
console.log('\n📊 Summary:');
console.log('  - Run `npm run build` to verify all pages compile');
console.log('  - Test with Google Rich Results: https://search.google.com/test/rich-results');
console.log('  - Check PageSpeed: https://pagespeed.web.dev/');
console.log('  - Validate sitemap: https://www.xml-sitemaps.com/validate-xml-sitemap.html');
