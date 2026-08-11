// Knowledge base for RedlineBot (src/components/chat/RedlineBot.tsx). Pure
// keyword matching, no external API, answers stay in sync with siteConfig
// and services since they're built from that data below.

import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";

export type FaqEntry = {
  id: string;
  /** Shown as a suggested-question chip in the chat. */
  question: string;
  /** Lowercase keywords, any one of which triggers this entry from free text. */
  keywords: string[];
  answer: string;
};

const contactLine = siteConfig.contacts
  .map((c) => `${c.name} at ${c.phoneDisplay}`)
  .join(" or ");

const serviceNames = services.map((s) => s.shortName).join(", ");
const cityKeywords = siteConfig.serviceArea.cities.map((c) => c.toLowerCase());

// Trade-specific synonyms so free-text questions like "do you fix furnaces"
// or "can you rewire my house" still land on the services answer, not the
// fallback.
const tradeSynonyms = [
  "hvac",
  "furnace",
  "air conditioning",
  "ac unit",
  "heating",
  "cooling",
  "ductwork",
  "thermostat",
  "heat pump",
  "plumb",
  "drain",
  "water heater",
  "leak",
  "faucet",
  "toilet",
  "sump pump",
  "electric",
  "wiring",
  "rewire",
  "panel upgrade",
  "breaker",
  "ev charger",
  "outlet",
  "pot lights",
  "drywall",
  "patch",
  "hole in the wall",
  "ceiling repair",
  "paint",
  "floor",
  "hardwood",
  "laminate",
  "tile",
  "vinyl plank",
  "renovation",
  "renovate",
  "remodel",
  "kitchen",
  "bathroom",
  "basement",
];

export const faqEntries: FaqEntry[] = [
  {
    id: "services",
    question: "What services do you offer?",
    keywords: ["service", "offer", "do you do", "what do you", "trades", "work on", "fix", "install", ...tradeSynonyms],
    answer: `Redline Contracting handles ${serviceNames}, and full renovations, all under one crew. Check out the Services page for details on any of them.`,
  },
  {
    id: "hours",
    question: "What are your hours?",
    keywords: ["hour", "open", "close", "available", "when can"],
    answer: `Standard hours are ${siteConfig.hours.standard}. For anything urgent, we're ${siteConfig.hours.emergency.toLowerCase()}.`,
  },
  {
    id: "area",
    question: "Do you serve my area?",
    keywords: ["area", "location", "where", "city", "cities", "near me", "gta", "serve", ...cityKeywords],
    answer: `We serve ${siteConfig.serviceArea.cities.join(", ")}, basically the whole GTA. If you're not sure your city is covered, just call and ask.`,
  },
  {
    id: "cost",
    question: "How much will this cost?",
    keywords: ["cost", "price", "pricing", "how much", "quote amount", "expensive", "rate", "fee", "cheap", "afford"],
    answer: `Every job is different, so I can't quote a price here. The fastest way to get a real number is to call ${contactLine} and describe the job, or submit a free quote request.`,
  },
  {
    id: "get-quote",
    question: "How do I get a quote?",
    keywords: ["get a quote", "free quote", "estimate", "request quote", "book", "schedule"],
    answer: `Head to the Get a Free Quote page and fill out the short form, or call ${contactLine} directly. Either way you'll hear back fast.`,
  },
  {
    id: "emergency",
    question: "Do you handle emergencies?",
    keywords: ["emergency", "urgent", "burst pipe", "no heat", "no power", "flood", "asap", "right now", "immediately"],
    answer: `Yes. Burst pipes, no heat, no power, storm damage, we treat those as a priority and dispatch fast. Call ${contactLine} directly for anything urgent, don't wait on a form.`,
  },
  {
    id: "licensed",
    question: "Are you licensed and insured?",
    keywords: ["licensed", "insured", "insurance", "license", "certified", "permit", "legit", "trust"],
    answer: `Yes, all work is handled by a licensed, insured crew, and permits or inspections are coordinated where required.`,
  },
  {
    id: "portfolio",
    question: "Can I see past work?",
    keywords: ["portfolio", "past work", "previous job", "photos", "examples", "before and after", "reviews", "testimonial"],
    answer: `Definitely, check out the Our Work page for a look at completed projects across the GTA.`,
  },
  {
    id: "contact",
    question: "How do I contact you?",
    keywords: ["contact", "phone", "call", "email", "reach you", "number", "talk to someone", "speak to"],
    answer: `You can reach us at ${contactLine}, or by email at ${siteConfig.email}.`,
  },
];

export function matchFaq(input: string): FaqEntry | null {
  const normalized = input.toLowerCase();
  return faqEntries.find((entry) => entry.keywords.some((k) => normalized.includes(k))) ?? null;
}
