import { AdvisoryPage } from "../../../components/AdvisoryPage";
import { productPageMetadata } from "../../../lib/productMeta";
import frMessages from "../../../../messages/fr.json";

export const metadata = productPageMetadata("advisory", "fr");

export default function FrenchTechnologyProductAdvisoryPage() {
  return <AdvisoryPage dictionary={frMessages} locale="fr" />;
}
