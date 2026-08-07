import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "Request a Quote",
  description:
    "Request a general contracting quote from Redline Contracting for residential or commercial work across the Greater Toronto Area.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us about the job"
        description={`A few details help ${siteConfig.name} prepare for the call. This is a request for a quote, not a final price. For emergencies, call directly.`}
      />

      <section className="bg-brand-black py-24 sm:py-32">
        <Container size="narrow">
          <QuoteForm />
        </Container>
      </section>
    </>
  );
}
