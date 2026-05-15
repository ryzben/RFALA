import { ContentPage } from "../components/ContentPage";
import enMessages from "../../messages/en.json";

export const metadata = {
  title: "RFALA Services | Digital, AI, and Innovation Solutions",
  description: "Explore RFALA services across AI solutions, web and app development, digital marketing, branding, media, research, and learning technologies."
};

export default function ServicesPage() {
  return <ContentPage dictionary={enMessages} locale="en" kind="services" />;
}
