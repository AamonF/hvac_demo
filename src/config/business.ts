/**
 * Queen City HVAC - Business Configuration
 * Edit this single file to update business info across the entire site.
 */

export const business = {
  companyName: "Queen City HVAC",
  phone: "(704) 555-0199",
  phoneRaw: "7045550199",
  primaryCity: "Charlotte, NC",
  hours: "24/7 Emergency Service",
  email: "service@company.com",
  serviceAreas: [
    "Charlotte",
    "Matthews",
    "Mint Hill",
    "Pineville",
    "Huntersville",
    "Cornelius",
    "Concord",
    "Gastonia",
    "Belmont",
  ] as const,
  address: {
    street: "123 Trade Street",
    city: "Charlotte",
    state: "NC",
    zip: "28202",
  },
  tagline: "Fast, Reliable HVAC Service in the Charlotte Metro",
  description:
    "Queen City HVAC provides 24/7 emergency AC repair, furnace repair, and HVAC maintenance across Charlotte, Matthews, Mint Hill, and surrounding areas. Licensed, insured, and transparent pricing.",
  /** Base URL for sitemap, robots, JSON-LD. Update for production. */
  baseUrl: "https://queencityhvac.com",
} as const;

export type ServiceArea = (typeof business.serviceAreas)[number];
