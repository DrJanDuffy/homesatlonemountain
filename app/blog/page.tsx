import { Metadata } from 'next'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import dynamic from 'next/dynamic'
import { BlogList } from '@/components/blog/BlogList'

export const metadata: Metadata = {
  title: 'Lone Mountain Real Estate Blog | Homes at Lone Mountain',
  description: 'Read the latest news, tips, and market trends for Lone Mountain real estate. Stay informed with Dr. Jan Duffy\'s expert blog.',
  openGraph: {
    title: 'Lone Mountain Real Estate Blog | Homes at Lone Mountain',
    description: 'Read the latest news, tips, and market trends for Lone Mountain real estate. Stay informed with Dr. Jan Duffy\'s expert blog.',
    url: 'https://homesatlonemountain.com/blog',
    type: 'blog',
    images: [
      {
        url: 'https://homesatlonemountain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lone Mountain Real Estate Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lone Mountain Real Estate Blog | Homes at Lone Mountain',
    description: 'Read the latest news, tips, and market trends for Lone Mountain real estate. Stay informed with Dr. Jan Duffy\'s expert blog.',
    images: ['https://homesatlonemountain.com/og-image.jpg']
  }
}

const FeatureSection = dynamic(() => import('@/components/layout/FeatureSection').then(mod => mod.FeatureSection), { ssr: false })

export default function BlogPage() {
  return (
    <div className="py-16">
      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Lone Mountain Real Estate Blog",
        "description": "Read the latest news, tips, and market trends for Lone Mountain real estate. Stay informed with Dr. Jan Duffy's expert blog.",
        "url": "https://homesatlonemountain.com/blog"
      }} />
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-luxury-navy mb-4">
            Market Insights
          </h1>
          <p className="text-xl text-luxury-charcoal">
            Stay informed about the Lone Mountain real estate market
          </p>
        </div>

        <BlogList />

        <FeatureSection variant="alt1" ctaText="Explore the Latest Blog-Featured Listings!" ctaButtonText="See Blog Picks" ctaIconUrl="/icons/blog.svg" />
      </div>
    </div>
  )
}