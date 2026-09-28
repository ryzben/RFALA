import { NextResponse } from "next/server";
import { deliverSubmission } from "../../lib/deliverSubmission";
import { isFormKind, pickInquiryValues, validateInquiry } from "../../lib/productInterest";

const MAX_BODY_BYTES = 16_000;

/**
 * Receives all three site inquiry forms (water, careerai, advisory).
 * The route keeps its original path so existing forms keep working.
 */
export async function POST(request: Request) {
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "too_large" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const input = body as Record<string, unknown>;
  // "form" is the current field name; "product" is accepted for backward compatibility.
  const kind = input.form ?? input.product;
  if (!isFormKind(kind)) {
    return NextResponse.json({ ok: false, error: "unknown_form" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill the "website" field. Answer as if it worked so bots learn nothing.
  if (typeof input.website === "string" && input.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const values = pickInquiryValues(kind, input);
  const errors = validateInquiry(kind, values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const delivered = await deliverSubmission({
    form: kind,
    locale: input.locale === "fr" ? "fr" : "en",
    submittedAt: new Date().toISOString(),
    values
  });

  if (!delivered) {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
