import { ContentPageView } from "@/components/content-page";
import { getContentPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/metadata";

const page = getContentPage("game-info");
export const metadata = buildPageMetadata(page);

export default function GameInfoPage() {
  return (
    <ContentPageView page={page} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Game Overview", path: "/game-info" }]}>
      <section className="edition-panel" aria-labelledby="edition-title">
        <div className="section-kicker">EDITION CHECK</div>
        <h2 id="edition-title">Compare Editions</h2>
        <div className="table-scroll">
          <table>
            <thead><tr><th>Content</th><th>Standard Edition</th><th>Digital Deluxe</th></tr></thead>
            <tbody>
              <tr><th>Full game</th><td>Included</td><td>Included</td></tr>
              <tr><th>Exclusive suits / claws</th><td>—</td><td>Five of each; cosmetic</td></tr>
              <tr><th>Technique Points</th><td>—</td><td>Bonus points included</td></tr>
              <tr><th>Later upgrade</th><td>Available separately</td><td>Not applicable</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </ContentPageView>
  );
}
