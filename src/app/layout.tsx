import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundElements from "../components/BackgroundElements";
import { Inter, Space_Grotesk, Outfit } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "EV Battery Intelligence Challenge - National Hackathon 2026",
  description:
    "Powering the Future of E-Mobility with Indigenous Compute. Join India's premier hackathon for EV battery intelligence, innovation, and sustainable electronics.",
  keywords: [
    "EV hackathon",
    "battery challenge",
    "electric vehicle",
    "indigenous compute",
    "C-DAC",
    "CHRIST University",
    "innovation challenge",
    "sustainable technology",
  ],
  authors: [{ name: "CHRIST University" }],
  creator: "CHRIST University",
  publisher: "CHRIST University",

  // Open Graph
  openGraph: {
    type: "website",
    url: "https://evbic.christuniversity.in",
    title: "EV Battery Intelligence Challenge - National Hackathon 2026",
    description:
      "Powering the Future of E-Mobility with Indigenous Compute. Join the challenge to build safe, smart, and sustainable battery systems.",
    siteName: "EV-BIC",
    locale: "en_IN",
    images: [
      {
        url: "https://evbic.christuniversity.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "EV Battery Intelligence Challenge",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "EV Battery Intelligence Challenge 2026",
    description: "Powering the Future of E-Mobility with Indigenous Compute.",
    creator: "@CHRISTuniversity",
    site: "@CHRISTuniversity",
    images: ["https://evbic.christuniversity.in/og-image.png"],
  },

  // Other metadata
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Additional metadata
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "EV-BIC Challenge",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EV Battery Intelligence Challenge",
    alternateName: "EV-BIC",
    description: "Powering the Future of E-Mobility with Indigenous Compute",
    sameAs: [
      "https://www.christuniversity.in",
      "https://twitter.com/CHRISTuniversity",
      "https://www.linkedin.com/company/christ-university",
      "https://www.facebook.com/CHRISTUniversity",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Event Information",
      email: "contact@evbic.christuniversity.in",
      availableLanguage: "en",
    },
    founder: {
      "@type": "Organization",
      name: "CHRIST University",
    },
    partner: {
      "@type": "Organization",
      name: "C-DAC",
      url: "https://www.cdac.in",
    },
  };

  // JSON-LD Structured Data for Event
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "EV Battery Intelligence Challenge 2026",
    description:
      "A national hackathon challenge to develop innovative solutions for EV battery intelligence and sustainable electronics.",
    startDate: "2026-01-20",
    endDate: "2026-02-15",
    eventStatus: "EventScheduled",
    eventAttendanceMode: "HybridEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "CHRIST University, Bangalore",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressLocality: "Bangalore",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "CHRIST University",
      url: "https://www.christuniversity.in",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Manifest and PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(eventSchema),
          }}
        />
      </head>
      <body
        className={`min-h-screen flex flex-col bg-brand-primary text-brand-text font-sans selection:bg-brand-accent selection:text-brand-dark ${inter.variable} ${spaceGrotesk.variable} ${outfit.variable}`}
      >
        <BackgroundElements />
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
