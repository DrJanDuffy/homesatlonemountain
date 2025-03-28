import React from 'react'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { generateBlogPostSchema } from '@/lib/schema'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug)

  if (!post) {
    notFound()
  }

  const blogPostSchema = generateBlogPostSchema({
    ...post,
    url: post.url,
  })

  return (
    <>
      <SchemaMarkup schema={blogPostSchema} />
      <div className="container mx-auto px-4 py-8">
        <article className="prose prose-lg mx-auto">
          <h1>{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <time dateTime={post.published}>
                {new Date(post.published).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>{post.author}</span>
            </div>
          </div>
          <div className="aspect-[16/9] relative mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="rounded-lg object-cover"
            />
          </div>
          {post.body.raw}
        </article>
      </div>
    </>
  )
} 