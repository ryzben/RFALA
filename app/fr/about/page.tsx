import { ContentPage } from "../../components/ContentPage";
import frMessages from "../../../messages/fr.json";

export const metadata = {
  title: "À propos de RFALA | Partenaire d'innovation IA",
  description: "Découvrez RFALA, un partenaire d'innovation IA qui aide les entreprises, startups et institutions à concevoir, construire et déployer des solutions intelligentes."
};

export default function FrenchAboutPage() {
  return <ContentPage dictionary={frMessages} locale="fr" kind="about" />;
}
