import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'About Us | Homes at Lone Mountain',
  description: 'Learn about our commitment to helping you find your perfect home in the Lone Mountain area.',
}

export default function AboutPage() {
  return (
    <Container>
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About Homes at Lone Mountain
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are dedicated to helping you find your perfect home in the beautiful Lone Mountain area. With years of experience and deep local knowledge, we provide personalized service to match you with your dream property.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              To provide exceptional real estate services that help our clients achieve their dreams of homeownership in the Lone Mountain community, while maintaining the highest standards of integrity and professionalism.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Values</h2>
            <ul className="mt-4 space-y-4 text-gray-600">
              <li>• Integrity in every transaction</li>
              <li>• Personalized attention to each client</li>
              <li>• Deep knowledge of the local market</li>
              <li>• Commitment to community growth</li>
              <li>• Excellence in service delivery</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-gray-600">
              With our extensive experience in the Lone Mountain real estate market, we understand the unique characteristics and opportunities this area offers. We combine this knowledge with cutting-edge technology and personalized service to ensure you find the perfect property that meets your needs and exceeds your expectations.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
} 