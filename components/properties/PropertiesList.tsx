'use client'

import { allProperties } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Image } from '@/components/ui/Image'
import { useAnalytics } from '@/hooks/useAnalytics'
import { useEffect } from 'react'
import Link from 'next/link'

export function PropertiesList() {
  const { trackPropertyView } = useAnalytics()
  const properties = allProperties.sort((a, b) =>
    compareDesc(new Date(a.published), new Date(b.published))
  )

  // Track page view
  useEffect(() => {
    if (typeof window !== 'undefined' && window.va) {
      window.va.pageview(window.location.pathname)
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <Link
          key={property._id}
          href={`/properties/${property._raw.flattenedPath}`}
          className="card"
          onClick={() =>
            trackPropertyView({
              property_id: property._id,
              price: property.price,
              bedrooms: property.bedrooms,
              bathrooms: property.bathrooms,
              square_feet: property.squareFeet,
              status: property.status,
              zip_code: property.address.split(' ').pop()
            })
          }
        >
          <div className="aspect-[4/3] w-full relative rounded-t-lg overflow-hidden">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              sizes="(min-width: 1280px) 384px, (min-width: 1024px) calc(33.33vw - 32px), (min-width: 768px) calc(50vw - 48px), calc(100vw - 32px)"
              priority={property.featured}
              className="transition-transform hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-luxury-navy">{property.title}</h3>
            <p className="text-luxury-charcoal mb-4">{property.address}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-luxury-navy">
                ${property.price.toLocaleString()}
              </span>
              <span className="text-luxury-green capitalize font-medium">
                {property.status}
              </span>
            </div>
            <div className="flex gap-4 text-sm text-luxury-charcoal mb-4">
              <span>{property.bedrooms} beds</span>
              <span>{property.bathrooms} baths</span>
              <span>{property.squareFeet.toLocaleString()} sq ft</span>
            </div>
            <p className="text-luxury-charcoal mb-4 line-clamp-3">
              {property.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {property.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-luxury-cream text-luxury-navy rounded-full border border-luxury-stone"
                >
                  {feature}
                </span>
              ))}
              {property.features.length > 3 && (
                <span className="px-2 py-1 text-xs bg-luxury-cream text-luxury-navy rounded-full border border-luxury-stone">
                  +{property.features.length - 3} more
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
