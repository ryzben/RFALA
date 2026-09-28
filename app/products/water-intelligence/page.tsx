import { ProductPage } from "../../components/ProductPage";
import { productPageMetadata } from "../../lib/productMeta";
import enMessages from "../../../messages/en.json";

export const metadata = productPageMetadata("water", "en");

export default function WaterIntelligencePage() {
  return <ProductPage dictionary={enMessages} locale="en" product="water" />;
}
