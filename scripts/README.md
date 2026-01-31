# Scripts

Build and optimization scripts for Homes at Lone Mountain.

## Available Scripts

### `optimize-images.js`
Optimize images for web delivery.
```bash
node scripts/optimize-images.js
```

### `generate-sitemap.js`
Generate additional sitemap entries (if needed beyond Next.js).
```bash
node scripts/generate-sitemap.js
```

### `update-market-stats.js`
Update market statistics from MLS data.
```bash
node scripts/update-market-stats.js
```

## NPM Scripts

These scripts can be added to package.json:

```json
{
  "scripts": {
    "optimize:images": "node scripts/optimize-images.js",
    "update:stats": "node scripts/update-market-stats.js"
  }
}
```

## Scheduled Tasks

Consider setting up cron jobs or Vercel cron for:
- Weekly market stats update
- Monthly testimonial refresh
- Daily listing sync (if using custom MLS integration)
