import { cn } from "@/lib/cn";

type Size = "content" | "wide" | "narrow";

const maxWidth: Record<Size, string> = {
  content: "max-w-[1280px]",
  wide: "max-w-[1440px]",
  narrow: "max-w-[768px]",
};

export function Container({
  children,
  className,
  wide = false,
  size,
}: {
  children: React.ReactNode;
  className?: string;
  /** @deprecated use `size="wide"` instead */
  wide?: boolean;
  size?: Size;
}) {
  const resolvedSize: Size = size ?? (wide ? "wide" : "content");

  return (
    <div className={cn("mx-auto w-full px-6 sm:px-10 lg:px-16", maxWidth[resolvedSize], className)}>
      {children}
    </div>
  );
}
