import type { MetadataRoute } from "next";
import { pageLanguages, pageUrl, sitePaths } from "./lib/pageMeta";

/** One entry per page and language, each listing its EN/FR twins as hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  return sitePaths.flatMap((path) => {
    const { en, fr } = pageLanguages(path);
    const priority = path === "/" ? 1 : 0.8;

    return (["en", "fr"] as const).map((locale) => ({
      url: pageUrl(path, locale),
      changeFrequency: "monthly" as const,
      priority: locale === "en" ? priority : Math.round((priority - 0.1) * 10) / 10,
      alternates: { languages: { en, fr } }
    }));
  });
}
