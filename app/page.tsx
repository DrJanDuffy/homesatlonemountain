import { Button, Card, Input, Badge, Alert } from '@/components/ui'
import { RealScoutWidget } from '@/components/properties/RealScoutWidget'

export default function Home() {
  return (
    <main className="bg-luxury-cream min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[480px] bg-gradient-to-br from-luxury-navy to-luxury-navy-dark text-white shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Homes at Lone Mountain</h1>
        <p className="text-xl md:text-2xl mb-6">with Dr. Jan Duffy, Your Local Real Estate Expert</p>
        <Button className="bg-luxury-gold text-luxury-navy px-8 py-3 rounded-lg shadow-md hover:bg-luxury-gold-light transition-colors">See Available Homes</Button>
      </section>

      {/* Pain Point Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-2 text-luxury-navy">Buying or Selling in Lone Mountain Can Be Overwhelming</h2>
        <p className="text-lg text-luxury-charcoal">Navigating the market, finding the right home, and getting the best value shouldn't be stressful.</p>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-12 px-4 shadow-lg rounded-lg max-w-4xl mx-auto mb-8 border border-luxury-stone">
        <h2 className="text-2xl font-semibold mb-2 text-luxury-gold">Dr. Jan Duffy Makes It Easy</h2>
        <ul className="list-disc pl-6 text-luxury-navy">
          <li>Personalized service and deep local knowledge</li>
          <li>Proven track record in Lone Mountain real estate</li>
          <li>Guidance from search to closing</li>
        </ul>
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