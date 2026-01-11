import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.homesatlonemountain.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl
  
  // Static pages with priorities
  const staticRoutes = [
    { route: '', priority: 1.0, changeFreq: 'weekly' },
    { route: '/about', priority: 0.8, changeFreq: 'monthly' },
    { route: '/contact', priority: 0.9, changeFreq: 'monthly' },
    { route: '/properties', priority: 0.9, changeFreq: 'daily' },
    { route: '/blog', priority: 0.8, changeFreq: 'weekly' },
  ].map(({ route, priority, changeFreq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: changeFreq as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority,
  }))

  // Dynamic routes from contentlayer
  // Note: Contentlayer data is only available at build time in server components
  // For dynamic routes, they will be discovered by crawlers via links on the collection pages
  
  return staticRoutes
}
