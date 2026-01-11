import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'Market Updates', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex flex-col">
              <Link href="/" className="text-2xl font-bold text-luxury-navy">
                Lone Mountain
              </Link>
              <a href="tel:+17022221964" className="text-sm text-luxury-charcoal hover:text-luxury-gold transition-colors font-medium">
                702-222-1964
              </a>
            </div>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-luxury-navy hover:text-luxury-gold"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-luxury-navy hover:text-luxury-gold"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
} 