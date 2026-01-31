# Services

External API integrations and service clients for Homes at Lone Mountain.

## Available Services

### `followUpBoss.ts`
Follow Up Boss CRM integration for lead management.
- Submit leads
- Update contact information
- Add notes and tags

### `realscout.ts`
RealScout MLS integration.
- Fetch listings
- Property search
- Market data

### `google.ts`
Google services integration.
- Places API for nearby amenities
- Maps for property locations
- Reviews from Google Business Profile

### `analytics.ts`
Analytics and tracking services.
- Google Analytics 4
- Conversion tracking
- Event logging

## Usage

```typescript
import { submitLead } from '@/services/followUpBoss'
import { searchListings } from '@/services/realscout'

// Submit a lead
await submitLead({
  name: 'John Doe',
  email: 'john@example.com',
  tags: ['buyer', 'lone-mountain']
})

// Search listings
const listings = await searchListings({
  area: 'Lone Mountain',
  priceMin: 400000,
  priceMax: 800000
})
```

## Environment Variables

- `FUB_API_KEY` - Follow Up Boss API key
- `REALSCOUT_API_KEY` - RealScout API key
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Google Maps API key
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
