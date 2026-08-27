import { ContentPageView } from "@/components/content-page";
import { getContentPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/metadata";

const page = getContentPage("characters/wolverine");
export const metadata = buildPageMetadata(page);

export default function WolverinePage() {
  return <ContentPageView page={page} breadcrumbs={[{ name: "首页", path: "/" }, { name: "角色能力", path: "/characters/wolverine" }, { name: "金刚狼", path: "/characters/wolverine" }]} />;
}
