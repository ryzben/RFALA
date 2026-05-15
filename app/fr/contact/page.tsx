import { ContactPage } from "../../components/ContactPage";
import frMessages from "../../../messages/fr.json";

export const metadata = {
  title: "Contact RFALA | Écosystème technologie, IA et innovation",
  description: "Contactez RFALA pour des solutions IA, des plateformes digitales, des projets d’innovation, des services média et des collaborations."
};

export default function FrenchContactPage() {
  return <ContactPage dictionary={frMessages} locale="fr" />;
}
