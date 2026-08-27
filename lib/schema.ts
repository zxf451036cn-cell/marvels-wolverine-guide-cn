import type { ContentPage } from "@/content/types";

function resolvedPath(path: string): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  return siteUrl ? `${siteUrl}${path}` : path;
}

export function buildArticleSchema(page: ContentPage): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.description,
    inLanguage: "zh-CN",
    dateModified: page.updatedAt,
    datePublished: "2026-08-28",
    url: resolvedPath(`/${page.slug}`),
    author: {
      "@type": "Organization",
      name: "Wolverine 中文情报与攻略档案",
    },
    publisher: {
      "@type": "Organization",
      name: "Wolverine 中文情报与攻略档案",
    },
  };
}

export function buildBreadcrumbSchema(
  items: readonly { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: resolvedPath(item.path),
    })),
  };
}

export function safeJsonLd(value: Record<string, unknown>): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
