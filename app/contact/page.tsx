import React from 'react'
import { Button } from '@/components/ui/Button'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { SchemaMarkup } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Homes at Lone Mountain',
  description: 'Contact Dr. Jan Duffy, your Lone Mountain real estate expert. Get in touch for showings, questions, or to start your home buying or selling journey.',
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Homes at Lone Mountain',
    description: 'Contact Dr. Jan Duffy, your Lone Mountain real estate expert. Get in touch for showings, questions, or to start your home buying or selling journey.',
    url: 'https://homesatlonemountain.com/contact',
    type: 'website',
    images: [
      {
        url: 'https://homesatlonemountain.com/jan-duffy.jpg',
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
    images: ['https://homesatlonemountain.com/jan-duffy.jpg']
  }
}

const FeatureSection = dynamic(() => import('@/components/layout/FeatureSection').then(mod => mod.FeatureSection), { ssr: false })

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "RealEstateAgent",
          "name": "Dr. Jan Duffy",
          "areaServed": "Lone Mountain, Las Vegas",
          "url": "https://homesatlonemountain.com/contact",
          "image": "https://homesatlonemountain.com/jan-duffy.jpg",
          "telephone": "+1-555-555-5555"
        }
      }} />
      <div className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-luxury-navy mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-luxury-charcoal">
              We're here to help you find your perfect home at Lone Mountain
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-luxury-navy mb-6">
                Get in Touch
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
                Our Office
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-luxury-navy mb-2">
                    Address
                  </h3>
                  <p className="text-luxury-charcoal">
                    123 Mountain View Drive<br />
                    Las Vegas, NV 89129
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-luxury-navy mb-2">
                    Phone
                  </h3>
                  <p className="text-luxury-charcoal">
                    <a href="tel:+1-555-555-5555" className="hover:text-luxury-gold transition-colors">
                      (555) 555-5555
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-luxury-navy mb-2">
                    Email
                  </h3>
                  <p className="text-luxury-charcoal">
                    <a href="mailto:info@lonemountain.com" className="hover:text-luxury-gold transition-colors">
                      info@lonemountain.com
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

          <FeatureSection variant="default" ctaText="Contact Jan & See Featured Listings!" ctaButtonText="Contact & Browse" ctaIconUrl="/icons/contact.svg" />
        </div>
      </div>
    </>
  )
} 