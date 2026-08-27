import type { Metadata } from "next";

import type { ContentPage } from "@/content/types";

const keywordMap: Record<string, readonly string[]> = {
  "game-info": ["漫威金刚狼发售日期", "Wolverine PS5", "漫威金刚狼豪华版", "是否开放世界"],
  "guides/beginner": ["漫威金刚狼攻略", "漫威金刚狼新手", "Wolverine PS5 攻略"],
  "guides/combat": ["漫威金刚狼战斗系统", "金刚狼怒气", "金刚狼治疗因子", "Wolverine combat"],
  "characters/wolverine": ["金刚狼能力", "罗根能力", "艾德曼合金利爪"],
  story: ["漫威金刚狼剧情", "X 小队", "琴格蕾", "玻利瓦尔特拉斯克"],
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
      locale: "zh_CN",
      title,
      description: page.description,
      url: canonical,
      siteName: "Wolverine 中文情报与攻略档案",
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
