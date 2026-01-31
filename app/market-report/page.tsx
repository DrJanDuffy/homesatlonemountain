import { Metadata } from 'next'
import Link from 'next/link'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { RealScoutWidget } from '@/components/properties/RealScoutWidget'
import { generateBreadcrumbSchema, generateFaqSchema } from '@/lib/schema'
import { loneMountainStats, agentInfo } from '@/lib/site-config'
import { Button } from '@/components/ui/Button'

export const dynamic = 'force-static'
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Lone Mountain Market Report | Homes at Lone Mountain',
  description: `Lone Mountain real estate market report. ${loneMountainStats.medianPriceFormatted} median price, ${loneMountainStats.daysOnMarket} days on market. Expert analysis from Dr. Jan Duffy. Call ${agentInfo.phoneFormatted}.`,
  openGraph: {
    title: 'Lone Mountain Market Report | Homes at Lone Mountain',
    description: `Lone Mountain real estate market insights. Median price ${loneMountainStats.medianPriceFormatted}, ${loneMountainStats.daysOnMarket} days on market. Expert analysis from Dr. Jan Duffy.`,
    url: 'https://www.homesatlonemountain.com/market-report',
  },
}

const marketFaqs = [
  {
    question: 'What is the Lone Mountain real estate market doing?',
    answer: `The Lone Mountain market shows a median price of ${loneMountainStats.medianPriceFormatted} with typical homes selling in ${loneMountainStats.daysOnMarket} days. Prices have increased ${loneMountainStats.yearOverYearChange} year over year. Dr. Jan Duffy provides up-to-date market analysis.`,
  },
  {
    question: 'Where can I get detailed Lone Mountain market updates?',
    answer: 'Visit our blog for full market reports, neighborhood insights, and buying/selling tips. Dr. Jan Duffy shares quarterly updates and monthly trends for Lone Mountain and Northwest Las Vegas.',
  },
]

export default function MarketReportPage() {
  return (
    <>
      <SchemaMarkup
        schema={generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Market Report', url: '/market-report' },
        ])}
      />
      <SchemaMarkup schema={generateFaqSchema(marketFaqs)} />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-luxury-navy mb-4">
              Lone Mountain Real Estate Market Report
            </h1>
            <p className="text-xl text-luxury-charcoal">
              Current market insights for Lone Mountain and Northwest Las Vegas
            </p>
            <p className="text-sm text-luxury-charcoal/80 mt-2">
              Updated {loneMountainStats.lastUpdated}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
            <div className="bg-luxury-cream rounded-lg p-6 text-center">
              <p className="text-sm text-luxury-charcoal mb-1">Median Price</p>
              <p className="text-2xl font-bold text-luxury-navy">{loneMountainStats.medianPriceFormatted}</p>
            </div>
            <div className="bg-luxury-cream rounded-lg p-6 text-center">
              <p className="text-sm text-luxury-charcoal mb-1">Days on Market</p>
              <p className="text-2xl font-bold text-luxury-navy">{loneMountainStats.daysOnMarket}</p>
            </div>
            <div className="bg-luxury-cream rounded-lg p-6 text-center">
              <p className="text-sm text-luxury-charcoal mb-1">YoY Change</p>
              <p className="text-2xl font-bold text-luxury-navy">{loneMountainStats.yearOverYearChange}</p>
            </div>
            <div className="bg-luxury-cream rounded-lg p-6 text-center">
              <p className="text-sm text-luxury-charcoal mb-1">Price Range</p>
              <p className="text-lg font-bold text-luxury-navy">{loneMountainStats.priceRange}</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-luxury-navy mb-4">Full Market Analysis</h2>
            <p className="text-luxury-charcoal mb-6">
              Read our in-depth Lone Mountain market updates, neighborhood trends, and expert buying/selling advice on the blog.
            </p>
            <Button asChild className="bg-luxury-navy hover:bg-luxury-navy-light">
              <Link href="/blog">View Lone Mountain Market Updates</Link>
            </Button>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-luxury-navy mb-6">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              {marketFaqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-luxury-navy">{faq.question}</dt>
                  <dd className="mt-2 text-luxury-charcoal">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-luxury-charcoal mb-4">
              Get a personalized Lone Mountain market analysis. Call{' '}
              <a href={agentInfo.phoneTel} className="text-luxury-gold font-semibold hover:underline">
                {agentInfo.phoneFormatted}
              </a>.
            </p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-luxury-navy mb-6 text-center">
              Browse Lone Mountain Homes for Sale
            </h2>
            <RealScoutWidget />
          </div>
        </div>
      </div>
    </>
  )
}
