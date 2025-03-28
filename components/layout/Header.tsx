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
            <Link href="/" className="text-2xl font-bold text-primary-dark">
              Lone Mountain
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-primary-dark hover:text-primary-blue"
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
              className="text-base font-medium text-primary-dark hover:text-primary-blue"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
} 