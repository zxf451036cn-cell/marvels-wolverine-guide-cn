import type { ContentPage } from "@/content/types";

const updatedAt = "2026-08-28";

export const contentPages: Record<string, ContentPage> = {
  "game-info": {
    slug: "game-info",
    title: "《漫威金刚狼》发售与版本资料",
    eyebrow: "游戏资料 / FILE 01",
    description: "确认《Marvel's Wolverine》的发售日期、PS5 平台、版本内容、中文支持、PS5 Pro 特性与购买前常见问题。",
    updatedAt,
    status: "official",
    sourceIds: ["playstation-game", "gameplay-reveal", "hardware-reveal", "performance-preview"],
    relatedSlugs: ["guides/beginner", "guides/combat", "story"],
    sections: [
      {
        id: "release",
        title: "2026 年 9 月 15 日，PS5 独占",
        status: "official",
        body: [
          "《Marvel's Wolverine》将于 2026 年 9 月 15 日登陆 PlayStation 5。官方明确表示，本作由 Insomniac Games 携手 Marvel Games 与 Sony Interactive Entertainment打造，并从底层针对 PS5 开发，不提供 PS4 版本。",
          "本作是一款叙事驱动的单人动作冒险游戏，不采用开放世界结构。旅程横跨加拿大、日本东京和漫威宇宙中的岛国马德里坡，以连续而紧凑的任务和战斗场景推进。",
        ],
        highlights: ["发售：2026-09-15", "平台：PS5", "模式：离线单人", "结构：非开放世界"],
      },
      {
        id: "editions",
        title: "普通版、豪华版与预购奖励",
        status: "official",
        body: [
          "普通版包含完整游戏。数字豪华版在完整游戏外增加五套专属战衣、五组专属爪子外观和额外技能点；预购奖励包括抢先解锁经典棕战衣、反光利爪、一个技能点和四个 PlayStation 虚拟形象。",
          "Insomniac 已说明战衣和爪子属于外观内容，不提供战斗属性优势。普通版玩家可在之后购买数字豪华版升级，因此只想体验剧情与战斗的玩家无需为了强度选择豪华版。",
        ],
      },
      {
        id: "ps5-features",
        title: "PS5、DualSense 与辅助功能",
        status: "official",
        body: [
          "官方页面确认支持 DualSense 触觉反馈和自适应扳机、Tempest 3D 音效、远程游玩、游戏帮助与 PS5 Pro 增强。视觉、听觉、运动敏感、字幕、控制重映射、游戏速度和暴力内容自定义等辅助选项会在首发时提供。",
          "媒体获准采访披露，基础 PS5 的默认性能模式目标为 60FPS 并启用光线追踪；最终画质模式差异仍应以首发版本和官方补丁说明为准。",
        ],
      },
    ],
    faq: [
      { question: "《漫威金刚狼》什么时候发售？", answer: "官方发售日为 2026 年 9 月 15 日。不同商店可能因时区显示为当地前一日晚间解锁。" },
      { question: "会登陆 PS4、PC 或 Xbox 吗？", answer: "目前仅确认 PS5，官方明确排除 PS4；PC 与 Xbox 版本没有得到官方公布。" },
      { question: "这是开放世界游戏吗？", answer: "不是。官方将其定义为非开放世界的叙事驱动单人动作冒险。" },
      { question: "游戏时长是多少？", answer: "截至 2026 年 8 月 28 日，官方没有公布主线或全收集所需时长，网络流传数字不作为本站事实。" },
    ],
  },
  "guides/beginner": {
    slug: "guides/beginner",
    title: "新手入门：首发前先掌握这套战斗循环",
    eyebrow: "新手攻略 / FIELD GUIDE",
    description: "从难度设置、接敌方式到怒气与治疗，整理《漫威金刚狼》首发前可以确认的新手准备要点。",
    updatedAt,
    status: "official",
    sourceIds: ["gameplay-reveal", "playstation-game", "playstation-hands-on", "gamesradar-hands-on"],
    relatedSlugs: ["guides/combat", "game-info", "characters/wolverine"],
    sections: [
      {
        id: "settings",
        title: "先把设置调成适合你的金刚狼",
        status: "official",
        body: [
          "本作提供独立难度与大量辅助选项。首次进入游戏时，优先检查字幕、镜头运动、视觉滤镜、暴力内容、按键重映射、快速反应事件和游戏速度。能稳定读懂攻击提示，比盲目提高难度更重要。",
          "DualSense 反馈和自适应扳机可增强利爪重量感，但并非通关必要条件；对震动或阻力敏感的玩家可以完整关闭。",
        ],
      },
      {
        id: "combat-loop",
        title: "观察、接近、拆招、积怒、收尾",
        status: "official",
        body: [
          "罗根可以跟踪目标、潜伏接近、从高处伏击，也可以直接冲入战团。进入正面战斗后，用招架和闪避处理敌人的攻击节奏，以快速连击和 Techniques 压制目标，再抓住 Critical Strike 的处决机会。",
          "每次成功攻击、招架和击杀都会推动怒气增长。怒气既是进攻资源，也是治疗与保命资源；新手不要只看伤害，还要为治疗因子和 Last Stand 留出容错。",
        ],
        highlights: ["观察敌群", "选择潜行或强攻", "招架 / 闪避", "累积怒气", "治疗或爆发"],
      },
      {
        id: "exploration",
        title: "离开主路有奖励，但先别照搬配装结论",
        status: "handsOn",
        body: [
          "获准试玩显示，部分较大区域允许玩家偏离主路线，寻找与升级、战衣和收集相关的资源；罗根能够快速奔跑、攀墙和远距离跳跃，在潜行和正面战斗间切换。",
          "技能树规模、升级成本、收集品总量和最佳加点仍需发售后验证。首发前可以理解系统方向，但不要把任何媒体两小时试玩当成完整流程攻略。",
        ],
      },
    ],
    faq: [
      { question: "新手应该先学招架还是闪避？", answer: "两者都已确认存在，但敌人攻击类型和判定窗口尚未完整公开。首发后应根据提示颜色和实际帧数再给出精确建议。" },
      { question: "可以全程潜行吗？", answer: "官方确认可跟踪、潜伏和伏击，但游戏核心仍包含大量强制正面战斗与大型演出，并非纯潜行作品。" },
      { question: "现在有可靠的技能加点推荐吗？", answer: "没有。媒体只展示了部分主动与被动能力，本站会在正式版验证完整技能树后再发布加点方案。" },
    ],
  },
  "guides/combat": {
    slug: "guides/combat",
    title: "战斗系统解析：让怒气成为第二条生命",
    eyebrow: "战斗系统 / COMBAT FILE",
    description: "拆解《漫威金刚狼》的利爪连击、招架、闪避、潜行、Techniques、Critical Strikes、怒气、治疗因子和 Last Stand。",
    updatedAt,
    status: "official",
    sourceIds: ["gameplay-reveal", "playstation-game", "playstation-hands-on", "gamesradar-hands-on", "replay-preview"],
    relatedSlugs: ["guides/beginner", "characters/wolverine", "story"],
    sections: [
      {
        id: "claw-combat",
        title: "短距离、高压迫的利爪战斗",
        status: "official",
        body: [
          "战斗围绕快速、流畅而凶狠的近身攻击展开。罗根能以突进迅速贴近敌人，在连续斩击间穿插招架与闪避，并用环境和位置优势维持进攻。",
          "潜行不是独立小游戏：你可以跟踪敌人、从上方伏击，随后立即切入正面混战。面对远程火力、机械强化兵和重装敌人时，移动与目标切换会和输出同样重要。",
        ],
      },
      {
        id: "techniques",
        title: "Techniques 与 Critical Strikes",
        status: "official",
        body: [
          "Techniques 是罗根的特殊战斗招式，官方公开了 Tornado Spin 与 Bull Rush。它们用于打乱阵形、制造空间或快速压制关键目标。",
          "Critical Strikes 是高破坏力终结机会，可由罗根独立完成，也可在琴·格蕾等角色创造条件时协同触发。它不是固定连段的最后一击，更像战斗中需要观察并把握的处决窗口。",
        ],
      },
      {
        id: "rage",
        title: "怒气：进攻、治疗与失控边缘",
        status: "official",
        body: [
          "成功攻击、招架和击杀都会积累怒气。怒气可换取更强攻击，也可激活治疗因子修复严重伤势，因此玩家需要在爆发与生存之间做选择。",
          "怒气推至第三级时，画面会进入受漫威漫画《Black, White & Blood》启发的单色暴烈表现。濒危状态下，Last Stand 能让罗根调用怒气与治疗因子继续战斗。具体消耗和无敌窗口需发售后验证。",
        ],
        highlights: ["攻击积怒", "招架积怒", "击杀积怒", "强化进攻", "治疗保命", "三级暴走"],
      },
      {
        id: "set-pieces",
        title: "摩托、载具与大型演出",
        status: "official",
        body: [
          "公开演示包含高速摩托追逐：罗根可以摧毁卡车、割破轮胎、把敌人掀下道路，并跳上不同车辆继续战斗。",
          "这些段落体现本作不是只由竞技场组成的连续砍杀。关卡会在潜行、探索、近战和电影化演出之间切换。",
        ],
      },
      {
        id: "replay",
        title: "首发后的重玩空间",
        status: "handsOn",
        body: [
          "获准采访披露，游戏计划首发提供 New Game Plus、Mission Replay 和 Nightmare Doors。新游戏+可继承进度与战衣，并加入额外适应能力；任务重玩帮助补收集品；Nightmare Doors 以罗根的记忆与噩梦构成可选挑战。",
          "这些系统的完整解锁条件、奖励曲线和难度仍需正式版验证。",
        ],
      },
    ],
    faq: [
      { question: "怒气只用于狂暴攻击吗？", answer: "不是。官方明确表示怒气也可驱动治疗因子，并在濒危时支持 Last Stand。" },
      { question: "战斗更偏招架还是闪避？", answer: "两者都是核心防御动作。敌人类型和不可招架攻击规则尚未完整公开，本站不会在发售前给出虚假唯一解。" },
      { question: "有 New Game Plus 吗？", answer: "近期获准采访确认计划在首发时提供 New Game Plus，并包含只能在该模式取得的适应能力。" },
    ],
  },
  "characters/wolverine": {
    slug: "characters/wolverine",
    title: "金刚狼能力档案：罗根为何停不下来",
    eyebrow: "角色能力 / SUBJECT LOGAN",
    description: "区分金刚狼的漫画经典设定与《Marvel's Wolverine》已经展示的可玩能力，包括利爪、恢复、感官、怒气和追踪。",
    updatedAt,
    status: "official",
    sourceIds: ["playstation-game", "gameplay-reveal", "story-trailer", "playstation-hands-on"],
    relatedSlugs: ["guides/combat", "story", "guides/beginner"],
    sections: [
      {
        id: "adamantium",
        title: "艾德曼合金利爪与骨骼",
        status: "official",
        body: [
          "罗根最具辨识度的武器是从手背伸出的艾德曼合金利爪。游戏把它们塑造成短距离、高冲击的进攻工具：切断武器、撕开机械强化敌人，并在高速移动中维持贴身压迫。",
          "艾德曼合金骨骼是角色能够承受极端冲击的重要基础，但本作并没有把‘不可摧毁’等漫画描述转化为无条件免伤。玩家仍需招架、闪避和管理生命。",
        ],
      },
      {
        id: "healing",
        title: "治疗因子不是自动胜利",
        status: "official",
        body: [
          "治疗因子让罗根从严重伤势中恢复，在游戏中与怒气资源直接关联。受伤会留下明确视觉反馈，恢复过程则重建身体和服装的可玩状态。",
          "Last Stand 展现了这一能力的极端用途：濒临失败时，罗根可以调用怒气重新站起来。恢复的数值、次数限制和难度差异需发售后测试。",
        ],
      },
      {
        id: "senses",
        title: "感官、追踪与猎手本能",
        status: "official",
        body: [
          "官方说明罗根可以追踪目标、潜伏观察并发动伏击。强化感官由此转化为关卡信息与接敌选择，而不只是一段角色介绍。",
          "他还能快速奔跑、攀墙和远距离跳跃，在较开放的战斗区域中迅速改变路线。这样的移动能力服务于关卡探索，但不代表游戏采用开放世界。",
        ],
      },
      {
        id: "rage-personality",
        title: "怒气既是能力，也是角色冲突",
        status: "official",
        body: [
          "罗根的暴烈不是单纯的视觉主题。攻击、招架和击杀累积怒气，把玩家的进攻节奏与角色失控边缘连接起来。",
          "原创剧情同时强调身份、忠诚和失落记忆。玩家扮演的不是没有代价的杀戮机器，而是一个试图离开‘金刚狼’身份、却被过去重新拖回战场的人。",
        ],
      },
    ],
    faq: [
      { question: "金刚狼在游戏里会自动回血吗？", answer: "官方只确认治疗因子与怒气和 Last Stand 相关，完整回复规则需要正式版验证。" },
      { question: "爪子外观会改变伤害吗？", answer: "不会。Insomniac 已说明豪华版战衣和爪子为纯外观内容。" },
      { question: "本作是金刚狼的起源故事吗？", answer: "不是传统起源故事。故事开始时罗根已有漫长过去，并在离开 X 小队三年后重新归队。" },
    ],
  },
  story: {
    slug: "story",
    title: "剧情与角色：X 小队最后一次集结",
    eyebrow: "剧情档案 / TEAM X",
    description: "无重大剧透梳理《漫威金刚狼》的原创剧情、X 小队、特拉斯克、掠夺者、琴·格蕾与已公开地点。",
    updatedAt,
    status: "official",
    sourceIds: ["playstation-game", "gameplay-reveal", "story-trailer", "playstation-hands-on"],
    relatedSlugs: ["characters/wolverine", "guides/combat", "game-info"],
    sections: [
      {
        id: "premise",
        title: "罗根离开了三年，过去没有",
        status: "official",
        body: [
          "罗根以为自己已经告别‘金刚狼’，并在三年前离开变种人特别行动队 X 小队。当玻利瓦尔·特拉斯克开始系统性绑架变种人，X 小队走到最黑暗的时刻，他不得不重新归队。",
          "变种人仍躲在社会视线之外，普通人甚至不知道他们存在。X 小队不是成熟的超级英雄组织，而是一支在灭绝威胁下勉强维持的最后防线。",
        ],
      },
      {
        id: "allies",
        title: "琴·格蕾、魔形女与剑齿虎",
        status: "official",
        body: [
          "琴·格蕾是被捕变种人中逐渐成为领袖的人物，以强大念动力与罗根并肩作战，并能为协同 Critical Strikes 制造机会。",
          "近期获准试玩还展示了魔形女与剑齿虎作为 X 小队成员的互动。角色之间共享一段充满错误、离散与未解记忆的过去；本站只整理公开片段，不提前推断背叛或结局。",
        ],
      },
      {
        id: "enemies",
        title: "特拉斯克、掠夺者与手合会",
        status: "official",
        body: [
          "玻利瓦尔·特拉斯克是一名信奉人类至上的亿万工业家。他雇佣拥有先进武器和机械植入体的掠夺者追捕并运送变种人。",
          "故事预告还确认死亡女与手合会登场；欧米伽红也在官方游戏页面列为罗根将面对的经典对手。各方如何连接仍属于剧情悬念。",
        ],
      },
      {
        id: "locations",
        title: "从加拿大荒野到马德里坡",
        status: "official",
        body: [
          "旅程横跨冰封的加拿大荒野、东京狭窄街巷，以及马德里坡上下城区。不同地点不仅更换背景，也会承载潜行、追踪、探索、近战和载具演出等不同节奏。",
          "这是 Insomniac 对角色的原创故事，不直接隶属于电影或单一漫画时间线。漫画设定可帮助理解角色，但不能被当作游戏剧情已经发生的事实。",
        ],
      },
    ],
    faq: [
      { question: "本作和《漫威蜘蛛侠》处于同一宇宙吗？", answer: "Insomniac 尚未在当前官方资料中明确说明两者如何连接；本站不会据彩蛋或传闻下结论。" },
      { question: "琴·格蕾可以操作吗？", answer: "官方展示了她参与战斗并创造协同处决机会，但没有确认玩家能否长期直接操控她。" },
      { question: "故事会经过哪些地点？", answer: "官方已确认加拿大、日本东京和马德里坡，其他地点以正式公布为准。" },
    ],
  },
};

export function getContentPage(slug: string): ContentPage {
  const page = contentPages[slug];
  if (!page) throw new Error(`Unknown content page: ${slug}`);
  return page;
}
