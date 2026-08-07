import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { QuoteCta } from "@/components/home/QuoteCta";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Browse general contracting projects from Redline Contracting across the Greater Toronto Area.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A record of the work"
        description="Filter by category to see the kind of work Redline Contracting takes on across the GTA."
      />

      <section className="bg-brand-black py-24 sm:py-32">
        <Container>
          <PortfolioGrid projects={projects} />
        </Container>
      </section>

      <QuoteCta />
    </>
  );
}
