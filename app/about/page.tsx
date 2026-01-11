import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import dynamic from 'next/dynamic'
import { SchemaMarkup } from '@/components/SchemaMarkup'

const FeatureSection = dynamic(() => import('@/components/layout/FeatureSection').then(mod => mod.FeatureSection), { ssr: false })

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Homes at Lone Mountain',
  description: 'Learn about Dr. Jan Duffy, your trusted Lone Mountain real estate expert. Discover her experience, local knowledge, and commitment to helping you buy or sell your home.',
  openGraph: {
    title: 'About Dr. Jan Duffy | Homes at Lone Mountain',
    description: 'Learn about Dr. Jan Duffy, your trusted Lone Mountain real estate expert. Discover her experience, local knowledge, and commitment to helping you buy or sell your home.',
    url: 'https://homesatlonemountain.com/about',
    type: 'profile',
    images: [
      {
        url: 'https://homesatlonemountain.com/jan-duffy.jpg',
        width: 800,
        height: 800,
        alt: 'Dr. Jan Duffy, Lone Mountain Realtor'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dr. Jan Duffy | Homes at Lone Mountain',
    description: 'Learn about Dr. Jan Duffy, your trusted Lone Mountain real estate expert. Discover her experience, local knowledge, and commitment to helping you buy or sell your home.',
    images: ['https://homesatlonemountain.com/jan-duffy.jpg']
  }
}

export default function AboutPage() {
  return (
    <Container>
      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Dr. Jan Duffy",
        "areaServed": "Lone Mountain, Las Vegas",
        "url": "https://homesatlonemountain.com/about",
        "image": "https://homesatlonemountain.com/jan-duffy.jpg",
        "telephone": "+1-555-555-5555"
      }} />
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-luxury-navy sm:text-6xl">
            About Homes at Lone Mountain
          </h1>
          <p className="mt-6 text-lg leading-8 text-luxury-charcoal">
            We are dedicated to helping you find your perfect home in the beautiful Lone Mountain area. With years of experience and deep local knowledge, we provide personalized service to match you with your dream property.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-luxury-navy">Our Mission</h2>
            <p className="mt-4 text-luxury-charcoal">
              To provide exceptional real estate services that help our clients achieve their dreams of homeownership in the Lone Mountain community, while maintaining the highest standards of integrity and professionalism.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-luxury-navy">Our Values</h2>
            <ul className="mt-4 space-y-4 text-luxury-charcoal">
              <li>• Integrity in every transaction</li>
              <li>• Personalized attention to each client</li>
              <li>• Deep knowledge of the local market</li>
              <li>• Commitment to community growth</li>
              <li>• Excellence in service delivery</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-luxury-navy">Why Choose Us</h2>
            <p className="mt-4 text-luxury-charcoal">
              With our extensive experience in the Lone Mountain real estate market, we understand the unique characteristics and opportunities this area offers. We combine this knowledge with cutting-edge technology and personalized service to ensure you find the perfect property that meets your needs and exceeds your expectations.
            </p>
          </div>
        </div>

        <FeatureSection variant="alt2" ctaText="Meet Jan & See Her Top Listings!" ctaButtonText="Meet Jan's Picks" ctaIconUrl="/icons/user.svg" />
      </div>
    </Container>
  )
} 