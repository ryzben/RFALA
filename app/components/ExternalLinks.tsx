import { ExternalLink } from "lucide-react";
import { linkedinUrl, studioUrl, youtubeUrl } from "./siteNav";
import type { Messages } from "./siteNav";

/** "RFALA Studio" entry for the desktop nav bar. External site, so it opens in a new tab. */
export function StudioNavLink({ dictionary }: { dictionary: Messages }) {
  const t = dictionary;

  return (
    <a href={studioUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 transition hover:text-mint">
      {t.nav.studio}
      <ExternalLink className="size-3.5 text-white/50" aria-hidden="true" />
      <span className="sr-only"> ({t.nav.productsMenu.newTab})</span>
    </a>
  );
}

const socialLinks = [
  {
    key: "linkedin",
    href: linkedinUrl,
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  },
  {
    key: "youtube",
    href: youtubeUrl,
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
  }
] as const;

/** Footer icon links to RFALA's social profiles. The icons are decorative; each link is named by its aria-label. */
export function SocialLinks({ dictionary }: { dictionary: Messages }) {
  const t = dictionary;

  return (
    <div className="flex gap-3 pt-2">
      {socialLinks.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.footer[link.key]} (${t.nav.productsMenu.newTab})`}
          className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-mint hover:text-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true" focusable="false">
            <path d={link.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}

/** Short home-page call to action for RFALA Studio. */
export function StudioCta({ dictionary }: { dictionary: Messages }) {
  const t = dictionary;
  const cta = t.studioCta;

  return (
    <section id="studio" className="relative isolate overflow-hidden bg-ink py-20 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_30%,rgba(206,75,67,0.22),transparent_32%),radial-gradient(circle_at_14%_70%,rgba(47,178,132,0.18),transparent_30%)]" />
      <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <img src="/assets/logos/rfala-studio.svg" alt="RFALA Studio logo" className="h-20 w-auto shrink-0 self-start rounded-2xl sm:self-auto" />
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-mint">{cta.label}</p>
            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">{cta.title}</h2>
          </div>
        </div>
        <a
          href={studioUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald px-8 py-4 text-sm font-extrabold text-white shadow-[0_0_32px_rgba(47,178,132,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(47,178,132,0.5)]"
        >
          {cta.cta}
          <ExternalLink className="size-4" aria-hidden="true" />
          <span className="sr-only">({t.nav.productsMenu.newTab})</span>
        </a>
      </div>
    </section>
  );
}
