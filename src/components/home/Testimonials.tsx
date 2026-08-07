import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const shown = testimonials.slice(0, 3);

  return (
    <section className="bg-brand-charcoal py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Client Reviews"
          title="What past clients say"
          description="Placeholder quotes representative of the feedback we aim for, real reviews are being collected and will replace these before launch."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {shown.map((t) => (
            <figure
              key={t.author + t.date}
              className="grunge-edge flex h-full flex-col bg-brand-black p-8"
            >
              <blockquote className="flex-1 text-[15px] leading-relaxed text-brand-silver">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-brand-line pt-4">
                <p className="text-sm font-medium text-brand-white">{t.author}</p>
                <p className="mt-0.5 text-xs text-brand-grey">
                  {t.project} &middot; {t.source}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
