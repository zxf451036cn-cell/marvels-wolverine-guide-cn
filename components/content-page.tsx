import type { ReactNode } from "react";

/* eslint-disable @next/next/no-img-element -- local WebP artwork is pre-optimized for this static export */

import { ContentCard } from "@/components/content-card";
import { MediaGallery } from "@/components/media-gallery";
import { SourceList } from "@/components/source-list";
import { StatusBadge } from "@/components/status-badge";
import { TrailerEmbed } from "@/components/trailer-embed";
import { mediaAssets, trailers, type MediaAsset, type Trailer } from "@/content/media";
import { getContentPage } from "@/content/pages";
import type { ContentPage } from "@/content/types";
import { buildArticleSchema, buildBreadcrumbSchema, safeJsonLd } from "@/lib/schema";

type Breadcrumb = { name: string; path: string };

const visualFiles: Record<string, { hero: MediaAsset; gallery: readonly MediaAsset[]; trailer?: Trailer }> = {
  "game-info": { hero: mediaAssets.hero, gallery: [mediaAssets.combat, mediaAssets.claws] },
  "guides/beginner": { hero: mediaAssets.madripoor, gallery: [mediaAssets.hero, mediaAssets.jean] },
  "guides/combat": { hero: mediaAssets.combat, gallery: [mediaAssets.claws, mediaAssets.hero], trailer: trailers.gameplay },
  "characters/wolverine": { hero: mediaAssets.claws, gallery: [mediaAssets.character, mediaAssets.combat] },
  story: { hero: mediaAssets.madripoor, gallery: [mediaAssets.jean, mediaAssets.sabretooth], trailer: trailers.story },
};

export function ContentPageView({
  page,
  breadcrumbs,
  children,
}: {
  page: ContentPage;
  breadcrumbs: readonly Breadcrumb[];
  children?: ReactNode;
}) {
  const visuals = visualFiles[page.slug];

  return (
    <main id="main-content" className="content-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(buildArticleSchema(page)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(buildBreadcrumbSchema(breadcrumbs)) }} />

      <header className="content-hero">
        <img className="content-hero__backdrop" src={visuals.hero.src} alt="" width={visuals.hero.width} height={visuals.hero.height} fetchPriority="high" style={{ objectPosition: visuals.hero.focalPoint }} />
        <div className="content-hero__grid shell">
          <div>
            <nav className="breadcrumbs" aria-label="Breadcrumbs">
              {breadcrumbs.map((item, index) => (
                <span key={`${item.path}-${index}`}>{index > 0 && " / "}{item.name}</span>
              ))}
            </nav>
            <p className="content-hero__eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="content-hero__intro">{page.description}</p>
          </div>
          <aside className="content-hero__stamp" aria-label="File status">
            <StatusBadge status={page.status} />
            <span>LAST UPDATED</span>
            <strong>{page.updatedAt}</strong>
            <small>Pre-release intelligence is revised as official details change.</small>
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

          <section className="article-media" aria-label="Official promotional media">
            <MediaGallery assets={visuals.gallery} />
            {visuals.trailer && <TrailerEmbed trailer={visuals.trailer} />}
          </section>

          {children}

          <section className="faq-panel">
            <div className="section-kicker">FAQ / HIGH-INTENT QUESTIONS</div>
            <h2>Frequently Asked Questions</h2>
            {page.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </section>

          <SourceList sourceIds={page.sourceIds} />
        </article>

        <aside className="article-aside" aria-label="On this page">
          <span>ON THIS FILE</span>
          {page.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
        </aside>
      </div>

      <section className="related-section">
        <div className="shell">
          <div className="section-kicker">RELATED FILES</div>
          <h2>Continue the Hunt</h2>
          <div className="related-grid">
            {page.relatedSlugs.map((slug) => <ContentCard key={slug} page={getContentPage(slug)} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
