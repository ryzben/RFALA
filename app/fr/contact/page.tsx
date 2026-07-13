import { ContactPage } from "../../components/ContactPage";
import frMessages from "../../../messages/fr.json";

export const metadata = {
  title: "Contact RFALA | Partenaire d'innovation IA",
  description: "Contactez RFALA pour discuter de stratégie IA, plateformes de données intelligentes, applications IA, audit IA, ingénierie IA sur mesure et partenariats stratégiques."
};

export default function FrenchContactPage() {
  return <ContactPage dictionary={frMessages} locale="fr" />;
}
