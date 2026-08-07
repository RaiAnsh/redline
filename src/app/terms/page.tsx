import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms",
  description: `Terms of use for the ${siteConfig.name} website.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms" />
      <section className="bg-brand-black py-24 sm:py-32">
        <Container size="narrow">
          <p className="border border-brand-line bg-brand-charcoal px-6 py-4 text-sm text-brand-silver">
            Placeholder: this page has not yet been reviewed or approved by {siteConfig.legalName}{" "}
            or legal counsel. Replace with website terms of use before launch.
          </p>
          <div className="mt-10 space-y-6 text-sm leading-relaxed text-brand-silver">
            <p>
              This website is provided for informational purposes. Submitting the contact or
              quote form is a request for a quote, and it does not create a binding agreement or
              guaranteed price.
            </p>
            <p>
              Project photography and case studies shown on this site marked as sample content
              are placeholders and do not represent completed {siteConfig.name} projects until
              replaced with verified work.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
