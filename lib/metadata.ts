import type { Metadata } from "next";

import type { ContentPage } from "@/content/types";

const keywordMap: Record<string, readonly string[]> = {
  "game-info": ["Marvel's Wolverine release date", "Wolverine PS5", "Wolverine Digital Deluxe Edition", "is Wolverine open world"],
  "guides/beginner": ["Marvel's Wolverine guide", "Wolverine beginner guide", "Wolverine PS5 tips"],
  "guides/combat": ["Marvel's Wolverine combat system", "Wolverine Rage", "Wolverine healing factor", "Wolverine combat guide"],
  "characters/wolverine": ["Wolverine abilities", "Logan powers", "adamantium claws"],
  story: ["Marvel's Wolverine story", "Team X", "Jean Grey", "Bolivar Trask"],
};

export function buildPageMetadata(page: ContentPage): Metadata {
  const title = page.title;
  const canonical = `/${page.slug}`;

  return {
    title,
    description: page.description,
    keywords: [...(keywordMap[page.slug] ?? [])],
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "en_US",
      title,
      description: page.description,
      url: canonical,
      siteName: "Wolverine Field Archive",
      modifiedTime: page.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.description,
    },
    robots: { index: true, follow: true },
  };
}
