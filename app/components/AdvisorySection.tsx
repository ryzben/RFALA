import Link from "next/link";
import { ArrowRight, Check, Users, Code2 } from "lucide-react";
import { DotGrid, StatusBadge, gradientText, primaryButton } from "./ProductsShowcase";
import { advisoryPath, localizedPath } from "./siteNav";
import type { Locale, Messages } from "./siteNav";

/** Service heading: mint pill label, heavy headline with the gradient on one word. */
export function AdvisoryHeading({ dictionary, as = "h2", id }: { dictionary: Messages; as?: "h1" | "h2"; id?: string }) {
  const a = dictionary.advisory;
  const Heading = as;
  return (
    <>
      <StatusBadge>{a.label}</StatusBadge>
      <Heading id={id} className={`mt-5 font-black leading-[1.02] tracking-tight ${as === "h1" ? "text-[clamp(2.5rem,6vw,4.25rem)] tracking-[-0.035em]" : "text-4xl sm:text-5xl"}`}>
        {a.titleBefore} <span className={gradientText}>{a.titleHighlight}</span>
      </Heading>
      <p className="mt-5 text-xl font-bold leading-8 text-mint">{a.tagline}</p>
    </>
  );
}

/**
 * Illustration of the advisory role: RFALA sits between the business owner and the development team.
 * Static (no animation). The connectors are decorative; the three roles are real text.
 */
export function AdvisoryDiagram({ dictionary }: { dictionary: Messages }) {
  const d = dictionary.advisory.diagram;
  const Connector = () => (
    <div aria-hidden="true" className="flex h-9 justify-center">
      <span className="relative w-px bg-gradient-to-b from-white/30 via-mint to-white/30">
        <span className="absolute -left-[3px] top-0 size-[7px] rounded-full bg-mint/80" />
        <span className="absolute -left-[3px] bottom-0 size-[7px] rounded-full bg-mint/80" />
      </span>
    </div>
  );
  const node = "rounded-xl border p-4 text-center";

  return (
    <figure className="relative rounded-2xl border border-white/10 bg-[#04101d] p-5 pt-12 shadow-[0_24px_90px_rgba(0,0,0,0.4)] sm:p-6 sm:pt-12">
      <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-white/85">
        {d.label}
      </span>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative">
        <div className={`${node} border-white/10 bg-white/[0.06]`}>
          <Users aria-hidden="true" className="mx-auto size-5 text-sky" />
          <p className="mt-2 font-black text-white">{d.owner}</p>
          <p className="mt-1 text-sm text-slate-300">{d.ownerRole}</p>
        </div>
        <Connector />
        <div className={`${node} border-mint/50 bg-mint/10 shadow-[0_0_40px_rgba(114,223,189,0.15)]`}>
          <p className="text-lg font-black text-white">{d.rfala}</p>
          <p className="mt-1 text-sm font-semibold text-slate-100">{d.rfalaRole}</p>
        </div>
        <Connector />
        <div className={`${node} border-white/10 bg-white/[0.06]`}>
          <Code2 aria-hidden="true" className="mx-auto size-5 text-sky" />
          <p className="mt-2 font-black text-white">{d.team}</p>
          <p className="mt-1 text-sm text-slate-300">{d.teamRole}</p>
        </div>
      </div>
      <figcaption className="relative mt-4 text-center text-xs font-semibold text-slate-400">{d.caption}</figcaption>
    </figure>
  );
}

/** Concise homepage section, placed right after Capabilities. */
export function AdvisorySection({ dictionary, locale }: { dictionary: Messages; locale: Locale }) {
  const a = dictionary.advisory;
  const highlights = a.homeHighlights.map((index) => a.provide[index]);

  return (
    <section id="advisory" aria-labelledby="advisory-title" className="relative isolate overflow-hidden border-t border-white/10 bg-[#050d1a] py-24 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-20%] h-[480px] w-[480px] rounded-full bg-emerald/10 blur-[120px]" />
      </div>
      <DotGrid />
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] grid-cols-1 gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <div>
          <AdvisoryHeading dictionary={dictionary} id="advisory-title" />
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{a.intro}</p>
          <div className="mt-8">
            <Link href={localizedPath(locale, advisoryPath)} className={primaryButton}>
              {a.learnMore}
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
        <ul className="grid gap-3">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.06] p-5 transition hover:border-mint/50 hover:bg-white/[0.09]">
              <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-emerald to-sky text-ink">
                <Check className="size-5" />
              </span>
              <span className="text-lg font-extrabold text-white">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
