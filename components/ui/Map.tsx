import React from 'react'
import { GoogleMap, useLoadScript, MarkerF, MarkerClustererF } from '@react-google-maps/api'
import { mapStyles } from '@/lib/mapStyles'

export interface MapMarker {
  position: google.maps.LatLngLiteral
  title?: string
  icon?: string | google.maps.Symbol
}

interface MapProps {
  center: google.maps.LatLngLiteral
  zoom?: number
  markers?: MapMarker[]
  onMarkerClick?: (marker: MapMarker) => void
  className?: string
}

const mapOptions: google.maps.MapOptions = {
  disableDefaultUI: true,
  clickableIcons: false,
  styles: mapStyles,
}

export default function Map({ 
  center, 
  zoom = 14, 
  markers = [],
  onMarkerClick,
  className = ''
}: MapProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ['places'],
  })

  if (!isLoaded) {
    return <div className="w-full h-full bg-gray-100 animate-pulse" />
  }

  return (
    <GoogleMap
      zoom={zoom}
      center={center}
      mapContainerClassName={`w-full h-full rounded-lg shadow-lg ${className}`}
      options={mapOptions}
    >
      {markers.length > 0 && (
        <MarkerClustererF>
          {(clusterer) => (
            <>
              {markers.map((marker, idx) => (
                <MarkerF
                  key={idx}
                  position={marker.position}
                  title={marker.title}
                  icon={marker.icon}
                  clusterer={clusterer}
                  onClick={() => onMarkerClick?.(marker)}
                />
              ))}
            </>
          )}
        </MarkerClustererF>
      )}
    </GoogleMap>
  )
} 