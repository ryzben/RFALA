import type { Messages } from "./siteNav";

/*
 * Illustrative concept visuals for products in development.
 * Pure SVG/CSS, no imagery. The graphics are decorative (aria-hidden); only the "Concept preview" label is exposed.
 * Each visual has at most one animation, gated behind motion-safe so prefers-reduced-motion disables it.
 */

type Visuals = Messages["products"]["visuals"];

function ConceptLabel({ children }: { children: string }) {
  return (
    <span className="absolute left-3 top-3 z-10 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-white/85 backdrop-blur">
      {children}
    </span>
  );
}

/** Wobbly closed contour, deterministic so server and client render the same markup. */
function contourPath(cx: number, cy: number, r: number, seed: number) {
  const steps = 28;
  const points = Array.from({ length: steps }, (_, i) => {
    const a = (i / steps) * Math.PI * 2;
    const radius = r * (1 + 0.12 * Math.sin(3 * a + seed) + 0.06 * Math.sin(5 * a + seed * 2));
    return [cx + radius * Math.cos(a) * 1.35, cy + radius * Math.sin(a)] as const;
  });
  const mid = (p: readonly [number, number], q: readonly [number, number]) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  const f = (n: number) => n.toFixed(1);
  const start = mid(points[steps - 1], points[0]);
  let d = `M${f(start[0])} ${f(start[1])}`;
  points.forEach((p, i) => {
    const m = mid(p, points[(i + 1) % steps]);
    d += ` Q${f(p[0])} ${f(p[1])} ${f(m[0])} ${f(m[1])}`;
  });
  return `${d} Z`;
}

const hillA = [14, 26, 38, 50, 62].map((r, i) => contourPath(88, 70, r, 0.6 + i * 0.35));
const hillB = [10, 21, 32, 43, 54].map((r, i) => contourPath(246, 138, r, 2.1 + i * 0.3));

export function WaterIntelligenceVisual({ labels, conceptLabel, className = "" }: { labels: Visuals; conceptLabel: string; className?: string }) {
  return (
    <div className={`relative isolate aspect-[16/10] w-full min-w-0 min-h-[220px] overflow-hidden rounded-lg border border-white/10 bg-[#04101d] ${className}`}>
      <ConceptLabel>{conceptLabel}</ConceptLabel>
      <div aria-hidden="true" className="absolute inset-0">
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="size-full">
          <defs>
            <pattern id="wi-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0H0V20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.6" />
            </pattern>
            <radialGradient id="wi-glow" cx="0.6" cy="0.55" r="0.35">
              <stop offset="0" stopColor="#72dfbd" stopOpacity="0.22" />
              <stop offset="1" stopColor="#72dfbd" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="320" height="200" fill="url(#wi-grid)" />
          <rect width="320" height="200" fill="url(#wi-glow)" />
          <g fill="none" strokeWidth="0.8">
            {hillA.map((d, i) => <path key={`a${i}`} d={d} stroke={`rgba(114,223,189,${0.5 - i * 0.07})`} />)}
            {hillB.map((d, i) => <path key={`b${i}`} d={d} stroke={`rgba(109,200,255,${0.45 - i * 0.06})`} />)}
          </g>
          <path d="M312 18 C262 52 214 70 190 108 S120 166 30 196" fill="none" stroke="#6dc8ff" strokeOpacity="0.7" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M134 50 L248 40 L282 150 L148 172 Z" fill="rgba(114,223,189,0.05)" stroke="#72dfbd" strokeOpacity="0.75" strokeWidth="1" strokeDasharray="4 3" />
          <g fill="none" stroke="#72dfbd" strokeWidth="1">
            <circle cx="232" cy="78" r="6" strokeOpacity="0.7" />
            <circle cx="164" cy="146" r="6" strokeOpacity="0.55" />
          </g>
          <g fill="#72dfbd" fontSize="7" fontWeight="800" fontFamily="inherit" textAnchor="middle">
            <text x="232" y="80.5">2</text>
            <text x="164" y="148.5" fillOpacity="0.8">3</text>
          </g>
          <g stroke="rgba(255,255,255,0.45)" strokeWidth="1">
            <path d="M262 186 H302" />
            <path d="M262 183 V189 M282 184 V188 M302 183 V189" />
          </g>
          <g transform="translate(298 30)" stroke="rgba(255,255,255,0.5)" fill="none" strokeWidth="1">
            <circle r="9" strokeOpacity="0.4" />
            <path d="M0 -7 L3 2 L0 0 L-3 2 Z" fill="rgba(255,255,255,0.55)" />
          </g>
        </svg>

        {/* Primary candidate area, the one animated element */}
        <span className="absolute size-3 -translate-x-1/2 -translate-y-1/2" style={{ left: "59.4%", top: "55%" }}>
          <span className="absolute inset-0 rounded-full bg-mint/70 motion-safe:animate-ping motion-safe:[animation-duration:2.4s]" />
          <span className="absolute inset-0 rounded-full border-2 border-[#04101d] bg-mint shadow-[0_0_18px_rgba(114,223,189,0.9)]" />
        </span>
        <span
          className="absolute -translate-y-1/2 whitespace-nowrap rounded-md border border-mint/40 bg-black/70 px-2 py-0.5 text-[0.6rem] font-extrabold text-mint"
          style={{ left: "63%", top: "55%" }}
        >
          1 · {labels.candidateArea}
        </span>

        <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-x-3 gap-y-1 text-[0.6rem] font-bold text-white/75">
          <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-mint" />{labels.candidateArea}</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-0 w-3 border-t border-dashed border-mint" />{labels.parcel}</span>
          <span className="inline-flex items-center gap-1.5"><span className="h-0.5 w-3 rounded bg-sky" />{labels.drainage}</span>
        </div>
      </div>
    </div>
  );
}

const matchRows = [
  { width: "88%", tone: "from-emerald to-mint", key: "strong" },
  { width: "68%", tone: "from-sky to-mint", key: "good" },
  { width: "42%", tone: "from-white/40 to-white/20", key: "partial" }
] as const;

export function CareerAIVisual({ labels, conceptLabel, className = "" }: { labels: Visuals; conceptLabel: string; className?: string }) {
  return (
    <div className={`relative isolate aspect-[16/10] w-full min-w-0 min-h-[260px] overflow-hidden rounded-lg border border-white/10 bg-[#04101d] ${className}`}>
      <ConceptLabel>{conceptLabel}</ConceptLabel>
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-[.8fr_1.2fr] gap-3 p-3 pt-11 [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px]">
        {/* Resume */}
        <div className="flex min-w-0 flex-col rounded-md border border-white/10 bg-white/[0.06] p-2.5">
          <p className="text-[0.55rem] font-extrabold uppercase tracking-[0.18em] text-white/60">{labels.resume}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="size-6 shrink-0 rounded-full bg-gradient-to-br from-emerald to-sky" />
            <span className="grid flex-1 gap-1">
              <span className="h-1.5 w-4/5 rounded bg-white/60" />
              <span className="h-1 w-1/2 rounded bg-white/30" />
            </span>
          </div>
          <p className="mt-3 text-[0.55rem] font-bold text-mint">{labels.experience}</p>
          <span className="mt-1 grid gap-1">
            <span className="h-1 w-full rounded bg-white/25" />
            <span className="h-1 w-11/12 rounded bg-white/25" />
            <span className="h-1 w-3/4 rounded bg-white/25" />
          </span>
          <p className="mt-3 text-[0.55rem] font-bold text-mint">{labels.skills}</p>
          <span className="mt-1 flex flex-wrap gap-1">
            {["w-8", "w-10", "w-6", "w-9", "w-7"].map((w, i) => (
              <span key={i} className={`h-2 ${w} rounded-full border border-mint/40 bg-mint/15`} />
            ))}
          </span>
        </div>

        {/* Ranked matches */}
        <div className="flex min-w-0 flex-col">
          <p className="text-[0.55rem] font-extrabold uppercase tracking-[0.18em] text-white/60">{labels.matches}</p>
          <ol className="mt-2 grid gap-2">
            {matchRows.map((row, index) => (
              <li
                key={row.key}
                className={`rounded-md border p-2 ${index === 0 ? "border-mint/50 bg-mint/10" : "border-white/10 bg-white/[0.05]"}`}
              >
                <div className="flex items-center gap-2">
                  <span className={`grid size-4 shrink-0 place-items-center rounded text-[0.55rem] font-black ${index === 0 ? "bg-mint text-ink" : "bg-white/15 text-white"}`}>
                    {index + 1}
                  </span>
                  <span className="truncate text-[0.62rem] font-extrabold text-white">{labels.roles[index]}</span>
                  {index === 0 ? <span className="ml-auto size-1.5 shrink-0 rounded-full bg-mint motion-safe:animate-pulse" /> : null}
                </div>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="h-1 flex-1 rounded-full bg-white/10">
                    <span className={`block h-1 rounded-full bg-gradient-to-r ${row.tone}`} style={{ width: row.width }} />
                  </span>
                  <span className="shrink-0 text-[0.52rem] font-bold text-white/70">{labels[row.key]}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
