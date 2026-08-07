export type Testimonial = {
  author: string;
  project: string;
  date: string;
  quote: string;
  source: string;
};

export const testimonials: Testimonial[] = [
  {
    author: "Dave R., Homeowner, Toronto",
    project: "Burst Pipe Emergency Repair",
    date: "March 2026",
    quote:
      "Pipe burst in the basement at 11pm and they picked up the phone. Had it shut off and repaired before midnight. Didn't try to upsell me on anything, just fixed the problem.",
    source: "Google Reviews",
  },
  {
    author: "Priya S., Homeowner, Mississauga",
    project: "200A Panel Upgrade",
    date: "February 2026",
    quote:
      "Our old fuse box couldn't handle the AC and dryer running at the same time. Redline upgraded the whole panel in a day, got the ESA inspection sorted, no surprises on the bill.",
    source: "Google Reviews",
  },
  {
    author: "Mark T., Homeowner, Vaughan",
    project: "Tankless Water Heater Install",
    date: "January 2026",
    quote:
      "Went from a leaking tank to a tankless unit in the same afternoon. Clean install, explained everything, and the hot water pressure is night and day better.",
    source: "Google Reviews",
  },
  {
    author: "Aisha K., Property Manager, Scarborough",
    project: "Whole-Home Rewiring",
    date: "December 2025",
    quote:
      "Had the aluminum wiring replaced in a rental property. They worked around tenants, kept the place clean, and passed inspection on the first try.",
    source: "Google Reviews",
  },
  {
    author: "Steve L., Homeowner, Richmond Hill",
    project: "EV Charger Installation",
    date: "November 2025",
    quote:
      "Called about an EV charger and they actually checked our panel capacity before quoting instead of just installing it and hoping. Straightforward and on time.",
    source: "Google Reviews",
  },
  {
    author: "Christine W., Homeowner, Brampton",
    project: "Drain Cleaning",
    date: "November 2025",
    quote:
      "Kitchen drain kept backing up every few months with another company. Redline camera-inspected it, found the real issue, and it's been fine since.",
    source: "Google Reviews",
  },
];
