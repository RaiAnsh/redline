import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="bg-brand-black py-24 sm:py-32">
        <Container size="narrow">
          <p className="border border-brand-line bg-brand-charcoal px-6 py-4 text-sm text-brand-silver">
            Placeholder: this page has not yet been reviewed or approved by {siteConfig.legalName}{" "}
            or legal counsel. Replace this content with a privacy policy that reflects how
            information submitted through the contact and quote forms is actually collected,
            stored, and used before launch.
          </p>
          <div className="mt-10 space-y-6 text-sm leading-relaxed text-brand-silver">
            <p>
              This site collects information you voluntarily submit through the contact and quote
              request forms, such as your name, email address, phone number, and job details.
              That information is used only to respond to your inquiry.
            </p>
            <p>
              Contact {siteConfig.email} with any questions about this policy or your
              information.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
