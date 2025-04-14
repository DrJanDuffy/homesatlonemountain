import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MapsProvider } from '@/components/providers/MapsProvider'
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/schema'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://homesatlonemountain.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Homes at Lone Mountain | Luxury Real Estate in Las Vegas',
    template: '%s | Homes at Lone Mountain'
  },
  description: 'Discover luxury homes with breathtaking mountain views in Las Vegas\'s most prestigious neighborhood. Experience the perfect blend of luxury living and natural beauty.',
  openGraph: {
    title: 'Homes at Lone Mountain | Luxury Real Estate in Las Vegas',
    description: 'Discover luxury homes with breathtaking mountain views in Las Vegas\'s most prestigious neighborhood. Experience the perfect blend of luxury living and natural beauty.',
    url: '/',
    siteName: 'Homes at Lone Mountain',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Homes at Lone Mountain'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homes at Lone Mountain | Luxury Real Estate in Las Vegas',
    description: 'Discover luxury homes with breathtaking mountain views in Las Vegas\'s most prestigious neighborhood.',
    images: ['/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebSiteSchema()

  return (
    <html lang="en" className="h-full">
      <head>
        <SchemaMarkup schema={organizationSchema} />
        <SchemaMarkup schema={websiteSchema} />
      </head>
      <body className={`${inter.className} h-full`}>
        <MapsProvider>
          <AnalyticsProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Analytics />
            <SpeedInsights />
          </AnalyticsProvider>
        </MapsProvider>
      </body>
    </html>
  )
} 