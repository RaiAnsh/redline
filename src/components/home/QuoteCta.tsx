import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export function QuoteCta() {
  return (
    <section className="bg-brand-black py-24 sm:py-28">
      <div aria-hidden className="hazard-stripe mx-auto mb-10 h-2 w-24" />
      <Container className="text-center">
        <h2 className="text-display-2 mx-auto max-w-2xl text-brand-white">
          Need a general contractor?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-brand-silver">
          Call now for emergency work, or request a free quote and we&apos;ll follow up to discuss
          scope, timeline, and pricing.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {siteConfig.contacts.map((contact) => (
            <a
              key={contact.name}
              href={`tel:${contact.phone}`}
              className="link-underline flex items-center gap-2 text-base font-medium text-brand-white"
            >
              <span aria-hidden className="h-2 w-2 rotate-45 bg-brand-red" />
              {contact.phoneDisplay}
              <span className="text-sm text-brand-white/60">({contact.name})</span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/quote" variant="primaryOnDark">
            Request a Quote
          </Button>
          <Button href="/portfolio" variant="ghost">
            View Our Work
          </Button>
        </div>
      </Container>
    </section>
  );
}
