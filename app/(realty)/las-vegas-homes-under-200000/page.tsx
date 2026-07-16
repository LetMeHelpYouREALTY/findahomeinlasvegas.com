import type { Metadata } from "next";
import { RealtyHero } from "@/components/realty/hero-section";
import { RealtyStatsBar } from "@/components/realty/stats-bar";
import { RealtyContentLayout } from "@/components/realty/content-layout";
import { RealtyFaqSection } from "@/components/realty/faq-section";
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  realEstateAgentSchema,
} from "@/lib/realty/schema";
import { realtySiteConfig } from "@/lib/realty/site-config";

const PATH = "/las-vegas-homes-under-200000";

export const metadata: Metadata = {
  title: { absolute: "Homes for Sale in Las Vegas Under $200,000 | Realistic Options for 2026" },
  description:
    "Homes for sale in Las Vegas under $200,000 are mostly condos, manufactured homes, and a small number of older detached homes. Here's what's realistically available and where to look.",
  alternates: { canonical: PATH },
  openGraph: {
    url: PATH,
    title: "Homes for Sale in Las Vegas Under $200,000",
    description:
      "A realistic look at what's available under $200,000 in the Las Vegas valley — mostly condos and manufactured homes.",
  },
};

const faqs = [
  {
    question: "Are there any single-family homes in Las Vegas under $200,000?",
    answer:
      "Very few. With the Las Vegas valley single-family median around $486,000 in mid-2026 (city of Las Vegas median roughly $418,500), a detached home under $200,000 is a statistical long-tail listing rather than a real category. What does exist tends to be a small number of older 700–1,200 sq. ft. homes in zip codes like 89108, 89115, 89106, and 89030.",
  },
  {
    question: "What property types are realistically available under $200,000?",
    answer:
      "Mostly condos (roughly 445 listings under $200K on Homes.com in mid-2026), some townhomes, and manufactured homes in 55+ communities. Portal data shows roughly 711–744 total active listings under $200K across the Las Vegas metro, out of about 8,600 total active single-family listings — a small slice of the market.",
  },
  {
    question: "What are HOA fees like on homes in this price range?",
    answer:
      "About 77% of all Las Vegas listings carry an HOA, with fees ranging from $25 to $1,200 per month and a median around $118/month. Attached homes (condos/townhomes) under $200K typically run $200–$400/month in HOA dues — factor this into your real monthly cost, not just the mortgage payment.",
  },
  {
    question: "How much cash should I budget to close at this price point?",
    answer:
      "Plan for roughly 5–8% of the purchase price in cash to close, covering an FHA down payment (as low as 3.5%), closing costs, and reserves. Get pre-approved before touring homes, and budget for likely repairs given the age of much of the inventory at this price point.",
  },
];

export default function HomesUnder200kPage() {
  return (
    <>
      <JsonLd data={realEstateAgentSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Homes for Sale in Las Vegas", path: "/las-vegas-homes-for-sale" },
          { name: "Under $200,000", path: PATH },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <RealtyHero
        headline="Homes for Sale in Las Vegas Under $200,000"
        subhead="A realistic look at what's available at this price point in 2026 — mostly condos, manufactured homes, and a small pocket of older detached homes."
      />

      <RealtyStatsBar
        title="Under-$200K Reality Check"
        stats={[
          { value: "711–744", label: "Active Listings", note: "Under $200K, LV metro, mid-2026" },
          { value: "~445", label: "Condo Listings", note: "Under $200K (Homes.com)" },
          { value: "~77%", label: "Listings With an HOA", note: "$25–$1,200/mo, ~$118 median" },
          { value: "5–8%", label: "Cash-to-Close Estimate", note: "FHA down payment + reserves" },
        ]}
      />

      <RealtyContentLayout>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Setting Realistic Expectations
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          With the Las Vegas valley&apos;s single-family median sitting at
          roughly $486,000 in mid-2026 (Henderson around $426,250, North Las
          Vegas $390,000–$435,000), a detached home under $200,000 is
          statistically a long-tail listing, not a real category to plan
          around. Major portals show roughly 711–744 active listings under
          $200K across the Las Vegas metro — against a backdrop of about
          8,600 total active single-family listings valley-wide.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          What&apos;s Actually Out There
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Most inventory under $200K is condos — roughly 445 listings on
          Homes.com alone — plus townhomes and manufactured homes in 55+
          communities. A small number of older, 700–1,200 sq. ft. detached
          homes turn up in zip codes like 89108, 89115, 89106, and 89030.
          These tend to move quickly and often need updating.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Budget Beyond the Purchase Price
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          About 77% of all Las Vegas listings carry a homeowners association,
          with dues ranging from $25 to $1,200 per month (median around
          $118/month) — attached homes under $200K commonly run $200–$400 a
          month. Plan for 5–8% of the purchase price in cash to close,
          covering an FHA down payment as low as 3.5%, closing costs, and a
          repair reserve given the age of much of this inventory.
        </p>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Data as of mid-2026, compiled from Zillow®, Homes.com, and
          third-party market research; figures change monthly. Contact{" "}
          {realtySiteConfig.agentName} for a live search of current listings
          and honest guidance on what&apos;s realistically available at this
          price point.
        </p>
      </RealtyContentLayout>

      <RealtyFaqSection heading="Homes Under $200K in Las Vegas: FAQ" faqs={faqs} />
    </>
  );
}
