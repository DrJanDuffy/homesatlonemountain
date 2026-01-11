import { Button, Card, Input, Badge, Alert } from '@/components/ui'
import { RealScoutWidget } from '@/components/properties/RealScoutWidget'
import { Metadata } from 'next'

// Force static generation for SEO - content renders at build time
export const dynamic = 'force-static'
export const revalidate = 3600 // Rebuild every hour

export const metadata: Metadata = {
  title: 'Lone Mountain Homes for Sale - Las Vegas, Nevada',
  description: 'Search Lone Mountain homes for sale in Las Vegas, NV. Expert real estate guidance from Dr. Jan Duffy with 30+ years of local experience. Browse current listings, get market insights, and find your dream home in Northwest Las Vegas.',
}

export default function Home() {
  return (
    <main className="bg-luxury-cream min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[480px] bg-gradient-to-br from-luxury-navy to-luxury-navy-dark text-white shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Lone Mountain Homes for Sale - Las Vegas, Nevada</h1>
        <p className="text-xl md:text-2xl mb-4">Expert Real Estate Guidance from Dr. Jan Duffy</p>
        <p className="text-lg md:text-xl mb-6">30+ Years Local Experience | Call 702-222-1964</p>
        <Button className="bg-luxury-gold text-luxury-navy px-8 py-3 rounded-lg shadow-md hover:bg-luxury-gold-light transition-colors">See Available Homes</Button>
      </section>

      {/* Neighborhood Overview Section - SEO Rich Content */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-luxury-navy">Lone Mountain: Las Vegas's Premier Northwest Neighborhood</h2>
        <p className="text-lg text-luxury-charcoal mb-4">
          Lone Mountain is one of Las Vegas's most sought-after neighborhoods, offering a perfect blend of luxury living and natural beauty. Located in Northwest Las Vegas, this prestigious area features stunning mountain views, spacious homes, and a strong sense of community. With easy access to shopping, dining, and top-rated schools, Lone Mountain has become the preferred choice for families and professionals seeking an elevated lifestyle.
        </p>
        <p className="text-lg text-luxury-charcoal mb-4">
          The neighborhood boasts a diverse range of properties, from elegant single-family homes to luxury estates, with prices typically ranging from $400,000 to over $2 million. Current market trends show strong demand, with homes averaging 45-60 days on market and competitive pricing that reflects the area's desirability.
        </p>
        <p className="text-lg text-luxury-charcoal">
          Whether you're buying or selling in Lone Mountain, navigating the market requires expert local knowledge. Dr. Jan Duffy brings over 30 years of Las Vegas real estate experience to help you make informed decisions and achieve your real estate goals.
        </p>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-12 px-4 shadow-lg rounded-lg max-w-4xl mx-auto mb-8 border border-luxury-stone">
        <h2 className="text-2xl font-semibold mb-4 text-luxury-gold">Why Choose Dr. Jan Duffy for Your Lone Mountain Real Estate Needs</h2>
        <ul className="list-disc pl-6 text-luxury-navy space-y-2 mb-6">
          <li><strong>30+ Years of Local Experience:</strong> Deep knowledge of Las Vegas and Lone Mountain real estate markets</li>
          <li><strong>Proven Track Record:</strong> Successfully helped hundreds of buyers and sellers in Lone Mountain</li>
          <li><strong>Personalized Service:</strong> Customized approach tailored to your unique needs and timeline</li>
          <li><strong>Expert Guidance:</strong> From initial search through closing and beyond</li>
          <li><strong>Market Insights:</strong> Access to current market data, trends, and neighborhood insights</li>
        </ul>
        <div className="bg-luxury-cream p-4 rounded-lg border border-luxury-gold">
          <p className="text-luxury-navy font-semibold mb-2">Ready to get started?</p>
          <p className="text-luxury-charcoal">Call Dr. Jan Duffy at <a href="tel:+17022221964" className="text-luxury-gold font-semibold hover:underline">702-222-1964</a> for a free consultation.</p>
          <p className="text-sm text-luxury-charcoal mt-2">License #S.0197614.LLC | Berkshire Hathaway HomeServices Nevada Properties</p>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-luxury-navy">What Clients Say</h2>
        <Card className="mb-4 p-6 bg-white border-l-4 border-luxury-blue shadow-md">
          <p className="text-lg italic text-luxury-charcoal">"Jan made our Lone Mountain home purchase a breeze. Her expertise and care are unmatched!"</p>
          <span className="block mt-2 text-right font-semibold text-luxury-navy">- The Smith Family</span>
        </Card>
        <Card className="p-6 bg-white border-l-4 border-luxury-gold shadow-md">
          <p className="text-lg italic text-luxury-charcoal">"We sold above asking thanks to Jan's strategy and local knowledge."</p>
          <span className="block mt-2 text-right font-semibold text-luxury-navy">- M. Johnson</span>
        </Card>
      </section>

      {/* Properties Listings Section */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-luxury-navy">Available Properties</h2>
          <p className="text-lg text-luxury-charcoal">Explore our curated selection of homes for sale</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <RealScoutWidget />
        </div>
      </section>

      {/* Objection Handling Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <Alert className="bg-white border-l-4 border-luxury-blue shadow-md">
          <h3 className="font-semibold text-luxury-navy mb-2">Why Work with Jan?</h3>
          <ul className="list-disc pl-6 text-luxury-charcoal">
            <li>Local expertise and market insight</li>
            <li>Responsive, personalized service</li>
            <li>Proven results for buyers and sellers</li>
          </ul>
        </Alert>
      </section>

      {/* Clear CTA Section */}
      <section className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-luxury-navy to-luxury-navy-dark text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Make Your Move?</h2>
        <Button className="bg-luxury-gold text-luxury-navy px-8 py-3 rounded-lg shadow-md hover:bg-luxury-gold-light transition-colors">Schedule a Consultation</Button>
      </section>
    </main>
  )
} 