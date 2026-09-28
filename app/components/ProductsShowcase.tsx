import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CareerAIVisual, WaterIntelligenceVisual } from "./ProductVisuals";
import { localizedPath, productPaths } from "./siteNav";
import type { Locale, Messages, ProductKey } from "./siteNav";

/* Shared building blocks for the technology products section and product pages. */

/** Same gradient as the homepage hero headline. */
export const gradientText = "bg-gradient-to-r from-[#2FB284] via-[#00e5a0] to-[#38bdf8] bg-clip-text text-transparent [filter:saturate(1.3)]";

/** Same mint primary and outline secondary buttons used on the Contact page and page heroes. */
export const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-mint px-6 py-4 text-sm font-black text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink";
export const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-mint hover:text-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

/** Dot grid from the homepage hero. */
export function DotGrid() {
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />;
}

/** Mint status pill, modelled on the hero eyebrow pill. */
export function StatusBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1.5">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-mint" />
      <span className="text-[0.66rem] font-extrabold uppercase tracking-[0.2em] text-mint">{children}</span>
    </span>
  );
}

export function ProductVisual({ product, dictionary, className }: { product: ProductKey; dictionary: Messages; className?: string }) {
  const p = dictionary.products;
  return product === "water"
    ? <WaterIntelligenceVisual labels={p.visuals} conceptLabel={p.conceptPreview} className={className} />
    : <CareerAIVisual labels={p.visuals} conceptLabel={p.conceptPreview} className={className} />;
}

const productOrder: ProductKey[] = ["water", "careerai"];

export function ProductsShowcase({ dictionary, locale, headingLevel = "h2" }: { dictionary: Messages; locale: Locale; headingLevel?: "h1" | "h2" }) {
  const p = dictionary.products;
  const Heading = headingLevel;
  const CardHeading = headingLevel === "h1" ? "h2" : "h3";

  return (
    <section id="products" aria-labelledby="products-title" className="relative isolate overflow-hidden border-t border-white/10 bg-[#050d1a] py-24 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-emerald/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[440px] w-[440px] rounded-full bg-sky/10 blur-[110px]" />
      </div>
      <DotGrid />

      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div className="mb-12 max-w-4xl">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-mint">{p.label}</p>
          <Heading id="products-title" className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            {p.titleBefore} <span className={gradientText}>{p.titleHighlight}</span>{p.titleAfter ? ` ${p.titleAfter}` : null}
          </Heading>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{p.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {productOrder.map((key) => {
            const product = p[key];
            return (
              <article
                key={key}
                className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.06] p-5 transition hover:-translate-y-1 hover:border-mint/50 hover:bg-white/[0.09] focus-within:border-mint/50 sm:p-6"
              >
                <ProductVisual product={key} dictionary={dictionary} />
                <div className="mt-6">
                  <StatusBadge>{product.badge}</StatusBadge>
                </div>
                <CardHeading className="mt-4 text-2xl font-black tracking-tight text-white">{product.name}</CardHeading>
                <p className="mt-2 text-lg font-bold leading-7 text-mint">{product.tagline}</p>
                <p className="mt-3 flex-1 leading-7 text-slate-300">{product.summary}</p>
                <div className="mt-6">
                  <Link href={localizedPath(locale, productPaths[key])} className={primaryButton}>
                    {product.exploreCta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-12 max-w-3xl border-l-2 border-mint/60 pl-5 text-lg font-bold leading-8 text-slate-200">{p.closing}</p>
      </div>
    </section>
  );
}
