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

const PATH = "/las-vegas-homes-under-300000";

export const metadata: Metadata = {
  title: { absolute: "Homes for Sale in Las Vegas Under $300,000 | Condos, Townhomes & More" },
  description:
    "Find homes for sale in Las Vegas under $300,000 — mostly condos, townhomes, and older single-family homes in North and East Las Vegas. Current inventory and financing guidance from a local agent.",
  alternates: { canonical: PATH },
  openGraph: {
    url: PATH,
    title: "Homes for Sale in Las Vegas Under $300,000",
    description:
      "Condos, townhomes, and a limited number of single-family homes under $300,000 in the Las Vegas valley.",
  },
};

const faqs = [
  {
    question: "Can I still find a single-family home in Las Vegas under $300,000?",
    answer:
      "It's possible but limited. The sub-$300K segment is now dominated by condos and townhomes; detached single-family inventory in this range is scarce and concentrated in older, more urbanized zip codes on the north and east sides of the valley. A local agent can set up alerts for new listings the moment they hit this price band.",
  },
  {
    question: "How much inventory is available under $300,000?",
    answer:
      "Active listings across MLS-connected portals for the Las Vegas valley under $300K generally cluster in the 1,650–1,890 range as of mid-2026, spanning condos, townhomes, and a smaller number of detached homes.",
  },
  {
    question: "What financing options exist at this price point?",
    answer:
      "Many buyers under $300K use FHA financing (well within the 2026 FHA forward loan limit of roughly $524,000–$541,000 for Clark County) or Nevada Housing Division down-payment assistance programs, which can cover up to 5% of the loan amount. A lender can confirm current limits and program eligibility.",
  },
  {
    question: "Who typically buys in this price range?",
    answer:
      "The buyer pool splits fairly evenly between first-time, owner-occupant buyers using FHA or state assistance programs, and investors — both institutional and individual — purchasing condos or townhomes for rental income.",
  },
];

export default function HomesUnder300kPage() {
  return (
    <>
      <JsonLd data={realEstateAgentSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Homes for Sale in Las Vegas", path: "/las-vegas-homes-for-sale" },
          { name: "Under $300,000", path: PATH },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <RealtyHero
        headline="Homes for Sale in Las Vegas Under $300,000"
        subhead="Condos, townhomes, and a limited number of single-family homes across North and East Las Vegas — with financing options that stretch further than you might expect."
      />

      <RealtyStatsBar
        title="Under-$300K Segment Snapshot"
        stats={[
          { value: "1,650–1,890", label: "Active Listings", note: "Under $300K, mid-2026" },
          { value: "$524K–$541K", label: "2026 FHA Loan Limit", note: "Clark County" },
          { value: "Up to 5%", label: "NV Down-Payment Assist.", note: "Nevada Housing Division" },
          { value: "Condo-heavy", label: "Dominant Property Type", note: "vs. detached SFH" },
        ]}
      />

      <RealtyContentLayout>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          What&apos;s Actually Available Under $300,000
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          The sub-$300,000 segment of the Las Vegas valley market in 2026 is,
          realistically, a condo-and-townhome-dominated segment. Detached
          single-family homes at this price point are scarce and
          concentrated in older, more urbanized zip codes on the north and
          east sides of the valley. Active inventory across MLS-connected
          portals typically clusters in the 1,650–1,890 listings range.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Financing at This Price Point
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Homes under $300K sit comfortably within the 2026 FHA forward loan
          limit of roughly $524,000–$541,000 for Clark County, which opens
          the door to 3.5%-down FHA financing for owner-occupant buyers.
          Nevada Housing Division down-payment assistance programs can stack
          on top, covering up to 5% of the loan amount for qualifying
          buyers — meaningfully lowering the cash needed to close.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Who&apos;s Buying — and What to Watch For
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          The buyer pool splits fairly evenly between first-time,
          owner-occupant buyers and investors purchasing condos or townhomes
          for rental income. If you&apos;re buying a condo or townhome,
          always review the HOA&apos;s CC&Rs, reserve fund health, and
          monthly dues before making an offer — these can materially change
          your true monthly cost beyond the mortgage payment.
        </p>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Data as of mid-2026, compiled from Las Vegas REALTORS® (GLVAR) MLS
          summaries and third-party market research; figures change monthly.
          FHA loan limits are set annually by HUD — confirm the current limit
          with your lender. Contact {realtySiteConfig.agentName} for a live
          search of current listings under $300,000.
        </p>
      </RealtyContentLayout>

      <RealtyFaqSection heading="Homes Under $300K in Las Vegas: FAQ" faqs={faqs} />
    </>
  );
}
