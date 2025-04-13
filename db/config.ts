import { defineDb, defineTable, column } from 'astro:db';

const Properties = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    address: column.text(),
    city: column.text(),
    state: column.text(),
    zipCode: column.text(),
    price: column.number(),
    bedrooms: column.number(),
    bathrooms: column.number(),
    squareFeet: column.number(),
    description: column.text(),
    featuredImage: column.text(),
    status: column.text({ default: 'active' }),
    propertyType: column.text(),
    createdAt: column.date(),
    updatedAt: column.date(),
  }
});

const Agents = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    firstName: column.text(),
    lastName: column.text(),
    email: column.text({ unique: true }),
    phone: column.text(),
    bio: column.text(),
    photo: column.text(),
    realscoutAgentId: column.text(),
    createdAt: column.date(),
    updatedAt: column.date(),
  }
});

const Inquiries = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    phone: column.text(),
    message: column.text(),
    propertyId: column.number({ references: () => Properties.columns.id }),
    agentId: column.number({ references: () => Agents.columns.id }),
    status: column.text({ default: 'new' }),
    createdAt: column.date(),
    updatedAt: column.date(),
  }
});

// Define the database with our tables
export default defineDb({
  tables: {
    Properties,
    Agents,
    Inquiries,
  }
}); 