import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rfala.com"),
  title: "RFALA | AI Innovation Partner",
  description:
    "RFALA helps enterprises, startups, and institutions design, build, and deploy AI-powered systems and intelligent applications, from AI strategy and auditing to data platforms and custom AI engineering.",
  keywords: [
    "RFALA",
    "AI Innovation Partner",
    "AI Strategy",
    "AI Auditing",
    "AI Applications",
    "Intelligent Data Platforms",
    "Custom AI Engineering",
    "Artificial Intelligence",
    "AI Education",
    "Digital Learning",
    "Moroccan Innovation",
    "RFALA Institute",
    "Xenova Studio",
    "Maroclist",
    "Islamic School Review"
  ],
  openGraph: {
    title: "RFALA | AI Innovation Partner",
    description:
      "We transform ideas, data, and technology into intelligent solutions. AI strategy, data platforms, AI applications, auditing, and custom AI engineering.",
    url: "https://www.rfala.com",
    siteName: "RFALA",
    images: [{ url: "/assets/rfala-hero.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RFALA | AI Innovation Partner",
    description: "We transform ideas, data, and technology into intelligent solutions.",
    images: ["/assets/rfala-hero.png"]
  },
  alternates: {
    canonical: "https://www.rfala.com",
    languages: {
      en: "https://www.rfala.com",
      fr: "https://www.rfala.com/fr"
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}

