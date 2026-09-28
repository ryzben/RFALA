"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import type { DropdownNav } from "./siteNav";

/**
 * Desktop disclosure menu used for Products and Capabilities.
 * A button toggles a panel of links (disclosure pattern, not role="menu", because the items are plain navigation links).
 * In split mode the label stays an ordinary link and a separate chevron button, with its own accessible name, opens the panel.
 * Keyboard: Enter/Space/ArrowDown open, ArrowUp/ArrowDown/Home/End move between links, Escape closes and returns focus.
 */
export function NavDropdown({ nav }: { nav: DropdownNav }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pendingFocus = useRef<"first" | "last" | null>(null);

  const links = () => Array.from(rootRef.current?.querySelectorAll<HTMLAnchorElement>("[data-nav-link]") ?? []);

  useEffect(() => {
    if (!open) return;

    if (pendingFocus.current) {
      const items = links();
      (pendingFocus.current === "first" ? items[0] : items[items.length - 1])?.focus();
      pendingFocus.current = null;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const close = (returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  };

  const onButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      pendingFocus.current = event.key === "ArrowDown" ? "first" : "last";
      if (open) {
        const items = links();
        (event.key === "ArrowDown" ? items[0] : items[items.length - 1])?.focus();
        pendingFocus.current = null;
      } else {
        setOpen(true);
      }
    }
  };

  const onRootKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!open) return;
    if (event.key === "Escape") {
      event.preventDefault();
      close(true);
      return;
    }

    const items = links();
    const index = items.indexOf(document.activeElement as HTMLAnchorElement);
    if (index === -1) return;

    let next: number | null = null;
    if (event.key === "ArrowDown") next = (index + 1) % items.length;
    if (event.key === "ArrowUp") next = (index - 1 + items.length) % items.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = items.length - 1;
    if (next !== null) {
      event.preventDefault();
      items[next]?.focus();
    }
  };

  const focusRing = "focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-4 focus-visible:ring-offset-black";
  const linkClass =
    "rounded-lg px-3 py-2 outline-none transition hover:bg-white/10 focus-visible:bg-white/10 focus-visible:ring-2 focus-visible:ring-mint";

  return (
    <div
      ref={rootRef}
      className="relative"
      onKeyDown={onRootKeyDown}
      onBlur={(event) => {
        if (open && !event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      {nav.split ? (
        <span className="inline-flex items-center gap-1">
          <Link href={nav.href} className={`rounded-md outline-none transition hover:text-mint ${focusRing}`}>
            {nav.label}
          </Link>
          <button
            ref={buttonRef}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={nav.toggleLabel ?? nav.label}
            onClick={() => setOpen((value) => !value)}
            onKeyDown={onButtonKeyDown}
            className={`grid size-6 place-items-center rounded-md outline-none transition hover:text-mint ${focusRing} ${open ? "text-mint" : ""}`}
          >
            <ChevronDown aria-hidden="true" className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        </span>
      ) : (
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          onKeyDown={onButtonKeyDown}
          className={`inline-flex items-center gap-1 rounded-md outline-none transition hover:text-mint ${focusRing} ${open ? "text-mint" : ""}`}
        >
          {nav.label}
          <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      )}

      <div
        id={panelId}
        hidden={!open}
        className={`absolute left-1/2 top-full z-50 mt-5 ${nav.compact ? "w-72" : "w-[min(34rem,calc(100vw-32px))]"} -translate-x-1/2 rounded-xl border border-white/10 bg-ink p-3 text-left shadow-[0_24px_80px_rgba(0,0,0,0.45)]`}
      >
        <div className={`grid gap-3 ${nav.groups.length > 1 ? "sm:grid-cols-[1.15fr_.85fr]" : ""}`}>
          {nav.groups.map((group, groupIndex) => (
            <div key={group.heading || groupIndex} className={groupIndex > 0 ? "border-t border-white/10 pt-3 sm:border-l sm:border-t-0 sm:pl-3 sm:pt-0" : undefined}>
              {group.heading ? <p className="px-3 pb-2 pt-1 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-mint">{group.heading}</p> : null}
              <ul className="grid gap-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      data-nav-link
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener" : undefined}
                      onClick={() => setOpen(false)}
                      className={`${linkClass} block`}
                    >
                      <span className="flex items-center gap-2 text-sm font-black text-white">
                        {link.label}
                        {link.external ? (
                          <>
                            <ExternalLink className="size-3.5 text-white/60" />
                            <span className="sr-only">({nav.newTab})</span>
                          </>
                        ) : null}
                      </span>
                      {link.description ? <span className="mt-0.5 block text-xs font-semibold leading-5 text-slate-300">{link.description}</span> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {nav.viewAll ? (
          <div className="mt-3 border-t border-white/10 pt-3">
            <Link
              href={nav.href}
              data-nav-link
              onClick={() => setOpen(false)}
              className={`${linkClass} flex items-center gap-2 text-sm font-extrabold text-mint`}
            >
              {nav.viewAll} <ArrowRight className="size-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
