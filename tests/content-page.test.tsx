import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ContentPageView } from "@/components/content-page";
import { getContentPage } from "@/content/pages";

describe("ContentPageView", () => {
  it("renders sourced sections, FAQ, update time, and related reading", () => {
    render(
      <ContentPageView
        page={getContentPage("guides/combat")}
        breadcrumbs={[
          { name: "首页", path: "/" },
          { name: "战斗系统", path: "/guides/combat" },
        ]}
      />,
    );

    expect(screen.getByRole("heading", { level: 1, name: /战斗系统解析/ })).toBeVisible();
    expect(screen.getByRole("heading", { level: 2, name: /Techniques/ })).toBeVisible();
    expect(screen.getByText("2026-08-28")).toBeVisible();
    expect(screen.getByRole("heading", { level: 2, name: "常见问题" })).toBeVisible();
    expect(screen.getByRole("heading", { level: 2, name: "资料来源" })).toBeVisible();
    const sourceLinks = screen.getAllByRole("link").filter((link) => link.getAttribute("target") === "_blank");
    expect(sourceLinks.length).toBeGreaterThan(0);
    expect(sourceLinks.some((link) => link.getAttribute("href")?.includes("playstation.com"))).toBe(true);
    expect(screen.getByRole("heading", { level: 2, name: "继续阅读" })).toBeVisible();
  });
});
