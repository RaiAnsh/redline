import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { Button } from "@/components/ui/Button";
import { primaryNav, footerServiceLinks, siteConfig } from "@/data/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-brand-white">
      <Container className="py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-6 text-sm leading-relaxed text-brand-silver">
              {siteConfig.description}
            </p>
            <p className="mt-6 text-eyebrow text-brand-silver">Est. {siteConfig.foundedYear}</p>
            <div className="mt-4">
              <Button href="/quote" variant="ghost">
                Get a Free Quote
              </Button>
            </div>
          </div>

          <div>
            <p className="text-eyebrow text-brand-silver">Navigate</p>
            <ul className="mt-5 space-y-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-sm text-brand-white/90">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow text-brand-silver">Services</p>
            <ul className="mt-5 space-y-3">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-sm text-brand-white/90">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow text-brand-silver">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-brand-white/90">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="link-underline">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.contacts.map((contact) => (
                <li key={contact.name}>
                  <a href={`tel:${contact.phone}`} className="link-underline">
                    {contact.phoneDisplay}
                  </a>
                  <span className="ml-2 text-brand-white/60">{contact.name}</span>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-brand-white/10 pt-10">
          <p className="text-eyebrow text-brand-silver">Proudly Serving the GTA</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-silver">
            {siteConfig.serviceArea.statement}
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-white/80">
            {siteConfig.serviceArea.cities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-brand-white/10 pt-8 text-xs text-brand-grey sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="link-underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="link-underline">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
