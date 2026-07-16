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

const PATH = "/find-a-home-by-owner";

export const metadata: Metadata = {
  title: { absolute: "Find a Home in Las Vegas by Owner (FSBO) | What to Know Before You Buy" },
  description:
    "Looking to find a home in Las Vegas by owner? Here's what for-sale-by-owner buyers and sellers need to know about Nevada disclosure law, financing, and when a licensed agent can help — at no direct cost to buyers.",
  alternates: { canonical: PATH },
  openGraph: {
    url: PATH,
    title: "Find a Home in Las Vegas by Owner (FSBO)",
    description:
      "What FSBO buyers and sellers need to know about Nevada disclosure law, financing, and when a licensed agent can help.",
  },
};

const faqs = [
  {
    question: "How common are for-sale-by-owner (FSBO) homes in Las Vegas?",
    answer:
      "FSBO sales are at a multi-decade low nationally — the National Association of REALTORS® 2025 Profile of Home Buyers and Sellers put FSBO transactions at just 5% of all home sales in 2025, down from a 7% low the year before and a small fraction of the roughly 1-in-4 sales that were FSBO in the mid-1990s (NAR, Nov. 2025). In the Las Vegas valley specifically, FSBO listings are a thin slice of the roughly 7,700–10,200 single-family listings tracked in mid-2025 by Las Vegas REALTORS® (GLVAR).",
  },
  {
    question: "What disclosures does Nevada law require for a FSBO sale?",
    answer:
      "Nevada Revised Statute 113.130 requires sellers — FSBO or not — to deliver a completed Seller's Real Property Disclosure form to the buyer at least 10 days before the sale closes. NRS 113.150 allows a buyer to pursue treble damages, attorney's fees, and costs if a seller knowingly fails to disclose a material defect. An 'as-is' sale does not waive this disclosure duty — the form must still be completed and delivered.",
  },
  {
    question: "Can I list on the MLS without a full-service agent?",
    answer:
      "Yes — flat-fee MLS services let a Las Vegas FSBO seller pay a one-time fee (commonly in the $149–$499 range) to get a listing syndicated to the MLS and portals like Zillow® and Realtor.com®, without paying a full listing commission. It's a middle path between a fully unlisted FSBO sale and a traditional full-service listing.",
  },
  {
    question: "Does it cost me anything as a buyer to work with an agent?",
    answer:
      "Typically not out of pocket. A buyer's agent represents your interests exclusively — not the seller's — and is generally compensated through the transaction, not billed to you directly. Since the 2024 NAR settlement, buyer-agent compensation is discussed and agreed to upfront in a written Buyer Broker Agreement, so there are no surprises about who pays what.",
  },
  {
    question: "What's the biggest risk of buying a FSBO home?",
    answer:
      "The most common issues are incomplete or missing disclosures, no professional guidance on pricing or negotiation, and no one representing your interests during inspection and closing. A buyer's agent can review the seller's disclosure, help order an independent inspection, and negotiate repairs or price adjustments on your behalf.",
  },
];

export default function FindAHomeByOwnerPage() {
  return (
    <>
      <JsonLd data={realEstateAgentSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Find a Home by Owner", path: PATH },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <RealtyHero
        headline="Find a Home in Las Vegas by Owner"
        subhead="What to know about for-sale-by-owner listings in the Las Vegas valley — Nevada disclosure law, financing, and how to protect yourself whether you're buying FSBO or considering a licensed agent."
        primaryCtaLabel="Talk to a Local Agent First"
      />

      <RealtyStatsBar
        title="FSBO Market Reality Check"
        stats={[
          { value: "~5%", label: "FSBO Share of Sales", note: "NAR, 2025 (multi-decade low)" },
          { value: "10 days", label: "Required Disclosure Window", note: "NRS 113.130" },
          { value: "$149–$499", label: "Typical Flat-Fee MLS Cost", note: "Common LV market rate" },
          { value: "7,700–10,200", label: "LV Valley SFH Listings", note: "GLVAR, mid-2025" },
        ]}
      />

      <RealtyContentLayout>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          FSBO Sales Are Rare — and Getting Rarer
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          For-sale-by-owner transactions accounted for just 5% of U.S. home
          sales in 2025, according to the National Association of
          REALTORS®&apos; 2025 Profile of Home Buyers and Sellers — down from
          a then-record low of 7% the year before, and a fraction of the
          roughly one-in-four sales that were FSBO in the mid-1990s. The
          long-term trend is clearly downward, largely because pricing,
          marketing, and negotiating a home sale correctly is more
          complicated — and more legally exposed — than it looks.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Nevada&apos;s Disclosure Law Applies Whether or Not There&apos;s an Agent
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Under NRS 113.130, every Nevada home seller — FSBO or represented —
          must deliver a completed Seller&apos;s Real Property Disclosure
          form to the buyer at least 10 days before closing. Selling
          &quot;as-is&quot; does not remove this requirement; the form still
          has to be completed and delivered. If a seller knowingly omits a
          material defect, NRS 113.150 allows the buyer to pursue treble
          damages plus attorney&apos;s fees and costs. This is one of the
          biggest — and most overlooked — risks in a FSBO transaction on
          either side of the deal.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          A Middle Path: Flat-Fee MLS
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Sellers who want MLS exposure — so their listing syndicates to
          Zillow®, Realtor.com®, and other major portals — without paying a
          full listing commission can use a flat-fee MLS service. In the Las
          Vegas market these commonly run in the $149–$499 range as a
          one-time cost, rather than a percentage-based commission. It&apos;s
          worth understanding this option even if you ultimately decide a
          full-service listing agent is a better fit for your situation.
        </p>

        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Where a Buyer&apos;s Agent Fits In
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          If you&apos;re house-hunting and come across a FSBO listing, you
          can still bring your own buyer&apos;s agent to represent you —
          reviewing the seller&apos;s disclosure, helping arrange an
          independent inspection, and negotiating price or repairs on your
          behalf. This typically costs you nothing directly; compensation is
          agreed upfront in a written Buyer Broker Agreement, standard
          practice since the 2024 NAR settlement.
        </p>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          General information only, not legal advice. Nevada disclosure law
          and MLS pricing can change — confirm current requirements with a
          Nevada-licensed attorney or real estate professional. Zillow and
          Realtor.com are registered trademarks of their respective owners;
          this page is not affiliated with either. Contact{" "}
          {realtySiteConfig.agentName} to discuss your specific situation.
        </p>
      </RealtyContentLayout>

      <RealtyFaqSection heading="FSBO in Las Vegas: Frequently Asked Questions" faqs={faqs} />
    </>
  );
}
