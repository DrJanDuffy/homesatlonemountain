'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  React.useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-luxury-navy mb-4">
          Something went wrong!
        </h2>
        <p className="text-luxury-charcoal mb-8">
          We apologize for the inconvenience. Please try again.
        </p>
        <Button onClick={() => reset()} className="bg-luxury-navy hover:bg-luxury-navy-light">
          Try again
        </Button>
      </div>
    </div>
  )
} 