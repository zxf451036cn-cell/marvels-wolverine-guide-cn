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
          { name: "Home", path: "/" },
          { name: "Combat Systems", path: "/guides/combat" },
        ]}
      />,
    );

    expect(screen.getByRole("heading", { level: 1, name: /Combat Systems/ })).toBeVisible();
    expect(screen.getByRole("heading", { level: 2, name: /Techniques/ })).toBeVisible();
    expect(screen.getByText("2026-08-28")).toBeVisible();
    expect(screen.getByRole("heading", { level: 2, name: "Frequently Asked Questions" })).toBeVisible();
    expect(screen.getByRole("heading", { level: 2, name: "Sources and Verification" })).toBeVisible();
    expect(screen.getByRole("button", { name: /Play extended gameplay trailer/i })).toBeVisible();
    const sourceLinks = screen.getAllByRole("link").filter((link) => link.getAttribute("target") === "_blank");
    expect(sourceLinks.length).toBeGreaterThan(0);
    expect(sourceLinks.some((link) => link.getAttribute("href")?.includes("playstation.com"))).toBe(true);
    expect(screen.getByRole("heading", { level: 2, name: "Continue the Hunt" })).toBeVisible();
  });
});
