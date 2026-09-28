import { ProductPage } from "../../../components/ProductPage";
import { productPageMetadata } from "../../../lib/productMeta";
import frMessages from "../../../../messages/fr.json";

export const metadata = productPageMetadata("water", "fr");

export default function FrenchWaterIntelligencePage() {
  return <ProductPage dictionary={frMessages} locale="fr" product="water" />;
}
