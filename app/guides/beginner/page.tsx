import { ContentPageView } from "@/components/content-page";
import { getContentPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/metadata";

const page = getContentPage("guides/beginner");
export const metadata = buildPageMetadata(page);

export default function BeginnerGuidePage() {
  return <ContentPageView page={page} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Guides", path: "/guides/beginner" }, { name: "Beginner Guide", path: "/guides/beginner" }]} />;
}
