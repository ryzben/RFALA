import { ContentPage } from "../components/ContentPage";
import enMessages from "../../messages/en.json";

export const metadata = {
  title: "RFALA Institute | Guided Learning for the AI Era",
  description: "Explore RFALA Institute guided learning pathways, mentorship, AI literacy, and future-ready practical skills."
};

export default function InstitutePage() {
  return <ContentPage dictionary={enMessages} locale="en" kind="institute" />;
}
