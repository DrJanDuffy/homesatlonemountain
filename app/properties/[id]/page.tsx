import React from 'react'
import { notFound } from 'next/navigation'
import { allProperties } from 'contentlayer/generated'
import PropertyMap from '@/components/property/PropertyMap'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { generatePropertySchema } from '@/lib/schema'

interface PropertyPageProps {
  params: {
    id: string
  }
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = allProperties.find((p) => p._raw.flattenedPath === params.id)

  if (!property) {
    notFound()
  }

  const propertySchema = generatePropertySchema({
    ...property,
    url: property.url,
  })

  return (
    <>
      <SchemaMarkup schema={propertySchema} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">{property.title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
              <p className="text-gray-600 mb-4">{property.address}</p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-lg font-semibold">${property.price.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bedrooms</p>
                  <p className="text-lg font-semibold">{property.bedrooms}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bathrooms</p>
                  <p className="text-lg font-semibold">{property.bathrooms}</p>
                </div>
              </div>
              <div className="prose max-w-none">
                {property.description}
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-primary-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <PropertyMap
              propertyLocation={{ lat: property.latitude, lng: property.longitude }}
              propertyTitle={property.title}
              className="aspect-[4/3] w-full"
            />
          </div>
        </div>
      </div>
    </>
  )
} 