import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Nav/footer lockup. The client's supplied logo is a full badge (wrench +
 * roofline + electrical wire + "REDLINE CONTRACTING" wordmark baked into
 * the artwork) on a transparent background, so it's shown on its own
 * rather than paired with a second text label.
 */
export function Wordmark({
  priority = false,
  className,
}: {
  tone?: "dark" | "light";
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Redline Contracting, home"
      className={cn("group inline-flex items-center", className)}
    >
      <Image
        src="/logo-removebg-preview.png"
        alt="Redline Contracting"
        width={1254}
        height={1254}
        priority={priority}
        className="h-14 w-14 object-contain sm:h-16 sm:w-16"
      />
    </Link>
  );
}
