import { describe, expect, it } from "vitest";

import { mediaAssets, trailers } from "@/content/media";

describe("official media catalog", () => {
  it("provides local, descriptive, source-attributed artwork", () => {
    expect(Object.keys(mediaAssets).length).toBeGreaterThanOrEqual(7);

    for (const asset of Object.values(mediaAssets)) {
      expect(asset.src).toMatch(/^\/media\/.+\.webp$/);
      expect(asset.alt.length).toBeGreaterThan(20);
      expect(asset.width).toBeGreaterThanOrEqual(1200);
      expect(asset.height).toBeGreaterThanOrEqual(675);
      expect(asset.sourceUrl).toMatch(/^https:\/\/(www\.)?playstation\.com\//);
    }
  });

  it("catalogs official YouTube trailers without loading embeds eagerly", () => {
    expect(trailers.gameplay.youtubeId).toBe("OiBo_NgYI5Q");
    expect(trailers.gameplay.title).toContain("Extended Gameplay");
    expect(trailers.story.youtubeId).toMatch(/^[\w-]{11}$/);
  });
});
