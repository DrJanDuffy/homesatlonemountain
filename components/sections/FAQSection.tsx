'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { loneMountainFaqs } from '@/lib/lone-mountain-faqs'

export interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs?: FAQ[]
  title?: string
  subtitle?: string
}

export function FAQSection({
  faqs = loneMountainFaqs as FAQ[],
  title = 'Lone Mountain Real Estate FAQs',
  subtitle = 'Common questions about buying and selling homes in Lone Mountain, Northwest Las Vegas',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-navy mb-4">
            {title}
          </h2>
          <p className="text-xl text-luxury-charcoal max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-luxury-stone rounded-lg mb-4 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-luxury-cream transition-colors"
              >
                <span className="font-semibold text-luxury-navy pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-luxury-charcoal flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-luxury-cream border-t border-luxury-stone">
                  <p className="text-luxury-charcoal">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
