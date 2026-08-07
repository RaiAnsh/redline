// PLACEHOLDER PORTFOLIO — Redline Contracting has not yet supplied real
// project photography. Every entry below uses a verified stock photo as a
// stand-in "past work" placeholder (per client request for a gallery of
// sample images) and is flagged with `isPlaceholder: true` +
// `placeholderNote`, which the UI surfaces as a visible badge. Replace every
// entry with real completed-job photos and details before launch.

export type ProjectCategory =
  | "HVAC"
  | "Plumbing"
  | "Electrical"
  | "Drywall"
  | "Painting"
  | "Flooring"
  | "Renovation"
  | "Emergency";

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  poster?: string;
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  categories: ProjectCategory[];
  clientType: string;
  scope: string;
  goals?: string;
  challenges?: string;
  solutions?: string;
  materials?: string[];
  completionDate: string;
  testimonialAuthor?: string;
  media: ProjectMedia[];
  featured?: boolean;
  isPlaceholder?: boolean;
  placeholderNote?: string;
};

const PLACEHOLDER_NOTE = "Stock photo placeholder, swap for real project photo.";

export const projects: Project[] = [
  {
    slug: "furnace-replacement-north-york",
    name: "Furnace Replacement & Ductwork Tune-Up",
    location: "North York, ON",
    categories: ["HVAC"],
    clientType: "Homeowner",
    scope: "Failed furnace replaced with a correctly sized unit, with ductwork sealed and tested before winter.",
    completionDate: "Completion date not provided",
    featured: true,
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
  {
    slug: "burst-pipe-emergency-repair-toronto",
    name: "Burst Pipe Emergency Repair",
    location: "Toronto, ON",
    categories: ["Emergency", "Plumbing"],
    clientType: "Homeowner",
    scope: "After-hours emergency response to a burst supply line flooding a basement utility room.",
    completionDate: "Completion date not provided",
    featured: true,
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
  {
    slug: "200a-panel-upgrade-mississauga",
    name: "200A Electrical Panel Upgrade",
    location: "Mississauga, ON",
    categories: ["Electrical"],
    clientType: "Homeowner",
    scope: "Fuse box to 200A breaker panel conversion to support central air and a future EV charger.",
    completionDate: "Completion date not provided",
    featured: true,
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
  {
    slug: "water-damage-drywall-repair-brampton",
    name: "Water Damage Drywall Repair",
    location: "Brampton, ON",
    categories: ["Drywall"],
    clientType: "Homeowner",
    scope: "Ceiling and wall drywall cut back and replaced after a slow leak, taped and finished ready for paint.",
    completionDate: "Completion date not provided",
    featured: true,
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
  {
    slug: "interior-repaint-vaughan",
    name: "Whole-Home Interior Repaint",
    location: "Vaughan, ON",
    categories: ["Painting"],
    clientType: "Homeowner",
    scope: "Full interior repaint including trim and ceilings, with drywall patching and priming done ahead of colour coats.",
    completionDate: "Completion date not provided",
    featured: true,
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
  {
    slug: "bathroom-tile-flooring-markham",
    name: "Bathroom Tile & Flooring Renovation",
    location: "Markham, ON",
    categories: ["Flooring", "Renovation"],
    clientType: "Homeowner",
    scope: "Full bathroom floor and shower tile replacement on a leveled subfloor, finished with new baseboards and transitions.",
    completionDate: "Completion date not provided",
    featured: true,
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
  {
    slug: "basement-renovation-richmond-hill",
    name: "Basement Renovation & Rec Room Build-Out",
    location: "Richmond Hill, ON",
    categories: ["Renovation"],
    clientType: "Homeowner",
    scope: "Full basement renovation coordinating framing, electrical, drywall, and flooring into a finished rec room and bathroom.",
    completionDate: "Completion date not provided",
    featured: true,
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
  {
    slug: "emergency-panel-repair-ajax",
    name: "Emergency Panel Repair After Storm Damage",
    location: "Ajax, ON",
    categories: ["Emergency", "Electrical"],
    clientType: "Homeowner",
    scope: "Same-day response to a damaged service mast and panel after a summer storm, made safe and repaired.",
    completionDate: "Completion date not provided",
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
  {
    slug: "drain-camera-inspection-scarborough",
    name: "Main Line Drain Clearing & Camera Inspection",
    location: "Scarborough, ON",
    categories: ["Plumbing"],
    clientType: "Homeowner",
    scope: "Recurring kitchen drain backup traced and cleared via camera-guided snaking of the main line.",
    completionDate: "Completion date not provided",
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
  {
    slug: "ev-charger-install-north-york",
    name: "Level 2 EV Charger Installation",
    location: "North York, ON",
    categories: ["Electrical"],
    clientType: "Homeowner",
    scope: "Dedicated 240V circuit and Level 2 charger installed in an attached garage after a panel capacity check.",
    completionDate: "Completion date not provided",
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
  {
    slug: "whole-home-rewire-scarborough",
    name: "Whole-Home Rewiring Project",
    location: "Scarborough, ON",
    categories: ["Electrical"],
    clientType: "Homeowner",
    scope: "Full rewire of a 1960s bungalow replacing aluminum wiring throughout the main floor and basement.",
    completionDate: "Completion date not provided",
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
  {
    slug: "kitchen-renovation-oakville",
    name: "Kitchen Renovation & Electrical Rewire",
    location: "Oakville, ON",
    categories: ["Renovation", "Electrical"],
    clientType: "Homeowner",
    scope: "New dedicated circuits, under-cabinet lighting, and appliance hookups for a full kitchen renovation.",
    completionDate: "Completion date not provided",
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
  {
    slug: "kitchen-faucet-fixture-install-etobicoke",
    name: "Kitchen Faucet & Sink Fixture Install",
    location: "Etobicoke, ON",
    categories: ["Plumbing"],
    clientType: "Homeowner",
    scope: "Kitchen faucet, sink, and garbage disposal replaced and pressure-tested as part of a minor kitchen refresh.",
    completionDate: "Completion date not provided",
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
  {
    slug: "basement-reno-rough-in-pickering",
    name: "Basement Renovation Plumbing & Electrical Rough-In",
    location: "Pickering, ON",
    categories: ["Renovation", "Plumbing", "Electrical"],
    clientType: "Homeowner",
    scope: "Combined plumbing and electrical rough-in for a basement bathroom and rec room ahead of drywall.",
    completionDate: "Completion date not provided",
    isPlaceholder: true,
    placeholderNote: PLACEHOLDER_NOTE,
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=1200&q=80&auto=format&fit=crop" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const allCategories: ProjectCategory[] = [
  "HVAC",
  "Plumbing",
  "Electrical",
  "Drywall",
  "Painting",
  "Flooring",
  "Renovation",
  "Emergency",
];
