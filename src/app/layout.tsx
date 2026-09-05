import "./globals.css";
import "@/components/common/OpeningIntro.css";
import { Inter, Manrope } from "next/font/google";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import OpeningIntro from "@/components/common/OpeningIntro";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-heading", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://chetanacounselling.in"),
  title: {
    default: `${siteConfig.businessName} | Atchutapuram, Anakapalli`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.counsellorName }],
  creator: siteConfig.businessName,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.businessName,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: "/",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#173f45",
  colorScheme: "light",
};

const jsonLdProfessionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.businessName,
  description: siteConfig.seo.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "D/No: 4-12, Satya Sadhan, Thimmarajupeta Village and Post",
    addressLocality: "Atchutapuram",
    addressRegion: "Andhra Pradesh",
    postalCode: "531033",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.6769227, longitude: 83.34477 },
  areaServed: ["Atchutapuram", "Anakapalli", "Visakhapatnam"],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "18:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "17:00" },
  ],
  url: "https://chetanacounselling.in",
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.counsellorName,
  jobTitle: "Counselling Psychologist",
  worksFor: { "@type": "ProfessionalService", name: siteConfig.businessName },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProfessionalService) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <OpeningIntro />
        {children}
      </body>
    </html>
  );
}
