"use client";

import { motion } from "framer-motion";
import type { ComponentType, ReactNode } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Code2,
  Compass,
  ExternalLink,
  GraduationCap,
  Megaphone,
  MonitorSmartphone,
  Network,
  Palette,
  Rocket,
  SearchCheck,
  Sparkles,
  UsersRound
} from "lucide-react";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { MobileMenu } from "./components/MobileMenu";
import enMessages from "../messages/en.json";

type IconType = ComponentType<{ className?: string }>;
type Messages = typeof enMessages;
type Locale = "en" | "fr";

const ecosystem = [
  {
    name: "Xenova Studio",
    href: "https://xenovastudio.com",
    icon: Palette,
    logo: "/assets/logos/xenova-studio.svg",
    logoClassName: "bg-ink",
    description: "Digital marketing, branding, web development, lead generation, and creative solutions."
  },
  {
    name: "Maroclist",
    href: "https://maroclist.com",
    icon: Building2,
    logo: "/assets/logos/maroclist-logo2.jpg",
    description: "Modern platform for listings, rentals, and marketplace services focused on Morocco."
  },
  {
    name: "Islamic School Review (ISR)",
    href: "https://islamicschoolreview.com",
    icon: SearchCheck,
    logo: "/assets/logos/islamic-school-review.svg",
    logoClassName: "bg-white",
    description: "Directory and review platform helping Muslim families discover Islamic schools across America."
  },
  {
    name: "RFALA Institute",
    href: "/institute",
    icon: GraduationCap,
    logo: "/assets/logos/rfala-institute.svg",
    logoClassName: "bg-ink",
    description: "Educational branch focused on AI, technology, mentorship, and future-ready learning."
  }
];

const services = [
  {
    name: "AI Solutions",
    description: "Custom AI systems, automation, intelligent workflows, and future-ready technology solutions.",
    icon: BrainCircuit,
    accent: "from-emerald to-sky",
    photo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop&auto=format"
  },
  {
    name: "AI Auditing",
    description: "Independent assessments of how your business uses AI today and where it could go next. We review your workflows, tools, and data practices, then deliver a clear, practical roadmap for adopting AI with confidence.",
    icon: SearchCheck,
    accent: "from-mint to-emerald",
    photo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop&auto=format"
  },
  {
    name: "Web & App Development",
    description: "Modern websites, scalable platforms, mobile apps, and digital product development.",
    icon: Code2,
    accent: "from-sky to-mint",
    photo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop&auto=format"
  },
  {
    name: "Digital Marketing",
    description: "Brand growth, SEO, content strategy, social media, and lead generation solutions.",
    icon: Megaphone,
    accent: "from-gold to-emerald",
    photo: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=600&h=300&fit=crop&auto=format"
  },
  {
    name: "Branding & Media",
    description: "Creative identity, digital storytelling, media production, and visual brand experiences.",
    icon: Sparkles,
    accent: "from-mint to-sky",
    photo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=300&fit=crop&auto=format"
  },
  {
    name: "Research & Innovation",
    description: "Emerging technology initiatives, innovation labs, and future-driven digital projects.",
    icon: Rocket,
    accent: "from-sky to-gold",
    photo: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=300&fit=crop&auto=format"
  },
  {
    name: "Learning Technologies",
    description: "Future-focused learning systems, mentorship programs, and digital knowledge platforms.",
    icon: MonitorSmartphone,
    accent: "from-emerald to-gold",
    photo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop&auto=format"
  }
];

const instituteItems = [
  { label: "Live instructor support", value: "01", tone: "from-emerald to-sky" },
  { label: "One-on-one mentorship", value: "02", tone: "from-sky to-mint" },
  { label: "Group learning sessions", value: "03", tone: "from-gold to-emerald" },
  { label: "Market-focused pathways", value: "04", tone: "from-emerald to-gold" },
  { label: "Career-ready practical skills", value: "05", tone: "from-sky to-gold" },
  { label: "Accountability and progress tracking", value: "06", tone: "from-mint to-emerald" }
];

const learningPlatforms = [
  { name: "MIT Open Learning", logo: "/assets/logos/mit-open-learning.svg" },
  { name: "Harvard Online", logo: "/assets/logos/harvard-online.svg" },
  { name: "Coursera", logo: "/assets/logos/coursera.svg" },
  { name: "edX", logo: "/assets/logos/edx.svg" }
];

const dashboardSignals = [
  { label: "Skill Map", value: "Assess", icon: BrainCircuit },
  { label: "Mentor Sync", value: "Guide", icon: UsersRound },
  { label: "Applied Builds", value: "Build", icon: Code2 },
  { label: "Career Path", value: "Launch", icon: Rocket }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-emerald">{children}</p>;
}

function SectionIntro({ label, title, text }: { label: string; title: string; text?: string }) {
  return (
    <div className="mb-12 max-w-4xl">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}

export function HomePage({ dictionary = enMessages, locale = "en" }: { dictionary?: Messages; locale?: Locale }) {
  const t = dictionary;
  const route = (path: string) => locale === "fr" ? `/fr${path === "/" ? "" : path}` : path;
  const localizedEcosystem = ecosystem.map((item, index) => ({
    ...item,
    name: t.ecosystem.items[index]?.name ?? item.name,
    description: t.ecosystem.items[index]?.description ?? item.description
  }));
  const localizedServices = services.map((item, index) => ({
    ...item,
    name: t.services.items[index]?.name ?? item.name,
    description: t.services.items[index]?.description ?? item.description
  }));
  const localizedInstituteItems = instituteItems.map((item, index) => ({
    ...item,
    label: t.institute.items[index] ?? item.label
  }));
  const localizedDashboardSignals = dashboardSignals.map((item, index) => ({
    ...item,
    label: t.institute.signals[index]?.label ?? item.label,
    value: t.institute.signals[index]?.value ?? item.value
  }));
  const navItems = [
    { href: route("/about"), label: t.nav.about },
    { href: route("/ecosystem"), label: t.nav.ecosystem },
    { href: route("/institute"), label: t.nav.institute },
    { href: route("/services"), label: t.nav.services },
    { href: route("/vision"), label: t.nav.vision },
    { href: route("/contact"), label: t.nav.contact }
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black">
        <nav className="mx-auto flex h-20 w-[min(1180px,calc(100%-32px))] items-center justify-between text-white">
          <a href={route("/")} className="flex items-center gap-3 font-extrabold" aria-label="RFALA home">
            <img src="/assets/logos/rfala-logo.png" alt="RFALA" className="h-14 w-52 object-contain sm:h-16 sm:w-60" />
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold text-white/80 md:flex">
            <a href={route("/about")} className="transition hover:text-mint">{t.nav.about}</a>
            <a href={route("/ecosystem")} className="transition hover:text-mint">{t.nav.ecosystem}</a>
            <a href={route("/institute")} className="transition hover:text-mint">{t.nav.institute}</a>
            <a href={route("/services")} className="transition hover:text-mint">{t.nav.services}</a>
            <a href={route("/vision")} className="transition hover:text-mint">{t.nav.vision}</a>
            <a href={route("/contact")} className="transition hover:text-mint">{t.nav.contact}</a>
            <LanguageSwitcher locale={locale} />
          </div>
          <MobileMenu items={navItems} locale={locale} />
        </nav>
      </header>

      <section id="top" className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050d1a] pt-20 text-white">
        {/* Ambient orbs — large, soft, layered */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-20%] top-[-10%] h-[700px] w-[700px] rounded-full bg-emerald/10 blur-[120px]" />
          <div className="absolute right-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-sky-400/8 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[30%] h-[400px] w-[600px] rounded-full bg-mint/6 blur-[90px]" />
        </div>
        {/* Dot grid overlay */}
        <div className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
        {/* Top edge vignette */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#050d1a] to-transparent" />
        {/* Bottom edge vignette */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#050d1a] to-transparent" />

        <div className="mx-auto flex w-[min(860px,calc(100%-32px))] flex-col items-center text-center">

          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/8 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.25em] text-emerald">{t.hero.label}</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-[clamp(3rem,8.5vw,6.5rem)] font-black leading-[0.9] tracking-[-0.04em]">
              <span className="block text-white">{t.hero.title.split(" ").slice(0, Math.ceil(t.hero.title.split(" ").length / 2)).join(" ")}</span>
              <span className="block bg-gradient-to-r from-[#2FB284] via-[#00e5a0] to-[#38bdf8] bg-clip-text text-transparent pb-2 [filter:saturate(1.3)]">
                {t.hero.title.split(" ").slice(Math.ceil(t.hero.title.split(" ").length / 2)).join(" ")}
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-xl text-[1.05rem] leading-[1.75] text-slate-400"
          >
            {t.hero.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href={route("/ecosystem")}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-emerald px-8 py-4 text-sm font-extrabold text-white shadow-[0_0_32px_rgba(47,178,132,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(47,178,132,0.5)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              {t.hero.primary} <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href={route("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/5 px-8 py-4 text-sm font-extrabold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald/60 hover:bg-white/10"
            >
              {t.hero.secondary}
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 flex w-full items-center justify-center divide-x divide-white/10 border-t border-white/[0.07] pt-10"
          >
            {[
              { value: "20+", label: "Years of Experience" },
              { value: "4", label: "Active Platforms" },
              { value: "2", label: "Continents" },
              { value: "∞", label: "Ambition" }
            ].map((stat) => (
              <div key={stat.label} className="flex-1 px-6 text-center first:pl-0 last:pr-0">
                <p className="text-3xl font-black tabular-nums text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-1.5 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/35">{stat.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      <section id="about" className="bg-white py-24">
        <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.6 }} className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <SectionLabel>{t.about.label}</SectionLabel>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">{t.about.title}</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-600">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={index === t.about.paragraphs.length - 1 ? "font-extrabold text-ink" : undefined}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Stats + domain tags */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-16 border-t border-slate-100 pt-12"
          >
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { value: "4", label: "Initiatives" },
                { value: "2", label: "Continents" },
                { value: "AI+", label: "Core Focus" },
                { value: "∞", label: "Ambition" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-black tracking-tight text-ink sm:text-5xl">{stat.value}</p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-widest text-emerald">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Artificial Intelligence", "Digital Media", "Web & App Dev", "Education", "Business Growth", "Community Platforms", "Innovation Labs", "Branding"].map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600 transition hover:border-emerald/40 hover:bg-emerald/5 hover:text-emerald">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="bg-slate-100 py-24">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionIntro label={t.ecosystem.label} title={t.ecosystem.title} text={t.ecosystem.description} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {localizedEcosystem.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: index * 0.08 }} className="group flex min-h-[310px] flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald/40 hover:shadow-soft">
                  {item.logo ? (
                    <div className={`mb-6 flex h-28 items-center justify-center overflow-hidden rounded-lg border border-slate-200 p-4 shadow-sm ${item.logoClassName ?? "bg-white"}`}>
                      <img src={item.logo} alt={`${item.name} logo`} className="max-h-20 max-w-full object-contain" />
                    </div>
                  ) : (
                    <div className="mb-6 grid size-13 place-items-center rounded-lg bg-ink text-mint transition group-hover:bg-emerald group-hover:text-white">
                      <Icon className="size-7" />
                    </div>
                  )}
                  <h3 className="text-xl font-black text-ink">{item.name}</h3>
                  <p className="mt-3 flex-1 text-slate-600">{item.description}</p>
                  <a href={item.href.startsWith("/") ? route(item.href) : item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener" : undefined} className="mt-6 inline-flex items-center gap-2 font-extrabold text-emerald">
                    {t.ecosystem.learnMore} {item.href.startsWith("http") ? <ExternalLink className="size-4" /> : <ArrowRight className="size-4" />}
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="institute" className="relative isolate overflow-hidden bg-ink py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(47,178,132,0.24),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(109,200,255,0.18),transparent_28%),linear-gradient(135deg,#071426_0%,#081827_48%,#06111f_100%)]" />
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(114,223,189,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(109,200,255,.08)_1px,transparent_1px)] [background-size:64px_64px]"
          animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <div className="pointer-events-none absolute inset-0 -z-10">
          {[18, 34, 51, 67, 83].map((left, index) => (
            <motion.span
              key={left}
              className="absolute size-1.5 rounded-full bg-mint/70 shadow-[0_0_22px_rgba(114,223,189,0.85)]"
              style={{ left: `${left}%`, top: `${22 + (index % 3) * 22}%` }}
              animate={{ y: [0, -18, 0], opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 4 + index, repeat: Infinity, delay: index * 0.35 }}
            />
          ))}
        </div>

        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 lg:grid-cols-2 lg:items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="mb-6 flex h-24 w-full max-w-sm items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-ink p-4 shadow-[0_0_40px_rgba(47,178,132,0.14)]">
              <img src="/assets/logos/rfala-institute.svg" alt="RFALA Institute logo" className="max-h-16 max-w-full object-contain" />
            </div>
            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">{t.institute.title}</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
              {t.institute.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="rounded-lg border border-mint/20 bg-mint/10 p-4 font-bold text-slate-100 shadow-[0_0_40px_rgba(47,178,132,0.12)]">{t.institute.human}</p>
            </div>

          </motion.div>

          <motion.div initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute -inset-5 rounded-[1.5rem] bg-gradient-to-br from-emerald/20 via-sky/10 to-gold/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.08] p-5 shadow-soft backdrop-blur-2xl">
              <div className="mb-5 rounded-xl border border-white/10 bg-white/[0.06] p-4">
                <p className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/45">{t.institute.resources}</p>
                <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                  {learningPlatforms.map((platform) => (
                    <div key={platform.name} className="group flex h-20 items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-sm grayscale transition hover:-translate-y-0.5 hover:border-mint/50 hover:shadow-soft hover:grayscale-0">
                      <img src={platform.logo} alt={`${platform.name} logo`} className="max-h-12 max-w-full object-contain opacity-75 transition group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-5 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald">{t.institute.dashboardLabel}</p>
                  <h3 className="mt-1 text-2xl font-black">{t.institute.dashboardTitle}</h3>
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg border border-mint/20 bg-mint/10 px-3 py-2 text-sm font-extrabold text-mint">
                  <Network className="size-4" /> {t.institute.humanAi}
                </div>
              </div>

              <div className="relative mb-5 overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(47,178,132,.18),transparent_28%),radial-gradient(circle_at_78%_28%,rgba(109,200,255,.16),transparent_26%)]" />
                <div className="relative grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {localizedDashboardSignals.map((signal, index) => {
                    const Icon = signal.icon;
                    return (
                      <motion.div
                        key={signal.label}
                        className="rounded-lg border border-white/10 bg-white/[0.08] p-3 backdrop-blur-xl transition hover:border-mint/40 hover:bg-white/[0.12]"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-emerald to-sky text-ink">
                            <Icon className="size-4" />
                          </span>
                          <span className="text-xs font-black text-mint">0{index + 1}</span>
                        </div>
                        <p className="text-sm font-black text-white">{signal.value}</p>
                        <p className="text-xs font-bold uppercase tracking-wide text-white/45">{signal.label}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {localizedInstituteItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="group rounded-lg border border-white/10 bg-white/[0.07] p-3 transition hover:border-mint/40 hover:bg-white/[0.1]"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className={`grid size-8 place-items-center rounded-lg bg-gradient-to-br ${item.tone} text-xs font-black text-ink shadow-[0_0_28px_rgba(114,223,189,0.16)]`}>{item.value}</span>
                      <motion.span className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.08 }} />
                    </div>
                    <p className="text-sm font-extrabold text-white">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="relative isolate overflow-hidden bg-ink py-24 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(47,178,132,0.12),transparent_28%),radial-gradient(circle_at_84%_38%,rgba(109,200,255,0.12),transparent_30%)]" />
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-4xl">
              <SectionLabel>{t.services.label}</SectionLabel>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">{t.services.title}</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-400">
              {t.services.description}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {localizedServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.name}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -7 }}
                  className="group relative flex min-h-[300px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] p-6 shadow-sm transition hover:border-emerald/40 hover:bg-white/[0.09]"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent}`} />
                  <div className="relative flex h-full w-full flex-col">
                    <div className="mb-7 flex items-start justify-between gap-5">
                      <div className={`grid size-16 place-items-center rounded-xl bg-gradient-to-br ${service.accent} shadow-[0_0_28px_rgba(47,178,132,0.2)]`}>
                        <span className="text-[1.1rem] font-black tracking-tight text-ink leading-none text-center">
                          {service.name.split(" ").map(w => w === "&" ? "&" : /^[A-Z]{2,}$/.test(w) ? w : /^[A-Za-z]/.test(w) ? w[0] : "").join("")}
                        </span>
                      </div>
                      <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-black text-white/50 transition group-hover:border-emerald/40 group-hover:text-emerald">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black tracking-tight text-white">{service.name}</h3>
                    <p className="mt-4 flex-1 text-base leading-7 text-slate-400">{service.description}</p>
                    <div className="mt-7 flex items-center gap-3 text-sm font-extrabold text-emerald">
                      <span className="h-px flex-1 bg-gradient-to-r from-emerald/50 to-transparent" />
                      <a href={route("/contact")} className="inline-flex items-center gap-2 transition hover:text-mint">{t.services.capability} <ArrowRight className="size-4 transition group-hover:translate-x-1" /></a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-white py-24">
        <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <SectionLabel>The Team</SectionLabel>
            <h2 className="mb-4 text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">People behind RFALA</h2>
            <p className="mb-14 max-w-2xl text-lg leading-8 text-slate-600">A small, focused team with over 20 years of combined experience in technology, business, and digital innovation.</p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                name: "Abdellah Benaoussar",
                role: "Founder",
                description: "Visionary behind RFALA. Leading the ecosystem strategy, partnerships, and long-term direction since ryztech.com in 2006.",
                initials: "AB",
                gradient: "from-emerald to-sky"
              },
              {
                name: "Dr. Houda",
                role: "VP Customer Satisfaction",
                description: "Ensures every client, partner, and community member has an exceptional experience across all RFALA initiatives.",
                initials: "HO",
                gradient: "from-sky to-mint"
              },
              {
                name: "Ilyass",
                role: "Digital Marketing Director",
                description: "Leads RFALA's digital marketing strategy, brand growth, and online presence across all platforms and initiatives.",
                initials: "IL",
                gradient: "from-gold to-emerald"
              },
              {
                name: "Rayan",
                role: "IT Director",
                description: "Drives the technical architecture and engineering across RFALA's platforms, products, and digital infrastructure.",
                initials: "RA",
                gradient: "from-sky to-emerald"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-8 transition hover:border-emerald/40 hover:bg-white hover:shadow-soft"
              >
                <div className={`mb-6 grid size-16 place-items-center rounded-xl bg-gradient-to-br ${member.gradient} text-xl font-black text-white shadow-sm`}>
                  {member.initials}
                </div>
                <h3 className="text-xl font-black text-ink">{member.name}</h3>
                <p className="mb-3 text-sm font-bold uppercase tracking-widest text-emerald">{member.role}</p>
                <p className="text-slate-600 leading-7">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="relative isolate bg-ink py-24 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_40%,rgba(47,178,132,0.25),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(215,168,71,0.18),transparent_30%)]" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="mx-auto w-[min(980px,calc(100%-32px))] text-center">
          <Compass className="mx-auto mb-6 size-12 text-mint" />
          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">{t.vision.title}</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">{t.vision.description}</p>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 bg-black py-12 text-white">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <a href={route("/")} className="mb-5 flex items-center gap-3 font-extrabold">
              <img src="/assets/logos/rfala-logo.png" alt="RFALA" className="h-14 w-52 object-contain" />
            </a>
            <p className="max-w-md text-slate-400">{t.footer.description}</p>
          </div>
          <div>
            <h3 className="mb-4 font-black">{t.footer.quickLinks}</h3>
            <div className="grid gap-2 text-slate-400">
              <a href={route("/")} className="hover:text-mint">{t.nav.home}</a>
              <a href={route("/about")} className="hover:text-mint">{t.nav.about}</a>
              <a href={route("/ecosystem")} className="hover:text-mint">{t.nav.ecosystem}</a>
              <a href={route("/institute")} className="hover:text-mint">{t.nav.institute}</a>
              <a href={route("/services")} className="hover:text-mint">{t.nav.services}</a>
              <a href={route("/vision")} className="hover:text-mint">{t.nav.vision}</a>
              <a href={route("/contact")} className="hover:text-mint">{t.footer.contact}</a>
              <a href="/privacy" className="hover:text-mint">{t.footer.privacy}</a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-black">{t.footer.connect}</h3>
            <div className="grid gap-2 text-slate-400">
              <a href="mailto:hello@rfala.com" className="hover:text-mint">hello@rfala.com</a>
              <a href="https://rfala.com" target="_blank" rel="noopener" className="hover:text-mint">rfala.com</a>
              <p className="pt-4 text-sm">{t.footer.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default function Home() {
  return <HomePage dictionary={enMessages} locale="en" />;
}
