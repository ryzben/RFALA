import type { Metadata } from "next";
import enMessages from "../../messages/en.json";
import frMessages from "../../messages/fr.json";

type ProductPage = "index" | "water" | "careerai" | "advisory";
type Locale = "en" | "fr";

const SITE = "https://www.rfala.com";
const paths: Record<ProductPage, string> = {
  index: "/products",
  water: "/products/water-intelligence",
  careerai: "/products/careerai",
  advisory: "/services/technology-product-advisory"
};

const urlFor = (locale: Locale, page: ProductPage) => `${SITE}${locale === "fr" ? "/fr" : ""}${paths[page]}`;

/** Unique title, description, canonical, hreflang alternates, and Open Graph/Twitter tags for product and advisory pages. */
export function productPageMetadata(page: ProductPage, locale: Locale): Metadata {
  const messages = locale === "fr" ? frMessages : enMessages;
  const meta = page === "advisory" ? messages.advisory.meta : messages.products.meta[page];
  const url = urlFor(locale, page);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: {
        en: urlFor("en", page),
        fr: urlFor("fr", page)
      }
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: "RFALA",
      images: [{ url: "/assets/rfala-hero.png", width: 1200, height: 630 }],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/assets/rfala-hero.png"]
    }
  };
}
