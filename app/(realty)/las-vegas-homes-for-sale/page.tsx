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

const PATH = "/las-vegas-homes-for-sale";

export const metadata: Metadata = {
  title: { absolute: "Homes for Sale in Las Vegas, NV | Current Listings & Market Data" },
  description:
    "Browse homes for sale in Las Vegas, NV with up-to-date market data on price, inventory, and days on market. Work with a local licensed agent for every submarket.",
  alternates: { canonical: PATH },
  openGraph: {
    url: PATH,
    title: "Homes for Sale in Las Vegas, NV | Current Listings & Market Data",
    description:
      "Browse homes for sale in Las Vegas, NV with up-to-date market data on price, inventory, and days on market.",
    images: [{ url: "/realty/heroes/hero-homes-for-sale.png" }],
  },
};

const faqs = [
  {
    question: "What is the median home price in Las Vegas right now?",
    answer:
      "As of mid-2026, the Las Vegas valley median sale price for single-family homes is roughly $486,000–$490,000 (Redfin's blended figure, which includes condos and townhomes, runs closer to $449,700). Prices vary widely by submarket — North Las Vegas trends lowest at roughly $385,000–$438,000, while Summerlin commands a $150,000–$250,000 premium over the valley median. Figures are approximate and change monthly; ask for a current comparative market analysis for your target area.",
  },
  {
    question: "How much housing inventory is available in Las Vegas?",
    answer:
      "Active single-family listings across Clark County were running roughly 8,600–8,900 in mid-2026, plus around 3,000 attached homes (condos/townhomes), putting months-of-supply near 3.8 months for single-family and 5.6 months for condos/townhomes — past the 3-month mark that typically signals a shift toward buyers.",
  },
  {
    question: "How long do homes stay on the market in Las Vegas?",
    answer:
      "Median days on market climbed to roughly 47–51 days as of April 2026 per Las Vegas REALTORS® (GLVAR) data, up about 14.6% year-over-year — a sign that buyers have more time and leverage to negotiate than during the 2021–2022 market.",
  },
  {
    question: "Which Las Vegas neighborhoods should I consider?",
    answer:
      "It depends on your budget and priorities. Summerlin and Henderson carry a price premium and are popular for master-planned amenities and schools. North Las Vegas offers the most value relative to the valley median. Downtown and southeast Las Vegas (including the 89110 area) trade at a discount to the valley median. A local agent can match specific neighborhoods to your budget, commute, and lifestyle needs — all without regard to protected characteristics under the Fair Housing Act.",
  },
];

export default function LasVegasHomesForSalePage() {
  return (
    <>
      <JsonLd data={realEstateAgentSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Homes for Sale in Las Vegas", path: PATH },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <RealtyHero
        headline="Homes for Sale in Las Vegas, NV"
        subhead="A local, licensed guide to buying in the Las Vegas Valley — with current market data across every submarket, from Summerlin to Henderson to North Las Vegas."
        imageSrc="/realty/heroes/hero-homes-for-sale.png"
        imageAlt="Modern Las Vegas single-family home at golden hour with desert mountains in the background"
      />

      <RealScoutOfficeListings
        title="Current Homes for Sale in Las Vegas"
        listingStatus="For Sale"
        propertyTypes=",SFR,MF,TC"
        sortOrder="NEWEST"
      />

      <RealtyStatsBar
        stats={[
          { value: "$486K–$490K", label: "Median Price (SFH)", note: "Valley-wide, mid-2026" },
          { value: "~8,600–8,900", label: "Active Listings", note: "Single-family, Clark County" },
          { value: "47–51 days", label: "Median Days on Market", note: "GLVAR, Apr. 2026" },
          { value: "~3.8 months", label: "Months of Supply", note: "Single-family homes" },
        ]}
      />

      <RealtyContentLayout>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          A Buyer&apos;s Market Is Emerging in Las Vegas
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Inventory has rebounded across the Las Vegas Valley while prices
          have stayed roughly flat year-over-year. Active single-family
          listings in Clark County are running around 8,600–8,900, with
          another 3,000 or so attached homes (condos and townhomes) on the
          market — pushing months-of-supply past the 3-month threshold that
          typically marks a shift away from a strict seller&apos;s market.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The clearest signal is days on market: the median climbed to
          roughly 47–51 days as of April 2026, up about 14.6% year-over-year.
          Buyers now have real room to negotiate on price, closing costs, and
          repairs — something that was largely absent during the 2021–2022
          rush.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Submarket Snapshot
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Summerlin</strong> commands a
          premium of roughly $150,000–$250,000 over the valley median, driven
          by its master-planned amenities, schools, and proximity to Red Rock
          Canyon.
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Henderson</strong> trades
          around $50,000 above the valley median, with strong demand for its
          family-oriented communities and consistent appreciation.
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">North Las Vegas</strong> is
          the relative value leader, with median prices in the roughly
          $385,000–$438,000 range and the highest concentration of newer
          construction in the valley.
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Downtown / Southeast Las
          Vegas</strong> (including the 89110 area) trades at a discount to
          the valley median, near $387,000, and can be a strong entry point
          for buyers prioritizing affordability and commute time over
          master-planned amenities.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Explore by Price and Property Type
        </h3>
        <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground" role="list">
          <li>
            <a href="/las-vegas-homes-under-300000" className="text-primary hover:underline">
              Homes for sale in Las Vegas under $300,000
            </a>
          </li>
          <li>
            <a href="/las-vegas-homes-under-200000" className="text-primary hover:underline">
              Homes for sale in Las Vegas under $200,000
            </a>
          </li>
          <li>
            <a href="/small-homes-for-sale-las-vegas" className="text-primary hover:underline">
              Small homes for sale in Las Vegas
            </a>
          </li>
          <li>
            <a href="/las-vegas-homes-with-pool" className="text-primary hover:underline">
              Homes for sale in Las Vegas with a pool
            </a>
          </li>
          <li>
            <a href="/las-vegas-homes-for-rent" className="text-primary hover:underline">
              Las Vegas homes for rent
            </a>
          </li>
        </ul>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Data as of mid-2026, compiled from Las Vegas REALTORS® (GLVAR) MLS
          summaries and third-party market research; figures change monthly
          and should be independently verified. Contact{" "}
          {realtySiteConfig.agentName} for a current comparative market
          analysis and live listing search.
        </p>
      </RealtyContentLayout>

      <RealtyFaqSection
        heading="Buying in Las Vegas: Frequently Asked Questions"
        faqs={faqs}
      />
    </>
  );
}
