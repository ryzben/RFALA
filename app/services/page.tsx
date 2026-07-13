import { ContentPage } from "../components/ContentPage";
import enMessages from "../../messages/en.json";

export const metadata = {
  title: "RFALA Capabilities | AI Strategy, Data Platforms, and Custom AI Engineering",
  description: "Explore RFALA's capability areas: AI strategy and innovation, intelligent data platforms, AI applications, growth and digital performance, AI auditing, and custom AI engineering."
};

export default function ServicesPage() {
  return <ContentPage dictionary={enMessages} locale="en" kind="services" />;
}
