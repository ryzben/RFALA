import { ContentPage } from "../components/ContentPage";
import enMessages from "../../messages/en.json";
import { pageMeta } from "../lib/pageMeta";

export const metadata = pageMeta("/vision", "en", {
  title: "RFALA Vision | Technology, Innovation, and Education",
  description: "Learn about RFALA's vision for connecting technology, innovation, education, Moroccan roots, and international impact."
});

export default function VisionPage() {
  return <ContentPage dictionary={enMessages} locale="en" kind="vision" />;
}
