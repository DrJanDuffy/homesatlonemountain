#!/usr/bin/env node
/**
 * Market Stats Update Script
 * Updates Lone Mountain market statistics
 * 
 * Usage: node scripts/update-market-stats.js
 * 
 * This script updates lib/site-config.ts with the latest market data.
 * Run monthly to keep stats current.
 */

const fs = require('fs');
const path = require('path');

const SITE_CONFIG_PATH = path.join(__dirname, '../lib/site-config.ts');

// Current month's data (update these values manually or fetch from API)
const CURRENT_STATS = {
  medianPrice: 550000,
  daysOnMarket: 35,
  yearOverYearChange: '+4.5%',
  priceRange: '$400,000 - $2,000,000',
  lastUpdated: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
};

function updateMarketStats() {
  console.log('📊 Market Stats Update Script');
  console.log('==============================\n');

  console.log('Current stats to update:');
  console.log(`  Median Price: $${CURRENT_STATS.medianPrice.toLocaleString()}`);
  console.log(`  Days on Market: ${CURRENT_STATS.daysOnMarket}`);
  console.log(`  YoY Change: ${CURRENT_STATS.yearOverYearChange}`);
  console.log(`  Price Range: ${CURRENT_STATS.priceRange}`);
  console.log(`  Last Updated: ${CURRENT_STATS.lastUpdated}\n`);

  // Read current config
  let configContent = fs.readFileSync(SITE_CONFIG_PATH, 'utf8');

  // Update values using regex
  configContent = configContent.replace(
    /medianPrice: \d+/,
    `medianPrice: ${CURRENT_STATS.medianPrice}`
  );
  configContent = configContent.replace(
    /medianPriceFormatted: '[^']+'/,
    `medianPriceFormatted: '$${CURRENT_STATS.medianPrice.toLocaleString()}'`
  );
  configContent = configContent.replace(
    /daysOnMarket: \d+/,
    `daysOnMarket: ${CURRENT_STATS.daysOnMarket}`
  );
  configContent = configContent.replace(
    /yearOverYearChange: '[^']+'/,
    `yearOverYearChange: '${CURRENT_STATS.yearOverYearChange}'`
  );
  configContent = configContent.replace(
    /priceRange: '[^']+'/,
    `priceRange: '${CURRENT_STATS.priceRange}'`
  );
  configContent = configContent.replace(
    /lastUpdated: '[^']+'/,
    `lastUpdated: '${CURRENT_STATS.lastUpdated}'`
  );

  // Write updated config
  fs.writeFileSync(SITE_CONFIG_PATH, configContent);

  console.log('✅ Updated lib/site-config.ts');
  console.log('\n💡 Remember to commit and deploy the changes!');
  console.log('   git add lib/site-config.ts');
  console.log('   git commit -m "chore: update market stats for ' + CURRENT_STATS.lastUpdated + '"');
  console.log('   git push');
}

// Run
updateMarketStats();
