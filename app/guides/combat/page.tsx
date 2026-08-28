import { ContentPageView } from "@/components/content-page";
import { getContentPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/metadata";

const page = getContentPage("guides/combat");
export const metadata = buildPageMetadata(page);

export default function CombatGuidePage() {
  return <ContentPageView page={page} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides/beginner" }, { name: "Combat Systems", path: "/guides/combat" }]} />;
}
