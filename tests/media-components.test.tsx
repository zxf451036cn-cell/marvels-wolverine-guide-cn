import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { MediaGallery } from "@/components/media-gallery";
import { MediaHero } from "@/components/media-hero";
import { TrailerEmbed } from "@/components/trailer-embed";
import { mediaAssets, trailers } from "@/content/media";

describe("cinematic media", () => {
  it("renders source-attributed hero and gallery artwork", () => {
    render(<><MediaHero asset={mediaAssets.hero} /><MediaGallery assets={[mediaAssets.jean, mediaAssets.sabretooth]} /></>);
    expect(screen.getByRole("img", { name: mediaAssets.hero.alt })).toHaveAttribute("fetchpriority", "high");
    expect(screen.getAllByRole("link", { name: /Official artwork source/ })).toHaveLength(3);
  });

  it("loads the privacy-enhanced trailer only after an explicit click", async () => {
    const user = userEvent.setup();
    render(<TrailerEmbed trailer={trailers.gameplay} />);
    expect(screen.queryByTitle(trailers.gameplay.title)).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /Play extended gameplay trailer/i }));
    expect(screen.getByTitle(trailers.gameplay.title)).toHaveAttribute("src", expect.stringContaining("youtube-nocookie.com/embed/OiBo_NgYI5Q"));
  });
});
