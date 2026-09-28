"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { NavGroup } from "./siteNav";

type Locale = "en" | "fr";

type NavItem = {
  href: string;
  label: string;
  /** Optional nested groups, rendered as an expandable section (used for Products). */
  groups?: NavGroup[];
  /** Label for the link to the section's own page, shown at the end of the expanded groups. */
  viewAllLabel?: string;
  /** Screen-reader hint appended to external links. */
  newTabLabel?: string;
};

function MobileGroup({ item, onNavigate }: { item: NavItem & { groups: NavGroup[] }; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <div>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((value) => !value)}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-black text-white/80 transition hover:bg-white/10 hover:text-mint"
      >
        {item.label}
        <ChevronDown className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      <div id={panelId} hidden={!expanded} className="mb-1 ml-4 border-l border-white/10 pl-2">
        {item.groups.map((group) => (
          <div key={group.heading} className="pt-2">
            <p className="px-3 pb-1 text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-mint">{group.heading}</p>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener" : undefined}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-bold text-white/80 transition hover:bg-white/10 hover:text-mint"
                  >
                    {link.label}
                    {link.external ? (
                      <>
                        <ExternalLink className="size-3.5 text-white/50" />
                        {item.newTabLabel ? <span className="sr-only">({item.newTabLabel})</span> : null}
                      </>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {item.viewAllLabel ? (
          <Link
            href={item.href}
            onClick={onNavigate}
            className="mt-1 block rounded-lg px-3 py-2.5 text-sm font-extrabold text-mint transition hover:bg-white/10"
          >
            {item.viewAllLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export function MobileMenu({ items, locale }: { items: NavItem[]; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="relative md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Open navigation menu"
        className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/10 text-white backdrop-blur-xl transition hover:border-mint hover:text-mint"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open ? (
        <div className="absolute right-0 top-14 z-50 max-h-[calc(100vh-6rem)] w-64 overflow-y-auto rounded-xl border border-white/10 bg-ink p-3 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
          <div className="grid gap-1">
            {items.map((item) =>
              item.groups ? (
                <MobileGroup key={item.href} item={{ ...item, groups: item.groups }} onNavigate={() => setOpen(false)} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-black text-white/80 transition hover:bg-white/10 hover:text-mint"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
          <div className="mt-3 border-t border-white/10 pt-3">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
