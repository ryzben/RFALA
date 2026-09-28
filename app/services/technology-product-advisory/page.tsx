import { AdvisoryPage } from "../../components/AdvisoryPage";
import { productPageMetadata } from "../../lib/productMeta";
import enMessages from "../../../messages/en.json";

export const metadata = productPageMetadata("advisory", "en");

export default function TechnologyProductAdvisoryPage() {
  return <AdvisoryPage dictionary={enMessages} locale="en" />;
}
