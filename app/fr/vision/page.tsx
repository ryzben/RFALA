import { ContentPage } from "../../components/ContentPage";
import frMessages from "../../../messages/fr.json";
import { pageMeta } from "../../lib/pageMeta";

export const metadata = pageMeta("/vision", "fr", {
  title: "Vision RFALA | Technologie, innovation et éducation",
  description: "Découvrez la vision RFALA reliant technologie, innovation, éducation, racines marocaines et impact international."
});

export default function FrenchVisionPage() {
  return <ContentPage dictionary={frMessages} locale="fr" kind="vision" />;
}
