const FALLBACK_URL = "http://localhost:3000";

/** Public origin of the deployment, used for metadata, robots.txt, and sitemap.xml. */
export function getSiteUrl(): string {
  const explicit = process.env.BETTER_AUTH_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) return `https://${vercelUrl}`;

  return FALLBACK_URL;
}

export const siteName = "Internal Knowledge Agent";
export const siteDescription =
  "Ask questions across your internal tools - GitHub, Notion, Slack, and more.";
