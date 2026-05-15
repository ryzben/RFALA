import { ContentPage } from "../../components/ContentPage";
import frMessages from "../../../messages/fr.json";

export const metadata = {
  title: "Services RFALA | Solutions digitales, IA et innovation",
  description: "Explorez les services RFALA en IA, développement web et app, marketing digital, branding, médias, recherche et technologies d’apprentissage."
};

export default function FrenchServicesPage() {
  return <ContentPage dictionary={frMessages} locale="fr" kind="services" />;
}
