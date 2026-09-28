import type { FormKind, FormValues } from "./productInterest";

export type Submission = {
  /** Which form sent it: "water", "careerai", or "advisory". */
  form: FormKind;
  locale: "en" | "fr";
  submittedAt: string;
  values: FormValues;
};

/**
 * Sends a validated submission to its destination.
 *
 * The destination is not decided yet, so delivery is intentionally provider-neutral:
 * - If PRODUCT_FORM_WEBHOOK_URL is set, the submission is POSTed there as JSON
 *   (works with any endpoint that accepts JSON: an email service, form backend, CRM, or automation webhook).
 * - In development without a destination, the submission is logged to the server console.
 * - In production without a destination, delivery fails so the visitor sees an honest error
 *   instead of a false success.
 */
export async function deliverSubmission(submission: Submission): Promise<boolean> {
  const url = process.env.PRODUCT_FORM_WEBHOOK_URL;

  if (url) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(submission),
        signal: AbortSignal.timeout(10_000)
      });
      if (!response.ok) console.error(`[product-interest] destination responded ${response.status}`);
      return response.ok;
    } catch (error) {
      console.error("[product-interest] delivery failed", error instanceof Error ? error.message : error);
      return false;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    console.info("[product-interest] No PRODUCT_FORM_WEBHOOK_URL set; development submission:", JSON.stringify(submission, null, 2));
    return true;
  }

  console.error("[product-interest] PRODUCT_FORM_WEBHOOK_URL is not configured; submission was not delivered.");
  return false;
}
