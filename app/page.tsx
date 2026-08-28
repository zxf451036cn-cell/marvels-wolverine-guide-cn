import Link from "next/link";

/* eslint-disable @next/next/no-img-element -- local WebP artwork is pre-optimized for this static export */

import { Countdown } from "@/components/countdown";
import { MediaGallery } from "@/components/media-gallery";
import { StatusBadge } from "@/components/status-badge";
import { TrailerEmbed } from "@/components/trailer-embed";
import { mediaAssets, trailers } from "@/content/media";
import { newsItems } from "@/content/news";
import { safeJsonLd } from "@/lib/schema";
import { getSiteUrl, siteDescription, siteName } from "@/lib/site";

const coreFiles = [
  { number: "01", href: "/game-info", title: "Game Overview", kicker: "RELEASE · PLATFORM · EDITIONS", description: "September 15, PS5 exclusivity, editions, hardware features, and pre-order facts." },
  { number: "02", href: "/guides/beginner", title: "Beginner Guide", kicker: "READ · APPROACH · SURVIVE", description: "Build a launch-day combat loop around enemy reads, accessibility, Rage, and exploration." },
  { number: "03", href: "/guides/combat", title: "Combat Systems", kicker: "CLAWS · COUNTERS · RAGE", description: "Understand Techniques, Critical Strikes, healing, vehicles, and Logan's second life." },
  { number: "04", href: "/characters/wolverine", title: "Wolverine", kicker: "SUBJECT: LOGAN", description: "Trace how adamantium, healing, senses, and Rage shape the playable character." },
  { number: "05", href: "/story", title: "Story Archive", kicker: "TEAM X / MISSING YEARS", description: "Meet Jean Grey, Sabretooth, Trask, the Reavers, and the ghosts hunting Logan." },
] as const;

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: siteName, url: getSiteUrl(), inLanguage: "en", description: siteDescription },
      { "@type": "VideoGame", name: "Marvel's Wolverine", gamePlatform: "PlayStation 5", playMode: "SinglePlayer", datePublished: "2026-09-15", developer: { "@type": "Organization", name: "Insomniac Games" }, url: `${getSiteUrl()}/game-info` },
    ],
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(homeSchema) }} />
      <section className="hero hero--cinematic" aria-labelledby="hero-title">
        <img className="hero__backdrop" src={mediaAssets.hero.src} alt="" width={mediaAssets.hero.width} height={mediaAssets.hero.height} fetchPriority="high" />
        <div className="hero__veil" aria-hidden="true" />
        <div className="hero__claws" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero__content page-shell">
          <div className="hero__eyebrow"><span>INSOMNIAC&apos;S MARVEL&apos;S WOLVERINE</span><span>PS5 / 2026</span></div>
          <div className="hero__grid">
            <div className="hero__copy">
              <p className="hero__index">LOGAN // FILE 001</p>
              <h1 id="hero-title">WOLVERINE</h1>
              <p className="hero__tagline">THE PAST ALWAYS LEAVES A SCAR.</p>
              <p className="hero__description">The independent field archive for Marvel&apos;s Wolverine—official intelligence, spoiler-conscious story files, and launch-ready combat guides with every claim tied to a source.</p>
              <div className="hero__actions">
                <Link className="button button--primary" href="/guides/beginner">Prepare for Launch</Link>
                <Link className="button button--ghost" href="/guides/combat">Break Down Combat</Link>
              </div>
            </div>
          </div>
          <div className="launch-strip">
            <div><p className="launch-strip__label">GLOBAL LAUNCH</p><p className="launch-strip__date">SEPTEMBER 15, 2026 · PS5</p></div>
            <Countdown launchIso="2026-09-15T00:00:00+08:00" />
            <div className="launch-strip__facts"><span>SINGLE PLAYER</span><span>NOT OPEN WORLD</span><span>PS5 EXCLUSIVE</span></div>
          </div>
        </div>
      </section>

      <section className="intel-section page-shell" aria-labelledby="intel-title">
        <div className="section-heading"><p>CONFIRMED INTEL / NO LEAKS</p><h2 id="intel-title">NO RUMORS. JUST THE TRAIL.</h2></div>
        <div className="intel-grid">
          <article className="intel-card intel-card--lead"><StatusBadge status="official" /><p className="intel-card__index">01 / RELEASE</p><h3>THE CLAWS DROP SEPTEMBER 15</h3><p>A single-player action adventure built from the ground up for PS5 by Insomniac Games.</p><Link href="/game-info">Open the complete brief <span aria-hidden="true">→</span></Link></article>
          <article className="intel-card"><StatusBadge status="official" /><p className="intel-card__index">02 / COMBAT</p><h3>RAGE IS A WEAPON—AND A LIFELINE</h3><p>Pressure builds Rage for explosive Techniques or one last recovery when healing fails.</p></article>
          <article className="intel-card intel-card--red"><StatusBadge status="official" /><p className="intel-card__index">03 / STORY</p><h3>TEAM X RETURNS TO THE HUNT</h3><p>Three years after walking away, Logan faces Trask, the Reavers, and his own unfinished past.</p></article>
        </div>
      </section>

      <section className="cinema-section page-shell" aria-labelledby="trailer-title">
        <div className="section-heading section-heading--row"><div><p>OFFICIAL FOOTAGE / PRESS PLAY</p><h2 id="trailer-title">WATCH THE HUNT BEGIN.</h2></div><span>2:42 / EXTENDED GAMEPLAY</span></div>
        <TrailerEmbed trailer={trailers.gameplay} />
      </section>

      <section className="files-section" aria-labelledby="files-title"><div className="page-shell">
        <div className="section-heading section-heading--light"><p>SELECT FILE / FIELD ARCHIVE</p><h2 id="files-title">CHOOSE YOUR ENTRY POINT.</h2></div>
        <div className="file-list">{coreFiles.map((file) => <Link className="file-card" href={file.href} key={file.href}><span className="file-card__number">{file.number}</span><span className="file-card__body"><small>{file.kicker}</small><strong>{file.title}</strong><span>{file.description}</span></span><span className="file-card__arrow" aria-hidden="true">↗</span></Link>)}</div>
      </div></section>

      <section className="gallery-section page-shell" aria-labelledby="gallery-title"><div className="section-heading"><p>OFFICIAL CAPTURES / SOURCE ATTRIBUTED</p><h2 id="gallery-title">MUTANTS. MONSTERS. MEMORIES.</h2></div><MediaGallery assets={[mediaAssets.jean, mediaAssets.sabretooth, mediaAssets.claws, mediaAssets.madripoor]} /></section>

      <section className="news-section page-shell" aria-labelledby="news-title">
        <div className="section-heading section-heading--row"><div><p>LATEST TRANSMISSIONS / VERIFIED UPDATES</p><h2 id="news-title">THE FIELD KEEPS MOVING.</h2></div><Link href="/news">View every update →</Link></div>
        <div className="news-grid">{newsItems.slice(0, 3).map((item) => <article className="news-card" key={item.id}><div className="news-card__meta"><time dateTime={item.publishedAt}>{item.publishedAt}</time><StatusBadge status={item.status} /></div><h3>{item.title}</h3><p>{item.summary}</p><Link href="/news">Read transmission <span aria-hidden="true">→</span></Link></article>)}</div>
      </section>
    </main>
  );
}
