import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "primaryOnDark" | "secondary" | "ghost";

const base =
  "inline-flex min-h-[48px] items-center justify-center gap-2 px-7 text-sm font-medium tracking-wide transition-colors duration-300 rounded-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-40 disabled:pointer-events-none";

// Whole site is dark by default now (bg-brand-black), so every variant
// below is tuned to stay legible on charcoal/black/photo backgrounds.
const variants: Record<Variant, string> = {
  // Main red CTA — "Get a Free Quote", form submits, etc.
  primary:
    "bg-brand-red text-brand-white hover:bg-brand-red-dark focus-visible:outline-brand-red-light",
  // High-contrast white button, for use over busy hero photography where a
  // red button could get lost against similarly-toned imagery.
  primaryOnDark:
    "bg-brand-white text-brand-black hover:bg-brand-red hover:text-brand-white focus-visible:outline-brand-white",
  // Outlined chrome/white button for secondary actions on dark sections.
  secondary:
    "bg-transparent text-brand-white border border-brand-white/30 hover:bg-brand-white hover:text-brand-black hover:border-brand-white focus-visible:outline-brand-white",
  // Red-outlined ghost button — lower emphasis than `primary` but still
  // on-brand, used in the footer/nav/hero where a solid red block would be
  // too heavy.
  ghost:
    "bg-transparent text-brand-white border border-brand-red/70 hover:bg-brand-red hover:text-brand-white focus-visible:outline-brand-red",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps &
  ({ href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className">)) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonEl({
  variant = "primary",
  className,
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
