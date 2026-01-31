#!/usr/bin/env node
/**
 * Image Optimization Script
 * Optimizes images in /public/images for web delivery
 * 
 * Usage: node scripts/optimize-images.js
 * 
 * Requirements: npm install sharp glob
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

async function optimizeImages() {
  console.log('🖼️  Image Optimization Script');
  console.log('================================\n');

  // Check if sharp is available
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    console.log('⚠️  Sharp not installed. Run: npm install sharp');
    console.log('   Skipping optimization.\n');
    listImages();
    return;
  }

  const images = findImages(IMAGES_DIR);
  console.log(`Found ${images.length} images to optimize.\n`);

  for (const imagePath of images) {
    try {
      const stats = fs.statSync(imagePath);
      const originalSize = stats.size;

      // Optimize based on file type
      const ext = path.extname(imagePath).toLowerCase();
      const outputPath = imagePath;

      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(imagePath)
          .jpeg({ quality: 85, progressive: true })
          .toFile(outputPath + '.tmp');
      } else if (ext === '.png') {
        await sharp(imagePath)
          .png({ compressionLevel: 9, progressive: true })
          .toFile(outputPath + '.tmp');
      } else if (ext === '.webp') {
        await sharp(imagePath)
          .webp({ quality: 85 })
          .toFile(outputPath + '.tmp');
      }

      // Replace original with optimized
      if (fs.existsSync(outputPath + '.tmp')) {
        const newStats = fs.statSync(outputPath + '.tmp');
        if (newStats.size < originalSize) {
          fs.renameSync(outputPath + '.tmp', outputPath);
          const saved = ((originalSize - newStats.size) / originalSize * 100).toFixed(1);
          console.log(`✅ ${path.basename(imagePath)}: ${formatSize(originalSize)} → ${formatSize(newStats.size)} (${saved}% saved)`);
        } else {
          fs.unlinkSync(outputPath + '.tmp');
          console.log(`⏭️  ${path.basename(imagePath)}: Already optimized`);
        }
      }
    } catch (err) {
      console.error(`❌ Error optimizing ${imagePath}:`, err.message);
    }
  }

  console.log('\n✨ Optimization complete!');
}

function findImages(dir, images = []) {
  if (!fs.existsSync(dir)) return images;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findImages(filePath, images);
    } else if (SUPPORTED_FORMATS.includes(path.extname(file).toLowerCase())) {
      images.push(filePath);
    }
  }
  return images;
}

function listImages() {
  console.log('Current images in /public/images:\n');
  const images = findImages(IMAGES_DIR);
  images.forEach(img => {
    const stats = fs.statSync(img);
    const relativePath = path.relative(IMAGES_DIR, img);
    console.log(`  📷 ${relativePath} (${formatSize(stats.size)})`);
  });
  console.log(`\nTotal: ${images.length} images`);
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

// Run
optimizeImages().catch(console.error);
