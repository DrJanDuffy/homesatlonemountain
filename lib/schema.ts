export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Homes at Lone Mountain',
  description: 'Luxury real estate agency specializing in Lone Mountain properties in Las Vegas, Nevada.',
  url: 'https://homesatlonemountain.com',
  logo: 'https://homesatlonemountain.com/images/logo.png',
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
    image: property.images.map(img => `https://homesatlonemountain.com${img}`),
    amenityFeature: property.features.map(feature => ({
      '@type': 'LocationFeatureSpecification',
      name: feature
    })),
    url: `https://homesatlonemountain.com${property.url}`
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
        url: 'https://homesatlonemountain.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
  }
} 