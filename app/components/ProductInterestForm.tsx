"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { CheckCircle2, Send } from "lucide-react";
import {
  maxLengths,
  formFields,
  personas,
  projectStages,
  propertyUnits,
  validateInquiry
} from "../lib/productInterest";
import type { FieldErrors, FieldName, FormKind, FormValues } from "../lib/productInterest";
import type { Locale, Messages } from "./siteNav";

type Status = "idle" | "submitting" | "success" | "error";

type FieldShellProps = {
  inputId: string;
  errorId: string;
  label: string;
  required: boolean;
  optionalLabel: string;
  error: string | null;
  children: ReactNode;
};

/** Label, control, and error message. Defined at module level so inputs keep focus across re-renders. */
function FieldShell({ inputId, errorId, label, required, optionalLabel, error, children }: FieldShellProps) {
  return (
    <div>
      <label htmlFor={inputId} className="mb-2 block text-sm font-extrabold text-slate-100">
        {label}
        {required ? <span aria-hidden="true" className="text-mint"> *</span> : <span className="font-semibold text-slate-400"> ({optionalLabel})</span>}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-2 text-sm font-semibold text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border bg-slate-950/70 px-4 py-3 text-base text-white placeholder:text-slate-500 transition focus:outline-none focus:ring-2 focus:ring-mint/60";

/** Inquiry form for the product pages and the advisory page. `kind` selects the fields and copy. */
export function ProductInterestForm({ kind, dictionary, locale }: { kind: FormKind; dictionary: Messages; locale: Locale }) {
  const f = dictionary.forms;
  const copy = f[kind];
  const baseId = useId();
  const id = (field: string) => `${baseId}-${field}`;

  const [values, setValues] = useState<FormValues>({ propertyUnit: "hectares", consent: false });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const update = (field: FieldName, value: string | boolean) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (attempted) setErrors(validateInquiry(kind, next));
  };

  const onText = (field: FieldName) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => update(field, event.target.value);

  const focusFirstError = (fieldErrors: FieldErrors) => {
    const first = formFields[kind].find((field) => fieldErrors[field]);
    if (first) formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(id(first))}`)?.focus();
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    setAttempted(true);

    const clientErrors = validateInquiry(kind, values);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) {
      focusFirstError(clientErrors);
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/product-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form: kind, locale, website: honeypot, ...values })
      });
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; errors?: FieldErrors };

      if (response.ok && result.ok) {
        setStatus("success");
        return;
      }
      if (response.status === 422 && result.errors) {
        setErrors(result.errors);
        setStatus("idle");
        focusFirstError(result.errors);
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="rounded-xl border border-mint/30 bg-mint/10 p-6 outline-none focus-visible:ring-2 focus-visible:ring-mint">
        <CheckCircle2 className="size-8 text-mint" />
        <p className="mt-4 text-xl font-black text-white">{copy.successTitle}</p>
        <p className="mt-2 leading-7 text-slate-200">{copy.successBody}</p>
      </div>
    );
  }

  const errorText = (field: FieldName) => {
    const code = errors[field];
    return code ? f.errors[code] : null;
  };

  const fieldProps = (field: FieldName) => ({
    id: id(field),
    name: field,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? id(`${field}-error`) : undefined,
    className: `${inputClass} ${errors[field] ? "border-red-400" : "border-white/15 focus:border-mint"}`
  });

  const shell = (field: FieldName, label: string, required: boolean) => ({
    inputId: id(field),
    errorId: id(`${field}-error`),
    label,
    required,
    optionalLabel: f.optional,
    error: errorText(field)
  });

  const hasErrors = attempted && Object.keys(errors).length > 0;

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="relative grid gap-5 [color-scheme:dark]">
      <p className="text-sm text-slate-300">{f.requiredHint}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldShell {...shell("name", f.fields.name, true)}>
          <input {...fieldProps("name")} type="text" autoComplete="name" required maxLength={maxLengths.name} value={values.name ?? ""} onChange={onText("name")} />
        </FieldShell>
        <FieldShell {...shell("email", f.fields.email, true)}>
          <input {...fieldProps("email")} type="email" autoComplete="email" inputMode="email" required maxLength={maxLengths.email} value={values.email ?? ""} onChange={onText("email")} />
        </FieldShell>
      </div>

      {kind === "water" ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <FieldShell {...shell("organization", f.fields.organization, false)}>
              <input {...fieldProps("organization")} type="text" autoComplete="organization" maxLength={maxLengths.organization} value={values.organization ?? ""} onChange={onText("organization")} />
            </FieldShell>
            <FieldShell {...shell("region", f.fields.region, true)}>
              <input {...fieldProps("region")} type="text" autoComplete="country-name" required maxLength={maxLengths.region} value={values.region ?? ""} onChange={onText("region")} />
            </FieldShell>
          </div>
          <div className="grid gap-5 sm:grid-cols-[1fr_.8fr]">
            <FieldShell {...shell("propertySize", f.fields.propertySize, true)}>
              <input {...fieldProps("propertySize")} type="text" inputMode="decimal" required maxLength={maxLengths.propertySize} value={values.propertySize ?? ""} onChange={onText("propertySize")} />
            </FieldShell>
            <FieldShell {...shell("propertyUnit", f.fields.unit, true)}>
              <select {...fieldProps("propertyUnit")} required value={values.propertyUnit ?? "hectares"} onChange={onText("propertyUnit")}>
                {propertyUnits.map((unit) => (
                  <option key={unit} value={unit}>{f.units[unit]}</option>
                ))}
              </select>
            </FieldShell>
          </div>
          <FieldShell {...shell("need", f.fields.need, true)}>
            <textarea {...fieldProps("need")} rows={5} required maxLength={maxLengths.need} value={values.need ?? ""} onChange={onText("need")} />
          </FieldShell>
        </>
      ) : kind === "careerai" ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <FieldShell {...shell("persona", f.fields.persona, true)}>
            <select {...fieldProps("persona")} required value={values.persona ?? ""} onChange={onText("persona")}>
              <option value="" disabled>{f.personaPlaceholder}</option>
              {personas.map((persona) => (
                <option key={persona} value={persona}>{f.personas[persona]}</option>
              ))}
            </select>
          </FieldShell>
          <FieldShell {...shell("country", f.fields.country, false)}>
            <input {...fieldProps("country")} type="text" autoComplete="country-name" maxLength={maxLengths.country} value={values.country ?? ""} onChange={onText("country")} />
          </FieldShell>
        </div>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <FieldShell {...shell("company", f.fields.company, false)}>
              <input {...fieldProps("company")} type="text" autoComplete="organization" maxLength={maxLengths.company} value={values.company ?? ""} onChange={onText("company")} />
            </FieldShell>
            <FieldShell {...shell("stage", f.fields.stage, true)}>
              <select {...fieldProps("stage")} required value={values.stage ?? ""} onChange={onText("stage")}>
                <option value="" disabled>{f.stagePlaceholder}</option>
                {projectStages.map((stage) => (
                  <option key={stage} value={stage}>{f.stages[stage]}</option>
                ))}
              </select>
            </FieldShell>
          </div>
          <FieldShell {...shell("project", f.fields.project, true)}>
            <textarea {...fieldProps("project")} rows={5} required maxLength={maxLengths.project} value={values.project ?? ""} onChange={onText("project")} />
          </FieldShell>
        </>
      )}

      {/* Honeypot: hidden from people and assistive tech; bots that fill it are silently discarded by the API. */}
      <div aria-hidden="true" className="absolute -left-[10000px] top-auto size-px overflow-hidden">
        <label htmlFor={id("website")}>{f.honeypot}</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={id("consent")}
            name="consent"
            type="checkbox"
            required
            checked={values.consent === true}
            onChange={(event) => update("consent", event.target.checked)}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? id("consent-error") : undefined}
            className="mt-1 size-5 shrink-0 accent-[#72dfbd] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
          />
          <label htmlFor={id("consent")} className="text-sm leading-6 text-slate-200">
            {f.consentBefore}
            <a href="/privacy" target="_blank" rel="noopener" className="font-extrabold text-mint underline underline-offset-2 hover:text-white">
              {f.consentLink}
              <span className="sr-only"> ({dictionary.nav.productsMenu.newTab})</span>
            </a>
            {f.consentAfter}
            <span aria-hidden="true" className="text-mint"> *</span>
          </label>
        </div>
        {errorText("consent") ? (
          <p id={id("consent-error")} className="mt-2 text-sm font-semibold text-red-300">{errorText("consent")}</p>
        ) : null}
      </div>

      <div aria-live="polite" className="grid gap-3">
        {hasErrors ? <p className="text-sm font-bold text-red-300">{f.errors.summary}</p> : null}
        {status === "error" ? (
          <p role="alert" className="rounded-lg border border-red-400/40 bg-red-500/10 p-4 text-sm font-bold leading-6 text-red-200">
            {f.errors.submit}
          </p>
        ) : null}
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-mint px-6 py-4 text-sm font-black text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        >
          <Send className="size-4" />
          {status === "submitting" ? f.submitting : copy.submit}
        </button>
      </div>
    </form>
  );
}
