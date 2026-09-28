import type enMessages from "../../messages/en.json";

export type Messages = typeof enMessages;
export type Locale = "en" | "fr";
export type ProductKey = "water" | "careerai";

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
  water: "/products/water-intelligence",
  careerai: "/products/careerai"
};

/** Same destinations the Ecosystem section links to today. */
const existingProductHrefs = [
  "https://xenovastudio.com",
  "https://maroclist.com",
  "https://islamicschoolreview.com",
  "/institute"
];

export function productNavGroups(t: Messages, locale: Locale): NavGroup[] {
  const menu = t.nav.productsMenu;

  return [
    {
      heading: menu.groupNew,
      links: [
        { href: localizedPath(locale, productPaths.water), label: menu.water.name, description: menu.water.description },
        { href: localizedPath(locale, productPaths.careerai), label: menu.careerai.name, description: menu.careerai.description }
      ]
    },
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
    groups: productNavGroups(t, locale)
  };
}

/** The Products entry in the shape MobileMenu expects. */
export function productsMobileItem(nav: ProductsNav) {
  return { href: nav.href, label: nav.label, groups: nav.groups, viewAllLabel: nav.viewAll, newTabLabel: nav.newTab };
}
