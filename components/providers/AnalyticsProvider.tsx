import React from 'react'
import { Analytics } from '@vercel/analytics/react'

export function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Analytics
        beforeSend={(event) => {
          // Mask PII (Personally Identifiable Information) from URLs
          if (event.url) {
            const url = new URL(event.url)
            // Remove email addresses from URLs
            if (url.searchParams.has('email')) {
              url.searchParams.set('email', '[REDACTED]')
            }
            // Remove phone numbers from URLs
            if (url.searchParams.has('phone')) {
              url.searchParams.set('phone', '[REDACTED]')
            }
            event.url = url.toString()
          }
          return event
        }}
        debug={process.env.NODE_ENV === 'development'}
      />
    </>
  )
} 