/// <reference path="../.astro/db-types.d.ts" />
/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  // Public variables (available on client)
  readonly PUBLIC_REALSCOUT_API: string;
  readonly PUBLIC_REALSCOUT_AGENT_ID: string;
  readonly PUBLIC_REALSCOUT_MARKET: string;

  // Private variables (server-only)
  readonly REALSCOUT_API_TOKEN: string;
  readonly DB_PASSWORD: string;

  // Private environment variables (not exposed to the client)
  readonly API_KEY: string;
  readonly CLOUDCMA_SECRET_KEY: string;
  readonly PERCY_AI_API_KEY: string;

  // Public environment variables (exposed to the client)
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_CLOUDCMA_WIDGET_ID: string;
  readonly PUBLIC_PERCY_AI_CLIENT_ID: string;
  readonly PUBLIC_GOOGLE_MAPS_KEY: string;
  readonly PUBLIC_ANALYTICS_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace App {
  interface Locals {
    client: import('./lib/client').Client;
  }
}

// Extend the window interface for any global variables
interface Window {
  realscoutConfig?: {
    agentId: string;
    market: string;
  };
  cloudCMAWidget?: any;
  percyAI?: any;
}