import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Redline Contracting for general contracting questions, project inquiries, or general contact. Serving the Greater Toronto Area.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="For a detailed job inquiry, use the quote form. For anything urgent, call directly."
      />

      <section className="bg-brand-black py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-display-3 text-brand-white">Contact details</h2>
              <ul className="mt-6 space-y-4 text-sm text-brand-silver">
                <li>
                  <p className="text-eyebrow text-brand-grey">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="link-underline mt-1 block text-brand-white">
                    {siteConfig.email}
                  </a>
                </li>
                {siteConfig.contacts.map((contact) => (
                  <li key={contact.name}>
                    <p className="text-eyebrow text-brand-grey">{contact.name}</p>
                    <a href={`tel:${contact.phone}`} className="link-underline mt-1 block text-brand-white">
                      {contact.phoneDisplay}
                    </a>
                  </li>
                ))}
                <li>
                  <p className="text-eyebrow text-brand-grey">Instagram</p>
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-1 block text-brand-white"
                  >
                    {siteConfig.instagramHandle}
                  </a>
                </li>
                <li>
                  <p className="text-eyebrow text-brand-grey">Service Area</p>
                  <p className="mt-1">{siteConfig.serviceArea.statement}</p>
                </li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
