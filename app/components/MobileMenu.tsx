"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Locale = "en" | "fr";

type NavItem = {
  href: string;
  label: string;
};

export function MobileMenu({ items, locale }: { items: NavItem[]; locale: Locale }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Open navigation menu"
        className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/10 text-white backdrop-blur-xl transition hover:border-mint hover:text-mint"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open ? (
        <div className="absolute right-0 top-14 z-50 w-64 rounded-xl border border-white/10 bg-ink p-3 shadow-[0_24px_80px_rgba(0,0,0,0.38)]">
          <div className="grid gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-black text-white/80 transition hover:bg-white/10 hover:text-mint"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 border-t border-white/10 pt-3">
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
