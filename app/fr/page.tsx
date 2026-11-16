import { HomePage } from "../components/HomePage";
import { pageMeta } from "../lib/pageMeta";
import frMessages from "../../messages/fr.json";

export const metadata = pageMeta("/", "fr", {
  title: "RFALA | Partenaire d'innovation IA",
  description:
    "RFALA aide les entreprises, startups et institutions à concevoir, construire et déployer des systèmes et applications intelligentes basés sur l'IA, de la stratégie et l'audit IA aux plateformes de données et à l'ingénierie IA sur mesure."
});

export default function FrenchHome() {
  return <HomePage dictionary={frMessages} locale="fr" />;
}
