import type enMessages from "../../messages/en.json";

export type Messages = typeof enMessages;
export type Locale = "en" | "fr";
export type ProductKey = "water";

export type NavLink = {
  href: string;
  label: string;
  description?: string;
  external?: boolean;
};

export type NavGroup = {
  heading: string;
  links: NavLink[];
};

export function localizedPath(locale: Locale, path: string) {
  return locale === "fr" ? `/fr${path === "/" ? "" : path}` : path;
}

export const productPaths: Record<ProductKey, string> = {
  water: "/products/wateragent"
};

export const wateragentUrl = "https://www.wateragent.net";
export const wateragentSampleReportUrl = "https://www.wateragent.net/report?lat=30.39500&lon=-9.20900";

/** Live products: the primary and secondary calls to action open the product itself in a new tab. */
export const productExternalLinks: Record<ProductKey, { primary: string; secondary: string }> = {
  water: { primary: wateragentUrl, secondary: wateragentSampleReportUrl }
};

/** Same destinations, in the same order, as the Ecosystem section. */
const existingProductHrefs = [
  wateragentUrl,
  "https://maroclist.com",
  "https://islamicschoolreview.com",
  "/institute",
  "https://xenovastudio.com"
];

export function productNavGroups(t: Messages, locale: Locale): NavGroup[] {
  const menu = t.nav.productsMenu;

  return [
    {
      heading: menu.groupExisting,
      links: existingProductHrefs.map((href, index) => ({
        href: href.startsWith("/") ? localizedPath(locale, href) : href,
        label: menu.existing[index],
        external: href.startsWith("http")
      }))
    }
  ];
}

export type DropdownNav = {
  label: string;
  /** Page for the item itself: the "view all" target, or the link half of a split control. */
  href: string;
  /** Split control: the label stays a normal link and a separate chevron button opens the menu. */
  split?: boolean;
  /** Accessible name for the chevron button in split mode. */
  toggleLabel?: string;
  /** Optional "view all" link label shown at the bottom of the panel. */
  viewAll?: string;
  /** Narrow single-column panel. */
  compact?: boolean;
  newTab: string;
  groups: NavGroup[];
};

export type ProductsNav = DropdownNav;

export const advisoryPath = "/services/technology-product-advisory";

export function capabilitiesNav(t: Messages, locale: Locale): DropdownNav {
  const menu = t.nav.capabilitiesMenu;
  return {
    label: t.nav.services,
    href: localizedPath(locale, "/services"),
    split: true,
    toggleLabel: menu.toggle,
    compact: true,
    newTab: t.nav.productsMenu.newTab,
    groups: [
      {
        heading: "",
        links: [
          { href: localizedPath(locale, "/services"), label: menu.all },
          { href: localizedPath(locale, advisoryPath), label: menu.advisory }
        ]
      }
    ]
  };
}

/** The Capabilities entry in the shape MobileMenu expects. */
export function capabilitiesMobileItem(nav: DropdownNav) {
  return { href: nav.href, label: nav.label, groups: nav.groups, newTabLabel: nav.newTab };
}

export function productsNav(t: Messages, locale: Locale): ProductsNav {
  return {
    label: t.nav.products,
    href: localizedPath(locale, "/products"),
    viewAll: t.nav.productsMenu.viewAll,
    newTab: t.nav.productsMenu.newTab,
    // A single group of links: the narrow panel avoids an empty second column.
    compact: true,
    groups: productNavGroups(t, locale)
  };
}

/** The Products entry in the shape MobileMenu expects. */
export function productsMobileItem(nav: ProductsNav) {
  return { href: nav.href, label: nav.label, groups: nav.groups, viewAllLabel: nav.viewAll, newTabLabel: nav.newTab };
}
