import { ContentPage } from "../components/ContentPage";
import enMessages from "../../messages/en.json";
import { pageMeta } from "../lib/pageMeta";

export const metadata = pageMeta("/about", "en", {
  title: "About RFALA | AI Innovation Partner",
  description: "Learn about RFALA, an AI innovation partner helping enterprises, startups, and institutions design, build, and deploy intelligent solutions."
});

export default function AboutPage() {
  return <ContentPage dictionary={enMessages} locale="en" kind="about" />;
}
