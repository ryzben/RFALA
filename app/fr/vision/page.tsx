import { ContentPage } from "../../components/ContentPage";
import frMessages from "../../../messages/fr.json";

export const metadata = {
  title: "Vision RFALA | Technologie, innovation et éducation",
  description: "Découvrez la vision RFALA reliant technologie, innovation, éducation, racines marocaines et impact international."
};

export default function FrenchVisionPage() {
  return <ContentPage dictionary={frMessages} locale="fr" kind="vision" />;
}
