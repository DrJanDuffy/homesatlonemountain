'use client'

import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Image } from '@/components/ui/Image'
import { useAnalytics } from '@/hooks/useAnalytics'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { SchemaMarkup } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Lone Mountain Real Estate Blog | Homes at Lone Mountain',
  description: 'Read the latest news, tips, and market trends for Lone Mountain real estate. Stay informed with Dr. Jan Duffy's expert blog.',
  openGraph: {
    title: 'Lone Mountain Real Estate Blog | Homes at Lone Mountain',
    description: 'Read the latest news, tips, and market trends for Lone Mountain real estate. Stay informed with Dr. Jan Duffy's expert blog.',
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
    description: 'Read the latest news, tips, and market trends for Lone Mountain real estate. Stay informed with Dr. Jan Duffy's expert blog.',
    images: ['https://homesatlonemountain.com/og-image.jpg']
  }
}

const FeatureSection = dynamic(() => import('@/components/layout/FeatureSection').then(mod => mod.FeatureSection), { ssr: false })

const categories = [
  'market-updates',
  'buying',
  'selling',
  'investing',
  'community',
] as const

export default function BlogPage() {
  const { trackBlogPost } = useAnalytics()
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.published), new Date(b.published))
  )

  // Track page view
  useEffect(() => {
    if (typeof window !== 'undefined' && window.va) {
      window.va.pageview(window.location.pathname)
    }
  }, [])

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

        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium bg-luxury-cream text-luxury-navy border border-luxury-stone hover:bg-luxury-gold hover:text-luxury-navy hover:border-luxury-gold transition-colors"
            >
              {category.split('-').join(' ')}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post._id} 
              className="card"
              onClick={() => 
                trackBlogPost({
                  post_id: post._id,
                  category: post.category,
                  author: post.author
                })
              }
            >
              {post.image && (
                <div className="aspect-[16/9] w-full relative rounded-t-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1280px) 384px, (min-width: 1024px) calc(33.33vw - 32px), (min-width: 768px) calc(50vw - 48px), calc(100vw - 32px)"
                    priority={post.featured}
                    className="transition-transform hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="text-luxury-gold text-sm font-medium mb-2 uppercase">
                  {post.category.replace('-', ' ')}
                </div>
                <h3 className="text-xl font-bold mb-2 text-luxury-navy">{post.title}</h3>
                <p className="text-luxury-charcoal mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex justify-between items-center">
                  <time className="text-sm text-luxury-charcoal">
                    {new Date(post.published).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <button className="text-luxury-navy hover:text-luxury-gold font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <FeatureSection variant="alt1" ctaText="Explore the Latest Blog-Featured Listings!" ctaButtonText="See Blog Picks" ctaIconUrl="/icons/blog.svg" />
      </div>
    </div>
  )
} 