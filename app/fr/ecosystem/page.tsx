import { ContentPage } from "../../components/ContentPage";
import frMessages from "../../../messages/fr.json";

export const metadata = {
  title: "Écosystème RFALA | Plateformes, marques et innovation",
  description: "Explorez l’écosystème RFALA, incluant RFALA Institute, Xenova Studio, Maroclist et Islamic School Review."
};

export default function FrenchEcosystemPage() {
  return <ContentPage dictionary={frMessages} locale="fr" kind="ecosystem" />;
}
