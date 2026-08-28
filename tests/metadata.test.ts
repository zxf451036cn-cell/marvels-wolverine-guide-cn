import { describe, expect, it } from "vitest";

import { contentPages, getContentPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/metadata";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";

describe("page metadata", () => {
  it("builds English search metadata for the combat guide", () => {
    const metadata = buildPageMetadata(getContentPage("guides/combat"));

    expect(metadata.title).toContain("Combat Systems");
    expect(metadata.description).toContain("Rage");
    expect(metadata.alternates?.canonical).toBe("/guides/combat");
    expect(metadata.openGraph?.title).toBe(metadata.title);
    expect(metadata.openGraph).toMatchObject({ locale: "en_US", url: "/guides/combat" });
  });

  it("gives every content route a unique title and description", () => {
    const metadata = Object.values(contentPages).map(buildPageMetadata);
    const titles = metadata.map((item) => item.title);

    expect(new Set(titles).size).toBe(metadata.length);
    for (const item of metadata) {
      expect(String(item.description).length).toBeGreaterThan(45);
    }
  });
});

describe("structured data", () => {
  it("describes a content page as an article with its canonical path", () => {
    const schema = buildArticleSchema(getContentPage("characters/wolverine"));

    expect(schema["@type"]).toBe("Article");
    expect(schema.headline).toContain("Wolverine Ability File");
    expect(schema.inLanguage).toBe("en");
    expect(schema.url).toBe("/characters/wolverine");
    expect(schema.dateModified).toBe("2026-08-28");
  });

  it("keeps page metadata and schema entirely English", () => {
    const payload = Object.values(contentPages).map((page) => ({
      metadata: buildPageMetadata(page),
      schema: buildArticleSchema(page),
    }));
    expect(JSON.stringify(payload)).not.toMatch(/[\u3400-\u9fff]/);
  });

  it("builds ordered breadcrumb items", () => {
    const schema = buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Combat Systems", path: "/guides/combat" },
    ]);

    expect(schema.itemListElement).toEqual([
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Combat Systems", item: "/guides/combat" },
    ]);
  });
});
