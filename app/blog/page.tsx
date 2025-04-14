'use client'

import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Image } from '@/components/ui/Image'
import { useAnalytics } from '@/hooks/useAnalytics'
import { useEffect } from 'react'

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
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">
            Market Insights
          </h1>
          <p className="text-xl text-gray-600">
            Stay informed about the Lone Mountain real estate market
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium bg-primary-light text-primary-dark hover:bg-primary-blue hover:text-white transition-colors"
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
                <div className="text-primary-blue text-sm font-medium mb-2 uppercase">
                  {post.category.replace('-', ' ')}
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex justify-between items-center">
                  <time className="text-sm text-gray-500">
                    {new Date(post.published).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <button className="text-primary-blue hover:text-primary-green font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 