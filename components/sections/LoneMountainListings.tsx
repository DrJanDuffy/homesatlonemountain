'use client'

import Link from 'next/link'
import { RealScoutWidget } from '@/components/properties/RealScoutWidget'
import { Button } from '@/components/ui/Button'

export function LoneMountainListings() {
  return (
    <section className="py-16 md:py-24 bg-luxury-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-navy mb-4">
              Lone Mountain Homes for Sale
            </h2>
            <p className="text-luxury-charcoal text-lg">
              Discover exceptional homes in Lone Mountain, Northwest Las Vegas
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/properties">
              View All Lone Mountain Properties
            </Link>
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <RealScoutWidget />
        </div>
      </div>
    </section>
  )
}
