const FALLBACK_URL = "http://localhost:3000";

/** Public origin of the deployment, used for metadata, robots.txt, and sitemap.xml. */
export function getSiteUrl(): string {
  const explicit = process.env.BETTER_AUTH_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) return `https://${vercelUrl}`;

  return FALLBACK_URL;
}

export const siteName = "Find a Home in Las Vegas | Dr. Jan Duffy";
export const siteDescription =
  "Search Las Vegas homes for sale with Dr. Jan Duffy, BHHS Nevada Properties. Live MLS listings, market data, and local guidance — call (702) 222-1964.";
