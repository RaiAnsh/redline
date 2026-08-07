import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

export function ServiceArea() {
  return (
    <section className="bg-brand-black py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Where We Work"
              title="Proudly serving the GTA"
              description={siteConfig.serviceArea.statement}
            />
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {siteConfig.serviceArea.cities.map((city) => (
                <li key={city} className="flex items-center gap-2 text-sm text-brand-silver">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-red" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=1200&q=80&auto=format&fit=crop"
              alt="Toronto skyline, part of the Greater Toronto Area served by Redline Contracting"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
