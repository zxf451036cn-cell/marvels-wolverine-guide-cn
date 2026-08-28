import { ContentPageView } from "@/components/content-page";
import { getContentPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/metadata";

const page = getContentPage("characters/wolverine");
export const metadata = buildPageMetadata(page);

export default function WolverinePage() {
  return <ContentPageView page={page} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Ability Files", path: "/characters/wolverine" }, { name: "Wolverine", path: "/characters/wolverine" }]} />;
}
