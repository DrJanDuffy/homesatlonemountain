// Type definitions for our data
interface Property {
  id: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
}

interface ListingResponse {
  properties: Property[];
  total: number;
  page: number;
}

// Server-side data fetching with private credentials
export async function getListingsServer(): Promise<ListingResponse> {
  if (!import.meta.env.SSR) {
    throw new Error('This function can only be called on the server');
  }

  const response = await fetch('https://api.realscout.com/v1/listings', {
    headers: {
      'Authorization': `Bearer ${import.meta.env.REALSCOUT_API_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch listings: ${response.statusText}`);
  }

  return response.json();
}

// Client-side data fetching with public API
export async function getListingsClient(): Promise<ListingResponse> {
  const response = await fetch(`${import.meta.env.PUBLIC_REALSCOUT_API}/listings/public`, {
    headers: {
      'X-Agent-ID': import.meta.env.PUBLIC_REALSCOUT_AGENT_ID,
      'X-Market': import.meta.env.PUBLIC_REALSCOUT_MARKET
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch listings: ${response.statusText}`);
  }

  return response.json();
}

// Utility function to determine which fetch method to use
export async function getListings(forceClient = false): Promise<ListingResponse> {
  if (import.meta.env.SSR && !forceClient) {
    return getListingsServer();
  }
  return getListingsClient();
} 