import type { Metadata } from "next";
import { RealtyHero } from "@/components/realty/hero-section";
import { RealScoutOfficeListings } from "@/components/realty/office-listings";
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

const PATH = "/las-vegas-homes-search";

export const metadata: Metadata = {
  title: { absolute: "Las Vegas Homes for Sale — Map Search, Photos & Price History" },
  description:
    "Search Las Vegas homes for sale with an interactive map, photos, price history, and school data — the search experience you expect, backed by a local licensed agent.",
  alternates: { canonical: PATH },
  openGraph: {
    url: PATH,
    title: "Las Vegas Homes for Sale — Map Search, Photos & Price History",
    description:
      "Search Las Vegas homes for sale with an interactive map, photos, and price history — backed by a local licensed agent.",
    images: [{ url: "/realty/heroes/hero-homes-search.png" }],
  },
};

const faqs = [
  {
    question:
      'I searched "Las Vegas homes for sale Zillow" — can I search the same way here?',
    answer:
      "Yes. Buyers who search for the Zillow® website are usually looking for a specific search experience — interactive map search, lots of photos, price and tax history, school zone data, and saved-search alerts — more than the Zillow brand itself. We aim to offer that same experience, sourced from local MLS data, plus something a national portal can't: a licensed Las Vegas agent who already knows the neighborhood.",
  },
  {
    question: "What should I expect from a good Las Vegas home search tool?",
    answer:
      "At minimum: multiple photos per listing, an interactive map with draw/polygon search, price and tax history, school ratings, a mortgage calculator, and the ability to save searches and get email alerts for new matches. If a site is missing these, you're working with less information than you should have.",
  },
  {
    question: "Is your listing data the same as what I'd see on Zillow?",
    answer:
      "Listing data for the Las Vegas valley ultimately traces back to the Las Vegas REALTORS® (GLVAR) MLS. Portals like Zillow® syndicate that same underlying data, sometimes with a lag. Working directly with a local MLS-connected agent gets you the most current information and someone who can act on it immediately.",
  },
  {
    question: "Do I need an agent if I'm comfortable searching on my own?",
    answer:
      "You're always welcome to browse on your own first. When you're ready to tour homes, make an offer, or need a comparative market analysis, a buyer's agent represents your interests exclusively — not the seller's — and typically costs you nothing out of pocket. Since the 2024 NAR settlement, buyer-agent compensation is discussed upfront in a written agreement, so there are no surprises.",
  },
];

export default function LasVegasHomesSearchPage() {
  return (
    <>
      <JsonLd data={realEstateAgentSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Search Las Vegas Homes", path: PATH },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <RealtyHero
        headline="Search Las Vegas Homes for Sale"
        subhead="An interactive map, real photos, price history, and school data — the search experience you'd expect from a major portal, backed by a licensed local agent who can act fast."
        primaryCtaLabel="Get Matched With Current Listings"
        imageSrc="/realty/heroes/hero-homes-search.png"
        imageAlt="Homebuyer reviewing Las Vegas home listings on a laptop in a bright modern kitchen"
      />

      <RealScoutOfficeListings
        title="Search Las Vegas Homes — Live Office Listings"
        listingStatus="For Sale"
        propertyTypes=",SFR,MF,TC"
        sortOrder="NEWEST"
      />

      <RealtyStatsBar
        stats={[
          { value: "~7,400", label: "Active SFH Listings", note: "Las Vegas valley, mid-2026" },
          { value: "$498K", label: "Median Sale Price", note: "GLVAR MLS, May 2026" },
          { value: "~38 days", label: "Days on Market", note: "Single-family homes" },
          { value: "~4.6 months", label: "Months of Supply", note: "Rising from 2024–25" },
        ]}
      />

      <RealtyContentLayout>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          The Search Experience You&apos;re Looking For
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Most people who search for &quot;Las Vegas homes for sale
          Zillow&reg;&quot; aren&apos;t necessarily loyal to one brand — they
          want a fast, visual, map-based way to browse listings with reliable
          price and history data. That&apos;s the bar every Las Vegas home-search
          tool should clear: 20+ photos per listing, an interactive map with
          draw/polygon search, price and tax history, school zone ratings,
          Walk/Transit/Bike scores, a mortgage calculator, and saved searches
          with email alerts.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Underneath any portal, Las Vegas listing data traces back to the
          same source: the Las Vegas REALTORS® (GLVAR) MLS. National portals
          syndicate that data — sometimes with a delay. Working directly with
          a local, MLS-connected agent means you&apos;re seeing the most current
          information available, and you have someone who can schedule a
          same-day showing the moment a new listing hits the market.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          What a Portal Can&apos;t Do
        </h3>
        <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground" role="list">
          <li>Explain why two similar-looking homes in different HOAs carry very different monthly costs.</li>
          <li>Tell you which neighborhoods are trending up before it shows up in the data.</li>
          <li>Negotiate on your behalf, at no direct cost to you as a buyer.</li>
          <li>Flag a red flag in a disclosure or inspection report before it becomes your problem.</li>
        </ul>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Zillow is a registered trademark of Zillow, Inc. This page
          references the Zillow website for descriptive comparison only and
          is not affiliated with, endorsed by, or sponsored by Zillow, Inc.
          Data as of mid-2026, compiled from Las Vegas REALTORS® (GLVAR) MLS
          summaries and third-party market research. Contact{" "}
          {realtySiteConfig.agentName} for a live listing search.
        </p>
      </RealtyContentLayout>

      <RealtyFaqSection
        heading="Searching for Homes in Las Vegas: FAQ"
        faqs={faqs}
      />
    </>
  );
}
