import { ContactPage } from "../components/ContactPage";
import enMessages from "../../messages/en.json";

export const metadata = {
  title: "Contact RFALA | AI Innovation Partner",
  description: "Contact RFALA to discuss AI strategy, intelligent data platforms, AI applications, AI auditing, custom AI engineering, and strategic partnerships.",
  openGraph: {
    title: "Contact RFALA | AI Innovation Partner",
    description: "Contact RFALA to discuss AI strategy, intelligent data platforms, AI applications, AI auditing, custom AI engineering, and strategic partnerships.",
    url: "https://www.rfala.com/contact",
    siteName: "RFALA",
    images: [{ url: "/assets/rfala-hero.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "https://www.rfala.com/contact",
    languages: {
      en: "https://www.rfala.com/contact",
      fr: "https://www.rfala.com/fr/contact"
    }
  }
};

export default function EnglishContactPage() {
  return <ContactPage dictionary={enMessages} locale="en" />;
}
