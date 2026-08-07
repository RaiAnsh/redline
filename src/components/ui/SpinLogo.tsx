import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Physically-rotating 3D logo badge — a pure-CSS card-spin (front face +
 * back face only, no filler edges) under `transform-style: preserve-3d`,
 * so it's just the logo artwork itself turning edge-on and around, in the
 * spirit of the delmarcontracting.ca hero spin. No canvas/WebGL required.
 */
export function SpinLogo({
  size = 260,
  depth = 6,
  speed = "normal",
  className,
}: {
  size?: number;
  depth?: number;
  speed?: "normal" | "slow";
  className?: string;
}) {
  return (
    <div
      className={cn("spin-stage", className)}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div
        className={cn("spin-cube", speed === "slow" && "spin-cube--slow")}
        style={{ "--spin-depth": `${depth}px` } as React.CSSProperties}
      >
        <div className="spin-face spin-face--front">
          <Image
            src="/logo-removebg-preview.png"
            alt=""
            width={1254}
            height={1254}
            priority
            className="h-full w-full object-contain"
          />
        </div>

        <div className="spin-face spin-face--back">
          <Image
            src="/logo-removebg-preview.png"
            alt=""
            width={1254}
            height={1254}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
