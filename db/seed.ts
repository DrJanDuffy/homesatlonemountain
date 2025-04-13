import { db, Properties, Agents } from 'astro:db';

// Seed the database with initial data
export default async function seed() {
  // Add sample agents
  await db.insert(Agents).values([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@lonemountain.com',
      phone: '(702) 555-0123',
      bio: 'Luxury real estate specialist with over 15 years of experience in the Las Vegas market.',
      photo: '/images/agents/john-smith.jpg',
      realscoutAgentId: process.env.PUBLIC_REALSCOUT_AGENT_ID || '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@lonemountain.com',
      phone: '(702) 555-0124',
      bio: 'Specializing in luxury homes and investment properties in the Lone Mountain area.',
      photo: '/images/agents/sarah-johnson.jpg',
      realscoutAgentId: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  // Add sample properties
  await db.insert(Properties).values([
    {
      id: 1,
      address: '4321 Lone Mountain Road',
      city: 'Las Vegas',
      state: 'NV',
      zipCode: '89130',
      price: 1250000,
      bedrooms: 4,
      bathrooms: 3.5,
      squareFeet: 3200,
      description: 'Stunning luxury home with panoramic mountain views, gourmet kitchen, and resort-style backyard.',
      featuredImage: '/images/properties/lone-mountain-estate.jpg',
      status: 'active',
      propertyType: 'single-family',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      address: '8765 Desert Vista Drive',
      city: 'Las Vegas',
      state: 'NV',
      zipCode: '89129',
      price: 875000,
      bedrooms: 3,
      bathrooms: 2.5,
      squareFeet: 2400,
      description: 'Modern desert oasis featuring smart home technology, energy-efficient design, and private courtyard.',
      featuredImage: '/images/properties/desert-vista-modern.jpg',
      status: 'active',
      propertyType: 'single-family',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
} 