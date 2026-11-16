import type { Metadata } from "next";

export const SITE_URL = "https://www.rfala.com";

export type Locale = "en" | "fr";

/**
 * Every public route, as its English path. Each one also exists under /fr.
 * The sitemap is generated from this list, so add new pages here.
 */
export const sitePaths = [
  "/",
  "/about",
  "/ecosystem",
  "/institute",
  "/products",
  "/products/wateragent",
  "/services",
  "/services/technology-product-advisory",
  "/vision",
  "/contact",
  "/privacy"
] as const;

export type SitePath = (typeof sitePaths)[number];

/**
 * Absolute URL of a page in the given language, e.g. ("/about", "fr") -> https://www.rfala.com/fr/about.
 * The home page has no trailing slash, matching how Next.js renders the root URL in <link> tags.
 */
export function pageUrl(path: SitePath, locale: Locale): string {
  const localized = locale === "fr" ? `/fr${path === "/" ? "" : path}` : path === "/" ? "" : path;
  return `${SITE_URL}${localized}`;
}

/** hreflang map pointing at a page's English and French twins; English is the x-default. */
export function pageLanguages(path: SitePath) {
  return {
    en: pageUrl(path, "en"),
    fr: pageUrl(path, "fr"),
    "x-default": pageUrl(path, "en")
  };
}

/** Canonical URL, hreflang alternates, and Open Graph/Twitter tags for one page. */
export function pageMeta(
  path: SitePath,
  locale: Locale,
  { title, description }: { title: string; description: string }
): Metadata {
  const url = pageUrl(path, locale);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: pageLanguages(path)
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "RFALA",
      images: [{ url: "/assets/rfala-hero.png", width: 1200, height: 630 }],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/rfala-hero.png"]
    }
  };
}
