import { ContentPageView } from "@/components/content-page";
import { getContentPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/metadata";

const page = getContentPage("story");
export const metadata = buildPageMetadata(page);

export default function StoryPage() {
  return <ContentPageView page={page} breadcrumbs={[{ name: "首页", path: "/" }, { name: "剧情与角色", path: "/story" }]} />;
}
