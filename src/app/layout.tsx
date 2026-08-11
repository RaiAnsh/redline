import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RedlineBot } from "@/components/chat/RedlineBot";
import { siteConfig } from "@/data/siteConfig";
import { localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | General Contractor in Toronto & the GTA`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  verification: {
    google: "peSnIG6sE7u8_VWZKszjn9V_BxuobYgH_qwO9ZFVMxY",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/open_graph.png", width: 1536, height: 1024 }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/open_graph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand-black text-brand-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <RedlineBot />
      </body>
    </html>
  );
}
