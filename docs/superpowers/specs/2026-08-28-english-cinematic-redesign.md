# Marvel's Wolverine English Cinematic Redesign

## Objective

Transform the existing Chinese pre-launch information archive into a polished English promotional and guide website for *Marvel's Wolverine*. The redesign must preserve the site's factual, source-driven foundation while making official imagery and trailers central to the experience. It must remain fast, accessible, responsive, and deployable as a static Next.js site on Vercel.

## Audience and Positioning

The primary audience is English-speaking PlayStation players researching the release date, platform, editions, combat mechanics, characters, story, and launch preparation. The site positions itself as an independent, spoiler-conscious field guide rather than an official Marvel, Sony, or Insomniac property.

The editorial promise is: confirmed information is clearly separated from hands-on reporting and post-launch verification. Promotional presentation may be dramatic, but factual certainty must never be exaggerated.

## Information Architecture

The existing public route inventory remains stable:

- `/` — cinematic landing page and primary trailer
- `/game-info` — release, platform, editions, PS5 features, and official media
- `/guides/beginner` — launch-ready beginner guidance
- `/guides/combat` — combat systems, Rage, Healing Factor, Techniques, and trailer analysis
- `/characters/wolverine` — Logan's confirmed playable abilities
- `/story` — spoiler-conscious premise, characters, factions, and locations
- `/news` — dated official announcements and authorized hands-on reports

Keeping these routes avoids broken links, retains the current SEO footprint, and lets the redesign focus on presentation and English content quality.

## Language and Editorial Conversion

Every user-facing string will be English, including document titles, metadata, navigation, buttons, status labels, breadcrumbs, dates, cards, FAQ copy, source descriptions, accessibility text, legal disclaimers, 404 content, sitemap-facing metadata, and structured data.

Chinese SEO phrases will be removed. English search intent will target clusters such as:

- Marvel's Wolverine release date
- Wolverine PS5
- Marvel's Wolverine gameplay
- Wolverine combat system
- Wolverine Rage and Healing Factor
- Marvel's Wolverine story and characters
- Marvel's Wolverine beginner guide

Content will be rewritten for natural English rather than translated word-for-word. Existing citations remain attached to the claims they support.

## Visual Direction

The visual system is cinematic noir fused with comic-book energy:

- near-black backgrounds and gunmetal panels
- Wolverine yellow for primary actions and release information
- blood red for danger, conflict, and claw accents
- muted tactical blue for secondary depth
- condensed display typography, oversized editorial headings, halftone texture, clipped corners, and diagonal claw geometry

Official high-resolution promotional images will become the primary visual layer. Every page receives a responsive media hero or editorial image treatment. Images use strong focal-point-aware cropping, readable gradient overlays, meaningful English alt text, and explicit source attribution where appropriate.

The current CSS-only hero remains a graceful fallback if an image fails to load.

## Media Asset Policy

Assets will come only from official PlayStation, PlayStation Blog, Marvel, or Insomniac sources already used by the site's research model. Selected images will be downloaded into the repository rather than hotlinked, preventing broken layouts and third-party tracking. Files will be resized and compressed into modern web formats while preserving sufficient resolution for wide desktop displays.

The footer will retain a visible non-affiliation notice. Source pages remain linked. The site will not use leaks, fan edits, or unverified artwork.

## Video Experience

The homepage will feature the official PlayStation Extended Gameplay Trailer. Combat and Story pages will include the most relevant official trailer module.

Video embeds use YouTube's privacy-enhanced domain, a responsive 16:9 frame, descriptive titles, and poster-first lazy loading. The iframe is created only after user interaction or when the module approaches the viewport, reducing initial network and performance cost. A direct "Watch on YouTube" link remains available when embedding is blocked.

Videos never autoplay with sound. Reduced-motion preferences are respected.

## Page Composition

### Homepage

The homepage opens with official key art, an English release statement, two strong calls to action, and launch facts. The primary trailer follows as a major editorial moment. Confirmed highlights, route cards, a cinematic image strip, and latest transmissions complete the page.

### Content Pages

Each content page uses a photographic hero, English breadcrumb trail, status badge, last-updated marker, readable long-form sections, optional inline media, FAQ, sources, and related-file cards. Combat and Story gain video modules; Game Info gains a screenshot strip and edition table; Wolverine gains an ability-led visual feature.

### News

The news archive becomes an English editorial timeline with image thumbnails, source publishers, dates, status labels, and tags.

## Responsive Behavior

Desktop layouts support wide cinematic imagery, split editorial columns, sticky article navigation, three-column cards, and large type without exceeding the viewport.

Tablet layouts reduce column count and preserve media aspect ratios. Mobile layouts use a single content column, compact navigation, full-width calls to action, horizontally scrollable media strips when useful, touch targets of at least 44 pixels, and typography that avoids clipping at 320–390 pixel widths.

All routes must have zero unintended horizontal overflow. Images use explicit aspect ratios to prevent layout shift.

## Accessibility

- semantic landmarks and consistent heading hierarchy
- keyboard-operable mobile navigation, FAQ, and video controls
- visible focus states and skip link
- meaningful alt text for editorial images; decorative textures remain hidden
- sufficient contrast across image overlays
- reduced-motion support
- no information communicated by color alone

## Technical Architecture

The project remains Next.js App Router with static export for reliable Vercel deployment. English editorial data remains centralized in `content/`. Media metadata is centralized in a typed asset catalog so pages do not duplicate URLs, alt text, dimensions, or source attribution.

Reusable additions include:

- `MediaHero` for responsive page imagery
- `TrailerEmbed` for lazy privacy-enhanced video
- `MediaGallery` for official screenshot strips
- media-aware cards for news and related content

Server Components remain the default. Client-side JavaScript is limited to navigation, countdown behavior, and lazy video activation.

## SEO and Structured Data

Every route receives unique English titles, descriptions, canonical URLs, Open Graph metadata, Twitter metadata, and relevant keywords. Root document language changes to `en`. Article and breadcrumb JSON-LD uses English names. Homepage `WebSite` and `VideoGame` schemas remain and include the official trailer where appropriate.

The generated sitemap, robots file, icon, and Open Graph image remain part of the static build.

## Performance

- locally hosted compressed images with responsive `srcSet` or framework-compatible static handling
- lazy loading below the fold
- poster-first video embeds
- no autoplay video backgrounds
- minimal client components
- explicit image dimensions and aspect ratios
- static export with no runtime server dependency

## Verification and Acceptance Criteria

The redesign is complete when:

1. No Chinese user-facing copy remains in rendered routes or metadata.
2. All seven public pages use official promotional imagery.
3. Homepage, Combat, and Story expose working official video experiences.
4. Every public route returns HTTP 200 locally and on Vercel.
5. Desktop and 390-pixel mobile checks show no horizontal overflow.
6. Navigation, video activation, FAQ controls, and skip link work by keyboard.
7. Unit tests, type checking, ESLint, and production build pass.
8. Production metadata, canonical URLs, JSON-LD, sitemap, robots, and Open Graph image resolve correctly.
9. The GitHub repository contains the final source and Vercel production deployment is READY.

## Out of Scope

- user accounts, comments, forums, or personalization
- unofficial leaks, rumor aggregation, or copied editorial articles
- autoplay background video
- commerce or affiliate checkout
- a headless CMS or runtime database

