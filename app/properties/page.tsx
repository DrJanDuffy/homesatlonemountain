import { Metadata } from 'next'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import dynamic from 'next/dynamic'
import { PropertiesList } from '@/components/properties/PropertiesList'

export const metadata: Metadata = {
  title: 'Lone Mountain Homes for Sale | Properties | Homes at Lone Mountain',
  description: 'Browse all homes for sale in Lone Mountain, Las Vegas. Find your dream property with Dr. Jan Duffy\'s expert guidance and local knowledge.',
}

const FeatureSection = dynamic(() => import('@/components/layout/FeatureSection').then(mod => mod.FeatureSection), { ssr: false })

export default function PropertiesPage() {
  return (
    <div className="py-16">
      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Lone Mountain Homes for Sale",
        "description": "Browse all homes for sale in Lone Mountain, Las Vegas. Find your dream property with Dr. Jan Duffy's expert guidance and local knowledge.",
        "url": "https://homesatlonemountain.com/properties"
      }} />
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-luxury-navy mb-4">
            Available Properties
          </h1>
          <p className="text-xl text-luxury-charcoal">
            Discover your perfect home in the Lone Mountain area
          </p>
        </div>

        <PropertiesList />

        <FeatureSection variant="alt1" ctaText="See All Lone Mountain Listings!" ctaButtonText="Browse All Homes" ctaIconUrl="/icons/house.svg" />
      </div>
    </div>
  )
}