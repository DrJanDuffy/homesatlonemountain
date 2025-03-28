export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  
  // Check for custom domain first
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  
  // Fallback to Vercel URL
  return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
};

export const getAbsoluteUrl = (path: string) => {
  const baseUrl = getBaseUrl();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}; 