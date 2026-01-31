import { Metadata } from 'next'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import dynamicImport from 'next/dynamic'
import { PropertiesList } from '@/components/properties/PropertiesList'
import { RealScoutWidget } from '@/components/properties/RealScoutWidget'

// Force static generation for SEO
export const dynamic = 'force-static'
export const revalidate = 3600 // Rebuild every hour

export const metadata: Metadata = {
  title: 'Lone Mountain Homes for Sale | Properties | Homes at Lone Mountain',
  description: 'Browse all homes for sale in Lone Mountain, Las Vegas. Find your dream property with Dr. Jan Duffy\'s expert guidance and local knowledge. Updated daily listings. Call 702-222-1964.',
}

const FeatureSection = dynamicImport(() => import('@/components/layout/FeatureSection').then(mod => mod.FeatureSection), { ssr: false })

export default function PropertiesPage() {
  return (
    <div className="py-16">
      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Lone Mountain Homes for Sale",
        "description": "Browse all homes for sale in Lone Mountain, Las Vegas. Find your dream property with Dr. Jan Duffy's expert guidance and local knowledge.",
        "url": "https://www.homesatlonemountain.com/properties"
      }} />
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-luxury-navy mb-4">
            Lone Mountain Homes for Sale - Las Vegas, Nevada
          </h1>
          <p className="text-xl text-luxury-charcoal mb-2">
            Discover your perfect home in the Lone Mountain area
          </p>
          <p className="text-lg text-luxury-charcoal">
            Expert guidance from Dr. Jan Duffy | Call <a href="tel:+17022221964" className="text-luxury-gold font-semibold hover:underline">702-222-1964</a>
          </p>
        </div>

        {/* RealScout Widget */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-6">
          <RealScoutWidget />
        </div>

        <PropertiesList />

        <FeatureSection variant="alt1" ctaText="See All Lone Mountain Listings!" ctaButtonText="Browse All Homes" ctaIconUrl="/icons/house.svg" />
      </div>
    </div>
  )
}