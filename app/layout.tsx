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
  title: "RFALA | Technology, Innovation, and Digital Ecosystem",
  description:
    "RFALA is a technology, innovation, and digital ecosystem building impactful solutions, platforms, and experiences for the future.",
  keywords: [
    "RFALA",
    "AI Education",
    "AI education",
    "Innovation Platform",
    "Technology Education",
    "Digital Learning",
    "Artificial Intelligence",
    "Online Learning",
    "Moroccan Innovation",
    "Future of Education",
    "Educational Technology",
    "RFALA Institute",
    "Xenova Studio",
    "Maroclist",
    "Islamic School Review"
  ],
  openGraph: {
    title: "RFALA | Technology, Innovation, and Digital Ecosystem",
    description:
      "Building impactful solutions, platforms, and experiences through AI, digital transformation, modern technology, and education.",
    url: "https://www.rfala.com",
    siteName: "RFALA",
    images: [{ url: "/assets/rfala-hero.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RFALA | Technology, Innovation, and Digital Ecosystem",
    description: "Building impactful solutions, platforms, and experiences through AI and modern technology.",
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

