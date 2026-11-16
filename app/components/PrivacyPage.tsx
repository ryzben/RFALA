import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { Footer } from "./ContentPage";
import {
  capabilitiesMobileItem,
  capabilitiesNav,
  localizedPath,
  productsMobileItem,
  productsNav,
  studioMobileItem
} from "./siteNav";
import type { Locale, Messages } from "./siteNav";

export function PrivacyPage({ dictionary, locale }: { dictionary: Messages; locale: Locale }) {
  const t = dictionary;
  const page = t.privacy;
  const navItems = [
    { href: localizedPath(locale, "/about"), label: t.nav.about },
    { href: localizedPath(locale, "/ecosystem"), label: t.nav.ecosystem },
    { href: localizedPath(locale, "/institute"), label: t.nav.institute },
    productsMobileItem(productsNav(t, locale)),
    capabilitiesMobileItem(capabilitiesNav(t, locale)),
    studioMobileItem(t),
    { href: localizedPath(locale, "/vision"), label: t.nav.vision },
    { href: localizedPath(locale, "/contact"), label: t.nav.contact }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="relative z-40 border-b border-white/10 bg-ink">
        <nav className="mx-auto flex h-20 w-[min(1120px,calc(100%-32px))] items-center justify-between">
          <Link href={localizedPath(locale, "/")} className="flex items-center gap-3 font-extrabold text-white" aria-label="RFALA home">
            <img src="/assets/logos/rfala-logo.png" alt="RFALA" className="h-14 w-52 object-contain sm:h-16 sm:w-60" />
          </Link>
          <div className="hidden items-center gap-5 text-sm font-bold text-white/70 lg:flex">
            <Link href={localizedPath(locale, "/about")} className="hover:text-mint">{t.nav.about}</Link>
            <Link href={localizedPath(locale, "/ecosystem")} className="hover:text-mint">{t.nav.ecosystem}</Link>
            <Link href={localizedPath(locale, "/contact")} className="hover:text-mint">{t.nav.contact}</Link>
          </div>
          <MobileMenu items={navItems} locale={locale} />
        </nav>
      </header>
      <section className="mx-auto w-[min(820px,calc(100%-32px))] py-20">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-emerald">{page.label}</p>
        <h1 className="text-4xl font-black leading-tight tracking-tight text-ink sm:text-6xl">{page.title}</h1>
        <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
          <p>{page.use}</p>
          <p>{page.thirdParty}</p>
          <p>
            {page.questions} <a className="font-extrabold text-emerald" href="mailto:contact@rfala.com">contact@rfala.com</a>.
          </p>
        </div>
      </section>
      <Footer dictionary={t} locale={locale} />
    </main>
  );
}
