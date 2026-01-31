'use client'

import { LoadScript, Libraries } from '@react-google-maps/api'

const libraries: Libraries = ['places', 'geometry']
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

export function MapsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  // When no API key, render children directly so pages (blog, etc.) load.
  // PropertyMap/Map use useLoadScript and will handle loading on map pages.
  if (!apiKey) {
    return <>{children}</>
  }

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
      libraries={libraries}
    >
      {children}
    </LoadScript>
  )
} 