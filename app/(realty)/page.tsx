import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RealtyHero } from "@/components/realty/hero-section";
import { RealScoutOfficeListings } from "@/components/realty/office-listings";
import { RealtyStatsBar } from "@/components/realty/stats-bar";
import { RealtyContentLayout } from "@/components/realty/content-layout";
import { RealtyFaqSection } from "@/components/realty/faq-section";
import {
  JsonLd,
  faqSchema,
  realEstateAgentSchema,
} from "@/lib/realty/schema";
import { realtySiteConfig } from "@/lib/realty/site-config";

export const metadata: Metadata = {
  title: {
    absolute:
      "Find a Home in Las Vegas, NV | Dr. Jan Duffy, REALTOR®",
  },
  description:
    "Search Las Vegas homes for sale with Dr. Jan Duffy, BHHS Nevada Properties. Live MLS listings, market data, and local guidance across the valley — call (702) 222-1964.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Find a Home in Las Vegas, NV | Dr. Jan Duffy, REALTOR®",
    description:
      "Search Las Vegas homes for sale with live MLS listings and local market guidance from Dr. Jan Duffy.",
    images: [{ url: "/realty/heroes/hero-home.png" }],
  },
};

const faqs = [
  {
    question: "Who is Dr. Jan Duffy?",
    answer:
      "Dr. Jan Duffy is a licensed Nevada REALTOR® (S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties. She helps buyers and sellers navigate Las Vegas Valley submarkets with current MLS data and clear next steps.",
  },
  {
    question: "How do I search homes for sale in Las Vegas?",
    answer:
      "Use the live listings below to browse active inventory, or call (702) 222-1964 for a guided search by budget, location, and home type. You can also explore focused pages for homes under $300K, pool homes, rentals, and more.",
  },
  {
    question: "What areas of Las Vegas do you cover?",
    answer:
      "Service covers the Greater Las Vegas Valley, including Las Vegas, Henderson, North Las Vegas, Summerlin, and surrounding Clark County communities. Neighborhood recommendations are based on your budget, commute, and property needs — not protected characteristics under the Fair Housing Act.",
  },
  {
    question: "Is there a cost for a consultation?",
    answer:
      "An initial buyer or seller consultation is free and no-obligation. Call (702) 222-1964 to schedule a time that works for you.",
  },
];

const exploreLinks = [
  {
    href: "/las-vegas-homes-for-sale",
    title: "Homes for Sale",
    description: "Valley-wide inventory and current market stats.",
  },
  {
    href: "/las-vegas-homes-under-300000",
    title: "Under $300,000",
    description: "Entry-level and value-priced listings.",
  },
  {
    href: "/las-vegas-homes-with-pool",
    title: "Homes with Pools",
    description: "Desert living with outdoor water features.",
  },
  {
    href: "/las-vegas-homes-for-rent",
    title: "Homes for Rent",
    description: "Rental inventory across Clark County.",
  },
  {
    href: "/small-homes-for-sale-las-vegas",
    title: "Small Homes",
    description: "Compact and efficient floor plans.",
  },
  {
    href: "/find-a-home-by-owner",
    title: "For Sale by Owner",
    description: "What to know before buying a FSBO.",
  },
] as const;

export default function RealtyHomePage() {
  return (
    <>
      <JsonLd data={realEstateAgentSchema()} />
      <JsonLd data={faqSchema(faqs)} />

      <RealtyHero
        headline={`Find a Home in Las Vegas with ${realtySiteConfig.agentName}`}
        subhead="Local MLS search, clear market data, and hands-on guidance from a BHHS Nevada Properties REALTOR® — serving buyers and sellers across the Las Vegas Valley."
        primaryCtaLabel="Browse Live Listings"
        primaryCtaHref="#listings"
        imageSrc="/realty/heroes/hero-home.png"
        imageAlt="Modern Las Vegas desert home at dusk with lit windows and a pool reflecting the sunset"
      />

      <RealScoutOfficeListings
        title="Live Las Vegas Homes for Sale"
        listingStatus="For Sale"
        propertyTypes=",SFR,MF,TC"
        sortOrder="NEWEST"
      />

      <RealtyStatsBar
        stats={[
          {
            value: "$486K–$490K",
            label: "Median Price (SFH)",
            note: "Valley-wide, mid-2026",
          },
          {
            value: "~8,600–8,900",
            label: "Active Listings",
            note: "Single-family, Clark County",
          },
          {
            value: "47–51 days",
            label: "Median Days on Market",
            note: "GLVAR, Apr. 2026",
          },
          {
            value: "(702) 222-1964",
            label: "Call Dr. Jan Duffy",
            note: "Free consultation",
          },
        ]}
      />

      <section
        aria-label="Explore Las Vegas home searches"
        className="w-full border-b border-border bg-background"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Explore Las Vegas Real Estate
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            Start with live inventory below, or jump into a focused search for
            your budget and home type.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex h-full flex-col rounded-lg border border-border bg-card/40 p-5 transition-colors hover:border-primary/50 hover:bg-card"
                >
                  <span className="flex items-center justify-between gap-2 font-semibold text-foreground">
                    {link.title}
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="mt-2 text-sm text-muted-foreground">
                    {link.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RealtyContentLayout>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Your Local Guide to Las Vegas Homes
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {realtySiteConfig.agentName} helps buyers and sellers compare
          neighborhoods, price points, and property types across Las Vegas,
          Henderson, North Las Vegas, and Summerlin — using current MLS data
          rather than stale portal snapshots.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Whether you need a starter home under $300,000, a rental, a pool
          property, or a second opinion on a for-sale-by-owner listing, start
          with the live search above or call{" "}
          <a
            href={`tel:${realtySiteConfig.phoneHref}`}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {realtySiteConfig.phoneDisplay}
          </a>
          .
        </p>
      </RealtyContentLayout>

      <RealtyFaqSection faqs={faqs} />
    </>
  );
}
