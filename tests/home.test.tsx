import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";

describe("HomePage", () => {
  it("presents the launch facts and primary guide paths", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 1, name: /WOLVERINE/ })).toBeVisible();
    expect(screen.getByText("猎杀之前，先读懂野兽")).toBeVisible();
    expect(screen.getByText(/2026 年 9 月 15 日/)).toBeVisible();
    expect(screen.getByRole("link", { name: "开始首发准备" })).toHaveAttribute("href", "/guides/beginner");
    expect(screen.getByRole("link", { name: "拆解战斗系统" })).toHaveAttribute("href", "/guides/combat");
  });

  it("links to every core information section", () => {
    render(<HomePage />);

    const coreRoutes = [
      "/game-info",
      "/guides/beginner",
      "/guides/combat",
      "/characters/wolverine",
      "/story",
    ];
    const links = screen.getAllByRole("link");

    for (const route of coreRoutes) {
      expect(links.some((link) => link.classList.contains("file-card") && link.getAttribute("href") === route)).toBe(true);
    }
  });
});
