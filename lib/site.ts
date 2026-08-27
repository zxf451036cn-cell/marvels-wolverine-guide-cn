export const siteName = "Wolverine 中文情报与攻略档案";
export const siteDescription = "《Marvel's Wolverine》中文情报与攻略站：发售日期、PS5 平台、战斗系统、新手指南、金刚狼能力与最新动态。";

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "https://marvels-wolverine-guide-cn.vercel.app").replace(/\/$/, "");
}
