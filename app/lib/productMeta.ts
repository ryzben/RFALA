import type { Metadata } from "next";
import enMessages from "../../messages/en.json";
import frMessages from "../../messages/fr.json";
import { pageMeta } from "./pageMeta";

type ProductPage = "index" | "water" | "advisory";
type Locale = "en" | "fr";

const paths = {
  index: "/products",
  water: "/products/wateragent",
  advisory: "/services/technology-product-advisory"
} as const satisfies Record<ProductPage, string>;

/** Unique title, description, canonical, hreflang alternates, and Open Graph/Twitter tags for product and advisory pages. */
export function productPageMetadata(page: ProductPage, locale: Locale): Metadata {
  const messages = locale === "fr" ? frMessages : enMessages;
  const meta = page === "advisory" ? messages.advisory.meta : messages.products.meta[page];

  return pageMeta(paths[page], locale, meta);
}
