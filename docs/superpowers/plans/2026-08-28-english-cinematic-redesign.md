# Marvel's Wolverine English Cinematic Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the existing Chinese guide into a fully English, responsive, media-rich promotional website and redeploy it to the connected Vercel production project.

**Architecture:** Keep the existing static Next.js App Router route structure and source-driven content model. Add a typed official-media catalog plus reusable server-first image components and a small client-only lazy trailer component; pages consume those shared primitives while retaining static export compatibility.

**Tech Stack:** Next.js 16.3 App Router, React 19, TypeScript 6, CSS, Vitest, Testing Library, Playwright CLI, Vercel static export

**Spec:** `docs/superpowers/specs/2026-08-28-english-cinematic-redesign.md`

## Global Constraints

- Every rendered interface string, metadata field, JSON-LD label, image alt, and source label must be English.
- Preserve the public routes `/`, `/game-info`, `/guides/beginner`, `/guides/combat`, `/characters/wolverine`, `/story`, and `/news`.
- Use only official PlayStation, PlayStation Blog, Marvel, or Insomniac promotional media; no leaks or fan edits.
- Homepage, Combat, and Story must expose official privacy-enhanced YouTube trailer experiences without sound autoplay.
- Keep `output: "export"` and avoid runtime server dependencies.
- Maintain keyboard access, reduced-motion support, meaningful alt text, visible focus, and at least 44-pixel touch targets.
- Verify zero unintended horizontal overflow at desktop and 390-pixel mobile widths.

---

### Task 1: English Editorial and Search-Intent Model

**Files:**
- Modify: `content/types.ts`
- Modify: `content/pages.ts`
- Modify: `content/news.ts`
- Modify: `content/sources.ts`
- Modify: `tests/content.test.ts`
- Modify: `tests/metadata.test.ts`

**Interfaces:**
- Consumes: existing `ContentPage`, `ContentSection`, `NewsItem`, and `Source` records.
- Produces: English `contentPages`, `newsItems`, and `sources`; stable `getContentPage(slug: string): ContentPage`.

- [ ] **Step 1: Replace Chinese content expectations with failing English assertions**

```ts
expect(getContentPage("guides/combat").title).toBe("Combat Systems: Turn Rage Into a Second Life");
expect(JSON.stringify(contentPages)).not.toMatch(/[\u3400-\u9fff]/);
expect(newsItems[0].title).toBe("The complete soundtrack arrives August 28");
```

- [ ] **Step 2: Run the targeted tests and verify the old Chinese model fails**

Run: `npm test -- --run tests/content.test.ts tests/metadata.test.ts`

Expected: FAIL because titles, descriptions, FAQ copy, and metadata are still Chinese.

- [ ] **Step 3: Rewrite the centralized editorial model in natural English**

Retain the verified facts and source IDs, but rewrite all titles, descriptions, section copy, FAQs, tags, and source labels. Use explicit certainty language such as `Official`, `Hands-on report`, and `Verify after launch`.

- [ ] **Step 4: Update English keyword clusters and metadata expectations**

```ts
const keywordMap = {
  "game-info": ["Marvel's Wolverine release date", "Wolverine PS5", "Marvel's Wolverine editions"],
  "guides/combat": ["Marvel's Wolverine combat", "Wolverine Rage", "Wolverine Healing Factor"],
};
```

- [ ] **Step 5: Run content and metadata tests**

Run: `npm test -- --run tests/content.test.ts tests/metadata.test.ts`

Expected: PASS with no CJK characters in the serialized editorial model.

- [ ] **Step 6: Commit the English model**

```bash
git add content tests/content.test.ts tests/metadata.test.ts lib/metadata.ts
git commit -m "feat: convert Wolverine editorial content to English"
```

### Task 2: Official Media Asset Catalog

**Files:**
- Create: `content/media.ts`
- Create: `public/media/hero-wolverine.webp`
- Create: `public/media/combat-convoy.webp`
- Create: `public/media/jean-grey.webp`
- Create: `public/media/sabretooth.webp`
- Create: `public/media/logan-claws.webp`
- Create: `public/media/story-hand.webp`
- Create: `public/media/news-hardware.webp`
- Create: `tests/media.test.ts`

**Interfaces:**
- Consumes: official downloadable images from the PlayStation game page and PlayStation Blog source pages already stored in `content/sources.ts`.
- Produces: `mediaAssets: Record<MediaId, MediaAsset>` and `trailers: Record<TrailerId, Trailer>`.

- [ ] **Step 1: Write the failing media inventory test**

```ts
expect(mediaAssets.hero.src).toBe("/media/hero-wolverine.webp");
expect(mediaAssets.hero.width).toBeGreaterThanOrEqual(1600);
expect(mediaAssets.hero.alt).toMatch(/Wolverine/i);
expect(trailers.gameplay.youtubeId).toBe("OiBo_NgYI5Q");
expect(Object.values(mediaAssets).every((asset) => asset.sourceUrl.startsWith("https://"))).toBe(true);
```

- [ ] **Step 2: Run the media test and verify the catalog is missing**

Run: `npm test -- --run tests/media.test.ts`

Expected: FAIL with unresolved `@/content/media`.

- [ ] **Step 3: Download official source images and create optimized local WebP files**

Use the downloadable image links on:

- `https://www.playstation.com/en-us/games/marvels-wolverine/`
- `https://blog.playstation.com/2026/06/02/marvels-wolverine-new-gameplay-story-details-from-state-of-play/`
- `https://blog.playstation.com/2026/07/23/marvels-wolverine-story-trailer-new-art-composer-details-and-more/`

Keep hero images at 1920 pixels wide, editorial images at 1440 pixels wide, and WebP quality between 78 and 84. Preserve aspect ratio and record final dimensions.

- [ ] **Step 4: Implement the typed catalog**

```ts
export type MediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sourceUrl: string;
  focalPoint?: string;
};

export const trailers = {
  gameplay: { youtubeId: "OiBo_NgYI5Q", title: "Marvel's Wolverine — Extended Gameplay Trailer" },
  story: { youtubeId: "_U56cQFx_Vw", title: "Marvel's Wolverine — Extended Gameplay Trailer by Marvel" },
} as const;
```

- [ ] **Step 5: Run the media inventory test**

Run: `npm test -- --run tests/media.test.ts`

Expected: PASS and all referenced files exist in `public/media`.

- [ ] **Step 6: Commit official media**

```bash
git add content/media.ts public/media tests/media.test.ts
git commit -m "feat: add official Wolverine media catalog"
```

### Task 3: Reusable Hero, Gallery, and Lazy Trailer Components

**Files:**
- Create: `components/media-hero.tsx`
- Create: `components/media-gallery.tsx`
- Create: `components/trailer-embed.tsx`
- Create: `tests/media-components.test.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: `MediaAsset` and trailer records from `content/media.ts`.
- Produces: `MediaHero`, `MediaGallery`, and `TrailerEmbed` components.

- [ ] **Step 1: Write failing rendering and accessibility tests**

```tsx
render(<MediaHero asset={mediaAssets.hero} eyebrow="THE BEST THERE IS" title="Hunt the truth." />);
expect(screen.getByRole("img", { name: mediaAssets.hero.alt })).toBeVisible();

render(<TrailerEmbed trailer={trailers.gameplay} />);
expect(screen.getByRole("button", { name: /play extended gameplay trailer/i })).toBeVisible();
expect(screen.queryByTitle(trailers.gameplay.title)).not.toBeInTheDocument();
```

- [ ] **Step 2: Run tests and verify the components are missing**

Run: `npm test -- --run tests/media-components.test.tsx`

Expected: FAIL with unresolved component imports.

- [ ] **Step 3: Implement responsive image components**

`MediaHero` renders a semantic `<section>` with a real `<img>` using explicit width and height, focal-point style, overlay, title slot, and source link. `MediaGallery` renders a labelled list of images with lazy loading below the fold.

- [ ] **Step 4: Implement poster-first trailer activation**

```tsx
const [active, setActive] = useState(false);
return active ? (
  <iframe
    title={trailer.title}
    src={`https://www.youtube-nocookie.com/embed/${trailer.youtubeId}?autoplay=1&rel=0`}
    allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
    allowFullScreen
  />
) : (
  <button type="button" onClick={() => setActive(true)} aria-label={`Play ${trailer.title}`}>Play trailer</button>
);
```

- [ ] **Step 5: Add responsive media CSS and reduced-motion behavior**

Use `aspect-ratio`, `object-fit: cover`, `object-position`, layered gradients, visible focus outlines, and mobile one-column layout. Do not animate when `prefers-reduced-motion: reduce` is active.

- [ ] **Step 6: Run component tests**

Run: `npm test -- --run tests/media-components.test.tsx`

Expected: PASS, with the iframe absent before activation and present after click.

- [ ] **Step 7: Commit media primitives**

```bash
git add components app/globals.css tests/media-components.test.tsx
git commit -m "feat: add cinematic media components"
```

### Task 4: English Global Shell and Cinematic Homepage

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `components/site-header.tsx`
- Modify: `components/site-footer.tsx`
- Modify: `components/status-badge.tsx`
- Modify: `components/countdown.tsx`
- Modify: `tests/home.test.tsx`
- Modify: `tests/navigation.test.tsx`
- Modify: `tests/countdown.test.ts`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: English content, `mediaAssets`, `trailers`, and media components.
- Produces: fully English root shell and homepage.

- [ ] **Step 1: Rewrite tests for the English shell and cinematic homepage**

```tsx
expect(screen.getByRole("link", { name: "Game overview" })).toHaveAttribute("href", "/game-info");
expect(screen.getByText("Hunt the truth. Unleash the animal.")).toBeVisible();
expect(screen.getByRole("button", { name: /play marvel's wolverine/i })).toBeVisible();
```

- [ ] **Step 2: Run shell tests and verify Chinese UI causes failure**

Run: `npm test -- --run tests/home.test.tsx tests/navigation.test.tsx tests/countdown.test.ts`

Expected: FAIL on English labels.

- [ ] **Step 3: Convert root metadata and shell to English**

Set `<html lang="en">`, use English navigation labels, English skip link, English footer disclaimer, and status labels `Official`, `Hands-on`, and `Verify after launch`.

- [ ] **Step 4: Recompose the homepage around official key art and trailer**

Use `MediaHero` for the opening composition, a primary `Explore the game` action, a `Master the combat` action, release facts, `TrailerEmbed`, confirmed highlights, editorial image strip, route cards, and latest news.

- [ ] **Step 5: Complete desktop and mobile CSS**

Keep the current yellow/red/blue palette while adding cinematic imagery, gradient overlays, responsive cards, safe mobile type scaling with `clamp()`, and minimum 44-pixel interactive height.

- [ ] **Step 6: Run shell and homepage tests**

Run: `npm test -- --run tests/home.test.tsx tests/navigation.test.tsx tests/countdown.test.ts`

Expected: PASS.

- [ ] **Step 7: Commit the English shell and homepage**

```bash
git add app/layout.tsx app/page.tsx app/globals.css components tests
git commit -m "feat: redesign English cinematic homepage"
```

### Task 5: Media-Rich English Content Pages

**Files:**
- Modify: `components/content-page.tsx`
- Modify: `components/content-card.tsx`
- Modify: `components/source-list.tsx`
- Modify: `app/game-info/page.tsx`
- Modify: `app/guides/beginner/page.tsx`
- Modify: `app/guides/combat/page.tsx`
- Modify: `app/characters/wolverine/page.tsx`
- Modify: `app/story/page.tsx`
- Modify: `app/news/page.tsx`
- Modify: `tests/content-page.test.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: English `ContentPage`, asset catalog, gallery, and trailer components.
- Produces: seven fully English media-rich public pages.

- [ ] **Step 1: Add failing English content-page and media-placement tests**

```tsx
expect(screen.getByRole("heading", { level: 2, name: "Sources" })).toBeVisible();
expect(screen.getByRole("heading", { level: 2, name: "Frequently asked questions" })).toBeVisible();
expect(screen.getByRole("img", { name: /Wolverine/i })).toBeVisible();
```

- [ ] **Step 2: Run content-page tests and verify failure**

Run: `npm test -- --run tests/content-page.test.tsx`

Expected: FAIL because the template labels and page-specific media are not English.

- [ ] **Step 3: Convert the shared article template**

Translate breadcrumbs, update labels, sidebar navigation, FAQ, sources, and related content. Add an optional `heroAsset`, `galleryAssets`, and child media slot without duplicating layout code.

- [ ] **Step 4: Place page-specific visual media**

- Game Info: key art hero plus official screenshot gallery and English edition table.
- Beginner: Logan claws hero plus encounter-loop gallery.
- Combat: convoy hero plus official gameplay trailer.
- Wolverine: yellow-suit close-up hero plus ability image feature.
- Story: Logan versus The Hand hero plus official story-focused trailer.
- News: image thumbnails assigned by news item ID.

- [ ] **Step 5: Run content-page tests**

Run: `npm test -- --run tests/content-page.test.tsx tests/media-components.test.tsx`

Expected: PASS.

- [ ] **Step 6: Commit content pages**

```bash
git add app components tests/content-page.test.tsx
git commit -m "feat: add media-rich English guide pages"
```

### Task 6: English SEO, Structured Data, and Share Assets

**Files:**
- Modify: `lib/metadata.ts`
- Modify: `lib/schema.ts`
- Modify: `lib/site.ts`
- Modify: `app/sitemap.ts`
- Modify: `app/robots.ts`
- Modify: `app/opengraph-image.tsx`
- Modify: `app/not-found.tsx`
- Modify: `tests/metadata.test.ts`
- Modify: `tests/seo-inventory.test.ts`

**Interfaces:**
- Consumes: English content model and stable production URL.
- Produces: English metadata, canonical URLs, JSON-LD, sitemap, robots, OG image, and 404 page.

- [ ] **Step 1: Add failing English SEO assertions**

```ts
expect(buildPageMetadata(page).title).toContain("Combat Systems");
expect(JSON.stringify(buildArticleSchema(page))).not.toMatch(/[\u3400-\u9fff]/);
expect(robots().sitemap).toBe("https://marvels-wolverine-guide-cn.vercel.app/sitemap.xml");
```

- [ ] **Step 2: Run SEO tests and verify failure**

Run: `npm test -- --run tests/metadata.test.ts tests/seo-inventory.test.ts`

Expected: FAIL on Chinese titles and labels.

- [ ] **Step 3: Convert SEO and schemas to English**

Use unique route descriptions, English search terms, `locale: "en_US"`, `inLanguage: "en"`, and English organization labels.

- [ ] **Step 4: Convert static share and error UI**

The OG image must read `WOLVERINE — Hunt the truth. Unleash the animal.` and the 404 page must read `The trail went cold.` with a `Return to base` action.

- [ ] **Step 5: Run SEO tests**

Run: `npm test -- --run tests/metadata.test.ts tests/seo-inventory.test.ts`

Expected: PASS.

- [ ] **Step 6: Commit SEO conversion**

```bash
git add lib app/sitemap.ts app/robots.ts app/opengraph-image.tsx app/not-found.tsx tests
git commit -m "feat: convert Wolverine SEO to English"
```

### Task 7: Full Verification, GitHub Synchronization, and Vercel Production Deployment

**Files:**
- Verify: all application, content, component, and test files
- Update only if verification exposes a defect

**Interfaces:**
- Consumes: completed English static site.
- Produces: verified GitHub `main` and Vercel production deployment.

- [ ] **Step 1: Run the complete automated suite**

Run: `npm test && npm run typecheck && npm run lint && npm run build`

Expected: all test files pass, TypeScript and ESLint return zero errors, and static export emits every public route.

- [ ] **Step 2: Scan built HTML for Chinese interface text**

Run: `rg -n "[\p{Han}]" out --glob "*.html"`

Expected: no matches in rendered HTML.

- [ ] **Step 3: Perform desktop browser verification**

At 1440×900, check all seven routes for unique title, visible H1, official image, status/source information, no console errors, and `scrollWidth - clientWidth === 0`.

- [ ] **Step 4: Perform mobile browser verification**

At 390×844, verify menu open/close, body scroll locking, route navigation, image cropping, trailer sizing, 44-pixel controls, and no horizontal overflow.

- [ ] **Step 5: Verify video activation**

Activate the homepage trailer and confirm the resulting iframe uses `youtube-nocookie.com`, has a descriptive title, fits its 16:9 container, and produces no console error.

- [ ] **Step 6: Synchronize GitHub**

Push or update `main` in `https://github.com/zxf451036cn-cell/marvels-wolverine-guide-cn` and verify the repository contains the final media catalog and assets.

- [ ] **Step 7: Deploy production to Vercel**

Run: `npx --yes vercel@59.7.0 deploy --prod --yes`

Expected: READY deployment aliased to `https://marvels-wolverine-guide-cn.vercel.app`.

- [ ] **Step 8: Verify the live route inventory**

Request `/`, `/game-info`, `/guides/beginner`, `/guides/combat`, `/characters/wolverine`, `/story`, `/news`, `/robots.txt`, `/sitemap.xml`, and `/opengraph-image`; each must return HTTP 200. Confirm canonical URLs, JSON-LD, English copy, imagery, and trailer controls on production.

- [ ] **Step 9: Commit any verification-only fixes and report final URLs**

```bash
git status --short
git log --oneline -8
```

Expected: clean worktree, final GitHub URL, and final Vercel URL ready for handoff.

