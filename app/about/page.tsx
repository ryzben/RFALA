import { ContentPage } from "../components/ContentPage";
import enMessages from "../../messages/en.json";

export const metadata = {
  title: "About RFALA | AI Innovation Partner",
  description: "Learn about RFALA, an AI innovation partner helping enterprises, startups, and institutions design, build, and deploy intelligent solutions.",
  openGraph: {
    title: "About RFALA | AI Innovation Partner",
    description: "Learn about RFALA, an AI innovation partner helping enterprises, startups, and institutions design, build, and deploy intelligent solutions.",
    url: "https://www.rfala.com/about",
    siteName: "RFALA",
    images: [{ url: "/assets/rfala-hero.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "https://www.rfala.com/about",
    languages: {
      en: "https://www.rfala.com/about",
      fr: "https://www.rfala.com/fr/about"
    }
  }
};

export default function AboutPage() {
  return <ContentPage dictionary={enMessages} locale="en" kind="about" />;
}
