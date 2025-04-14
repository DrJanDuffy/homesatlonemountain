import { z } from 'zod';

const envSchema = z.object({
  // Public variables - required
  PUBLIC_SITE_URL: z.string().url().default('https://homesatlonemountain.com'),
  
  // Public variables - optional with defaults
  PUBLIC_REALSCOUT_API: z.string().url().default('https://api.realscout.com/v3'),
  PUBLIC_REALSCOUT_AGENT_ID: z.string().optional(),
  PUBLIC_REALSCOUT_MARKET: z.string().default('las-vegas'),
  PUBLIC_CLOUDCMA_WIDGET_ID: z.string().optional(),
  PUBLIC_PERCY_AI_CLIENT_ID: z.string().optional(),

  // Private variables - optional based on feature usage
  REALSCOUT_API_TOKEN: z.string().optional(),
  DB_PASSWORD: z.string().optional(),
  CLOUDCMA_SECRET_KEY: z.string().optional(),
  PERCY_AI_API_KEY: z.string().optional(),
});

export function validateEnv() {
  try {
    const parsed = envSchema.safeParse({
      ...getDefaultEnv(),
      ...import.meta.env
    });
    
    if (!parsed.success) {
      console.warn('⚠️ Some environment variables are missing:', parsed.error.flatten().fieldErrors);
      return getDefaultEnv();
    }

    return parsed.data;
  } catch (error) {
    console.error('❌ Error validating environment variables:', error);
    return getDefaultEnv();
  }
}

function getDefaultEnv() {
  return {
    PUBLIC_SITE_URL: process.env.VERCEL_URL ? 
      `https://${process.env.VERCEL_URL}` : 
      'https://homesatlonemountain.com',
    PUBLIC_REALSCOUT_API: 'https://api.realscout.com/v3',
    PUBLIC_REALSCOUT_MARKET: 'las-vegas'
  };
}

export const env = validateEnv();

// Type helper for public env vars
type PublicEnv = {
  [K in keyof typeof env as K extends `PUBLIC_${string}` ? K : never]: typeof env[K];
};

// Export public env vars for client-side use
export const publicEnv: PublicEnv = Object.fromEntries(
  Object.entries(env).filter(([key]) => key.startsWith('PUBLIC_'))
) as PublicEnv; 