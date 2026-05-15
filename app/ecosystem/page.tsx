import { ContentPage } from "../components/ContentPage";
import enMessages from "../../messages/en.json";

export const metadata = {
  title: "RFALA Ecosystem | Platforms, Brands, and Innovation",
  description: "Explore the RFALA ecosystem, including RFALA Institute, Xenova Studio, Maroclist, and Islamic School Review."
};

export default function EcosystemPage() {
  return <ContentPage dictionary={enMessages} locale="en" kind="ecosystem" />;
}
