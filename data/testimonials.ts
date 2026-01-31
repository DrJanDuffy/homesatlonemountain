/**
 * Client Testimonials
 * Reviews from satisfied Lone Mountain buyers and sellers
 */

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  date: string
  type: 'buyer' | 'seller' | 'both'
  featured?: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael & Sarah T.',
    location: 'Lone Mountain',
    rating: 5,
    text: 'Dr. Jan Duffy made our home buying experience seamless. Her knowledge of the Lone Mountain area is unmatched. She found us the perfect home with mountain views within our budget.',
    date: '2025-12',
    type: 'buyer',
    featured: true,
  },
  {
    id: '2',
    name: 'Robert K.',
    location: 'Lone Mountain',
    rating: 5,
    text: 'Sold our home in just 12 days! Dr. Jan\'s marketing strategy and pricing expertise got us top dollar. Highly recommend for anyone selling in Lone Mountain.',
    date: '2025-11',
    type: 'seller',
    featured: true,
  },
  {
    id: '3',
    name: 'Jennifer L.',
    location: 'Northwest Las Vegas',
    rating: 5,
    text: 'After relocating from California, Dr. Jan helped us understand the Lone Mountain market and find the right neighborhood for our family. Her 30+ years of experience really shows.',
    date: '2025-10',
    type: 'buyer',
    featured: true,
  },
  {
    id: '4',
    name: 'David & Maria G.',
    location: 'Lone Mountain',
    rating: 5,
    text: 'We bought and sold with Dr. Jan. She coordinated both transactions perfectly and got us into our dream home. True professional!',
    date: '2025-09',
    type: 'both',
  },
  {
    id: '5',
    name: 'Patricia M.',
    location: 'Summerlin',
    rating: 5,
    text: 'Dr. Jan\'s attention to detail and responsiveness made all the difference. She was always available to answer questions and guide us through the process.',
    date: '2025-08',
    type: 'buyer',
  },
]

export const featuredTestimonials = testimonials.filter(t => t.featured)

export const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
