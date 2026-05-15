import { ContentPage } from "../../components/ContentPage";
import frMessages from "../../../messages/fr.json";

export const metadata = {
  title: "À propos de RFALA | Écosystème technologie, innovation et digital",
  description: "Découvrez RFALA, un écosystème technologique, d’innovation et numérique qui construit des plateformes et expériences tournées vers l’avenir."
};

export default function FrenchAboutPage() {
  return <ContentPage dictionary={frMessages} locale="fr" kind="about" />;
}
