import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/services";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: "/open_graph.png", width: 1536, height: 1024 }],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/open_graph.png"],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contacts[0]?.phone,
    email: siteConfig.email,
    areaServed: siteConfig.serviceArea.cities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: [siteConfig.socials.instagram],
    serviceType: services.map((service) => service.name),
  };
}
