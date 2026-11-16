import { HomePage } from "./components/HomePage";
import { pageMeta } from "./lib/pageMeta";
import enMessages from "../messages/en.json";

export const metadata = pageMeta("/", "en", {
  title: "RFALA | AI Innovation Partner",
  description:
    "RFALA helps enterprises, startups, and institutions design, build, and deploy AI-powered systems and intelligent applications, from AI strategy and auditing to data platforms and custom AI engineering."
});

export default function Home() {
  return <HomePage dictionary={enMessages} locale="en" />;
}
