/**
 * School Data
 * Schools serving the Lone Mountain area
 */

export interface School {
  id: string
  name: string
  type: 'elementary' | 'middle' | 'high' | 'private'
  rating: number // Out of 10
  grades: string
  address: string
  distance?: string // From Lone Mountain center
  website?: string
}

export const schools: School[] = [
  // Elementary Schools
  {
    id: 'decker-es',
    name: 'Decker Elementary School',
    type: 'elementary',
    rating: 8,
    grades: 'K-5',
    address: '8825 Paddle Wheel Dr, Las Vegas, NV 89129',
    distance: '1.2 mi',
  },
  {
    id: 'allen-es',
    name: 'Paul Allen Elementary School',
    type: 'elementary',
    rating: 8,
    grades: 'K-5',
    address: '8101 Oso Blanca Rd, Las Vegas, NV 89131',
    distance: '2.1 mi',
  },
  // Middle Schools
  {
    id: 'rogich-ms',
    name: 'Sig Rogich Middle School',
    type: 'middle',
    rating: 7,
    grades: '6-8',
    address: '235 N Pavilion Center Dr, Las Vegas, NV 89144',
    distance: '3.5 mi',
  },
  // High Schools
  {
    id: 'centennial-hs',
    name: 'Centennial High School',
    type: 'high',
    rating: 7,
    grades: '9-12',
    address: '10200 W Centennial Pkwy, Las Vegas, NV 89149',
    distance: '2.8 mi',
  },
  {
    id: 'palo-verde-hs',
    name: 'Palo Verde High School',
    type: 'high',
    rating: 8,
    grades: '9-12',
    address: '333 S Pavilion Center Dr, Las Vegas, NV 89144',
    distance: '4.2 mi',
  },
]

export const schoolsByType = {
  elementary: schools.filter(s => s.type === 'elementary'),
  middle: schools.filter(s => s.type === 'middle'),
  high: schools.filter(s => s.type === 'high'),
  private: schools.filter(s => s.type === 'private'),
}

export const averageSchoolRating = schools.reduce((acc, s) => acc + s.rating, 0) / schools.length
