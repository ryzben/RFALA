import { ContentPage } from "../../components/ContentPage";
import frMessages from "../../../messages/fr.json";
import { pageMeta } from "../../lib/pageMeta";

export const metadata = pageMeta("/about", "fr", {
  title: "À propos de RFALA | Partenaire d'innovation IA",
  description: "Découvrez RFALA, un partenaire d'innovation IA qui aide les entreprises, startups et institutions à concevoir, construire et déployer des solutions intelligentes."
});

export default function FrenchAboutPage() {
  return <ContentPage dictionary={frMessages} locale="fr" kind="about" />;
}
