import { z } from 'zod';

const envSchema = z.object({
  // Public variables
  PUBLIC_REALSCOUT_API: z.string().url(),
  PUBLIC_REALSCOUT_AGENT_ID: z.string().min(1),
  PUBLIC_REALSCOUT_MARKET: z.string().min(1),
  PUBLIC_SITE_URL: z.string().url(),
  PUBLIC_CLOUDCMA_WIDGET_ID: z.string().min(1),
  PUBLIC_PERCY_AI_CLIENT_ID: z.string().min(1),

  // Private variables
  REALSCOUT_API_TOKEN: z.string().min(1),
  DB_PASSWORD: z.string().min(1),
  CLOUDCMA_SECRET_KEY: z.string().min(1),
  PERCY_AI_API_KEY: z.string().min(1),
});

function validateEnv() {
  const parsed = envSchema.safeParse(import.meta.env);
  
  if (!parsed.success) {
    console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  }

  return parsed.data;
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