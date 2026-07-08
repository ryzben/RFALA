import Link from "next/link";
import { MobileMenu } from "../components/MobileMenu";

export const metadata = {
  title: "Privacy Policy | RFALA",
  description: "RFALA privacy policy."
};

export default function PrivacyPage() {
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/ecosystem", label: "Ecosystem" },
    { href: "/institute", label: "Institute" },
    { href: "/services", label: "Services" },
    { href: "/vision", label: "Vision" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-white/10 bg-ink">
        <nav className="mx-auto flex h-20 w-[min(1120px,calc(100%-32px))] items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-extrabold text-white" aria-label="RFALA home">
            <img src="/assets/logos/rfala-logo.png" alt="RFALA" className="h-14 w-52 object-contain sm:h-16 sm:w-60" />
          </Link>
          <div className="hidden items-center gap-5 text-sm font-bold text-white/70 md:flex">
            <Link href="/about" className="hover:text-mint">About</Link>
            <Link href="/ecosystem" className="hover:text-mint">Ecosystem</Link>
            <Link href="/contact" className="hover:text-mint">Contact</Link>
          </div>
          <MobileMenu items={navItems} locale="en" />
        </nav>
      </header>
      <section className="mx-auto w-[min(820px,calc(100%-32px))] py-20">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-emerald">Privacy Policy</p>
        <h1 className="text-4xl font-black leading-tight tracking-tight text-ink sm:text-6xl">RFALA Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
          <p>RFALA respects your privacy. Information submitted through this website is used only to respond to your message, support RFALA services, and improve future educational and innovation initiatives.</p>
          <p>We do not sell personal information. If third-party services are added in the future, this page should be updated to explain how those services collect and process information.</p>
          <p>For privacy questions, contact <a className="font-extrabold text-emerald" href="mailto:hello@rfala.com">hello@rfala.com</a>.</p>
        </div>
      </section>
    </main>
  );
}
