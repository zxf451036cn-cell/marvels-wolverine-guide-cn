import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";

describe("HomePage", () => {
  it("presents the launch facts and primary guide paths", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 1, name: /WOLVERINE/ })).toBeVisible();
    expect(screen.getByText("THE PAST ALWAYS LEAVES A SCAR.")).toBeVisible();
    expect(screen.getByText(/SEPTEMBER 15, 2026/)).toBeVisible();
    expect(screen.getByRole("link", { name: "Prepare for Launch" })).toHaveAttribute("href", "/guides/beginner");
    expect(screen.getByRole("link", { name: "Break Down Combat" })).toHaveAttribute("href", "/guides/combat");
    expect(screen.getByRole("button", { name: /Play extended gameplay trailer/i })).toBeVisible();
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
