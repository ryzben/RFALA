import { ContentPage } from "../components/ContentPage";
import enMessages from "../../messages/en.json";
import { pageMeta } from "../lib/pageMeta";

export const metadata = pageMeta("/ecosystem", "en", {
  title: "RFALA Ecosystem | Platforms, Brands, and Innovation",
  description: "Explore the RFALA ecosystem, including RFALA Institute, RFALA Studio, Maroclist, and Islamic School Review."
});

export default function EcosystemPage() {
  return <ContentPage dictionary={enMessages} locale="en" kind="ecosystem" />;
}
