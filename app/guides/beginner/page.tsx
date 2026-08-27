import { ContentPageView } from "@/components/content-page";
import { getContentPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/metadata";

const page = getContentPage("guides/beginner");
export const metadata = buildPageMetadata(page);

export default function BeginnerGuidePage() {
  return <ContentPageView page={page} breadcrumbs={[{ name: "首页", path: "/" }, { name: "攻略", path: "/guides/beginner" }, { name: "新手入门", path: "/guides/beginner" }]} />;
}
