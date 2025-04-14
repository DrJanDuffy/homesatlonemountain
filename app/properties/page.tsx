'use client'

import { allProperties } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Image } from '@/components/ui/Image'
import { useAnalytics } from '@/hooks/useAnalytics'
import { useEffect } from 'react'

export default function PropertiesPage() {
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
    <div className="py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">
            Available Properties
          </h1>
          <p className="text-xl text-gray-600">
            Discover your perfect home in the Lone Mountain area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div 
              key={property._id} 
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
                <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4">{property.address}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary-dark">
                    ${property.price.toLocaleString()}
                  </span>
                  <span className="text-primary-green capitalize">
                    {property.status}
                  </span>
                </div>
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span>{property.bedrooms} beds</span>
                  <span>{property.bathrooms} baths</span>
                  <span>{property.squareFeet.toLocaleString()} sq ft</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {property.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {property.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-primary-light text-primary-dark rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {property.features.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-primary-light text-primary-dark rounded-full">
                      +{property.features.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 