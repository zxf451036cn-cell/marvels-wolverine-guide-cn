import { describe, expect, it } from "vitest";

import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

const expectedRoutes = [
  "/",
  "/game-info",
  "/guides/beginner",
  "/guides/combat",
  "/characters/wolverine",
  "/story",
  "/news",
];

describe("SEO route inventory", () => {
  it("includes every public route in the sitemap", () => {
    const paths = sitemap().map((entry) => new URL(entry.url).pathname);
    expect(paths).toEqual(expectedRoutes);
  });

  it("allows crawling and exposes the sitemap", () => {
    const rules = robots();
    expect(rules.rules).toEqual({ userAgent: "*", allow: "/" });
    expect(rules.sitemap).toMatch(/\/sitemap\.xml$/);
  });
});
