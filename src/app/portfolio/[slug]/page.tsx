import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectMediaGallery } from "@/components/portfolio/ProjectMediaGallery";
import { QuoteCta } from "@/components/home/QuoteCta";
import { projects, getProjectBySlug } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return pageMetadata({
    title: `${project.name} | Portfolio`,
    description: `${project.scope} Located in ${project.location}.`,
    path: `/portfolio/${project.slug}`,
  });
}

const detailFields = [
  { key: "goals", label: "Project Goals" },
  { key: "challenges", label: "Challenges" },
  { key: "solutions", label: "Solutions" },
] as const;

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const testimonial = project.testimonialAuthor
    ? testimonials.find((t) => t.author === project.testimonialAuthor)
    : undefined;

  const related = projects
    .filter(
      (p) => p.slug !== project.slug && p.categories.some((c) => project.categories.includes(c)),
    )
    .slice(0, 3);

  return (
    <>
      <section className="bg-brand-black pb-16 pt-40 sm:pb-20 sm:pt-48">
        <Container>
          <Eyebrow tone="light">Portfolio</Eyebrow>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {project.categories.map((c) => (
              <Badge key={c} tone="light">
                {c}
              </Badge>
            ))}
            {project.isPlaceholder ? (
              <span className="inline-flex items-center border border-brand-red bg-brand-red px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em] text-brand-white">
                Sample Project
              </span>
            ) : null}
          </div>
          <h1 className="text-display-1 mt-5 max-w-3xl text-brand-white">{project.name}</h1>
          <p className="mt-4 text-base text-brand-silver">{project.location}</p>
        </Container>
      </section>

      <section className="bg-brand-black py-16">
        <Container>
          {project.isPlaceholder ? (
            <p className="mb-14 border border-brand-line bg-brand-charcoal px-6 py-4 text-sm text-brand-silver">
              {project.placeholderNote}
            </p>
          ) : null}

          <div className="grid gap-x-10 gap-y-4 border-y border-brand-line py-8 sm:grid-cols-4">
            <div>
              <p className="text-eyebrow text-brand-grey">Client Type</p>
              <p className="mt-2 text-sm text-brand-white">{project.clientType}</p>
            </div>
            <div>
              <p className="text-eyebrow text-brand-grey">Location</p>
              <p className="mt-2 text-sm text-brand-white">{project.location}</p>
            </div>
            <div>
              <p className="text-eyebrow text-brand-grey">Completion</p>
              <p className="mt-2 text-sm text-brand-white">{project.completionDate}</p>
            </div>
            <div>
              <p className="text-eyebrow text-brand-grey">Scope</p>
              <p className="mt-2 text-sm text-brand-white">{project.scope}</p>
            </div>
          </div>

          <div className="mt-16">
            <ProjectMediaGallery media={project.media} projectName={project.name} />
          </div>

          {detailFields.some((field) => project[field.key]) ? (
            <div className="mt-16 grid gap-12 lg:grid-cols-3">
              {detailFields
                .filter((field) => project[field.key])
                .map((field) => (
                  <div key={field.key}>
                    <h2 className="text-display-3 text-brand-white">{field.label}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-brand-silver">
                      {project[field.key]}
                    </p>
                  </div>
                ))}
            </div>
          ) : null}

          {project.materials && project.materials.length > 0 ? (
            <div className="mt-16">
              <h2 className="text-display-3 text-brand-white">Materials &amp; Fixtures</h2>
              <ul className="mt-5 flex flex-wrap gap-3">
                {project.materials.map((m) => (
                  <li key={m} className="border border-brand-line px-4 py-2 text-sm text-brand-silver">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {testimonial ? (
            <figure className="mt-20 border-l-2 border-brand-red pl-8">
              <blockquote className="text-display-3 text-brand-white">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-brand-grey">
                {testimonial.author} &middot; {testimonial.source}
              </figcaption>
            </figure>
          ) : null}

          <div className="mt-16">
            <Button href="/quote">Request a Quote Like This</Button>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-brand-charcoal py-24 sm:py-32">
          <Container>
            <h2 className="text-display-2 text-brand-white">Related projects</h2>
            <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <QuoteCta />
    </>
  );
}
