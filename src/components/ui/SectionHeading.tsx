import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  // Whole site is dark-themed now; "light" is the sensible default.
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className={cn("mb-5", align === "center" && "flex justify-center")}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2
        className={cn(
          "text-display-2",
          tone === "dark" ? "text-brand-black" : "text-brand-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-brand-graphite" : "text-brand-silver",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
