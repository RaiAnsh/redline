import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SpinLogo } from "@/components/ui/SpinLogo";
import { siteConfig } from "@/data/siteConfig";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-brand-black">
      {/* Cinematic drone footage of the Toronto skyline, baked as a forward+reverse
          boomerang loop so it plays seamlessly forever with the native `loop` attribute,
          no JS reverse-playback hacks needed. Separate mobile/desktop sources keep the
          payload small on phones. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/hero-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source media="(min-width: 1024px)" src="/video/hero-boomerang-desktop.mp4" type="video/mp4" />
        <source src="/video/hero-boomerang-mobile.mp4" type="video/mp4" />
      </video>

      {/* Gradient scrim for nav/text legibility over the skyline footage */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"
      />
      <div aria-hidden className="grain-overlay" />

      {/* Faded SpinLogo watermark, kept fully on-screen so it doesn't fight headline contrast */}
      <SpinLogo
        size={280}
        depth={10}
        className="pointer-events-none absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 opacity-15 lg:hidden"
      />
      <SpinLogo
        size={340}
        depth={18}
        className="pointer-events-none absolute right-10 top-1/2 hidden -translate-y-1/2 opacity-70 lg:block"
      />

      <Container className="relative z-10 pb-20 pt-48 sm:pb-28">
        <div className="mb-6">
          <Eyebrow>General Contracting &middot; Toronto &amp; the GTA</Eyebrow>
        </div>
        <h1 className="text-display-1 max-w-3xl text-brand-white">
          Toronto&apos;s <span className="text-chrome">General</span> Contracting Experts
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-white/85 sm:text-lg">
          Redline Contracting handles HVAC, plumbing, electrical, drywall, painting, flooring,
          and everything in between, fast response across Toronto and the entire GTA,
          straightforward pricing, work done right the first time.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          {siteConfig.contacts.map((contact) => (
            <a
              key={contact.name}
              href={`tel:${contact.phone}`}
              className="link-underline flex items-center gap-2 text-base font-medium text-brand-white"
            >
              <span aria-hidden className="h-2 w-2 rotate-45 bg-brand-red" />
              {contact.phoneDisplay}
              <span className="text-sm text-brand-white/60">({contact.name})</span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/quote" variant="primary">
            Get a Free Quote
          </Button>
          <Button href="/portfolio" variant="ghost">
            View Our Work
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-brand-white/15 pt-6 sm:gap-x-8">
          {["Licensed & Insured", "GTA-Wide", "24/7 Emergency Response", "Upfront Pricing"].map(
            (d) => (
              <span key={d} className="text-eyebrow text-brand-white/70">
                {d}
              </span>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
