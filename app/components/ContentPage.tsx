import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Code2,
  Compass,
  ExternalLink,
  GraduationCap,
  Megaphone,
  MonitorSmartphone,
  Network,
  Palette,
  Rocket,
  SearchCheck,
  Sparkles
} from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import enMessages from "../../messages/en.json";

type Messages = typeof enMessages;
type Locale = "en" | "fr";
type PageKind = "ecosystem" | "institute" | "services" | "vision";

const ecosystemAssets = [
  {
    href: "/institute",
    logo: "/assets/logos/rfala-institute.svg",
    logoClassName: "bg-ink",
    icon: GraduationCap
  },
  {
    href: "https://xenovastudio.com",
    logo: "/assets/logos/xenova-studio.svg",
    logoClassName: "bg-ink",
    icon: Palette
  },
  {
    href: "https://maroclist.com",
    logo: "/assets/logos/maroclist-logo2.jpg",
    logoClassName: "bg-white",
    icon: Building2
  },
  {
    href: "https://islamicschoolreview.com",
    logo: "/assets/logos/islamic-school-review.svg",
    logoClassName: "bg-white",
    icon: SearchCheck
  }
];

const serviceAssets = [
  { icon: BrainCircuit, accent: "from-emerald to-sky" },
  { icon: Code2, accent: "from-sky to-mint" },
  { icon: Megaphone, accent: "from-gold to-emerald" },
  { icon: Sparkles, accent: "from-mint to-sky" },
  { icon: Rocket, accent: "from-sky to-gold" },
  { icon: MonitorSmartphone, accent: "from-emerald to-gold" }
];

const instituteAssets = [
  BrainCircuit,
  Network,
  Code2,
  Rocket,
  GraduationCap,
  Compass
];

function localizedPath(locale: Locale, path: string) {
  return locale === "fr" ? `/fr${path === "/" ? "" : path}` : path;
}

function Header({ dictionary, locale }: { dictionary: Messages; locale: Locale }) {
  const t = dictionary;

  return (
    <header className="border-b border-white/10 bg-ink/90 text-white backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 w-[min(1180px,calc(100%-32px))] items-center justify-between">
        <Link href={localizedPath(locale, "/")} className="flex items-center gap-3 font-extrabold" aria-label="RFALA home">
          <span className="grid size-11 place-items-center rounded-lg bg-gradient-to-br from-emerald to-gold text-white shadow-glow">R</span>
          <span className="text-lg tracking-tight">RFALA</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm font-bold text-white/80 md:flex">
          <Link href={localizedPath(locale, "/ecosystem")} className="transition hover:text-mint">{t.nav.ecosystem}</Link>
          <Link href={localizedPath(locale, "/institute")} className="transition hover:text-mint">{t.nav.institute}</Link>
          <Link href={localizedPath(locale, "/services")} className="transition hover:text-mint">{t.nav.services}</Link>
          <Link href={localizedPath(locale, "/vision")} className="transition hover:text-mint">{t.nav.vision}</Link>
          <Link href={localizedPath(locale, "/contact")} className="transition hover:text-mint">{t.nav.contact}</Link>
          <LanguageSwitcher locale={locale} />
        </div>
        <div className="md:hidden">
          <LanguageSwitcher locale={locale} />
        </div>
      </nav>
    </header>
  );
}

function PageHero({ dictionary, locale, kind }: { dictionary: Messages; locale: Locale; kind: PageKind }) {
  const t = dictionary;
  const page = t.pages[kind];

  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(47,178,132,0.24),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(109,200,255,0.18),transparent_26%),linear-gradient(135deg,#071426_0%,#102c3b_54%,#0f172a_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-mint">{page.label}</p>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.96] tracking-tight sm:text-7xl">{page.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{page.description}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href={localizedPath(locale, "/contact")} className="inline-flex items-center justify-center gap-2 rounded-xl bg-mint px-6 py-4 text-sm font-black text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-white">
              {t.pages.common.contact}
              <ArrowRight className="size-5" />
            </Link>
            <Link href={localizedPath(locale, "/")} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-mint hover:text-mint">
              {t.pages.common.backHome}
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-emerald">{t.pages.common.strategicFocus}</p>
          <div className="mt-5 grid gap-3">
            {"highlights" in page ? page.highlights.map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/50 p-4">
                <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-emerald to-gold text-xs font-black text-ink">0{index + 1}</span>
                <span className="font-extrabold text-slate-100">{item}</span>
              </div>
            )) : null}
            {"pillars" in page ? page.pillars.map((item, index) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-slate-950/50 p-4">
                <div className="mb-2 flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-emerald to-gold text-xs font-black text-ink">0{index + 1}</span>
                  <h2 className="font-black text-white">{item.title}</h2>
                </div>
                <p className="text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            )) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ dictionary, locale }: { dictionary: Messages; locale: Locale }) {
  const t = dictionary;

  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Link href={localizedPath(locale, "/")} className="mb-5 flex items-center gap-3 font-extrabold">
            <span className="grid size-11 place-items-center rounded-lg bg-gradient-to-br from-emerald to-gold">R</span>
            <span className="text-lg">RFALA</span>
          </Link>
          <p className="max-w-md text-slate-400">{t.footer.description}</p>
        </div>
        <div>
          <h3 className="mb-4 font-black">{t.footer.quickLinks}</h3>
          <div className="grid gap-2 text-slate-400">
            <Link href={localizedPath(locale, "/")} className="hover:text-mint">{t.nav.home}</Link>
            <Link href={localizedPath(locale, "/ecosystem")} className="hover:text-mint">{t.nav.ecosystem}</Link>
            <Link href={localizedPath(locale, "/institute")} className="hover:text-mint">{t.nav.institute}</Link>
            <Link href={localizedPath(locale, "/services")} className="hover:text-mint">{t.nav.services}</Link>
            <Link href={localizedPath(locale, "/vision")} className="hover:text-mint">{t.nav.vision}</Link>
            <Link href={localizedPath(locale, "/contact")} className="hover:text-mint">{t.footer.contact}</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-black">{t.footer.connect}</h3>
          <div className="grid gap-2 text-slate-400">
            <a href="mailto:hello@rfala.com" className="hover:text-mint">hello@rfala.com</a>
            <a href="tel:+19175822768" className="hover:text-mint">{t.contact.phone}</a>
            <p className="pt-4 text-sm">{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function EcosystemBody({ dictionary, locale }: { dictionary: Messages; locale: Locale }) {
  const t = dictionary;

  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-5 md:grid-cols-2">
        {t.ecosystem.items.map((item, index) => {
          const asset = ecosystemAssets[index];
          const href = asset.href.startsWith("/") ? localizedPath(locale, asset.href) : asset.href;
          return (
            <article key={item.name} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald/40 hover:shadow-soft">
              <div className={`mb-6 flex h-36 items-center justify-center overflow-hidden rounded-xl border border-slate-200 p-5 shadow-sm ${asset.logoClassName}`}>
                <img src={asset.logo} alt={`${item.name} logo`} className="max-h-24 max-w-full object-contain" />
              </div>
              <h2 className="text-2xl font-black text-ink">{item.name}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">{item.description}</p>
              <Link href={href} target={asset.href.startsWith("http") ? "_blank" : undefined} rel={asset.href.startsWith("http") ? "noopener" : undefined} className="mt-6 inline-flex items-center gap-2 font-extrabold text-emerald">
                {t.pages.common.explore} {asset.href.startsWith("http") ? <ExternalLink className="size-4" /> : <ArrowRight className="size-4" />}
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function InstituteBody({ dictionary }: { dictionary: Messages }) {
  const t = dictionary;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div className="rounded-2xl border border-slate-200 bg-ink p-8 text-white shadow-soft">
          <img src="/assets/logos/rfala-institute.svg" alt="RFALA Institute logo" className="mb-8 max-h-20" />
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            {t.institute.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 rounded-xl border border-mint/20 bg-mint/10 p-5 font-bold leading-7 text-slate-100">{t.institute.human}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {t.institute.items.map((item, index) => {
            const Icon = instituteAssets[index] ?? Sparkles;
            return (
              <article key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-emerald/40 hover:bg-white hover:shadow-soft">
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-emerald to-sky text-ink">
                    <Icon className="size-6" />
                  </span>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-black text-slate-400">0{index + 1}</span>
                </div>
                <h2 className="text-xl font-black text-ink">{item}</h2>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesBody({ dictionary }: { dictionary: Messages }) {
  const t = dictionary;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-5 md:grid-cols-2 xl:grid-cols-3">
        {t.services.items.map((service, index) => {
          const asset = serviceAssets[index];
          const Icon = asset.icon;
          return (
            <article key={service.name} className="group relative min-h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald/40 hover:shadow-soft">
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${asset.accent}`} />
              <div className="mb-7 flex items-start justify-between gap-5">
                <div className={`grid size-14 place-items-center rounded-xl bg-gradient-to-br ${asset.accent} text-ink`}>
                  <Icon className="size-7" />
                </div>
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-black text-slate-400">0{index + 1}</span>
              </div>
              <h2 className="text-2xl font-black text-ink">{service.name}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function VisionBody({ dictionary }: { dictionary: Messages }) {
  const t = dictionary;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <Compass className="mb-6 size-12 text-emerald" />
          <h2 className="text-4xl font-black leading-tight text-ink">{t.vision.title}</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{t.vision.description}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.pages.vision.pillars.map((pillar, index) => (
            <article key={pillar.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald/40 hover:shadow-soft">
              <span className="mb-5 grid size-11 place-items-center rounded-xl bg-gradient-to-br from-emerald to-gold text-sm font-black text-ink">0{index + 1}</span>
              <h2 className="text-xl font-black text-ink">{pillar.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContentPage({ dictionary, locale, kind }: { dictionary: Messages; locale: Locale; kind: PageKind }) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header dictionary={dictionary} locale={locale} />
      <PageHero dictionary={dictionary} locale={locale} kind={kind} />
      {kind === "ecosystem" ? <EcosystemBody dictionary={dictionary} locale={locale} /> : null}
      {kind === "institute" ? <InstituteBody dictionary={dictionary} /> : null}
      {kind === "services" ? <ServicesBody dictionary={dictionary} /> : null}
      {kind === "vision" ? <VisionBody dictionary={dictionary} /> : null}
      <Footer dictionary={dictionary} locale={locale} />
    </main>
  );
}
