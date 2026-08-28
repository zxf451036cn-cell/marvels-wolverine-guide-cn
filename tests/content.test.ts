import { describe, expect, it } from "vitest";

import { contentPages } from "@/content/pages";
import { newsItems } from "@/content/news";
import { sources } from "@/content/sources";

describe("content integrity", () => {
  it("publishes every planned content route", () => {
    expect(Object.keys(contentPages).sort()).toEqual([
      "characters/wolverine",
      "game-info",
      "guides/beginner",
      "guides/combat",
      "story",
    ]);
  });

  it("gives every page a status, current update date, sources, and related routes", () => {
    for (const page of Object.values(contentPages)) {
      expect(["official", "handsOn", "postLaunch"]).toContain(page.status);
      expect(page.updatedAt).toBe("2026-08-28");
      expect(page.sourceIds.length).toBeGreaterThan(0);
      expect(page.relatedSlugs.length).toBeGreaterThan(0);

      for (const sourceId of page.sourceIds) {
        expect(sources[sourceId]).toBeDefined();
      }
    }
  });

  it("publishes natural English copy across the editorial model", () => {
    expect(contentPages["guides/combat"].title).toBe("Combat Systems: Turn Rage Into a Second Life");
    expect(newsItems[0].title).toBe("The Complete Soundtrack Arrives August 28");
    expect(JSON.stringify({ contentPages, newsItems, sources })).not.toMatch(/[\u3400-\u9fff]/);
  });
});
