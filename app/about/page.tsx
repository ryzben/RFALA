import { ContentPage } from "../components/ContentPage";
import enMessages from "../../messages/en.json";

export const metadata = {
  title: "About RFALA | Technology, Innovation, and Digital Ecosystem",
  description: "Learn about RFALA, a technology, innovation, and digital ecosystem building impactful platforms and future-focused experiences."
};

export default function AboutPage() {
  return <ContentPage dictionary={enMessages} locale="en" kind="about" />;
}
