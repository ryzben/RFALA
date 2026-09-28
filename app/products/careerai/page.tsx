import { ProductPage } from "../../components/ProductPage";
import { productPageMetadata } from "../../lib/productMeta";
import enMessages from "../../../messages/en.json";

export const metadata = productPageMetadata("careerai", "en");

export default function CareerAIPage() {
  return <ProductPage dictionary={enMessages} locale="en" product="careerai" />;
}
