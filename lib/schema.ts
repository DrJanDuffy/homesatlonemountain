export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Homes at Lone Mountain',
  description: 'Luxury real estate agency specializing in Lone Mountain properties in Las Vegas, Nevada.',
  url: 'https://www.homesatlonemountain.com',
  logo: 'https://www.homesatlonemountain.com/images/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1234 Lone Mountain Drive',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89129',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.2045,
    longitude: -115.2541
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 36.2045,
      longitude: -115.2541
    },
    geoRadius: '5000'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '16:00'
    }
  ],
  telephone: '+1-702-555-0123',
  sameAs: [
    'https://www.facebook.com/homesatlonemountain',
    'https://www.instagram.com/homesatlonemountain',
    'https://www.linkedin.com/company/homes-at-lone-mountain'
  ]
}

export function generatePropertySchema(property: {
  title: string
  description: string
  address: string
  price: number
  bedrooms: number
  bathrooms: number
  squareFeet: number
  images: string[]
  features: string[]
  latitude: number
  longitude: number
  status: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    name: property.title,
    description: property.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address.split(',')[0],
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89129',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: property.latitude,
      longitude: property.longitude
    },
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'USD',
      availability: property.status === 'active' ? 'InStock' : 'SoldOut'
    },
    numberOfRooms: property.bedrooms + 2, // bedrooms + living room + kitchen
    numberOfBedrooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: property.squareFeet,
      unitCode: 'FTK'
    },
    image: property.images.map(img => `https://www.homesatlonemountain.com${img}`),
    amenityFeature: property.features.map(feature => ({
      '@type': 'LocationFeatureSpecification',
      name: feature
    })),
    url: `https://www.homesatlonemountain.com${property.url}`
  }
}

interface BlogPostSchemaInput {
  title: string
  description: string
  image: string
  published: string
  author: string
  url: string
}

export function generateBlogPostSchema(post: BlogPostSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.published,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Homes at Lone Mountain',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.homesatlonemountain.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
  }
}

export function generateOrganizationSchema() {
  // Enhanced RealEstateAgent schema for better SEO
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'RealEstateAgent', 'LocalBusiness'],
    '@id': 'https://www.homesatlonemountain.com/#organization',
    name: 'Homes at Lone Mountain',
    url: 'https://www.homesatlonemountain.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.homesatlonemountain.com/logo.png',
      width: '180',
      height: '60'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1234 Lone Mountain Drive',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89129',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.2455,
      longitude: -115.2541
    },
    telephone: '+1-702-222-1964',
    email: 'info@homesatlonemountain.com',
    sameAs: [
      'https://www.facebook.com/homesatlonemountain',
      'https://www.instagram.com/homesatlonemountain',
      'https://www.linkedin.com/company/homes-at-lone-mountain'
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '16:00'
      }
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Lone Mountain, Las Vegas, Nevada'
    },
    priceRange: '$400,000 - $2,000,000',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Home Sales'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Property Listings'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Market Analysis'
          }
        }
      ]
    }
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.homesatlonemountain.com/#website',
    name: 'Homes at Lone Mountain',
    url: 'https://www.homesatlonemountain.com',
    publisher: {
      '@id': 'https://www.homesatlonemountain.com/#organization'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.homesatlonemountain.com/properties?search={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }
} 