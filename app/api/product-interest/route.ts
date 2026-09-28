import { NextResponse } from "next/server";
import { deliverSubmission } from "../../lib/deliverSubmission";
import { isProductKey, pickProductValues, validateProductInterest } from "../../lib/productInterest";

const MAX_BODY_BYTES = 16_000;

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
  if (!isProductKey(input.product)) {
    return NextResponse.json({ ok: false, error: "unknown_product" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill the "website" field. Answer as if it worked so bots learn nothing.
  if (typeof input.website === "string" && input.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const product = input.product;
  const values = pickProductValues(product, input);
  const errors = validateProductInterest(product, values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const delivered = await deliverSubmission({
    product,
    locale: input.locale === "fr" ? "fr" : "en",
    submittedAt: new Date().toISOString(),
    values
  });

  if (!delivered) {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
