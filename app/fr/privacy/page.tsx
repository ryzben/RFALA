import { PrivacyPage } from "../../components/PrivacyPage";
import { pageMeta } from "../../lib/pageMeta";
import frMessages from "../../../messages/fr.json";

export const metadata = pageMeta("/privacy", "fr", {
  title: frMessages.privacy.meta.title,
  description: frMessages.privacy.meta.description
});

export default function FrenchPrivacyPage() {
  return <PrivacyPage dictionary={frMessages} locale="fr" />;
}
