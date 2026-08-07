import { cn } from "@/lib/cn";

/**
 * Used anywhere real photography/video hasn't been supplied yet. Renders as
 * an intentional architectural panel (not a broken-image state) so the
 * layout reads as designed rather than unfinished.
 */
export function MediaPlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className,
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-end overflow-hidden bg-gradient-to-br from-brand-charcoal via-brand-graphite to-brand-charcoal",
        aspect,
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute right-6 top-6 h-2.5 w-2.5 rotate-45 border border-brand-silver/60"
      />
      <p className="relative m-5 max-w-[80%] text-xs font-medium uppercase tracking-[0.1em] text-brand-silver/80">
        {label}
      </p>
    </div>
  );
}
