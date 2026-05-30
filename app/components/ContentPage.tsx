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
import { MobileMenu } from "./MobileMenu";
import enMessages from "../../messages/en.json";

type Messages = typeof enMessages;
type Locale = "en" | "fr";
type PageKind = "about" | "ecosystem" | "institute" | "services" | "vision";

const ecosystemAssets = [
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
  },
  {
    href: "/institute",
    logo: "/assets/logos/rfala-institute.svg",
    logoClassName: "bg-ink",
    icon: GraduationCap
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

const learningPlatforms = [
  { name: "MIT Open Learning", logo: "/assets/logos/mit-open-learning.svg" },
  { name: "Harvard Online", logo: "/assets/logos/harvard-online.svg" },
  { name: "Coursera", logo: "/assets/logos/coursera.svg" },
  { name: "edX", logo: "/assets/logos/edx.svg" }
];

function localizedPath(locale: Locale, path: string) {
  return locale === "fr" ? `/fr${path === "/" ? "" : path}` : path;
}

function Header({ dictionary, locale }: { dictionary: Messages; locale: Locale }) {
  const t = dictionary;
  const navItems = [
    { href: localizedPath(locale, "/about"), label: t.nav.about },
    { href: localizedPath(locale, "/ecosystem"), label: t.nav.ecosystem },
    { href: localizedPath(locale, "/institute"), label: t.nav.institute },
    { href: localizedPath(locale, "/services"), label: t.nav.services },
    { href: localizedPath(locale, "/vision"), label: t.nav.vision },
    { href: localizedPath(locale, "/contact"), label: t.nav.contact }
  ];

  return (
    <header className="border-b border-white/10 bg-black/95 text-white backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 w-[min(1180px,calc(100%-32px))] items-center justify-between">
        <Link href={localizedPath(locale, "/")} className="flex items-center gap-3 font-extrabold" aria-label="RFALA home">
          <img src="/assets/logos/rfala-mountain-ai-logo.png" alt="RFALA" className="h-12 w-44 object-contain mix-blend-screen sm:h-14 sm:w-52" />
        </Link>
        <div className="hidden items-center gap-7 text-sm font-bold text-white/80 md:flex">
          <Link href={localizedPath(locale, "/about")} className="transition hover:text-mint">{t.nav.about}</Link>
          <Link href={localizedPath(locale, "/ecosystem")} className="transition hover:text-mint">{t.nav.ecosystem}</Link>
          <Link href={localizedPath(locale, "/institute")} className="transition hover:text-mint">{t.nav.institute}</Link>
          <Link href={localizedPath(locale, "/services")} className="transition hover:text-mint">{t.nav.services}</Link>
          <Link href={localizedPath(locale, "/vision")} className="transition hover:text-mint">{t.nav.vision}</Link>
          <Link href={localizedPath(locale, "/contact")} className="transition hover:text-mint">{t.nav.contact}</Link>
          <LanguageSwitcher locale={locale} />
        </div>
        <MobileMenu items={navItems} locale={locale} />
      </nav>
    </header>
  );
}

function PageHero({ dictionary, locale, kind }: { dictionary: Messages; locale: Locale; kind: Exclude<PageKind, "about"> }) {
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
    <footer className="border-t border-white/10 bg-black py-12 text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Link href={localizedPath(locale, "/")} className="mb-5 flex items-center gap-3 font-extrabold">
            <img src="/assets/logos/rfala-mountain-ai-logo.png" alt="RFALA" className="h-14 w-52 object-contain mix-blend-screen" />
          </Link>
          <p className="max-w-md text-slate-400">{t.footer.description}</p>
        </div>
        <div>
          <h3 className="mb-4 font-black">{t.footer.quickLinks}</h3>
          <div className="grid gap-2 text-slate-400">
            <Link href={localizedPath(locale, "/")} className="hover:text-mint">{t.nav.home}</Link>
            <Link href={localizedPath(locale, "/about")} className="hover:text-mint">{t.nav.about}</Link>
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

function AboutBody({ dictionary }: { dictionary: Messages }) {
  const t = dictionary;

  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_16%,rgba(47,178,132,0.22),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(109,200,255,0.16),transparent_26%),linear-gradient(135deg,#071426_0%,#102c3b_52%,#0f172a_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="mx-auto grid w-[min(1120px,calc(100%-32px))] gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-mint">{t.about.label}</p>
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">{t.about.title}</h1>
        </div>
        <div className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.08] p-6 text-lg leading-8 text-slate-300 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8">
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={index === t.about.paragraphs.length - 1 ? "font-extrabold text-white" : undefined}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcosystemBody({ dictionary, locale }: { dictionary: Messages; locale: Locale }) {
  const t = dictionary;

  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_16%,rgba(47,178,132,0.22),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(109,200,255,0.16),transparent_26%),linear-gradient(135deg,#071426_0%,#102c3b_52%,#0f172a_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-mint">{t.ecosystem.label}</p>
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">{t.ecosystem.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{t.ecosystem.description}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.ecosystem.items.map((item, index) => {
            const asset = ecosystemAssets[index];
            const href = asset.href.startsWith("/") ? localizedPath(locale, asset.href) : asset.href;
            return (
              <article key={item.name} className="group flex min-h-[310px] flex-col rounded-lg border border-white/10 bg-white/[0.08] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-mint/40 hover:bg-white/[0.12]">
                <div className={`mb-6 flex h-28 items-center justify-center overflow-hidden rounded-lg border border-slate-200 p-4 shadow-sm ${asset.logoClassName}`}>
                  <img src={asset.logo} alt={`${item.name} logo`} className="max-h-20 max-w-full object-contain" />
                </div>
                <h2 className="text-xl font-black text-white">{item.name}</h2>
                <p className="mt-3 flex-1 text-slate-300">{item.description}</p>
                <Link href={href} target={asset.href.startsWith("http") ? "_blank" : undefined} rel={asset.href.startsWith("http") ? "noopener" : undefined} className="mt-6 inline-flex items-center gap-2 font-extrabold text-mint">
                  {t.ecosystem.learnMore} {asset.href.startsWith("http") ? <ExternalLink className="size-4" /> : <ArrowRight className="size-4" />}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InstituteBody({ dictionary }: { dictionary: Messages }) {
  const t = dictionary;

  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(47,178,132,0.24),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(109,200,255,0.18),transparent_28%),linear-gradient(135deg,#071426_0%,#081827_48%,#06111f_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(114,223,189,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(109,200,255,.08)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="mb-6 flex h-24 w-full max-w-sm items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-ink p-4 shadow-[0_0_40px_rgba(47,178,132,0.14)]">
            <img src="/assets/logos/rfala-institute.svg" alt="RFALA Institute logo" className="max-h-16 max-w-full object-contain" />
          </div>
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">{t.institute.title}</h1>
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
            {t.institute.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="mt-6 rounded-xl border border-mint/20 bg-mint/10 p-5 font-bold leading-7 text-slate-100">{t.institute.human}</p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.08] p-5 shadow-soft backdrop-blur-2xl">
          <div className="mb-5 rounded-xl border border-white/10 bg-white/[0.06] p-4">
            <p className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/45">{t.institute.resources}</p>
            <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
              {learningPlatforms.map((platform) => (
                <div key={platform.name} className="group flex h-20 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-sm grayscale transition hover:-translate-y-0.5 hover:border-mint/50 hover:shadow-soft hover:grayscale-0">
                  <img src={platform.logo} alt={`${platform.name} logo`} className="max-h-12 max-w-full object-contain opacity-75 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-5 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald">{t.institute.dashboardLabel}</p>
              <h2 className="mt-1 text-2xl font-black">{t.institute.dashboardTitle}</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-mint/20 bg-mint/10 px-3 py-2 text-sm font-extrabold text-mint">
              <Network className="size-4" /> {t.institute.humanAi}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.institute.items.map((item, index) => {
              const Icon = instituteAssets[index] ?? Sparkles;
              return (
                <article key={item} className="rounded-lg border border-white/10 bg-white/[0.07] p-4 transition hover:border-mint/40 hover:bg-white/[0.1]">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-emerald to-sky text-xs font-black text-ink">0{index + 1}</span>
                    <Icon className="size-5 text-mint" />
                  </div>
                  <h3 className="text-sm font-extrabold text-white">{item}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesBody({ dictionary }: { dictionary: Messages }) {
  const t = dictionary;

  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_16%,rgba(47,178,132,0.22),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(109,200,255,0.16),transparent_26%),linear-gradient(135deg,#071426_0%,#102c3b_52%,#0f172a_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-mint">{t.services.label}</p>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">{t.services.title}</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-slate-300">{t.services.description}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {t.services.items.map((service, index) => {
            const asset = serviceAssets[index];
            const Icon = asset.icon;
            return (
              <article key={service.name} className="group relative flex min-h-[300px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.08] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-mint/40 hover:bg-white/[0.12]">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${asset.accent}`} />
                <div className="relative flex h-full w-full flex-col">
                  <div className="mb-7 flex items-start justify-between gap-5">
                    <div className={`grid size-14 place-items-center rounded-xl bg-gradient-to-br ${asset.accent} text-ink shadow-[0_0_36px_rgba(47,178,132,0.18)]`}>
                      <Icon className="size-7" />
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black text-slate-300">0{index + 1}</span>
                  </div>
                  <h2 className="text-2xl font-black tracking-tight text-white">{service.name}</h2>
                  <p className="mt-4 flex-1 text-base leading-7 text-slate-300">{service.description}</p>
                  <div className="mt-7 flex items-center gap-3 text-sm font-extrabold text-mint">
                    <span className="h-px flex-1 bg-gradient-to-r from-mint/50 to-transparent" />
                    <span className="inline-flex items-center gap-2">{t.services.capability} <ArrowRight className="size-4" /></span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VisionBody({ dictionary }: { dictionary: Messages }) {
  const t = dictionary;

  return (
    <section className="relative isolate bg-ink py-24 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_40%,rgba(47,178,132,0.25),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(215,168,71,0.18),transparent_30%)]" />
      <div className="mx-auto w-[min(980px,calc(100%-32px))] text-center">
        <Compass className="mx-auto mb-6 size-12 text-mint" />
        <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">{t.vision.title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">{t.vision.description}</p>
      </div>
    </section>
  );
}

export function ContentPage({ dictionary, locale, kind }: { dictionary: Messages; locale: Locale; kind: PageKind }) {
  return (
    <main className="min-h-screen bg-ink text-white">
      <Header dictionary={dictionary} locale={locale} />
      {kind === "about" ? <AboutBody dictionary={dictionary} /> : null}
      {kind === "ecosystem" ? <EcosystemBody dictionary={dictionary} locale={locale} /> : null}
      {kind === "institute" ? <InstituteBody dictionary={dictionary} /> : null}
      {kind === "services" ? <ServicesBody dictionary={dictionary} /> : null}
      {kind === "vision" ? <VisionBody dictionary={dictionary} /> : null}
      <Footer dictionary={dictionary} locale={locale} />
    </main>
  );
}
