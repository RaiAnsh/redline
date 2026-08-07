// Redline Contracting's trade lines. This is a general contracting business
// covering HVAC, plumbing, electrical, drywall, painting, flooring, and more
// — not a plumbing/electrical specialist. Slugs here must stay in sync with
// `footerServiceLinks` in siteConfig.ts.

export type ServiceCategory =
  | "hvac"
  | "plumbing"
  | "electrical"
  | "drywall"
  | "painting"
  | "flooring"
  | "emergency"
  | "renovation";

export type Service = {
  slug: string;
  category: ServiceCategory;
  name: string;
  shortName: string;
  eyebrow: string;
  summary: string;
  description: string[];
  scope: string[];
  seoTitle: string;
  seoDescription: string;
  relatedPortfolioCategory: string;
  /** Verified stock photo URL — swap for real job-site photography when available. */
  image?: string;
};

export const services: Service[] = [
  {
    slug: "hvac",
    category: "hvac",
    name: "HVAC Installation & Repair",
    shortName: "HVAC",
    eyebrow: "Heating & Cooling",
    summary:
      "Furnace, air conditioner, and ductwork installs, repairs, and maintenance for GTA homes and small commercial spaces.",
    description: [
      "A furnace that fails in January or an AC unit that quits in a July heat wave doesn't wait for a convenient time. Redline installs, repairs, and services furnaces, air conditioners, and ductwork, sized correctly for the property rather than whatever unit is easiest to move.",
      "Every install is left tested and running before the crew leaves, and repairs come with a straight answer on whether a fix or a replacement makes more sense, not an upsell.",
    ],
    scope: [
      "Furnace installation and repair",
      "Central air conditioner installation and repair",
      "Ductwork installation and sealing",
      "Thermostat installation, including smart thermostats",
      "Seasonal HVAC maintenance and tune-ups",
      "Heat pump installation",
    ],
    seoTitle: "HVAC Installation & Repair GTA | Furnace & AC | Redline Contracting",
    seoDescription:
      "Furnace, air conditioner, and ductwork installation and repair across the Greater Toronto Area from Redline Contracting.",
    relatedPortfolioCategory: "HVAC",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "plumbing",
    category: "plumbing",
    name: "Plumbing",
    shortName: "Plumbing",
    eyebrow: "Plumbing",
    summary:
      "Drain cleaning, water heaters, fixture installs, sump pumps, and leak detection, one of the many trades Redline covers under one roof.",
    description: [
      "Slow drains, a failing water heater, a fixture that needs replacing: Redline handles the plumbing side of a property the same way it handles every other trade, diagnosed properly, fixed once, and left clean.",
      "Camera inspection is used on stubborn drain issues instead of guesswork, and every fixture or appliance install is pressure-tested before the job is called done.",
    ],
    scope: [
      "Drain cleaning and camera inspection",
      "Water heater installation and repair (tank and tankless)",
      "Faucet, sink, and toilet installation",
      "Sump pump installation and repair",
      "Hidden leak detection",
      "General plumbing repairs and maintenance",
    ],
    seoTitle: "Plumbing Services GTA | Drains, Water Heaters & Fixtures | Redline Contracting",
    seoDescription:
      "Plumbing services across the Greater Toronto Area: drain cleaning, water heaters, fixture installs, and leak detection.",
    relatedPortfolioCategory: "Plumbing",
    image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "electrical",
    category: "electrical",
    name: "Electrical",
    shortName: "Electrical",
    eyebrow: "Electrical",
    summary:
      "Panel upgrades, wiring, lighting, and EV charger installs handled by a licensed electrician, as part of a broader renovation or on their own.",
    description: [
      "A lot of GTA housing stock is still running on undersized or outdated panels, and lighting or wiring work is one of the most common pairings with a renovation project. Redline runs electrical work that's sized, breakered, and grounded correctly the first time.",
      "Permits and ESA inspection coordination are handled as part of the job, not left for the homeowner to sort out separately.",
    ],
    scope: [
      "Panel upgrades and fuse box conversions",
      "New circuit installation and rewiring",
      "Lighting installation, including pot lights",
      "EV charger installation",
      "Outlet and switch troubleshooting",
      "Permit and ESA inspection coordination",
    ],
    seoTitle: "Electrical Services GTA | Panel Upgrades & Wiring | Redline Contracting",
    seoDescription:
      "Licensed electrical services across the GTA: panel upgrades, wiring, lighting, and EV charger installation.",
    relatedPortfolioCategory: "Electrical",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "drywall-repair",
    category: "drywall",
    name: "Drywall Repair & Installation",
    shortName: "Drywall Repair",
    eyebrow: "Drywall",
    summary:
      "Patching holes, fixing water damage, and full drywall installs with a taped, sanded finish that disappears once it's painted.",
    description: [
      "A drywall patch either blends in or it doesn't. There's no in-between. Redline matches texture and finish so repairs disappear once painted, whether it's a single door-handle hole or a full room after a renovation.",
      "Water-damaged and cracked drywall gets cut back to solid material before patching, so the same spot isn't showing damage again in six months.",
    ],
    scope: [
      "Hole and crack patching",
      "Water damage drywall repair",
      "New drywall installation and taping",
      "Ceiling repair and patching",
      "Texture matching",
      "Prep work ahead of painting",
    ],
    seoTitle: "Drywall Repair GTA | Patching & Installation | Redline Contracting",
    seoDescription:
      "Drywall repair and installation across the Greater Toronto Area: patching, water damage repair, and full installs.",
    relatedPortfolioCategory: "Drywall",
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "painting",
    category: "painting",
    name: "Interior & Exterior Painting",
    shortName: "Painting",
    eyebrow: "Painting",
    summary:
      "Interior and exterior painting with proper prep, patched, sanded, and taped before a roller ever touches the wall.",
    description: [
      "A paint job is only as good as the prep behind it. Redline patches, sands, and tapes before painting, and uses proper primer on new drywall or repaired sections so the finish looks even, not patchy.",
      "Crews work room by room to keep a property livable during the job, and furniture and floors are covered and protected for the full job, not just the first coat.",
    ],
    scope: [
      "Interior wall and ceiling painting",
      "Exterior house painting",
      "Cabinet and trim painting",
      "Drywall prep and priming",
      "Colour consultation",
      "Commercial and rental unit painting",
    ],
    seoTitle: "Interior & Exterior Painting GTA | Redline Contracting",
    seoDescription:
      "Interior and exterior painting across the Greater Toronto Area, with proper prep and a clean, even finish.",
    relatedPortfolioCategory: "Painting",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "flooring",
    category: "flooring",
    name: "Flooring Installation",
    shortName: "Flooring",
    eyebrow: "Flooring",
    summary:
      "Hardwood, laminate, vinyl, and tile flooring installed level and gap-free, including removal of the old floor.",
    description: [
      "A floor that's uneven or gapped shows immediately underfoot. Redline installs hardwood, laminate, vinyl plank, and tile flooring on a properly leveled subfloor, with removal and disposal of the old flooring included as part of the job.",
      "Transitions, baseboards, and thresholds are finished as part of the install, not left as a separate call-back.",
    ],
    scope: [
      "Hardwood and engineered hardwood installation",
      "Laminate and vinyl plank flooring",
      "Tile installation for kitchens and bathrooms",
      "Subfloor levelling and repair",
      "Old flooring removal and disposal",
      "Baseboard and transition finishing",
    ],
    seoTitle: "Flooring Installation GTA | Hardwood, Laminate & Tile | Redline Contracting",
    seoDescription:
      "Flooring installation across the Greater Toronto Area: hardwood, laminate, vinyl plank, and tile.",
    relatedPortfolioCategory: "Flooring",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "renovations",
    category: "renovation",
    name: "Renovations & Rough-Ins",
    shortName: "Renovations",
    eyebrow: "Renovation",
    summary:
      "Kitchen, bathroom, and basement renovations coordinated across every trade (plumbing, electrical, drywall, painting, and flooring) under one contractor.",
    description: [
      "Mid-renovation is the worst time to discover the trades weren't scheduled together. As a general contractor, Redline runs the plumbing, electrical, drywall, painting, and flooring on a renovation as one coordinated job instead of a stack of separate contractors.",
      "That includes basement bathroom builds, kitchen relocations, and full-floor renovations where every trade needs to hit its window before the next one starts.",
    ],
    scope: [
      "Kitchen renovations",
      "Bathroom renovations",
      "Basement renovations and finishing",
      "Multi-trade scheduling and coordination",
      "Renovation rough-ins (plumbing and electrical)",
      "Permit coordination",
    ],
    seoTitle: "Home Renovations GTA | Kitchen, Bathroom & Basement | Redline Contracting",
    seoDescription:
      "Kitchen, bathroom, and basement renovations across the GTA, with every trade coordinated under one general contractor.",
    relatedPortfolioCategory: "Renovation",
    image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=1600&q=80&auto=format&fit=crop",
  },
  {
    slug: "emergency-repairs",
    category: "emergency",
    name: "Emergency Repairs",
    shortName: "Emergency Repairs",
    eyebrow: "24/7 Response",
    summary:
      "Burst pipes, no power, no heat, storm damage: a crew dispatched fast to make the property safe first, whatever the trade.",
    description: [
      "An emergency doesn't announce which trade it belongs to. It's just water where it shouldn't be, no power, no heat, or damage from a storm. Redline treats these calls as the priority they are, prioritizing making the property safe before diagnosing the full fix.",
      "Every emergency call gets a straight answer on arrival time and a clear price before any work starts.",
    ],
    scope: [
      "Burst pipe and active leak response",
      "No power / no heat emergency calls",
      "Storm and weather damage repair",
      "Flooded basement response",
      "Emergency board-up and make-safe work",
      "After-hours and weekend calls",
    ],
    seoTitle: "Emergency Repair Contractor GTA | 24/7 Response | Redline Contracting",
    seoDescription:
      "24/7 emergency repair response across the Greater Toronto Area, plumbing, electrical, and storm damage handled fast.",
    relatedPortfolioCategory: "Emergency",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80&auto=format&fit=crop",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
