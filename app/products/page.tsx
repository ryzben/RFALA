import { ProductsIndexPage } from "../components/ProductPage";
import { productPageMetadata } from "../lib/productMeta";
import enMessages from "../../messages/en.json";

export const metadata = productPageMetadata("index", "en");

export default function ProductsPage() {
  return <ProductsIndexPage dictionary={enMessages} locale="en" />;
}
