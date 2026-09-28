/**
 * Shared field rules for the site's inquiry forms:
 * - "water": Water Intelligence pilot analysis request
 * - "careerai": CareerAI early-access list
 * - "advisory": Technology & Product Advisory discovery session request
 * Used by the client form (instant feedback) and the API route (authoritative check).
 */

export type ProductKey = "water" | "careerai";
export type FormKind = ProductKey | "advisory";

export const formKinds: FormKind[] = ["water", "careerai", "advisory"];
export const personas = ["jobSeeker", "student", "careerChanger", "institution"] as const;
export const propertyUnits = ["hectares", "acres"] as const;
export const projectStages = ["idea", "inDevelopment", "live"] as const;

export type FieldName =
  | "name"
  | "email"
  | "organization"
  | "region"
  | "propertySize"
  | "propertyUnit"
  | "need"
  | "persona"
  | "country"
  | "company"
  | "project"
  | "stage"
  | "consent";

export type ErrorCode = "required" | "email" | "tooLong" | "propertySize" | "consent";
export type FieldErrors = Partial<Record<FieldName, ErrorCode>>;
export type FormValues = Partial<Record<Exclude<FieldName, "consent">, string>> & { consent?: boolean };

/** Fields in display order, which is also the order used to focus the first invalid field. */
export const formFields: Record<FormKind, FieldName[]> = {
  water: ["name", "email", "organization", "region", "propertySize", "propertyUnit", "need", "consent"],
  careerai: ["name", "email", "persona", "country", "consent"],
  advisory: ["name", "email", "company", "stage", "project", "consent"]
};

const requiredFields: Record<FormKind, FieldName[]> = {
  water: ["name", "email", "region", "propertySize", "propertyUnit", "need"],
  careerai: ["name", "email", "persona"],
  advisory: ["name", "email", "project", "stage"]
};

export const maxLengths: Partial<Record<FieldName, number>> = {
  name: 120,
  email: 254,
  organization: 160,
  company: 160,
  region: 120,
  country: 120,
  propertySize: 16,
  need: 2000,
  project: 2000
};

const allowedValues: Partial<Record<FieldName, readonly string[]>> = {
  propertyUnit: propertyUnits,
  persona: personas,
  stage: projectStages
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isFormKind(value: unknown): value is FormKind {
  return typeof value === "string" && (formKinds as string[]).includes(value);
}

export function validateInquiry(kind: FormKind, values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  for (const field of formFields[kind]) {
    if (field === "consent") {
      if (values.consent !== true) errors.consent = "consent";
      continue;
    }

    const value = (values[field] ?? "").trim();
    const max = maxLengths[field];

    if (!value) {
      if (requiredFields[kind].includes(field)) errors[field] = "required";
      continue;
    }
    if (max && value.length > max) {
      errors[field] = "tooLong";
      continue;
    }
    if (field === "email" && !emailPattern.test(value)) errors.email = "email";
    if (field === "propertySize") {
      const size = Number(value.replace(",", "."));
      if (!Number.isFinite(size) || size <= 0) errors.propertySize = "propertySize";
    }
    const allowed = allowedValues[field];
    if (allowed && !allowed.includes(value)) errors[field] = "required";
  }

  return errors;
}

/** Keeps only the fields that belong to the form, as trimmed strings (consent as boolean). */
export function pickInquiryValues(kind: FormKind, input: Record<string, unknown>): FormValues {
  const values: FormValues = {};
  for (const field of formFields[kind]) {
    if (field === "consent") {
      values.consent = input.consent === true;
      continue;
    }
    const raw = input[field];
    if (typeof raw === "string") values[field] = raw.trim();
  }
  return values;
}
