/**
 * RealScout MLS Integration
 * https://www.realscout.com/
 * 
 * Used for property listings and MLS data
 * Note: Most RealScout functionality is via their web components
 * This service is for server-side API calls if needed
 */

const REALSCOUT_AGENT_ID = 'UA-1136617'

interface ListingSearchParams {
  area?: string
  priceMin?: number
  priceMax?: number
  beds?: number
  baths?: number
  sqftMin?: number
  status?: 'active' | 'pending' | 'sold'
}

/**
 * Get RealScout widget embed URL for a specific search
 */
export function getWidgetUrl(params: ListingSearchParams = {}): string {
  const baseUrl = `https://em.realscout.com/users/${REALSCOUT_AGENT_ID}/listings`
  const searchParams = new URLSearchParams()

  if (params.area) searchParams.set('area', params.area)
  if (params.priceMin) searchParams.set('price_min', params.priceMin.toString())
  if (params.priceMax) searchParams.set('price_max', params.priceMax.toString())
  if (params.beds) searchParams.set('beds', params.beds.toString())
  if (params.baths) searchParams.set('baths', params.baths.toString())
  if (params.status) searchParams.set('status', params.status)

  return `${baseUrl}?${searchParams.toString()}`
}

/**
 * RealScout web component configuration
 */
export const realscoutConfig = {
  agentEncodedId: REALSCOUT_AGENT_ID,
  scriptUrl: 'https://em.realscout.com/widgets/realscout-web-components.umd.js',
  
  // Widget types
  widgets: {
    search: 'realscout-simple-search',
    listings: 'realscout-office-listings',
    propertyCard: 'realscout-property-card',
  },
  
  // Default search areas for Lone Mountain
  defaultAreas: [
    'Lone Mountain, Las Vegas, NV',
    'Northwest Las Vegas, NV',
    'Summerlin, Las Vegas, NV',
  ],
}

/**
 * Format price for display
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}

/**
 * Get MLS disclaimer text
 */
export function getMLSDisclaimer(): string {
  return `Listing information is provided exclusively for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. All listing data is deemed reliable but is not guaranteed accurate by the MLS.`
}
