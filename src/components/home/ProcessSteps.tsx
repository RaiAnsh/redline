import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/siteConfig";

const steps = [
  {
    title: "Call or request a quote",
    body: "Tell us what's going on, emergency or planned work, and get a straight answer on timing and price.",
  },
  {
    title: "Fast GTA scheduling",
    body: "Emergency calls are prioritized. Planned work is scheduled at a time that works for you, across the GTA.",
  },
  {
    title: "Licensed tradesperson does the work",
    body: "A licensed pro for the trade handles the job, with permits and inspections coordinated where required.",
  },
  {
    title: "Clean up & walkthrough",
    body: "The site is left clean, and we walk through the finished work together before calling it done.",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-brand-charcoal py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title={`What working with ${siteConfig.shortName} looks like`}
          align="center"
          className="mx-auto"
        />

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="text-center sm:text-left">
              <span className="text-display-3 text-brand-red">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-lg font-medium text-brand-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-silver">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
