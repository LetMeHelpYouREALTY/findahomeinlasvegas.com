/**
 * NAP (Name/Address/Phone) and brand constants for the Las Vegas real estate
 * marketing pages. Keep this the single source of truth so every page and
 * schema block stays consistent with the Google Business Profile listing.
 *
 * NOTE: no verified street address is configured yet. Fill in `streetAddress`,
 * `postalCode`, and `geo` once known, and keep them in exact sync with GBP —
 * do not publish a placeholder/fabricated address.
 */
export const realtySiteConfig = {
  agentName: "Dr. Jan Duffy",
  agentTitle: "REALTOR® | BHHS Nevada Properties",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  licenseNumber: "S.0197614.LLC",
  phoneDisplay: "(702) 222-1964",
  phoneHref: "+17022221964",
  city: "Las Vegas",
  state: "NV",
  region: "Greater Las Vegas Valley",
  streetAddress: undefined as string | undefined,
  postalCode: undefined as string | undefined,
} as const;

export const realtyNavLinks = [
  { label: "Homes for Sale", href: "/las-vegas-homes-for-sale" },
  { label: "Under $300K", href: "/las-vegas-homes-under-300000" },
  { label: "For Rent", href: "/las-vegas-homes-for-rent" },
  { label: "Pool Homes", href: "/las-vegas-homes-with-pool" },
  { label: "By Owner Guide", href: "/find-a-home-by-owner" },
] as const;
