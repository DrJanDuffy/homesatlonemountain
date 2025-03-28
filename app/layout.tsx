import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'
import { MapsProvider } from '@/components/providers/MapsProvider'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { organizationSchema } from '@/lib/schema'
import { inter } from '@/lib/fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Homes at Lone Mountain',
  description: 'Discover luxury homes in the prestigious Lone Mountain area of Las Vegas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <SchemaMarkup schema={organizationSchema} />
      </head>
      <body className={`${inter.className} h-full`}>
        <MapsProvider>
          <Analytics />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </MapsProvider>
      </body>
    </html>
  )
} 