import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

const reasons = [
  {
    title: "Fast response",
    body: "Emergency calls are prioritized, a real person answers, and a licensed pro gets dispatched, not scheduled for next week.",
  },
  {
    title: "Upfront pricing",
    body: "You get a clear price before any work begins. No surprise line items once the job is already underway.",
  },
  {
    title: "Licensed & insured",
    body: "All work is handled by a licensed, insured crew, permits and inspections coordinated where required.",
  },
  {
    title: "One crew, every trade",
    body: `HVAC, plumbing, electrical, drywall, painting, and flooring are handled by the same team, which keeps renovations and combined jobs simpler to schedule across the GTA.`,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-brand-black py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={`Why ${siteConfig.shortName}`}
          title="What clients consistently point to"
          description="Feedback from past clients tends to focus on the same handful of things."
        />

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="border-t border-brand-line pt-6">
              <span className="text-eyebrow text-brand-red">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-display-3 mt-3 text-brand-white">{reason.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-silver">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
