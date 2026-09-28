import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { AdvisoryDiagram, AdvisoryHeading } from "./AdvisorySection";
import { Footer, Header } from "./ContentPage";
import { ProductInterestForm } from "./ProductInterestForm";
import { DotGrid, StatusBadge, primaryButton } from "./ProductsShowcase";
import { localizedPath } from "./siteNav";
import type { Locale, Messages } from "./siteNav";

const formAnchor = "discovery-session";

export function AdvisoryPage({ dictionary, locale }: { dictionary: Messages; locale: Locale }) {
  const t = dictionary;
  const a = t.advisory;
  const form = t.forms.advisory;

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
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] grid-cols-1 gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <Link href={localizedPath(locale, "/services")} className="mb-8 inline-flex items-center gap-2 rounded-md text-sm font-extrabold text-slate-300 transition hover:text-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint">
              <ArrowLeft className="size-4" /> {a.allCapabilities}
            </Link>
            <div>
              <AdvisoryHeading dictionary={t} as="h1" />
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{a.intro}</p>
            <div className="mt-9">
              <a href={`#${formAnchor}`} className={primaryButton}>
                {a.cta}
                <ArrowRight className="size-5" />
              </a>
            </div>
          </div>
          <AdvisoryDiagram dictionary={t} />
        </div>
      </section>

      {/* Body and checklist */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              {a.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <p className="mt-8 flex gap-3 rounded-xl border border-mint/25 bg-mint/10 p-5 font-bold leading-7 text-slate-100">
              <ShieldCheck aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-mint" />
              <span>{a.independence}</span>
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
            <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">{a.provideTitle}</h2>
            <ul className="mt-6 grid gap-4">
              {a.provide.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-mint" />
                  <span className="font-bold leading-6 text-slate-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ideal for and closing line */}
      <section className="border-t border-white/10 bg-midnight py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">{a.idealTitle}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{a.ideal}</p>
          <p className="mt-10 max-w-3xl border-l-2 border-mint/60 pl-5 text-xl font-black leading-8 text-white sm:text-2xl sm:leading-9">{a.closing}</p>
        </div>
      </section>

      {/* Inquiry form */}
      <section id={formAnchor} aria-labelledby={`${formAnchor}-title`} className="relative isolate scroll-mt-4 overflow-hidden border-t border-white/10 bg-[#050d1a] py-20">
        <DotGrid />
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] grid-cols-1 gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <StatusBadge>{a.label}</StatusBadge>
            <h2 id={`${formAnchor}-title`} className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl">{form.title}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">{form.intro}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.35)] sm:p-8">
            <ProductInterestForm kind="advisory" dictionary={t} locale={locale} />
          </div>
        </div>
      </section>

      {/* Cross-link to RFALA's own products */}
      <section className="border-t border-white/10 py-12">
        <p className="mx-auto w-[min(1180px,calc(100%-32px))] text-lg leading-8 text-slate-300">
          {a.ownProducts.before}
          <Link href={localizedPath(locale, "/products")} className="font-extrabold text-mint underline underline-offset-4 hover:text-white">
            {a.ownProducts.link}
          </Link>
          {a.ownProducts.after}
        </p>
      </section>

      <Footer dictionary={t} locale={locale} />
    </main>
  );
}
