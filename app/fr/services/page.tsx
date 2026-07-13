import { ContentPage } from "../../components/ContentPage";
import frMessages from "../../../messages/fr.json";

export const metadata = {
  title: "Expertises RFALA | Stratégie IA, plateformes de données et ingénierie IA sur mesure",
  description: "Découvrez les expertises RFALA : stratégie IA et innovation, plateformes de données intelligentes, applications IA, croissance et performance digitale, audit IA et ingénierie IA sur mesure."
};

export default function FrenchServicesPage() {
  return <ContentPage dictionary={frMessages} locale="fr" kind="services" />;
}
