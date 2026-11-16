import { ContentPage } from "../../components/ContentPage";
import frMessages from "../../../messages/fr.json";
import { pageMeta } from "../../lib/pageMeta";

export const metadata = pageMeta("/services", "fr", {
  title: "Expertises RFALA | Stratégie IA, plateformes de données et ingénierie IA sur mesure",
  description: "Découvrez les expertises RFALA : stratégie IA et innovation, plateformes de données intelligentes, applications IA, croissance et performance digitale, audit IA et ingénierie IA sur mesure."
});

export default function FrenchServicesPage() {
  return <ContentPage dictionary={frMessages} locale="fr" kind="services" />;
}
