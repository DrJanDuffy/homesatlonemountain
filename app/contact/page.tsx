import React from 'react'
import { Button } from '@/components/ui/Button'
import dynamicImport from 'next/dynamic'
import { Metadata } from 'next'
import { SchemaMarkup } from '@/components/SchemaMarkup'
import { RealScoutWidget } from '@/components/properties/RealScoutWidget'
import { CalendlyWidget } from '@/components/calendly/CalendlyWidget'
import { generateFaqSchema } from '@/lib/schema'
import { agentInfo, officeInfo, assetPaths } from '@/lib/site-config'

// Force static generation for SEO
export const dynamic = 'force-static'
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Homes at Lone Mountain',
  description: 'Contact Dr. Jan Duffy, your Lone Mountain real estate expert. Get in touch for showings, questions, or to start your home buying or selling journey.',
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Homes at Lone Mountain',
    description: 'Contact Dr. Jan Duffy, your Lone Mountain real estate expert. Get in touch for showings, questions, or to start your home buying or selling journey.',
    url: 'https://www.homesatlonemountain.com/contact',
    type: 'website',
    images: [
      {
        url: assetPaths.agentPhotoUrl,
        width: 800,
        height: 800,
        alt: 'Dr. Jan Duffy, Lone Mountain Realtor'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Dr. Jan Duffy | Homes at Lone Mountain',
    description: 'Contact Dr. Jan Duffy, your Lone Mountain real estate expert. Get in touch for showings, questions, or to start your home buying or selling journey.',
    images: [assetPaths.agentPhotoUrl]
  }
}

const FeatureSection = dynamicImport(() => import('@/components/layout/FeatureSection').then(mod => mod.FeatureSection), { ssr: false })

const contactFaqs = [
  { question: 'How can I contact Dr. Jan Duffy?', answer: 'Call 702-222-1964 for immediate assistance or use the contact form on this page. Dr. Jan Duffy responds promptly to all inquiries and offers free consultations for buyers and sellers.' },
  { question: 'What areas does Dr. Jan Duffy serve?', answer: 'Dr. Jan Duffy specializes in Lone Mountain, Northwest Las Vegas, Summerlin, and surrounding communities. She has 30+ years of experience in the greater Las Vegas area.' },
]

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup schema={generateFaqSchema(contactFaqs)} />
      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "RealEstateAgent",
          "name": "Dr. Jan Duffy",
          "areaServed": "Lone Mountain, Las Vegas",
          "url": "https://www.homesatlonemountain.com/contact",
          "image": assetPaths.agentPhotoUrl,
          "telephone": "+1-702-222-1964",
          "email": agentInfo.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": officeInfo.address.street,
            "addressLocality": officeInfo.address.city,
            "addressRegion": officeInfo.address.state,
            "postalCode": officeInfo.address.zip,
            "addressCountry": "US"
          }
        }
      }} />
      <div className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-luxury-navy mb-4">
              Contact Dr. Jan Duffy - Lone Mountain Real Estate Expert
            </h1>
            <p className="text-xl text-luxury-charcoal mb-2">
              We're here to help you find your perfect home at Lone Mountain
            </p>
            <p className="text-lg text-luxury-charcoal">
              Call <a href="tel:+17022221964" className="text-luxury-gold font-semibold hover:underline">702-222-1964</a> for immediate assistance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-luxury-navy mb-6">
                Schedule a Lone Mountain Showing
              </h2>
              <div className="mb-8 rounded-lg overflow-hidden border border-luxury-stone">
                <CalendlyWidget height="650px" />
              </div>
              <h2 className="text-2xl font-bold text-luxury-navy mb-6 mt-12">
                Or Send a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-luxury-navy mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-luxury-stone rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-luxury-navy mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-luxury-stone rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-luxury-navy mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-luxury-stone rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                    placeholder="(555) 555-5555"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-luxury-navy mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-luxury-stone rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                    placeholder="How can we help you?"
                  />
                </div>
                <Button type="submit" className="w-full bg-luxury-navy hover:bg-luxury-navy-light">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-luxury-navy mb-6">
                Our Office (NAP matches GBP)
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-luxury-navy mb-2">
                    Address
                  </h3>
                  <a
                    href={officeInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-luxury-charcoal hover:text-luxury-gold transition-colors block"
                  >
                    {officeInfo.address.full}
                  </a>
                  <span className="text-sm text-luxury-charcoal/80">(Get directions)</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-luxury-navy mb-2">
                    Phone
                  </h3>
                  <p className="text-luxury-charcoal">
                    <a href={agentInfo.phoneTel} className="hover:text-luxury-gold transition-colors font-semibold">
                      {agentInfo.phoneFormatted}
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-luxury-navy mb-2">
                    Email
                  </h3>
                  <p className="text-luxury-charcoal">
                    <a href={`mailto:${agentInfo.email}`} className="hover:text-luxury-gold transition-colors">
                      {agentInfo.email}
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-luxury-navy mb-2">
                    Office Hours
                  </h3>
                  <p className="text-luxury-charcoal">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-luxury-navy mb-6">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              {contactFaqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-luxury-navy">{faq.question}</dt>
                  <dd className="mt-2 text-luxury-charcoal">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>

          <FeatureSection variant="default" ctaText="Contact Jan & See Featured Listings!" ctaButtonText="Contact & Browse" ctaIconUrl="/icons/contact.svg" />
        </div>
      </div>

      {/* Properties Listings Section */}
      <div className="py-12 bg-white">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-luxury-navy">Available Properties</h2>
            <p className="text-lg text-luxury-charcoal">Browse our current listings</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <RealScoutWidget />
          </div>
        </div>
      </div>
    </>
  )
} 