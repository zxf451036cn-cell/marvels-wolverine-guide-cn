export const siteName = "Wolverine Field Archive";
export const siteDescription = "An independent Marvel's Wolverine PS5 guide covering the release date, combat systems, beginner strategy, Logan's abilities, story, and sourced updates.";

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://marvels-wolverine-guide-cn.vercel.app").replace(/\/$/, "");
}
