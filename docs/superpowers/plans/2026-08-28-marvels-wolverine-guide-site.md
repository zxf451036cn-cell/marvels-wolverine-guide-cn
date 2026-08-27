# Marvel's Wolverine 中文攻略站 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建并上线一个以可靠情报和首发攻略为核心的《Marvel's Wolverine》简体中文多页面内容站。

**Architecture:** 使用 Next.js App Router 与 TypeScript 静态生成七个核心路由；集中内容模块保存事实、来源、FAQ 和新闻，页面模板只负责展示。仅导航抽屉和倒计时使用客户端状态，SEO 元数据、结构化数据、sitemap、robots 与原创 Open Graph 图像由 Next.js 文件约定生成。

**Tech Stack:** Next.js、React、TypeScript、CSS Modules/全局 CSS、Vitest、Testing Library、Playwright、GitHub CLI、Vercel CLI

**Spec:** `docs/superpowers/specs/2026-08-27-marvels-wolverine-guide-site-design.md`

## Global Constraints

- 内容面向简体中文玩家，关键事实只使用官方确认或具名媒体试玩资料。
- 所有关键内容明确标注“官方确认”“媒体试玩”或“发售后验证”。
- 不使用泄露资料，不编造关卡、Boss、技能数值、游戏时长或最优配装。
- 主色固定为 `#090A0C`、`#15171B`、`#F5C518`、`#163B65`、`#D9362B`、`#F2EFE7`。
- 不使用 Marvel 或 PlayStation 官方 Logo 作为站点品牌，不复刻官方页面。
- 不引入数据库、CMS、账户、评论、收藏或运行时新闻抓取。
- 所有交互支持键盘，遵守 `prefers-reduced-motion`，移动端不得水平溢出。
- 页面必须包含独立元数据、来源、最后更新时间、内部链接和适用的 JSON-LD。
- 正式构建、核心路由、GitHub 推送与 Vercel 生产 URL 均需提供新鲜验证证据。

## File Structure

- `app/layout.tsx`：根布局、全站 metadata base、站点壳层和字体。
- `app/globals.css`：设计令牌、布局、组件样式、响应式和减少动态效果。
- `app/page.tsx`：首页静态组合与首页 JSON-LD。
- `app/game-info/page.tsx`：游戏资料与购买 FAQ。
- `app/guides/beginner/page.tsx`：新手首发准备。
- `app/guides/combat/page.tsx`：战斗机制解析。
- `app/characters/wolverine/page.tsx`：能力设定与本作表现。
- `app/story/page.tsx`：无重大剧透剧情档案。
- `app/news/page.tsx`：首发前动态列表。
- `app/not-found.tsx`：站内 404。
- `app/sitemap.ts`、`app/robots.ts`：搜索引擎入口。
- `app/opengraph-image.tsx`：原创黄黑红漫画风分享图。
- `components/site-header.tsx`：桌面导航与移动抽屉。
- `components/site-footer.tsx`：来源原则、更新时间与声明。
- `components/countdown.tsx`：发售倒计时客户端组件。
- `components/content-page.tsx`：通用内容页框架、面包屑和 JSON-LD。
- `components/content-card.tsx`：首页与相关内容卡片。
- `components/status-badge.tsx`：来源状态标签。
- `components/source-list.tsx`：来源列表与外链安全属性。
- `content/types.ts`：内容模型类型。
- `content/sources.ts`：六个已核实来源。
- `content/pages.ts`：资料、攻略、能力和剧情内容。
- `content/news.ts`：最新动态数据。
- `lib/metadata.ts`：统一页面 metadata 构建器。
- `lib/schema.ts`：WebSite、VideoGame、Article 和 Breadcrumb JSON-LD 构建器。
- `lib/countdown.ts`：可单元测试的倒计时计算函数。
- `tests/content.test.ts`：事实状态、来源与路由内容完整性。
- `tests/countdown.test.ts`：倒计时边界。
- `tests/metadata.test.ts`：页面 title、description、canonical 与结构化数据。
- `tests/navigation.test.tsx`：移动导航键盘行为。
- `e2e/site.spec.ts`：桌面/移动路由、导航、溢出和 SEO 冒烟验证。

---

### Task 1: Next.js 基础与可信内容模型

**Files:**
- Create: `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `vitest.config.ts`, `vitest.setup.ts`
- Create: `app/layout.tsx`, `app/globals.css`, `app/page.tsx`
- Create: `content/types.ts`, `content/sources.ts`, `content/pages.ts`, `content/news.ts`
- Test: `tests/content.test.ts`

**Interfaces:**
- Produces: `FactStatus = "official" | "handsOn" | "postLaunch"`
- Produces: `Source { id: string; title: string; publisher: string; url: string; publishedAt: string; kind: "official" | "press" }`
- Produces: `ContentPage { slug: string; title: string; eyebrow: string; description: string; updatedAt: string; status: FactStatus; sections: ContentSection[]; faq: FaqItem[]; sourceIds: string[]; relatedSlugs: string[] }`
- Produces: `getContentPage(slug: string): ContentPage`

- [ ] **Step 1: Initialize the minimal Next.js project and add test dependencies**

Run `npm init --yes`, install `next`, `react`, and `react-dom`, then install `typescript`, `@types/node`, `@types/react`, `@types/react-dom`, `eslint`, `eslint-config-next`, `vitest`, `jsdom`, `@testing-library/react`, `@testing-library/jest-dom`, and `@testing-library/user-event` as development dependencies. Create the listed Next.js, TypeScript, ESLint and Vitest configuration files with `@/*` mapped to the repository root. Set scripts to `dev: next dev`, `build: next build`, `start: next start`, `test: vitest run`, `test:watch: vitest`, `typecheck: tsc --noEmit`, and `lint: eslint .`. This avoids running a scaffold over the already committed `docs/` tree.

- [ ] **Step 2: Write the failing content integrity test**

```ts
import { describe, expect, it } from "vitest";
import { contentPages } from "@/content/pages";
import { sources } from "@/content/sources";

describe("content integrity", () => {
  it("gives every page a status, update date, source and related route", () => {
    for (const page of Object.values(contentPages)) {
      expect(["official", "handsOn", "postLaunch"]).toContain(page.status);
      expect(page.updatedAt).toBe("2026-08-28");
      expect(page.sourceIds.length).toBeGreaterThan(0);
      expect(page.relatedSlugs.length).toBeGreaterThan(0);
      for (const sourceId of page.sourceIds) expect(sources[sourceId]).toBeDefined();
    }
  });
});
```

- [ ] **Step 3: Run the test and confirm the missing modules fail**

Run `npm test -- tests/content.test.ts`. Expected: FAIL because `@/content/pages` and `@/content/sources` do not exist.

- [ ] **Step 4: Implement content types and researched copy**

Create the exact types above, populate the six sources from the spec, and write concrete content for `game-info`, `guides/beginner`, `guides/combat`, `characters/wolverine`, and `story`. Add news records for the June gameplay reveal, July story trailer/SDCC panel, August hardware and hands-on updates, and the August 28 soundtrack release. Keep official and media claims in separate sections and include the source IDs for each page.

- [ ] **Step 5: Run content tests, typecheck and commit**

Run `npm test -- tests/content.test.ts` and `npm run typecheck`. Expected: PASS. Commit with `feat: add researched Wolverine content model`.

### Task 2: Site shell, navigation and countdown

**Files:**
- Create: `components/site-header.tsx`, `components/site-footer.tsx`, `components/countdown.tsx`, `components/status-badge.tsx`
- Create: `lib/countdown.ts`
- Modify: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Test: `tests/countdown.test.ts`, `tests/navigation.test.tsx`

**Interfaces:**
- Consumes: content types and route slugs from Task 1.
- Produces: `getCountdown(now: Date, launch: Date): { days: number; hours: number; minutes: number; seconds: number; launched: boolean }`
- Produces: `<SiteHeader />`, `<SiteFooter />`, `<Countdown launchIso="2026-09-15T00:00:00+08:00" />`, `<StatusBadge status={FactStatus} />`

- [ ] **Step 1: Write failing countdown boundary tests**

```ts
it("calculates whole remaining units", () => {
  expect(getCountdown(new Date("2026-09-14T00:00:00+08:00"), new Date("2026-09-15T00:00:00+08:00")))
    .toEqual({ days: 1, hours: 0, minutes: 0, seconds: 0, launched: false });
});

it("never returns negative values after launch", () => {
  expect(getCountdown(new Date("2026-09-16T00:00:00+08:00"), new Date("2026-09-15T00:00:00+08:00")))
    .toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0, launched: true });
});
```

- [ ] **Step 2: Run countdown tests and confirm failure**

Run `npm test -- tests/countdown.test.ts`. Expected: FAIL because `getCountdown` is missing.

- [ ] **Step 3: Implement countdown and accessible navigation**

Implement pure UTC-millisecond countdown math, a one-second client interval, and a static fallback line “2026 年 9 月 15 日 · PS5”。Implement a header with the seven routes, `aria-expanded`, `aria-controls`, Escape-to-close, close-on-link-click, and body-scroll restoration. Implement status labels as visible text, not color alone.

- [ ] **Step 4: Test mobile navigation interactions**

Render `<SiteHeader />` in jsdom, click the button labelled “打开导航”, assert `aria-expanded="true"`, press Escape, and assert it returns to `false`. Run `npm test -- tests/countdown.test.ts tests/navigation.test.tsx`.

- [ ] **Step 5: Build the complete home page shell and commit**

Compose the hero title, countdown, two primary calls to action, core facts, five section cards, latest-news preview and FAQ summary. Add layout-wide skip link, header, main and footer. Run tests and commit with `feat: build responsive site shell and home page`.

### Task 3: Metadata, schema and core information pages

**Files:**
- Create: `lib/metadata.ts`, `lib/schema.ts`
- Create: `components/content-page.tsx`, `components/content-card.tsx`, `components/source-list.tsx`
- Create: `app/game-info/page.tsx`, `app/characters/wolverine/page.tsx`, `app/story/page.tsx`
- Test: `tests/metadata.test.ts`

**Interfaces:**
- Consumes: `ContentPage`, `Source`, route slugs.
- Produces: `buildPageMetadata(page: ContentPage): Metadata`
- Produces: `buildArticleSchema(page: ContentPage): Record<string, unknown>`
- Produces: `buildBreadcrumbSchema(items: { name: string; path: string }[]): Record<string, unknown>`
- Produces: `<ContentPageView page={ContentPage} />`

- [ ] **Step 1: Write failing metadata tests**

```ts
it("builds unique Chinese metadata for the combat page", () => {
  const metadata = buildPageMetadata(getContentPage("guides/combat"));
  expect(metadata.title).toContain("战斗系统");
  expect(metadata.description).toContain("怒气");
  expect(metadata.alternates?.canonical).toBe("/guides/combat");
});
```

- [ ] **Step 2: Run the metadata test and confirm failure**

Run `npm test -- tests/metadata.test.ts`. Expected: FAIL because `buildPageMetadata` is missing.

- [ ] **Step 3: Implement metadata, schemas and shared content template**

Use relative canonical paths until `NEXT_PUBLIC_SITE_URL` is available, then resolve them through root `metadataBase`. Escape JSON-LD `<` characters before injecting. Render breadcrumb navigation, page introduction, source-status badge, content sections, FAQ, related links, source list and update date.

- [ ] **Step 4: Create game info, Wolverine ability and story routes**

Each route exports its own metadata via `buildPageMetadata`, renders `ContentPageView`, and injects matching Article and Breadcrumb schemas. The game-info page includes a semantic edition comparison table and visible FAQ answers for platform, PC, open-world status and unconfirmed length.

- [ ] **Step 5: Test route metadata and commit**

Run `npm test -- tests/metadata.test.ts`, `npm run typecheck`, and `npm run lint`. Commit with `feat: add information story and character pages`.

### Task 4: Guide and news routes

**Files:**
- Create: `app/guides/beginner/page.tsx`, `app/guides/combat/page.tsx`, `app/news/page.tsx`
- Modify: `components/content-page.tsx`, `content/pages.ts`, `content/news.ts`
- Test: `tests/content.test.ts`

**Interfaces:**
- Consumes: `ContentPageView`, metadata and schema builders from Task 3.
- Produces: three statically generated SEO routes with no runtime fetches.

- [ ] **Step 1: Expand failing content assertions for required mechanism names**

Assert the combat page contains `Techniques`, `Critical Strikes`, `怒气`, `治疗因子`, `Last Stand`, `潜行`, `招架`, and `闪避`; assert the beginner page contains explicit “发售后验证” guidance; assert every news record has a source ID and ISO date.

- [ ] **Step 2: Run content tests and confirm the missing route copy fails**

Run `npm test -- tests/content.test.ts`. Expected: FAIL on one or more required terms before the content expansion.

- [ ] **Step 3: Implement beginner and combat guide pages**

Use official facts for the core combat loop and separate media-preview callouts for cooldown abilities, exploration, New Game+, Mission Replay and Nightmare Doors. Do not present preview observations as a final build recommendation.

- [ ] **Step 4: Implement the latest-news page**

Render reverse-chronological cards with date, publisher, source status, concise summary and safe external source link. Include a visible note that news is manually curated and updated with the site build.

- [ ] **Step 5: Run tests and commit**

Run the full unit suite, typecheck and lint. Commit with `feat: add beginner combat and news sections`.

### Task 5: Visual system, responsive behavior and search-engine files

**Files:**
- Modify: `app/globals.css`, `app/layout.tsx`, all route pages as needed for class hooks
- Create: `app/not-found.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`
- Modify: `next.config.ts`
- Test: `tests/metadata.test.ts`

**Interfaces:**
- Consumes: all route paths and page metadata.
- Produces: sitemap entries for `/`, `/game-info`, `/guides/beginner`, `/guides/combat`, `/characters/wolverine`, `/story`, `/news`.
- Produces: 1200×630 Open Graph image through `ImageResponse` with exact text “WOLVERINE / 中文情报与攻略档案”.

- [ ] **Step 1: Add failing SEO inventory tests**

Assert sitemap contains exactly the seven public routes, robots allows `/`, and every public route has a unique title and non-empty description.

- [ ] **Step 2: Implement the full visual system**

Create CSS custom properties for the approved palette, condensed display typography, angled panels with `clip-path`, CSS claw marks, halftone background using radial gradients, readable content columns, visible focus states, dark selection colors, and restrained hover movement. At `900px` switch to compact navigation and reduced two-column layouts; at `640px` use single-column cards and fluid type. Ensure `overflow-x: clip` is applied only at the page shell and does not hide focused controls.

- [ ] **Step 3: Implement SEO files and original social card**

Generate sitemap and robots from `NEXT_PUBLIC_SITE_URL` with a local fallback only for development. Create WebSite and VideoGame schemas on the home page. Build the social image from solid colors, gradients, text and CSS-like layout through `ImageResponse`; use no third-party artwork or logos.

- [ ] **Step 4: Implement branded 404 and reduced-motion rules**

The 404 page uses the text “目标已脱离追踪” and links to home, beginner and combat pages. Under `prefers-reduced-motion: reduce`, disable smooth scroll, card transforms, menu transitions and decorative animation.

- [ ] **Step 5: Run unit checks and production build, then commit**

Run `npm test`, `npm run typecheck`, `npm run lint`, and `npm run build`. Expected: all exit 0. Commit with `feat: complete visual system and SEO`.

### Task 6: Browser-level responsive and accessibility verification

**Files:**
- Create: `playwright.config.ts`, `e2e/site.spec.ts`
- Modify: `package.json`

**Interfaces:**
- Consumes: production-ready site from Task 5.
- Produces: `npm run test:e2e` evidence for Chromium desktop and mobile viewports.

- [ ] **Step 1: Install Playwright and write route smoke tests**

Configure one desktop project at 1440×900 and one mobile project at 390×844. For every public route assert response status below 400, one visible `h1`, unique document title, no horizontal overflow (`scrollWidth <= clientWidth + 1`), and a visible source/update area.

- [ ] **Step 2: Add interaction and semantics tests**

On mobile, open the navigation, tab to a route, follow it and assert the menu closes. On the home page assert the countdown or launched-state text exists. Verify the skip link reaches `#main-content`, every image has `alt`, and the first five heading transitions do not skip directly from `h1` to `h3`.

- [ ] **Step 3: Run e2e tests against the real local server**

Run `npm run test:e2e`. Expected: both desktop and mobile projects pass all route and interaction assertions. Fix only evidence-backed failures.

- [ ] **Step 4: Run the final local verification matrix and commit**

Run `npm test`, `npm run typecheck`, `npm run lint`, `npm run build`, and `npm run test:e2e` from a clean working tree. Commit with `test: add responsive browser verification`.

### Task 7: GitHub and Vercel production release

**Files:**
- Create: `.env.example` only if `NEXT_PUBLIC_SITE_URL` is required in local development.
- Modify: metadata base configuration only if the deployed production URL differs from the planned origin.

**Interfaces:**
- Consumes: clean `main` branch with a successful final verification matrix.
- Produces: public GitHub repository URL and successful Vercel production URL.

- [ ] **Step 1: Audit the exact release tree**

Run `git status --short --branch`, `git ls-files`, and scan tracked files for common secret names. Confirm `.next`, Playwright reports, test artifacts and `.env*` secrets are ignored while `.env.example` remains trackable.

- [ ] **Step 2: Create and push the GitHub repository**

Use the authenticated GitHub CLI to create a public repository named `marvels-wolverine-guide-cn`, set `origin`, and push `main`. Confirm `git remote -v`, `git status`, and the GitHub repository default branch.

- [ ] **Step 3: Deploy with Vercel**

Use `npx vercel@latest` to link or create the Vercel project, set the framework to Next.js, and deploy production with `npx vercel@latest --prod --yes`. If Vercel needs browser authentication, request only that one external authorization and resume after it succeeds.

- [ ] **Step 4: Wire the exact production origin and redeploy if necessary**

Set `NEXT_PUBLIC_SITE_URL` to the trusted Vercel production origin. If this changes generated metadata, rebuild, commit, push, and deploy once more so canonical, sitemap, robots and social metadata use the final HTTPS origin.

- [ ] **Step 5: Verify live behavior and finish**

Request the production homepage plus `/game-info`, `/guides/beginner`, `/guides/combat`, `/characters/wolverine`, `/story`, `/news`, `/sitemap.xml`, and `/robots.txt`; require non-error responses. Inspect homepage and combat metadata against the content records. Record the GitHub and production URLs only after these checks pass.
