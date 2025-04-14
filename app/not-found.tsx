import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-dark mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-primary-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="space-x-4">
          <Button asChild variant="outline">
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild>
            <Link href="/properties">View Properties</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 