import Link from "next/link";
import { ArrowLeft, ArrowRight, CircleDashed, ExternalLink, ShieldAlert, ShieldCheck } from "lucide-react";
import { Footer, Header, ecosystemAssets } from "./ContentPage";
import { ProductInterestForm } from "./ProductInterestForm";
import { DotGrid, ProductVisual, ProductsShowcase, StatusBadge, gradientText, primaryButton, secondaryButton } from "./ProductsShowcase";
import { advisoryPath, localizedPath } from "./siteNav";
import type { Locale, Messages, ProductKey } from "./siteNav";

const formAnchor: Record<ProductKey, string> = { water: "pilot-request", careerai: "early-access" };

function SectionHeading({ label, children }: { label?: string; children: string }) {
  return (
    <>
      {label ? <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-mint">{label}</p> : null}
      <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">{children}</h2>
    </>
  );
}

export function ProductPage({ dictionary, locale, product }: { dictionary: Messages; locale: Locale; product: ProductKey }) {
  const t = dictionary;
  const p = t.products;
  const copy = p[product];
  const form = t.forms[product];
  const anchor = formAnchor[product];
  const NoteIcon = product === "water" ? ShieldAlert : ShieldCheck;

  return (
    <main lang={locale} className="min-h-screen bg-ink text-white">
      <Header dictionary={t} locale={locale} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#050d1a] py-16 sm:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-15%] top-[-20%] h-[560px] w-[560px] rounded-full bg-emerald/10 blur-[120px]" />
          <div className="absolute right-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-sky/10 blur-[100px]" />
        </div>
        <DotGrid />
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] grid-cols-1 gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <Link href={localizedPath(locale, "/products")} className="mb-8 inline-flex items-center gap-2 rounded-md text-sm font-extrabold text-slate-300 transition hover:text-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint">
              <ArrowLeft className="size-4" /> {p.backToProducts}
            </Link>
            <div>
              <StatusBadge>{copy.badge}</StatusBadge>
            </div>
            <h1 className="mt-6 text-[clamp(2.6rem,7vw,4.75rem)] font-black leading-[0.95] tracking-[-0.04em]">
              {copy.namePrefix} <span className={`${gradientText} pb-1`}>{copy.nameHighlight}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-bold leading-8 text-slate-200 sm:text-2xl sm:leading-9">{copy.tagline}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={`#${anchor}`} className={primaryButton}>
                {copy.primaryCta}
                <ArrowRight className="size-5" />
              </a>
              <a href={product === "water" ? "#overview" : `#${anchor}`} className={secondaryButton}>
                {copy.secondaryCta}
              </a>
            </div>
          </div>
          <ProductVisual product={product} dictionary={t} className="shadow-[0_24px_90px_rgba(0,0,0,0.45)]" />
        </div>
      </section>

      {/* Overview and required note */}
      <section id="overview" className="scroll-mt-4 border-t border-white/10 py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <SectionHeading label={copy.name}>{p.sections.overview}</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
              {copy.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <aside aria-label={copy.noteTitle} className="rounded-xl border border-gold/40 bg-gold/10 p-6">
            <NoteIcon className="size-7 text-gold" />
            <p className="mt-4 text-lg font-black text-white">{copy.noteTitle}</p>
            <p className="mt-2 leading-7 text-slate-200">{copy.noteBody}</p>
          </aside>
        </div>

        {"workflow" in copy ? (
          <div className="mx-auto mt-16 w-[min(1180px,calc(100%-32px))]">
            <SectionHeading>{p.sections.workflow}</SectionHeading>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {copy.workflow.map((step, index) => (
                <li key={step} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-4 transition hover:border-mint/40">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-emerald to-sky text-xs font-black text-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-extrabold text-white">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </section>

      {/* Planned capabilities */}
      <section className="relative isolate border-t border-white/10 bg-midnight py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeading>{p.sections.capabilities}</SectionHeading>
          <p className="mt-4 max-w-3xl text-base font-bold text-mint">{p.sections.capabilitiesNote}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {copy.capabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-4 transition hover:border-mint/40 hover:bg-white/[0.09]">
                <CircleDashed className="mt-0.5 size-5 shrink-0 text-mint" />
                <span className="font-bold leading-6 text-slate-100">{capability}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Target users */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeading>{p.sections.audience}</SectionHeading>
          <ul className="mt-8 flex flex-wrap gap-3">
            {copy.audience.map((audience) => (
              <li key={audience} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-slate-100">
                {audience}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg leading-8 text-slate-300">
            {t.advisory.productsLink.before}
            <Link href={localizedPath(locale, advisoryPath)} className="font-extrabold text-mint underline underline-offset-4 hover:text-white">
              {t.advisory.productsLink.link}
            </Link>
            {t.advisory.productsLink.after}
          </p>
        </div>
      </section>

      {/* Form */}
      <section id={anchor} aria-labelledby={`${anchor}-title`} className="relative isolate scroll-mt-4 overflow-hidden border-t border-white/10 bg-[#050d1a] py-20">
        <DotGrid />
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <StatusBadge>{copy.badge}</StatusBadge>
            <h2 id={`${anchor}-title`} className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl">{form.title}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">{form.intro}</p>
            {"dataNoteTitle" in copy ? (
              <div className="mt-6 rounded-xl border border-mint/20 bg-mint/10 p-5">
                <p className="font-black text-white">{copy.dataNoteTitle}</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {copy.dataNoteBefore}
                  <a href="/privacy" className="font-extrabold text-mint underline underline-offset-2 hover:text-white">{copy.dataNoteLink}</a>
                  {copy.dataNoteAfter}
                </p>
              </div>
            ) : null}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.35)] sm:p-8">
            <ProductInterestForm kind={product} dictionary={t} locale={locale} />
          </div>
        </div>
      </section>

      <Footer dictionary={t} locale={locale} />
    </main>
  );
}

export function ProductsIndexPage({ dictionary, locale }: { dictionary: Messages; locale: Locale }) {
  const t = dictionary;

  return (
    <main lang={locale} className="min-h-screen bg-ink text-white">
      <Header dictionary={t} locale={locale} />
      <ProductsShowcase dictionary={t} locale={locale} headingLevel="h1" />

      <section className="border-t border-white/10 py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionHeading>{t.products.index.existingTitle}</SectionHeading>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{t.products.index.existingDescription}</p>
          <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.ecosystem.items.map((item, index) => {
              const asset = ecosystemAssets[index];
              const external = asset.href.startsWith("http");
              return (
                <li key={item.name} className="flex flex-col rounded-lg border border-white/10 bg-white/[0.06] p-5 transition hover:-translate-y-1 hover:border-mint/40 hover:bg-white/[0.1]">
                  <div className={`mb-5 flex h-20 items-center justify-center overflow-hidden rounded-lg border border-slate-200 p-3 ${asset.logoClassName}`}>
                    <img src={asset.logo} alt={`${item.name} logo`} className="max-h-14 max-w-full object-contain" />
                  </div>
                  <h3 className="text-lg font-black text-white">{item.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-300">{item.description}</p>
                  <Link
                    href={external ? asset.href : localizedPath(locale, asset.href)}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener" : undefined}
                    className="mt-5 inline-flex items-center gap-2 font-extrabold text-mint hover:text-white"
                  >
                    {t.ecosystem.learnMore}
                    {external ? <ExternalLink className="size-4" /> : <ArrowRight className="size-4" />}
                    <span className="sr-only">: {item.name}{external ? ` (${t.nav.productsMenu.newTab})` : ""}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Footer dictionary={t} locale={locale} />
    </main>
  );
}
