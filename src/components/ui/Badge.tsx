import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
  // Whole site is dark-themed now; "light" is the sensible default.
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.1em]",
        tone === "dark"
          ? "border-brand-black/20 text-brand-graphite"
          : "border-brand-white/40 text-brand-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
