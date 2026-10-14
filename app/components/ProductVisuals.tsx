import { ArrowRight, CircleCheck, CircleDashed } from "lucide-react";
import type { Messages } from "./siteNav";

/* Illustrative visual for WaterAgent. Pure CSS and icons, no imagery or invented data. */

type Visuals = Messages["products"]["visuals"];

function VisualLabel({ children }: { children: string }) {
  return (
    <span className="absolute left-3 top-3 z-10 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-white/85 backdrop-blur">
      {children}
    </span>
  );
}

/**
 * Evidence coverage for WaterAgent, modelled on the evidence families in the public sample report.
 * Status only (available or missing), no scores or invented numbers. Exposed to assistive tech as one image with a text alternative.
 */
export function WaterAgentVisual({ labels, illustrationLabel, className = "" }: { labels: Visuals; illustrationLabel: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={labels.evidenceAlt}
      className={`relative isolate aspect-[16/10] w-full min-w-0 min-h-[280px] overflow-hidden rounded-lg border border-white/10 bg-[#04101d] ${className}`}
    >
      <VisualLabel>{illustrationLabel}</VisualLabel>
      <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-center gap-2.5 p-3 pt-11 [background-image:radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] sm:p-5 sm:pt-12">
        <p className="text-[0.55rem] font-extrabold uppercase tracking-[0.18em] text-white/60">{labels.evidenceTitle}</p>
        <ul className="grid gap-1.5">
          {labels.evidence.map((item) => (
            <li
              key={item.name}
              className={`flex items-center gap-2 rounded-md border px-2.5 py-1.5 ${item.available ? "border-white/10 bg-white/[0.06]" : "border-dashed border-white/20 bg-transparent"}`}
            >
              {item.available ? (
                <CircleCheck className="size-3.5 shrink-0 text-mint" />
              ) : (
                <CircleDashed className="size-3.5 shrink-0 text-white/50" />
              )}
              <span className={`min-w-0 flex-1 truncate text-[0.66rem] font-extrabold ${item.available ? "text-white" : "text-white/70"}`}>{item.name}</span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[0.55rem] font-extrabold uppercase tracking-[0.12em] ${item.available ? "bg-mint/15 text-mint" : "border border-white/20 text-white/70"}`}
              >
                {item.available ? labels.available : labels.missing}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-2.5 py-1.5">
          <ArrowRight className="size-3.5 shrink-0 text-gold" />
          <span className="min-w-0 truncate text-[0.62rem] font-bold text-white/85">
            <span className="font-extrabold text-gold">{labels.nextStep}:</span> {labels.nextStepText}
          </span>
        </div>
      </div>
    </div>
  );
}
