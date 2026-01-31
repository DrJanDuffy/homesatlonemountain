/**
 * API Types
 * TypeScript types for API requests and responses
 */

// Generic API Response
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Contact Form
export interface ContactRequest {
  name: string
  email: string
  phone?: string
  message?: string
  source?: string
}

export interface ContactResponse {
  success: boolean
  message: string
}

// Lead Capture
export interface LeadRequest {
  name?: string
  email: string
  phone?: string
  leadType: 'buyer' | 'seller' | 'valuation' | 'general'
  propertyAddress?: string
  message?: string
  source?: string
}

export interface LeadResponse {
  success: boolean
  message: string
  leadId?: string
}

// Webhook Events
export interface WebhookEvent {
  source: string
  type: string
  timestamp: string
  data: unknown
}

// RealScout Types
export interface RealScoutListing {
  id: string
  address: string
  price: number
  beds: number
  baths: number
  sqft: number
  status: 'active' | 'pending' | 'sold'
  photos: string[]
  url: string
}

// Follow Up Boss Types
export interface FubPerson {
  id: number
  firstName: string
  lastName: string
  emails: { value: string; isPrimary: boolean }[]
  phones: { value: string; isPrimary: boolean }[]
  tags: string[]
  source: string
  createdAt: string
}
