import { describe, expect, it } from "vitest";

import { contentPages, getContentPage } from "@/content/pages";
import { buildPageMetadata } from "@/lib/metadata";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";

describe("page metadata", () => {
  it("builds Chinese search metadata for the combat guide", () => {
    const metadata = buildPageMetadata(getContentPage("guides/combat"));

    expect(metadata.title).toContain("战斗系统");
    expect(metadata.description).toContain("怒气");
    expect(metadata.alternates?.canonical).toBe("/guides/combat");
    expect(metadata.openGraph?.title).toBe(metadata.title);
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
    expect(schema.headline).toContain("金刚狼能力档案");
    expect(schema.url).toBe("/characters/wolverine");
    expect(schema.dateModified).toBe("2026-08-28");
  });

  it("builds ordered breadcrumb items", () => {
    const schema = buildBreadcrumbSchema([
      { name: "首页", path: "/" },
      { name: "战斗系统", path: "/guides/combat" },
    ]);

    expect(schema.itemListElement).toEqual([
      { "@type": "ListItem", position: 1, name: "首页", item: "/" },
      { "@type": "ListItem", position: 2, name: "战斗系统", item: "/guides/combat" },
    ]);
  });
});
