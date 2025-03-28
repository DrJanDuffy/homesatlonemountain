import React from 'react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'

interface ImageProps extends Omit<NextImageProps, 'src'> {
  src: string
}

export function Image({ src, alt, className, ...props }: ImageProps) {
  // For external URLs (starting with http/https), use them directly
  const isExternal = src.startsWith('http://') || src.startsWith('https://')
  
  // For local images, ensure they start with a forward slash
  const imageSrc = isExternal ? src : src.startsWith('/') ? src : `/${src}`

  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      <NextImage
        src={imageSrc}
        alt={alt}
        quality={90}
        {...props}
        className="object-cover"
      />
    </div>
  )
} 