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

const PATH = "/las-vegas-homes-with-pool";

export const metadata: Metadata = {
  title: { absolute: "Las Vegas Homes for Sale with a Pool | Price Premium & Maintenance Guide" },
  description:
    "Homes for sale in Las Vegas with a pool are more common than you'd think — roughly 38% of single-family homes have one. Here's the price premium, maintenance costs, and best neighborhoods to look.",
  alternates: { canonical: PATH },
  openGraph: {
    url: PATH,
    title: "Las Vegas Homes for Sale with a Pool",
    description:
      "Roughly 38% of Clark County single-family homes already have a pool — here's the price premium and real maintenance costs.",
  },
};

const faqs = [
  {
    question: "How common are pool homes in Las Vegas?",
    answer:
      "Very common. Clark County's single-family pool saturation is roughly 38% — nearly three times the U.S. national rate of about 13% — thanks to the valley's 8-month pool season and a local building tradition of including pools as a standard amenity. Buyers should expect most resale homes in most Las Vegas zip codes to already have one.",
  },
  {
    question: "Do pool homes actually sell for more?",
    answer:
      "Yes. Pool homes carry roughly a 4–8% resale premium versus comparable homes without a pool (above the 3–5% national baseline), and tend to sell about 9 days faster on average. The premium tends to widen at the higher end of the market.",
  },
  {
    question: "What does it cost to maintain a pool in the desert?",
    answer:
      "Budget roughly $105–$210/month for routine, unheated maintenance, plus periodic capital costs — resurfacing typically runs $3,500–$12,000 every 7–15 years. Las Vegas's desert climate adds specific cost pressures: hard-water calcium scaling, high summer evaporation, and monsoon-season algae blooms. A reasonable annual budget for routine pool care is $1,500–$2,500, plus a resurfacing reserve.",
  },
  {
    question: "Which neighborhoods have the most pool homes?",
    answer:
      "Pool-equipped inventory is concentrated in Summerlin, Henderson, and Southern Highlands, though pools are common valley-wide given the high overall saturation rate. Always confirm HOA rules before buying — most valley master-planned communities (including Summerlin and Henderson) regulate pool hours, fencing and gate requirements, glass-container use, and noise, especially in guard-gated communities.",
  },
];

export default function HomesWithPoolPage() {
  return (
    <>
      <JsonLd data={realEstateAgentSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Homes with a Pool", path: PATH },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <RealtyHero
        headline="Las Vegas Homes for Sale with a Pool"
        subhead="With roughly 38% of Clark County single-family homes already pool-equipped, finding one is easy — knowing the real maintenance costs and HOA rules is what matters."
      />

      <RealtyStatsBar
        title="Pool Home Market Snapshot"
        stats={[
          { value: "~38%", label: "SFH Pool Saturation", note: "Clark County vs. ~13% US avg." },
          { value: "4–8%", label: "Resale Price Premium", note: "vs. comparable no-pool homes" },
          { value: "~9 days", label: "Faster Time on Market", note: "vs. comparable no-pool homes" },
          { value: "$105–$210/mo", label: "Routine Maintenance", note: "Unheated pool, desert climate" },
        ]}
      />

      <RealtyContentLayout>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Why Pools Are the Norm, Not the Exception, in Las Vegas
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Clark County&apos;s single-family pool saturation runs roughly
          38% — nearly three times the U.S. national rate of about 13%. An
          8-month pool season and a local building tradition of including
          pools as a standard amenity mean most resale homes in most Las
          Vegas zip codes already have one, particularly in Summerlin,
          Henderson, and Southern Highlands.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          The Resale Math
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Pool homes carry roughly a 4–8% resale premium over comparable
          homes without one — wider than the 3–5% national baseline — and
          tend to sell about 9 days faster on average. The premium tends to
          widen further at the luxury end of the market, where an
          outdoor living space is more of an expectation than a bonus.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          The Real Cost of Desert Pool Ownership
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Routine, unheated pool maintenance typically runs $105–$210 a
          month, with periodic resurfacing costing $3,500–$12,000 every
          7–15 years. Las Vegas&apos;s climate adds three specific cost
          pressures beyond a typical pool: hard-water calcium scaling from
          the valley&apos;s water supply, higher-than-average evaporation
          during summer heat, and algae blooms during the late-summer
          monsoon season. Budget roughly $1,500–$2,500 a year for routine
          care, plus a resurfacing reserve.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Read the HOA Rules Before You Offer
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Most valley master-planned communities — including Summerlin and
          Henderson&apos;s master associations — regulate pool hours,
          require self-latching gates and fencing, restrict glass containers
          poolside, and enforce noise curfews. Guard-gated communities often
          add guest sign-in and age-restriction rules for shared amenities.
          Review the CC&amp;Rs carefully before making an offer, especially
          if you plan to entertain frequently.
        </p>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Data as of mid-2026 (GLVAR MLS active-listing figures from late
          April 2026), compiled from third-party market research; figures
          change over time and should be independently verified. Contact{" "}
          {realtySiteConfig.agentName} for current pool-home listings.
        </p>
      </RealtyContentLayout>

      <RealtyFaqSection heading="Pool Homes in Las Vegas: Frequently Asked Questions" faqs={faqs} />
    </>
  );
}
