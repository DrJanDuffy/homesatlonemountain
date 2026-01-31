# Data

Static data files for Homes at Lone Mountain.

## Files

### `testimonials.ts`
Client testimonials and reviews for display throughout the site.

### `neighborhoods.ts`
Lone Mountain neighborhood data, boundaries, and amenities.

### `schools.ts`
Local school information for the Lone Mountain area.

### `market-stats.ts`
Market statistics and trends (updated monthly).

## Usage

```typescript
import { testimonials } from '@/data/testimonials'
import { neighborhoods } from '@/data/neighborhoods'

// Display testimonials
testimonials.map(t => (
  <TestimonialCard key={t.id} {...t} />
))
```

## Data Updates

- **Testimonials**: Add new reviews as they come in
- **Market Stats**: Update monthly with latest MLS data
- **Schools**: Update annually or when changes occur
