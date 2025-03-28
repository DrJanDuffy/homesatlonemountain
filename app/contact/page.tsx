import React from 'react'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            We're here to help you find your perfect home at Lone Mountain
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-6">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary-dark mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary-dark mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-primary-dark mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="(555) 555-5555"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary-dark mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-primary-dark mb-6">
              Our Office
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">
                  Address
                </h3>
                <p className="text-gray-600">
                  123 Mountain View Drive<br />
                  Las Vegas, NV 89129
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">
                  Phone
                </h3>
                <p className="text-gray-600">
                  <a href="tel:+1-555-555-5555" className="hover:text-primary-blue">
                    (555) 555-5555
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">
                  Email
                </h3>
                <p className="text-gray-600">
                  <a href="mailto:info@lonemountain.com" className="hover:text-primary-blue">
                    info@lonemountain.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-dark mb-2">
                  Office Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 