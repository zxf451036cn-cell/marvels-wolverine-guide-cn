import Link from "next/link";

import { Countdown } from "@/components/countdown";
import { StatusBadge } from "@/components/status-badge";
import { newsItems } from "@/content/news";

const coreFiles = [
  { number: "01", href: "/game-info", title: "游戏资料", kicker: "发售 · 平台 · 版本", description: "确认 9 月 15 日发售、PS5 独占、豪华版内容和购买前问题。" },
  { number: "02", href: "/guides/beginner", title: "新手入门", kicker: "先活下来，再谈撕碎", description: "从设置、接敌选择到怒气管理，建立首发第一小时的战斗循环。" },
  { number: "03", href: "/guides/combat", title: "战斗系统", kicker: "利爪 · 招架 · 怒气", description: "拆解 Techniques、Critical Strikes、治疗因子与 Last Stand。" },
  { number: "04", href: "/characters/wolverine", title: "角色能力", kicker: "SUBJECT: LOGAN", description: "区分漫画经典设定与本作已经确认的可玩能力。" },
  { number: "05", href: "/story", title: "剧情档案", kicker: "TEAM X / MISSING YEARS", description: "无重大剧透梳理 X 小队、特拉斯克、掠夺者与全球旅程。" },
] as const;

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__noise" aria-hidden="true" />
        <div className="hero__claws" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero__content page-shell">
          <div className="hero__eyebrow"><span>FIELD ARCHIVE</span><span>PS5 / 2026</span></div>
          <div className="hero__grid">
            <div className="hero__copy">
              <p className="hero__index">LOGAN // FILE 001</p>
              <h1 id="hero-title">WOLVERINE</h1>
              <p className="hero__tagline">猎杀之前，先读懂野兽</p>
              <p className="hero__description">可靠、克制、可追溯的《漫威金刚狼》中文情报与首发攻略。只写已经公开的事实，把猜测留在爪痕之外。</p>
              <div className="hero__actions">
                <Link className="button button--primary" href="/guides/beginner">开始首发准备</Link>
                <Link className="button button--ghost" href="/guides/combat">拆解战斗系统</Link>
              </div>
            </div>
            <div className="hero__subject" aria-hidden="true">
              <span className="hero__subject-label">SUBJECT</span>
              <strong>LOGAN</strong>
              <span className="hero__subject-code">WEAPON X / ACTIVE</span>
            </div>
          </div>
          <div className="launch-strip">
            <div>
              <p className="launch-strip__label">GLOBAL LAUNCH</p>
              <p className="launch-strip__date">2026 年 9 月 15 日 · PS5</p>
            </div>
            <Countdown launchIso="2026-09-15T00:00:00+08:00" />
            <div className="launch-strip__facts">
              <span>单人</span><span>非开放世界</span><span>18+</span>
            </div>
          </div>
        </div>
      </section>

      <section className="intel-section page-shell" aria-labelledby="intel-title">
        <div className="section-heading">
          <p>CONFIRMED INTEL / 已确认情报</p>
          <h2 id="intel-title">不是传闻。是可追溯的事实。</h2>
        </div>
        <div className="intel-grid">
          <article className="intel-card intel-card--lead">
            <StatusBadge status="official" />
            <p className="intel-card__index">01 / RELEASE</p>
            <h3>9 月 15 日，利爪落地</h3>
            <p>Insomniac Games 打造的叙事驱动单人动作冒险，为 PS5 从头构建，不登陆 PS4。</p>
            <Link href="/game-info">查看完整资料 <span aria-hidden="true">→</span></Link>
          </article>
          <article className="intel-card">
            <StatusBadge status="official" />
            <p className="intel-card__index">02 / COMBAT</p>
            <h3>怒气是武器，也是生命线</h3>
            <p>攻击、招架与击杀积累怒气；它既强化攻势，也驱动治疗因子和 Last Stand。</p>
          </article>
          <article className="intel-card intel-card--red">
            <StatusBadge status="official" />
            <p className="intel-card__index">03 / STORY</p>
            <h3>X 小队重返猎场</h3>
            <p>罗根离队三年后归队，对抗绑架变种人的特拉斯克与机械佣兵掠夺者。</p>
          </article>
        </div>
      </section>

      <section className="files-section" aria-labelledby="files-title">
        <div className="page-shell">
          <div className="section-heading section-heading--light">
            <p>SELECT FILE / 选择档案</p>
            <h2 id="files-title">从哪里开始，由你决定。</h2>
          </div>
          <div className="file-list">
            {coreFiles.map((file) => (
              <Link className="file-card" href={file.href} key={file.href}>
                <span className="file-card__number">{file.number}</span>
                <span className="file-card__body">
                  <small>{file.kicker}</small>
                  <strong>{file.title}</strong>
                  <span>{file.description}</span>
                </span>
                <span className="file-card__arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="news-section page-shell" aria-labelledby="news-title">
        <div className="section-heading section-heading--row">
          <div><p>LATEST TRANSMISSIONS / 最新动态</p><h2 id="news-title">猎场仍在变化</h2></div>
          <Link href="/news">查看全部动态 →</Link>
        </div>
        <div className="news-grid">
          {newsItems.slice(0, 3).map((item) => (
            <article className="news-card" key={item.id}>
              <div className="news-card__meta"><time dateTime={item.publishedAt}>{item.publishedAt}</time><StatusBadge status={item.status} /></div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link href="/news">读取动态 <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
