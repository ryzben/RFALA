import { PrivacyPage } from "../components/PrivacyPage";
import { pageMeta } from "../lib/pageMeta";
import enMessages from "../../messages/en.json";

export const metadata = pageMeta("/privacy", "en", {
  title: enMessages.privacy.meta.title,
  description: enMessages.privacy.meta.description
});

export default function EnglishPrivacyPage() {
  return <PrivacyPage dictionary={enMessages} locale="en" />;
}
