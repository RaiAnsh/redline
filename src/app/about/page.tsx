import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { StorySection } from "@/components/home/StorySection";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Testimonials } from "@/components/home/Testimonials";
import { ServiceArea } from "@/components/home/ServiceArea";
import { QuoteCta } from "@/components/home/QuoteCta";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Redline Contracting is a licensed general contractor serving the Greater Toronto Area, built on fast response, upfront pricing, and work done right the first time.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About ${siteConfig.shortName}`}
        title="General contracting, done right the first time"
        description={`${siteConfig.name} handles residential and commercial work across the GTA, HVAC, plumbing, electrical, drywall, painting, and flooring, from emergency calls to full renovations, with a focus on fast response and straightforward pricing.`}
      />

      <section className="bg-brand-black py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <Eyebrow>How We Work</Eyebrow>
              <h2 className="text-display-2 mt-5 text-brand-white">
                Every call gets a straight answer
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-silver">
                {siteConfig.name} works across residential homes, rental properties, and small
                commercial buildings, HVAC, plumbing, electrical, drywall, painting, flooring,
                and full renovations. The scope of the job changes; the approach doesn&apos;t.
                You get a clear price before work starts, licensed technicians on site, and a
                clean job when it&apos;s done.
              </p>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-silver">
                That approach is why clients call back for the next job. See what past clients
                have said below.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=1200&q=80&auto=format&fit=crop"
                alt="Redline Contracting crew at work"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <StorySection />
      <ProcessSteps />
      <WhyChooseUs />
      <Testimonials />
      <ServiceArea />
      <QuoteCta />
    </>
  );
}
