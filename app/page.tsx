import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { allProperties, allPosts } from 'contentlayer/generated'
import { Button } from '@/components/ui/Button'

export default function HomePage() {
  const featuredProperties = allProperties
    .filter((p) => p.featured)
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
    .slice(0, 3)

  const latestPost = allPosts
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
    .find((post) => post.category === 'Market Analysis')

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Lone Mountain Luxury Homes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover Your Dream Home at Lone Mountain
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience luxury living with breathtaking mountain views in Las Vegas's most prestigious community
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/properties">View Properties</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600">Discover our hand-picked selection of luxury homes</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Link
                key={property.slug}
                href={property.url}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[16/10] relative">
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.address}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#16B286]">
                      ${property.price.toLocaleString()}
                    </span>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span>{property.bedrooms} beds</span>
                      <span>{property.bathrooms} baths</span>
                      <span>{property.squareFeet.toLocaleString()} sqft</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/properties">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Market Update */}
      {latestPost && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src={latestPost.image}
                  alt={latestPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="inline-block bg-[#3A8DDE]/10 text-[#3A8DDE] px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Market Update
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{latestPost.title}</h2>
                <p className="text-xl text-gray-600 mb-8">{latestPost.description}</p>
                <Button asChild>
                  <Link href={latestPost.url}>Read Market Update</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-20 bg-[#0A2540] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Lone Mountain</h2>
            <p className="text-xl text-gray-300">Experience the perfect blend of luxury and nature</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#3A8DDE] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Premium Location</h3>
              <p className="text-gray-300">Nestled in the heart of Las Vegas with stunning mountain views and easy access to amenities</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#16B286] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Luxury Living</h3>
              <p className="text-gray-300">Meticulously designed homes with high-end finishes and modern amenities</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#3A8DDE] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Investment Value</h3>
              <p className="text-gray-300">Strong appreciation potential in one of Las Vegas's most desirable neighborhoods</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Find Your Dream Home?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us help you discover the perfect property in Lone Mountain. Contact our team of experts today.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/properties">Browse Properties</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Schedule a Viewing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 