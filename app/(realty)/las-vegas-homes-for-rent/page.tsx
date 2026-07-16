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

const PATH = "/las-vegas-homes-for-rent";

export const metadata: Metadata = {
  title: { absolute: "Las Vegas Homes for Rent | Rent Prices by Neighborhood, 2026" },
  description:
    "Las Vegas homes for rent by neighborhood, with current rent ranges for single-family homes and apartments. Compare renting vs. buying with a local licensed agent.",
  alternates: { canonical: PATH },
  openGraph: {
    url: PATH,
    title: "Las Vegas Homes for Rent",
    description:
      "Current rent ranges by Las Vegas neighborhood, plus honest guidance on renting vs. buying.",
  },
};

const faqs = [
  {
    question: "What's the average rent for a house in Las Vegas?",
    answer:
      "Single-family home rents run roughly $1,850–$2,500/month for 3–4 bedroom homes valley-wide, with the lowest entry points in North and East Las Vegas (around $1,300–$1,550 for a 2BR; $1,900–$2,600 for a single-family home) and the highest in Summerlin West ($2,200+ for a 2BR, $3,200+ for 4BR or larger).",
  },
  {
    question: "Are rents in Las Vegas going up or down?",
    answer:
      "It depends on the property type. Citywide asking rent is roughly flat year-over-year at $1,894–$1,902/month, but that hides a split: multifamily/apartment rents are down 2–3% year-over-year, while single-family home rents are up 3–5% — driven by tight single-family occupancy (93–95%) even as apartment vacancy rises with over 7,000 new multifamily units under construction in 2025.",
  },
  {
    question: "Which Las Vegas neighborhoods are best for renters?",
    answer:
      "It depends on your priorities. Summerlin and Henderson are strong for families and schools. Paradise/Chinatown offers Strip access and walkability. North Las Vegas and Skye Canyon offer more affordable rent with newer inventory. A local agent can help you compare based on commute, budget, and lifestyle — without regard to protected characteristics under the Fair Housing Act.",
  },
  {
    question: "Should I rent or buy in Las Vegas right now?",
    answer:
      "It depends on your timeline and finances. With single-family rents rising 3–5% year-over-year and roughly 3.8–4.6 months of for-sale inventory (a more balanced market than 2021–2022), it's worth running the numbers on both paths with a local agent or lender before deciding — there's no universal right answer.",
  },
];

export default function LasVegasHomesForRentPage() {
  return (
    <>
      <JsonLd data={realEstateAgentSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Homes for Rent", path: PATH },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <RealtyHero
        headline="Las Vegas Homes for Rent"
        subhead="Current rent ranges by neighborhood, from North Las Vegas to Summerlin West — plus honest guidance on renting vs. buying in today's market."
      />

      <RealtyStatsBar
        title="Las Vegas Rental Market Snapshot"
        stats={[
          { value: "$1,850–$2,500", label: "3–4BR SFH Rent", note: "Valley-wide, mid-2026" },
          { value: "+3–5%", label: "SFH Rent Growth", note: "Year-over-year" },
          { value: "93–95%", label: "SFH Occupancy", note: "Tight vs. apartments" },
          { value: "$1,894–$1,902", label: "Citywide Asking Rent", note: "Roughly flat YoY" },
        ]}
      />

      <RealtyContentLayout>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Single-Family Rentals Are Outperforming Apartments
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Citywide asking rent in Las Vegas is roughly flat year-over-year at
          $1,894–$1,902/month, but that headline number hides a real split
          between property types: multifamily/apartment rents are down
          2–3% year-over-year as more than 7,000 new multifamily units came
          online in 2025, while single-family home rents are up 3–5%,
          supported by tight single-family occupancy of 93–95%.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Rent Ranges by Area
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">North &amp; East Las
          Vegas</strong> offer the most affordable entry points — roughly
          $1,300–$1,550/month for a 2-bedroom and $1,900–$2,600 for a
          single-family home.
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Summerlin West</strong> sits at
          the top of the range, with 2-bedroom rents starting around $2,200
          and 4-bedroom-plus homes commonly exceeding $3,200/month.
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Summerlin, Henderson,
          Paradise/Chinatown, and Skye Canyon</strong> each offer a different
          profile — family-oriented schools, Strip walkability, or newer
          affordable inventory — worth comparing against your specific
          priorities.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Renting Through a Licensed Professional
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          In Nevada, anyone helping you find a rental for a fee must hold a
          real estate license under NRS 645, and either operate as a broker,
          work under one, or hold a property manager permit under NRS
          645.6052. Paid lead-generation to unlicensed &quot;rental
          finders&quot; is not permitted — working with a licensed agent or
          property manager protects you.
        </p>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Data as of mid-2026, compiled from third-party market research and
          believed accurate but not guaranteed; rents change frequently by
          specific property and should be independently verified. Contact{" "}
          {realtySiteConfig.agentName} for current rental availability.
        </p>
      </RealtyContentLayout>

      <RealtyFaqSection heading="Renting in Las Vegas: Frequently Asked Questions" faqs={faqs} />
    </>
  );
}
