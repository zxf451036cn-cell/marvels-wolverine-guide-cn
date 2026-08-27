import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site";

const routes = ["", "/game-info", "/guides/beginner", "/guides/combat", "/characters/wolverine", "/story", "/news"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  return routes.map((route, index) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified: new Date("2026-08-28T00:00:00+08:00"),
    changeFrequency: index === 0 || route === "/news" ? "daily" : "weekly",
    priority: index === 0 ? 1 : .8,
  }));
}
