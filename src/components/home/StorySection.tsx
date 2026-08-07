import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export function StorySection() {
  return (
    <section className="bg-brand-charcoal py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80&auto=format&fit=crop"
              alt="Redline Contracting tools and job-site prep"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Our Approach</Eyebrow>
            <h2 className="text-display-2 mt-5 text-brand-white">
              A local crew, not a call centre
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-silver">
              {siteConfig.name} handles general contracting work across the GTA, HVAC,
              plumbing, electrical, drywall, painting, flooring, and full renovations, from
              middle-of-the-night emergencies to planned upgrades. Every call gets a straight
              answer on timing and price before work starts, and every job gets treated with the
              same care whether it&apos;s a single repair or a full renovation.
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-brand-silver">
              Licensed, insured, and available for both residential and commercial work throughout
              Toronto and the surrounding GTA.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                About {siteConfig.shortName}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
