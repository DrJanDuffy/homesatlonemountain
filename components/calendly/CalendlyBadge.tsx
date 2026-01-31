'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import './types'

interface CalendlyBadgeProps {
  url?: string
  text?: string
  color?: string
  textColor?: string
  branding?: boolean
}

export function CalendlyBadge({
  url = 'https://calendly.com/drjanduffy/showing',
  text = 'Schedule a showing',
  color = '#D4AF37',
  textColor = '#0A2540',
  branding = true,
}: CalendlyBadgeProps) {
  useEffect(() => {
    const initBadge = () => {
      if (typeof window !== 'undefined' && window.Calendly) {
        window.Calendly.initBadgeWidget({
          url,
          text,
          color,
          textColor,
          branding,
        })
      }
    }

    if (typeof window !== 'undefined' && window.Calendly) {
      initBadge()
    } else if (typeof window !== 'undefined') {
      window.addEventListener('calendly-loaded', initBadge)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('calendly-loaded', initBadge)
      }
    }
  }, [url, text, color, textColor, branding])

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.Calendly) {
            window.Calendly.initBadgeWidget({
              url,
              text,
              color,
              textColor,
              branding,
            })
          }
        }}
      />
    </>
  )
}
