import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { services } from "@/data/services";

export function ServiceOverview() {
  const items = services.filter((s) => s.category !== "emergency");

  return (
    <section className="bg-brand-black py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Every trade, handled by one crew"
          description="From HVAC and plumbing to electrical, drywall, painting, and flooring, Redline Contracting brings the same fast, no-nonsense standard to every job across the GTA."
        />

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group grunge-edge block bg-brand-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <div className="relative h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <MediaPlaceholder label={service.shortName} aspect="aspect-[5/4]" />
                  )}
                </div>
              </div>
              <div className="p-7">
                <p className="text-eyebrow text-brand-red">{service.eyebrow}</p>
                <h3 className="text-display-3 mt-2 text-brand-white">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-silver">{service.summary}</p>
                <span className="link-underline mt-5 inline-block text-sm font-medium text-brand-white">
                  Explore {service.shortName}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
