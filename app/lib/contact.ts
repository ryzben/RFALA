/**
 * WhatsApp number in international format, digits only (wa.me requires no "+", spaces, or dashes).
 * This is the site's existing phone number. It must be confirmed as a WhatsApp-registered number:
 * if it is not, every "Chat on WhatsApp" link on the site leads to a WhatsApp error page.
 */
export const WHATSAPP_NUMBER = "19175822768";

/** wa.me link that opens a chat with the localized greeting already typed in. */
export function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
