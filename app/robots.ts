import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/chat/", "/agent", "/api/", "/auth/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
