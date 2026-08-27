import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found shell">
      <p>FILE LOST / 404</p>
      <h1>线索断了。</h1>
      <span>这份档案可能已移动，或从未存在。</span>
      <Link className="button button--primary" href="/">返回情报中心</Link>
    </main>
  );
}
