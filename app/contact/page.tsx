import { ContactPage } from "../components/ContactPage";
import enMessages from "../../messages/en.json";

export const metadata = {
  title: "Contact RFALA | Technology, AI, and Innovation Ecosystem",
  description: "Contact RFALA for AI solutions, digital platforms, innovation projects, media work, learning technologies, and ecosystem partnerships."
};

export default function EnglishContactPage() {
  return <ContactPage dictionary={enMessages} locale="en" />;
}
