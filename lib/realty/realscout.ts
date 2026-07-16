/**
 * RealScout embed constants shared across realty landing pages.
 * Agent ID matches the encoded id used on Dr. Jan Duffy's other Las Vegas sites.
 */
export const REALSCOUT_AGENT_ENCODED_ID = "QWdlbnQtMjI1MDUw";
export const REALSCOUT_SCRIPT_SRC =
  "https://em.realscout.com/widgets/realscout-web-components.umd.js";

export type RealScoutOfficeListingsProps = {
  /** MLS listing status filter, e.g. "For Sale" or "For Rent" */
  listingStatus?: string;
  /** Comma-prefixed property types, e.g. ",SFR" or ",SFR,MF,TC" */
  propertyTypes?: string;
  sortOrder?:
    | "PRICE_LOW"
    | "PRICE_HIGH"
    | "NEWEST"
    | "OLDEST"
    | "SOLD_DATE_NEWEST";
  priceMin?: number;
  priceMax?: number;
};

export function buildOfficeListingsMarkup({
  listingStatus = "For Sale",
  propertyTypes = ",SFR,MF,TC",
  sortOrder = "NEWEST",
  priceMin,
  priceMax,
}: RealScoutOfficeListingsProps = {}): string {
  const attrs = [
    `agent-encoded-id="${REALSCOUT_AGENT_ENCODED_ID}"`,
    `sort-order="${sortOrder}"`,
    `listing-status="${listingStatus}"`,
    `property-types="${propertyTypes}"`,
  ];

  if (typeof priceMin === "number") {
    attrs.push(`price-min="${priceMin}"`);
  }
  if (typeof priceMax === "number") {
    attrs.push(`price-max="${priceMax}"`);
  }

  return `<realscout-office-listings ${attrs.join(" ")}></realscout-office-listings>`;
}
