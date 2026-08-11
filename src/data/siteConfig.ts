// Central place for business facts. Anything marked PLACEHOLDER has not been
// confirmed by the client and must be updated before launch.

export const siteConfig = {
  name: "Redline Contracting",
  legalName: "Redline Contracting Inc.", // PLACEHOLDER — confirm legal entity name
  shortName: "Redline",
  tagline: "General Contracting, Done Right.",
  foundedYear: 2018, // PLACEHOLDER — confirm founding year
  description:
    "Redline Contracting is a licensed general contractor serving the Greater Toronto Area, delivering fast, reliable residential and commercial work, from HVAC and plumbing to electrical, drywall, painting, and flooring, backed by straightforward pricing.",

  url: "https://www.rlcontracting.ca",
  email: "info@rlcontracting.ca", // PLACEHOLDER — confirm inbox exists

  // Add/remove entries here and every place that lists contacts (navbar,
  // footer, contact page) updates itself.
  contacts: [
    { name: "Jamal", phone: "+1 416-388-3019", phoneDisplay: "416-388-3019" },
    { name: "Anjanan", phone: "+1 416-346-4143", phoneDisplay: "416-346-4143" },
  ],
  instagramUrl: "https://www.instagram.com/rlcontracting/", // PLACEHOLDER — confirm handle
  instagramHandle: "@rlcontracting",

  serviceArea: {
    statement:
      "Serving Toronto and the entire GTA, general contracting work for homeowners, landlords, and businesses.",
    cities: [
      "Toronto",
      "Mississauga",
      "Brampton",
      "Vaughan",
      "Markham",
      "Richmond Hill",
      "Scarborough",
      "North York",
      "Etobicoke",
      "Oakville",
      "Ajax",
      "Pickering",
    ],
  },

  // PLACEHOLDER — confirm actual office/dispatch hours with the client.
  hours: {
    standard: "Monday to Saturday, 7 AM to 7 PM",
    emergency: "24/7 for emergencies (burst pipes, no heat, no power)",
  },

  // Do not publish an address until the client confirms one exists to share publicly.
  address: null as null | {
    street: string;
    city: string;
    region: string;
    postalCode: string;
  },

  // Treated as unverified until the client confirms wording, license numbers,
  // and coverage details.
  insuranceClaimConfirmed: false,

  socials: {
    instagram: "https://www.instagram.com/rlcontracting/",
  },
} as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerServiceLinks = [
  { label: "HVAC", href: "/services/hvac" },
  { label: "Plumbing", href: "/services/plumbing" },
  { label: "Electrical", href: "/services/electrical" },
  { label: "Drywall Repair", href: "/services/drywall-repair" },
  { label: "Painting", href: "/services/painting" },
  { label: "Flooring", href: "/services/flooring" },
] as const;
