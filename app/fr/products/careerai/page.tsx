import { ProductPage } from "../../../components/ProductPage";
import { productPageMetadata } from "../../../lib/productMeta";
import frMessages from "../../../../messages/fr.json";

export const metadata = productPageMetadata("careerai", "fr");

export default function FrenchCareerAIPage() {
  return <ProductPage dictionary={frMessages} locale="fr" product="careerai" />;
}
