/**
 * Contact Form Validation
 * Validation schemas for contact and lead forms
 */

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message?: string
}

export interface LeadFormData {
  name?: string
  email: string
  phone?: string
  leadType: 'buyer' | 'seller' | 'valuation' | 'general'
  propertyAddress?: string
  message?: string
}

export interface ValidationError {
  field: string
  message: string
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (US format)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-()]+$/
  const digits = phone.replace(/\D/g, '')
  return phoneRegex.test(phone) && digits.length >= 10
}

/**
 * Format phone number for display
 */
export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  return phone
}

/**
 * Validate contact form data
 */
export function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Please enter your name' })
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' })
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.push({ field: 'phone', message: 'Please enter a valid phone number' })
  }

  return errors
}

/**
 * Validate lead form data
 */
export function validateLeadForm(data: LeadFormData): ValidationError[] {
  const errors: ValidationError[] = []

  if (!data.email || !isValidEmail(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' })
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.push({ field: 'phone', message: 'Please enter a valid phone number' })
  }

  if (data.leadType === 'valuation' && !data.propertyAddress) {
    errors.push({ field: 'propertyAddress', message: 'Please enter your property address' })
  }

  return errors
}
