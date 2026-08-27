export type FactStatus = "official" | "handsOn" | "postLaunch";

export type Source = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  publishedAt: string;
  kind: "official" | "press";
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContentSection = {
  id: string;
  title: string;
  body: readonly string[];
  status: FactStatus;
  highlights?: readonly string[];
};

export type ContentPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  updatedAt: string;
  status: FactStatus;
  sections: readonly ContentSection[];
  faq: readonly FaqItem[];
  sourceIds: readonly string[];
  relatedSlugs: readonly string[];
};

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  status: FactStatus;
  sourceId: string;
  tags: readonly string[];
};
