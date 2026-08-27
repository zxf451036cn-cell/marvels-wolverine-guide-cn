import type { ReactNode } from "react";

import { ContentCard } from "@/components/content-card";
import { SourceList } from "@/components/source-list";
import { StatusBadge } from "@/components/status-badge";
import { getContentPage } from "@/content/pages";
import type { ContentPage } from "@/content/types";
import { buildArticleSchema, buildBreadcrumbSchema, safeJsonLd } from "@/lib/schema";

type Breadcrumb = { name: string; path: string };

export function ContentPageView({
  page,
  breadcrumbs,
  children,
}: {
  page: ContentPage;
  breadcrumbs: readonly Breadcrumb[];
  children?: ReactNode;
}) {
  return (
    <main id="main-content" className="content-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(buildArticleSchema(page)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }} />

      <header className="content-hero">
        <div className="content-hero__grid shell">
          <div>
            <nav className="breadcrumbs" aria-label="面包屑">
              {breadcrumbs.map((item, index) => (
                <span key={item.path}>{index > 0 && " / "}{item.name}</span>
              ))}
            </nav>
            <p className="content-hero__eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="content-hero__intro">{page.description}</p>
          </div>
          <aside className="content-hero__stamp" aria-label="资料状态">
            <StatusBadge status={page.status} />
            <span>最后更新</span>
            <strong>{page.updatedAt}</strong>
            <small>发布前信息会随官方资料持续校正</small>
          </aside>
        </div>
      </header>

      <div className="article-shell shell">
        <article className="article-body">
          {page.sections.map((section, index) => (
            <section className="article-section" id={section.id} key={section.id}>
              <div className="article-section__index">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <div className="article-section__heading">
                  <h2>{section.title}</h2>
                  <StatusBadge status={section.status} />
                </div>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.highlights && (
                  <ul className="highlight-list">
                    {section.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                )}
              </div>
            </section>
          ))}

          {children}

          <section className="faq-panel">
            <div className="section-kicker">FAQ / 搜索高频问题</div>
            <h2>常见问题</h2>
            {page.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </section>

          <SourceList sourceIds={page.sourceIds} />
        </article>

        <aside className="article-aside" aria-label="本页导航">
          <span>ON THIS FILE</span>
          {page.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
        </aside>
      </div>

      <section className="related-section">
        <div className="shell">
          <div className="section-kicker">RELATED FILES</div>
          <h2>继续阅读</h2>
          <div className="related-grid">
            {page.relatedSlugs.map((slug) => <ContentCard key={slug} page={getContentPage(slug)} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
