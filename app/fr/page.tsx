import { HomePage } from "../page";
import frMessages from "../../messages/fr.json";

export default function FrenchHome() {
  return <HomePage dictionary={frMessages} locale="fr" />;
}
