import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { QuoteCta } from "@/components/home/QuoteCta";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "General Contracting Services in Toronto",
  description:
    "HVAC, plumbing, electrical, drywall, painting, flooring, and full renovations from Redline Contracting, serving Toronto and the entire GTA.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="General contracting work across Toronto and the GTA"
        description={`From emergency calls to full renovations, ${siteConfig.name} brings the same fast, no-nonsense standard to every trade.`}
      />

      <section className="bg-brand-black py-24 sm:py-32">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
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
                  <h2 className="text-display-3 mt-3 text-brand-white">{service.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand-silver">
                    {service.summary}
                  </p>
                  <span className="link-underline mt-5 inline-block text-sm font-medium text-brand-white">
                    Learn more
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <QuoteCta />
    </>
  );
}
