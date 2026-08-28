import type { Metadata } from "next";

/* eslint-disable @next/next/no-img-element -- local WebP artwork is pre-optimized for this static export */

import { StatusBadge } from "@/components/status-badge";
import { mediaAssets } from "@/content/media";
import { newsItems } from "@/content/news";
import { sources } from "@/content/sources";

export const metadata: Metadata = {
  title: "Marvel's Wolverine News and Official Updates",
  description: "Track official Marvel's Wolverine trailers, hands-on reports, PS5 hardware, soundtrack news, and every important update before launch.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <main id="main-content" className="content-page news-archive">
      <header className="content-hero">
        <img className="content-hero__backdrop" src={mediaAssets.sabretooth.src} alt="" width={mediaAssets.sabretooth.width} height={mediaAssets.sabretooth.height} fetchPriority="high" />
        <div className="content-hero__grid shell">
          <div>
            <p className="content-hero__eyebrow">LATEST INTEL / VERIFIED UPDATES</p>
            <h1>FIELD TRANSMISSIONS</h1>
            <p className="content-hero__intro">Official announcements and approved hands-on reporting, source-linked and ordered from newest to oldest.</p>
          </div>
          <aside className="content-hero__stamp"><span>LAST UPDATED</span><strong>2026-08-28</strong><small>{newsItems.length} verified transmissions</small></aside>
        </div>
      </header>
      <section className="news-timeline shell" aria-label="Latest Marvel's Wolverine updates">
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
                <a href={source.url} target="_blank" rel="noreferrer">Read source: {source.publisher} →</a>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
