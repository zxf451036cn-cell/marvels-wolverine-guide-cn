import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/site-header";

describe("SiteHeader", () => {
  it("opens and closes the mobile navigation with accessible state", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const toggle = screen.getByRole("button", { name: "打开导航" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: "移动导航" })).toBeVisible();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile navigation after selecting a route", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const toggle = screen.getByRole("button", { name: "打开导航" });
    await user.click(toggle);
    const mobileNavigation = screen.getByRole("navigation", { name: "移动导航" });
    const combatLink = within(mobileNavigation).getByRole("link", { name: "战斗系统" });
    combatLink.addEventListener("click", (event) => event.preventDefault());
    await user.click(combatLink);

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
