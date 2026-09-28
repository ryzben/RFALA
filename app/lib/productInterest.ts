/**
 * Shared field rules for the product interest forms.
 * Used by the client form (instant feedback) and the API route (authoritative check).
 */

export type ProductKey = "water" | "careerai";

export const personas = ["jobSeeker", "student", "careerChanger", "institution"] as const;
export const propertyUnits = ["hectares", "acres"] as const;

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
  | "consent";

export type ErrorCode = "required" | "email" | "tooLong" | "propertySize" | "consent";
export type FieldErrors = Partial<Record<FieldName, ErrorCode>>;
export type FormValues = Partial<Record<Exclude<FieldName, "consent">, string>> & { consent?: boolean };

/** Fields in display order, which is also the order used to focus the first invalid field. */
export const productFields: Record<ProductKey, FieldName[]> = {
  water: ["name", "email", "organization", "region", "propertySize", "propertyUnit", "need", "consent"],
  careerai: ["name", "email", "persona", "country", "consent"]
};

const requiredFields: Record<ProductKey, FieldName[]> = {
  water: ["name", "email", "region", "propertySize", "propertyUnit", "need"],
  careerai: ["name", "email", "persona"]
};

export const maxLengths: Partial<Record<FieldName, number>> = {
  name: 120,
  email: 254,
  organization: 160,
  region: 120,
  country: 120,
  propertySize: 16,
  need: 2000
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isProductKey(value: unknown): value is ProductKey {
  return value === "water" || value === "careerai";
}

export function validateProductInterest(product: ProductKey, values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  for (const field of productFields[product]) {
    if (field === "consent") {
      if (values.consent !== true) errors.consent = "consent";
      continue;
    }

    const value = (values[field] ?? "").trim();
    const max = maxLengths[field];

    if (!value) {
      if (requiredFields[product].includes(field)) errors[field] = "required";
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
    if (field === "propertyUnit" && !(propertyUnits as readonly string[]).includes(value)) errors.propertyUnit = "required";
    if (field === "persona" && !(personas as readonly string[]).includes(value)) errors.persona = "required";
  }

  return errors;
}

/** Keeps only the fields that belong to the product, as trimmed strings (consent as boolean). */
export function pickProductValues(product: ProductKey, input: Record<string, unknown>): FormValues {
  const values: FormValues = {};
  for (const field of productFields[product]) {
    if (field === "consent") {
      values.consent = input.consent === true;
      continue;
    }
    const raw = input[field];
    if (typeof raw === "string") values[field] = raw.trim();
  }
  return values;
}
