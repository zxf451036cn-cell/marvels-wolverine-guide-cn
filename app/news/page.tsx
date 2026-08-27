import type { Metadata } from "next";

import { StatusBadge } from "@/components/status-badge";
import { newsItems } from "@/content/news";
import { sources } from "@/content/sources";

export const metadata: Metadata = {
  title: "《漫威金刚狼》最新动态",
  description: "追踪《Marvel's Wolverine》官方预告、媒体试玩、PS5 限定硬件、原声带与首发前重要更新。",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <main id="main-content" className="content-page news-archive">
      <header className="content-hero">
        <div className="content-hero__grid shell">
          <div>
            <p className="content-hero__eyebrow">LATEST INTEL / 最新动态</p>
            <h1>前线情报</h1>
            <p className="content-hero__intro">只收录可追溯的官方公告与获准媒体试玩，按日期倒序整理。</p>
          </div>
          <aside className="content-hero__stamp"><span>最后更新</span><strong>2026-08-28</strong><small>共 {newsItems.length} 条已核查动态</small></aside>
        </div>
      </header>
      <section className="news-timeline shell" aria-label="最新动态列表">
        {newsItems.map((item) => {
          const source = sources[item.sourceId];
          return (
            <article key={item.id} className="timeline-card">
              <time dateTime={item.publishedAt}>{item.publishedAt}</time>
              <div>
                <StatusBadge status={item.status} />
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href={source.url} target="_blank" rel="noreferrer">查看来源：{source.publisher} →</a>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
