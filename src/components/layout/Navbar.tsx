"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, siteConfig } from "@/data/siteConfig";
import { Wordmark } from "@/components/ui/Wordmark";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu when the route changes, following React's
  // recommended "adjust state during render" pattern instead of an effect.
  const [menuClosedForPathname, setMenuClosedForPathname] = useState(pathname);
  if (pathname !== menuClosedForPathname) {
    setMenuClosedForPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Click-to-call top bar — always visible, phone contact matters most for a trade business. */}
      <div className="hidden border-b border-brand-line bg-brand-void sm:block">
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between px-6 text-xs lg:px-16">
          <span className="text-brand-grey">{siteConfig.serviceArea.statement}</span>
          <div className="flex items-center gap-5">
            {siteConfig.contacts.map((contact) => (
              <a
                key={contact.name}
                href={`tel:${contact.phone}`}
                className="link-underline flex items-center gap-1.5 text-brand-silver hover:text-brand-red-light"
              >
                <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-brand-red" />
                {contact.phoneDisplay}
                <span className="text-brand-grey">({contact.name})</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-colors duration-300",
          solid
            ? "border-b border-brand-line bg-brand-black/95 backdrop-blur-md"
            : "bg-gradient-to-b from-black/70 to-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <Wordmark priority />

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline text-sm font-medium tracking-wide text-brand-white/90"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <Button href="/quote" variant="primary">
              Get a Free Quote
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-white lg:hidden"
          >
            <span
              aria-hidden
              className={cn(
                "h-px w-6 bg-brand-white transition-transform duration-300",
                menuOpen && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              aria-hidden
              className={cn(
                "h-px w-6 bg-brand-white transition-transform duration-300",
                menuOpen && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-20 bottom-0 flex flex-col justify-between bg-brand-black px-6 py-10 transition-opacity duration-300 lg:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-2">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-brand-white/10 py-4 text-2xl font-display text-brand-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-4">
          {siteConfig.contacts.map((contact) => (
            <a
              key={contact.name}
              href={`tel:${contact.phone}`}
              className="link-underline text-center text-lg font-medium text-brand-white"
            >
              Call {contact.name}: {contact.phoneDisplay}
            </a>
          ))}
          <Button href="/quote" variant="primary" className="w-full">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
