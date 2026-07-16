import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const REALTY_PAGES = [
  "/las-vegas-homes-for-sale",
  "/las-vegas-homes-search",
  "/find-a-home-by-owner",
  "/las-vegas-homes-under-300000",
  "/las-vegas-homes-under-200000",
  "/las-vegas-homes-for-rent",
  "/small-homes-for-sale-las-vegas",
  "/las-vegas-homes-with-pool",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...REALTY_PAGES.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
