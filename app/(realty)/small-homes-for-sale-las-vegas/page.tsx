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

const PATH = "/small-homes-for-sale-las-vegas";

export const metadata: Metadata = {
  title: { absolute: "Small Homes for Sale in Las Vegas | Starter & Patio Homes, 2026" },
  description:
    "Small homes for sale in Las Vegas (under ~1,500 sq ft) — where to find starter homes for first-time buyers and patio homes for downsizers, with current price ranges by neighborhood.",
  alternates: { canonical: PATH },
  openGraph: {
    url: PATH,
    title: "Small Homes for Sale in Las Vegas",
    description:
      "Starter homes and low-maintenance patio homes in the Las Vegas valley, with current price ranges by neighborhood.",
    images: [{ url: "/realty/heroes/hero-small-homes.png" }],
  },
};

const faqs = [
  {
    question: "Where are most small homes located in Las Vegas?",
    answer:
      "Five master-planned communities — Aliante, Cadence, Skye Canyon, Mountain's Edge, and Centennial Hills — plus three urban historic districts (Huntridge, the Arts District/18b, and Paradise) hold the densest concentration of sub-1,500 sq. ft. homes in the valley.",
  },
  {
    question: "How much do small homes cost compared to the valley median?",
    answer:
      "Entry-level small homes (under roughly 1,500 sq. ft.) typically trade in the $300,000–$400,000 range — about 15–30% below the valley's overall median in absolute dollars, but often at a 20–40% premium per square foot, since fixed construction and land costs spread across less floor area.",
  },
  {
    question: "Who typically buys small homes in Las Vegas?",
    answer:
      "Two distinct buyer groups: first-time buyers using FHA or VA financing (first-time buyers have fallen to just 21% of all transactions nationally per NAR, a multi-decade low), and Boomer downsizers moving into patio-home communities like Sun City Summerlin or Anthem.",
  },
  {
    question: "What ongoing costs should I expect with a small home?",
    answer:
      "HOA dues range from $25–$75/month for non-gated single-family homes up to $400–$600/month for guard-gated luxury communities. Electricity in Las Vegas averages about 14¢/kWh — roughly a third below the national average — with typical bills near $187/month, though older small homes can see $300–$450/month during summer peaks.",
  },
];

export default function SmallHomesForSalePage() {
  return (
    <>
      <JsonLd data={realEstateAgentSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Small Homes for Sale", path: PATH },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <RealtyHero
        headline="Small Homes for Sale in Las Vegas"
        subhead="Starter homes for first-time buyers and low-maintenance patio homes for downsizers — with the neighborhoods and price ranges that fit each."
        imageSrc="/realty/heroes/hero-small-homes.png"
        imageAlt="Small single-story Las Vegas patio home with xeriscape landscaping and mountain views"
      />

      <RealScoutOfficeListings
        title="Small & Starter Homes for Sale in Las Vegas"
        listingStatus="For Sale"
        propertyTypes=",SFR,MF,TC"
        sortOrder="PRICE_LOW"
        priceMax={450000}
      />

      <RealtyStatsBar
        title="Small-Home Segment Snapshot"
        stats={[
          { value: "$449,676", label: "Valley Median (All Homes)", note: "June 2026, ~$255/sq ft" },
          { value: "$300K–$400K", label: "Small-Home Price Band", note: "Under ~1,500 sq ft" },
          { value: "21%", label: "First-Time Buyer Share", note: "NAR, multi-decade low" },
          { value: "$25–$600/mo", label: "HOA Range", note: "Non-gated to guard-gated luxury" },
        ]}
      />

      <RealtyContentLayout>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Two Very Different Buyers, Two Different Plays
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          &quot;Small home&quot; in Las Vegas covers two distinct products
          aimed at two distinct buyers. The first is the $300,000–$380,000
          starter home in communities like Aliante and Cadence, aimed at
          first-time buyers using FHA or VA financing. The second is the
          $340,000–$440,000 patio home in communities like Sun City
          Summerlin or Anthem, aimed at Boomer downsizers who want low
          maintenance without giving up master-planned amenities. Each
          requires different financing, marketing, and search strategy.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Where to Look
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Five master-planned communities — Aliante, Cadence, Skye Canyon,
          Mountain&apos;s Edge, and Centennial Hills — hold the densest
          concentration of sub-1,500 sq. ft. homes for buyers wanting newer
          construction. For character and walkability, three urban historic
          districts — Huntridge, the Arts District (18b), and Paradise —
          have an older stock of small, well-located homes.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          The Per-Square-Foot Trade-Off
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Small homes cost less in absolute dollars — typically 15–30% below
          the valley median — but often run 20–40% higher per square foot,
          since fixed costs like land, permitting, and mechanical systems
          spread across less floor area. It&apos;s a worthwhile trade-off for
          buyers prioritizing a lower total price and lower utility bills
          over maximum square footage.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Budget for the Full Picture
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          HOA dues range from $25–$75/month for non-gated single-family
          homes up to $400–$600/month in guard-gated luxury communities.
          Electricity averages about 14¢/kWh in Nevada — roughly a third
          below the national average — with typical monthly bills near $187,
          though older, less-insulated small homes can see $300–$450/month
          during summer peaks. Also budget for HOA fee escalation (typically
          5–15% per year) and rising insurance costs in higher fire-risk
          zip codes.
        </p>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Data as of mid-2026, compiled from third-party market research
          (including NAR buyer/seller survey data) and believed accurate but
          not guaranteed; figures change over time and should be
          independently verified. Contact {realtySiteConfig.agentName} for
          current small-home listings matched to your budget.
        </p>
      </RealtyContentLayout>

      <RealtyFaqSection heading="Small Homes in Las Vegas: Frequently Asked Questions" faqs={faqs} />
    </>
  );
}
