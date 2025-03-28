import { useCallback } from 'react'

type EventName =
  | 'property_view'
  | 'contact_form_submit'
  | 'search_performed'
  | 'filter_applied'
  | 'blog_post_view'
  | 'share_listing'
  | 'save_property'
  | 'schedule_viewing'
  | 'download_brochure'

type PropertyEventData = {
  property_id?: string
  price?: number
  bedrooms?: number
  bathrooms?: number
  square_feet?: number
  status?: string
  zip_code?: string
}

type SearchEventData = {
  search_term?: string
  filters?: string[]
  results_count?: number
  page_number?: number
}

type BlogEventData = {
  post_id?: string
  category?: string
  author?: string
}

type EventData = PropertyEventData | SearchEventData | BlogEventData

export function useAnalytics() {
  const trackEvent = useCallback((name: EventName, data?: EventData) => {
    // Check if window and analytics are available
    if (typeof window === 'undefined' || !window.va) return

    // Track the event using Vercel Analytics event method
    window.va.event(name, data)
  }, [])

  return {
    trackEvent,
    trackPropertyView: (data: PropertyEventData) =>
      trackEvent('property_view', data),
    trackContactForm: () => trackEvent('contact_form_submit'),
    trackSearch: (data: SearchEventData) => trackEvent('search_performed', data),
    trackFilter: (data: SearchEventData) => trackEvent('filter_applied', data),
    trackBlogPost: (data: BlogEventData) => trackEvent('blog_post_view', data),
    trackShare: (propertyId: string) =>
      trackEvent('share_listing', { property_id: propertyId }),
    trackSave: (propertyId: string) =>
      trackEvent('save_property', { property_id: propertyId }),
    trackSchedule: (propertyId: string) =>
      trackEvent('schedule_viewing', { property_id: propertyId }),
    trackDownload: (propertyId: string) =>
      trackEvent('download_brochure', { property_id: propertyId }),
  }
} 