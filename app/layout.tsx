import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_URL, SITE_DESCRIPTION } from "@/lib/site";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Crecimiento",
    template: "%s — Crecimiento",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "Crecimiento",
    description: SITE_DESCRIPTION,
    siteName: "Crecimiento",
    locale: "en_US",
    type: "website",
    url: SITE_URL,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Crecimiento" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@crecimientoar",
    title: "Crecimiento",
    description: SITE_DESCRIPTION,
    images: ["/og.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Crecimiento",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/lockup-black.png`,
      },
      description: SITE_DESCRIPTION,
      foundingDate: "2024",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Buenos Aires",
          addressCountry: "AR",
        },
      },
      email: "comms@crecimiento.build",
      sameAs: [
        "https://x.com/crecimientoar",
        "https://www.instagram.com/crecimientoar",
        "https://www.linkedin.com/company/crecimientobuild/",
        "https://www.youtube.com/@Crecimientoar",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Crecimiento",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
