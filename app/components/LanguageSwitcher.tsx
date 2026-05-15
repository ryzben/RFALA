"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Locale = "en" | "fr";

function hrefFor(locale: Locale, pathname: string, hash = "") {
  const withoutLocale = pathname.replace(/^\/fr(?=\/|$)/, "") || "/";
  const base = locale === "fr" ? `/fr${withoutLocale === "/" ? "" : withoutLocale}` : withoutLocale;

  return `${base}${hash}`;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  return (
    <div className="flex items-center rounded-lg border border-white/10 bg-white/10 p-1 text-xs font-black text-white/60 backdrop-blur-xl">
      {(["en", "fr"] as const).map((item) => (
        <a
          key={item}
          href={hrefFor(item, pathname, hash)}
          className={`rounded-md px-2.5 py-1.5 transition ${locale === item ? "bg-mint text-ink" : "hover:text-mint"}`}
        >
          {item.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
