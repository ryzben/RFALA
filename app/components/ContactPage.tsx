import Link from "next/link";
import { ArrowRight, BrainCircuit, Globe2, Mail, MessageCircle, Network, Phone, Sparkles } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import enMessages from "../../messages/en.json";

type Messages = typeof enMessages;
type Locale = "en" | "fr";

const contactIcons = [BrainCircuit, Sparkles, Network];

export function ContactPage({ dictionary, locale }: { dictionary: Messages; locale: Locale }) {
  const t = dictionary;
  const homeHref = locale === "fr" ? "/fr" : "/";
  const contactHref = `mailto:${t.contact.email}?subject=RFALA%20Project%20Inquiry`;
  const phoneHref = "tel:+19175822768";
  const whatsappHref = "https://wa.me/19175822768";

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <header className="border-b border-white/10 bg-ink/80 backdrop-blur-2xl">
        <nav className="mx-auto flex h-20 w-[min(1180px,calc(100%-32px))] items-center justify-between">
          <Link href={homeHref} className="flex items-center gap-3 font-extrabold" aria-label="RFALA home">
            <img src="/assets/logos/rfala-mountain-ai-logo-ink.png" alt="RFALA" className="h-14 w-52 object-contain" />
          </Link>
          <div className="hidden items-center gap-7 text-sm font-bold text-white/80 md:flex">
            <Link href={locale === "fr" ? "/fr/about" : "/about"} className="transition hover:text-mint">{t.nav.about}</Link>
            <Link href={locale === "fr" ? "/fr/ecosystem" : "/ecosystem"} className="transition hover:text-mint">{t.nav.ecosystem}</Link>
            <Link href={locale === "fr" ? "/fr/institute" : "/institute"} className="transition hover:text-mint">{t.nav.institute}</Link>
            <Link href={locale === "fr" ? "/fr/services" : "/services"} className="transition hover:text-mint">{t.nav.services}</Link>
            <Link href={locale === "fr" ? "/fr/vision" : "/vision"} className="transition hover:text-mint">{t.nav.vision}</Link>
            <LanguageSwitcher locale={locale} />
          </div>
          <div className="md:hidden">
            <LanguageSwitcher locale={locale} />
          </div>
        </nav>
      </header>

      <section className="relative isolate py-20 sm:py-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_16%,rgba(47,178,132,0.24),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(109,200,255,0.18),transparent_26%),linear-gradient(135deg,#071426_0%,#102c3b_52%,#0f172a_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-mint">{t.contact.label}</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-tight sm:text-7xl">{t.contact.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{t.contact.description}</p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={contactHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-mint px-6 py-4 text-sm font-black text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-white">
                <Mail className="size-5" />
                {t.contact.primary}
              </a>
              <a href={phoneHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-sm font-black text-ink shadow-[0_0_36px_rgba(215,168,71,0.22)] transition hover:-translate-y-0.5 hover:bg-white">
                <Phone className="size-5" />
                {t.contact.call}
              </a>
              <Link href={`${homeHref}#projects`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-mint hover:text-mint">
                {t.contact.secondary}
                <ArrowRight className="size-5" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {t.contact.details.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200 backdrop-blur-xl">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <div className="rounded-xl border border-white/10 bg-slate-950/70 p-6">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-emerald">{t.contact.emailLabel}</p>
                  <a href={contactHref} className="mt-2 block text-2xl font-black text-white transition hover:text-mint">{t.contact.email}</a>
                  <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.22em] text-gold">{t.contact.phoneLabel}</p>
                  <a href={phoneHref} className="mt-2 block text-2xl font-black text-white transition hover:text-gold">{t.contact.phone}</a>
                </div>
                <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-emerald to-sky text-ink">
                  <Globe2 className="size-6" />
                </div>
              </div>

              <div className="mb-5 flex gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener"
                  aria-label={t.contact.whatsapp}
                  className="grid size-14 place-items-center rounded-full bg-[#4fce5d] text-white shadow-[0_12px_30px_rgba(79,206,93,0.32)] transition hover:-translate-y-1 hover:scale-105"
                >
                  <MessageCircle className="size-7" />
                </a>
                <a
                  href={phoneHref}
                  aria-label={t.contact.call}
                  className="grid size-14 place-items-center rounded-full bg-gold text-white shadow-[0_12px_30px_rgba(215,168,71,0.3)] transition hover:-translate-y-1 hover:scale-105"
                >
                  <Phone className="size-7" />
                </a>
              </div>

              <p className="rounded-xl border border-mint/20 bg-mint/10 p-4 text-base font-bold leading-7 text-slate-100">{t.contact.response}</p>

              <div className="mt-5 grid gap-4">
                {t.contact.cards.map((card, index) => {
                  const Icon = contactIcons[index] ?? Sparkles;
                  return (
                    <article key={card.title} className="group rounded-xl border border-white/10 bg-white/[0.06] p-5 transition hover:-translate-y-1 hover:border-mint/50 hover:bg-white/[0.1]">
                      <div className="flex gap-4">
                        <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-white/10 text-mint transition group-hover:bg-mint group-hover:text-ink">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h2 className="font-black text-white">{card.title}</h2>
                          <p className="mt-2 text-sm leading-6 text-slate-400">{card.description}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
