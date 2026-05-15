import { ContentPage } from "../../components/ContentPage";
import frMessages from "../../../messages/fr.json";

export const metadata = {
  title: "RFALA Institute | Parcours guidés pour l’ère de l’IA",
  description: "Découvrez RFALA Institute, ses parcours guidés, son mentorat, sa culture IA et ses compétences pratiques."
};

export default function FrenchInstitutePage() {
  return <ContentPage dictionary={frMessages} locale="fr" kind="institute" />;
}
