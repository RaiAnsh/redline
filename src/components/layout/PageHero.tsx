import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-brand-black pb-16 pt-40 sm:pb-20 sm:pt-48">
      <Container>
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="text-display-1 mt-5 max-w-3xl text-brand-white">{title}</h1>
        {description ? (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-silver sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
