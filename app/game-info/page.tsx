import { ContentPageView } from "@/components/content-page";
import { getContentPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/metadata";

const page = getContentPage("game-info");
export const metadata = buildPageMetadata(page);

export default function GameInfoPage() {
  return (
    <ContentPageView page={page} breadcrumbs={[{ name: "首页", path: "/" }, { name: "游戏资料", path: "/game-info" }]}>
      <section className="edition-panel" aria-labelledby="edition-title">
        <div className="section-kicker">EDITION CHECK</div>
        <h2 id="edition-title">版本对照</h2>
        <div className="table-scroll">
          <table>
            <thead><tr><th>内容</th><th>普通版</th><th>数字豪华版</th></tr></thead>
            <tbody>
              <tr><th>完整游戏</th><td>包含</td><td>包含</td></tr>
              <tr><th>专属战衣 / 爪子</th><td>—</td><td>各 5 款，纯外观</td></tr>
              <tr><th>额外技能点</th><td>—</td><td>包含</td></tr>
              <tr><th>后续升级</th><td>可购买升级</td><td>不适用</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </ContentPageView>
  );
}
