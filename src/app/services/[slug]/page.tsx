import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { QuoteCta } from "@/components/home/QuoteCta";
import { services, getServiceBySlug } from "@/data/services";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = projects.filter((p) =>
    p.categories.some((c) => c === service.relatedPortfolioCategory),
  );

  return (
    <>
      <PageHero eyebrow={service.eyebrow} title={service.name} description={service.summary} />

      <section className="bg-brand-black py-24 sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
            <div>
              {service.description.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="mb-5 text-base leading-relaxed text-brand-silver"
                >
                  {paragraph}
                </p>
              ))}

              <h2 className="text-display-3 mt-10 mb-5 text-brand-white">Scope of work</h2>
              <ul className="grid grid-cols-2 gap-3">
                {service.scope.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-brand-silver">
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button href="/quote">Request a Quote</Button>
              </div>
            </div>

            {service.image ? (
              <div className="relative aspect-[4/5]">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <MediaPlaceholder label={service.name} aspect="aspect-[4/5]" />
            )}
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-brand-charcoal py-24 sm:py-32">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-display-2 text-brand-white">Related work</h2>
              <Link href="/portfolio" className="link-underline text-sm font-medium text-brand-white">
                View Full Portfolio
              </Link>
            </div>
            <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <QuoteCta />
    </>
  );
}
