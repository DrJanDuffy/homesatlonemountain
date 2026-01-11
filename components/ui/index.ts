import * as React from 'react'
export { Button, buttonVariants } from './Button'
export { Container } from './Container'
export { Image } from './Image'
export { default as Map } from './Map'

// Simple components for compatibility
export function Card({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  )
}

export function Input({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full px-4 py-2 border border-luxury-stone rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold ${className}`}
      {...props}
    />
  )
}

export function Badge({ className = '', children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`} {...props}>
      {children}
    </span>
  )
}

export function Alert({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`rounded-lg p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}
