import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  // Whole site is dark-themed now, so "light" (white/red-on-dark) is the
  // sensible default. "dark" stays available for the rare light card.
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        aria-hidden
        className={cn(
          "h-[6px] w-[6px] rotate-45",
          tone === "dark" ? "bg-brand-black" : "bg-brand-red",
        )}
      />
      <span
        className={cn(
          "text-eyebrow",
          tone === "dark" ? "text-brand-graphite" : "text-brand-silver",
          className,
        )}
      >
        {children}
      </span>
    </div>
  );
}
