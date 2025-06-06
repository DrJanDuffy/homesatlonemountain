import { Button, Card, Input, Badge, Alert } from '@/components/ui'

export default function Home() {
  return (
    <main className="bg-[#F7F9FC] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[480px] bg-gradient-to-br from-[#3A8DDE] to-[#16B286] text-white shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Homes at Lone Mountain</h1>
        <p className="text-xl md:text-2xl mb-6">with Dr. Jan Duffy, Your Local Real Estate Expert</p>
        <Button className="bg-[#0A2540] text-white px-8 py-3 rounded-lg shadow-md">See Available Homes</Button>
      </section>

      {/* Pain Point Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-2 text-[#0A2540]">Buying or Selling in Lone Mountain Can Be Overwhelming</h2>
        <p className="text-lg text-[#3A8DDE]">Navigating the market, finding the right home, and getting the best value shouldn't be stressful.</p>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-12 px-4 shadow rounded-lg max-w-4xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-[#16B286]">Dr. Jan Duffy Makes It Easy</h2>
        <ul className="list-disc pl-6 text-[#0A2540]">
          <li>Personalized service and deep local knowledge</li>
          <li>Proven track record in Lone Mountain real estate</li>
          <li>Guidance from search to closing</li>
        </ul>
      </section>

      {/* Social Proof Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4 text-[#0A2540]">What Clients Say</h2>
        <Card className="mb-4 p-6 bg-[#F7F9FC] border-l-4 border-[#3A8DDE]">
          <p className="text-lg italic">"Jan made our Lone Mountain home purchase a breeze. Her expertise and care are unmatched!"</p>
          <span className="block mt-2 text-right font-semibold">- The Smith Family</span>
        </Card>
        <Card className="p-6 bg-[#F7F9FC] border-l-4 border-[#16B286]">
          <p className="text-lg italic">"We sold above asking thanks to Jan's strategy and local knowledge."</p>
          <span className="block mt-2 text-right font-semibold">- M. Johnson</span>
        </Card>
      </section>

      {/* Interactive Tool Section (Placeholder) */}
      <section className="max-w-4xl mx-auto py-12 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#3A8DDE]">Find Your Home Value</h2>
        <div className="w-full max-w-md">
          {/* Replace this with Homebot or valuation widget */}
          <Input placeholder="Enter your address" className="mb-4" />
          <Button className="w-full bg-[#16B286] text-white">Get Valuation</Button>
        </div>
        <Badge className="mt-4 bg-[#0A2540] text-white">Powered by Homebot</Badge>
      </section>

      {/* Objection Handling Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <Alert className="bg-[#F7F9FC] border-l-4 border-[#3A8DDE]">
          <h3 className="font-semibold text-[#0A2540] mb-2">Why Work with Jan?</h3>
          <ul className="list-disc pl-6 text-[#0A2540]">
            <li>Local expertise and market insight</li>
            <li>Responsive, personalized service</li>
            <li>Proven results for buyers and sellers</li>
          </ul>
        </Alert>
      </section>

      {/* Clear CTA Section */}
      <section className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-[#0A2540] to-[#3A8DDE] text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Make Your Move?</h2>
        <Button className="bg-[#16B286] text-white px-8 py-3 rounded-lg shadow-md">Schedule a Consultation</Button>
      </section>
    </main>
  )
} 