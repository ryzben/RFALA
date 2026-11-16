import { ContentPage } from "../components/ContentPage";
import enMessages from "../../messages/en.json";
import { pageMeta } from "../lib/pageMeta";

export const metadata = pageMeta("/services", "en", {
  title: "RFALA Capabilities | AI Innovation Partner",
  description: "Explore RFALA's capability areas: AI strategy and innovation, intelligent data platforms, AI applications, growth and digital performance, AI auditing, and custom AI engineering."
});

export default function ServicesPage() {
  return <ContentPage dictionary={enMessages} locale="en" kind="services" />;
}
