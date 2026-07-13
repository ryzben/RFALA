import { ContentPage } from "../components/ContentPage";
import enMessages from "../../messages/en.json";

export const metadata = {
  title: "RFALA Capabilities | AI Innovation Partner",
  description: "Explore RFALA's capability areas: AI strategy and innovation, intelligent data platforms, AI applications, growth and digital performance, AI auditing, and custom AI engineering.",
  openGraph: {
    title: "RFALA Capabilities | AI Innovation Partner",
    description: "We transform ideas, data, and technology into intelligent solutions. AI strategy, data platforms, AI applications, auditing, and custom AI engineering.",
    url: "https://www.rfala.com/services",
    siteName: "RFALA",
    images: [{ url: "/assets/rfala-hero.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RFALA Capabilities | AI Innovation Partner",
    description: "We transform ideas, data, and technology into intelligent solutions.",
    images: ["/assets/rfala-hero.png"]
  },
  alternates: {
    canonical: "https://www.rfala.com/services",
    languages: {
      en: "https://www.rfala.com/services",
      fr: "https://www.rfala.com/fr/services"
    }
  }
};

export default function ServicesPage() {
  return <ContentPage dictionary={enMessages} locale="en" kind="services" />;
}
