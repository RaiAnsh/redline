import { Container } from "@/components/ui/Container";

const points = [
  "Licensed & insured general contracting",
  "GTA-wide, Toronto, Mississauga, Brampton, and beyond",
  "Fast response, including emergency calls",
  "Upfront pricing before any work begins",
];

export function TrustStrip() {
  return (
    <section className="border-y border-brand-line bg-brand-charcoal py-14">
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-brand-silver">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand-red" />
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
