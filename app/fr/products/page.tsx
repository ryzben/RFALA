import { ProductsIndexPage } from "../../components/ProductPage";
import { productPageMetadata } from "../../lib/productMeta";
import frMessages from "../../../messages/fr.json";

export const metadata = productPageMetadata("index", "fr");

export default function FrenchProductsPage() {
  return <ProductsIndexPage dictionary={frMessages} locale="fr" />;
}
