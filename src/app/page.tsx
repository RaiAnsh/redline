import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { ServiceOverview } from "@/components/home/ServiceOverview";
import { Testimonials } from "@/components/home/Testimonials";
import { ServiceArea } from "@/components/home/ServiceArea";
import { QuoteCta } from "@/components/home/QuoteCta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "General Contractor in Toronto & the GTA",
  description:
    "Redline Contracting is a licensed general contractor in Toronto serving the entire GTA, HVAC, plumbing, electrical, drywall, painting, flooring, and more. View our work or request a quote.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServiceOverview />
      <Testimonials />
      <ServiceArea />
      <QuoteCta />
    </>
  );
}
