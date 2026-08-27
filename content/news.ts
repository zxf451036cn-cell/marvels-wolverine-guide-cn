import type { NewsItem } from "@/content/types";

export const newsItems: readonly NewsItem[] = [
  {
    id: "soundtrack-release",
    title: "完整原声带于 8 月 28 日发布",
    summary: "由 David Fleming 创作的完整游戏原声带按官方 SDCC 公告于今日发布，为 9 月正式发售预热。",
    publishedAt: "2026-08-28",
    status: "official",
    sourceId: "story-trailer",
    tags: ["原声带", "最新动态"],
  },
  {
    id: "hands-on-roundup",
    title: "两小时试玩披露探索、升级与挑战结构",
    summary: "获准试玩展示了 X 小队开场任务、马德里坡探索、技能升级与可选挑战；完整数值仍待正式版验证。",
    publishedAt: "2026-08-13",
    status: "handsOn",
    sourceId: "playstation-hands-on",
    tags: ["媒体试玩", "玩法"],
  },
  {
    id: "limited-hardware",
    title: "金刚狼限定 PS5 主机与配件公布",
    summary: "Battle Yellow 主机套装、DualSense 和 PS5/PS5 Pro 面盖于 8 月 19 日起在指定地区预购，9 月 15 日限量发售。",
    publishedAt: "2026-08-11",
    status: "official",
    sourceId: "hardware-reveal",
    tags: ["PS5", "硬件"],
  },
  {
    id: "story-trailer-sdcc",
    title: "SDCC 故事预告公开死亡女与手合会",
    summary: "官方进一步解释罗根与琴·格蕾的关系、手合会势力、前传漫画和作曲信息。",
    publishedAt: "2026-07-23",
    status: "official",
    sourceId: "story-trailer",
    tags: ["剧情", "角色"],
  },
  {
    id: "gameplay-date-reveal",
    title: "扩展玩法演示锁定 9 月 15 日发售",
    summary: "State of Play 展示潜行、Techniques、Critical Strikes、怒气、治疗因子和摩托追逐，并开放预购。",
    publishedAt: "2026-06-02",
    status: "official",
    sourceId: "gameplay-reveal",
    tags: ["发售日", "战斗系统"],
  },
];
