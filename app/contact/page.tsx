import { ContactPage } from "../components/ContactPage";
import enMessages from "../../messages/en.json";
import { pageMeta } from "../lib/pageMeta";

export const metadata = pageMeta("/contact", "en", {
  title: "Contact RFALA | AI Innovation Partner",
  description: "Contact RFALA to discuss AI strategy, intelligent data platforms, AI applications, AI auditing, custom AI engineering, and strategic partnerships."
});

export default function EnglishContactPage() {
  return <ContactPage dictionary={enMessages} locale="en" />;
}
