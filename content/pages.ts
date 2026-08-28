import type { ContentPage } from "@/content/types";

const updatedAt = "2026-08-28";

export const contentPages: Record<string, ContentPage> = {
  "game-info": {
    slug: "game-info",
    title: "Marvel's Wolverine Release and Edition Guide",
    eyebrow: "GAME OVERVIEW / FILE 01",
    description: "Everything confirmed about the September 15 release, PS5 exclusivity, editions, accessibility features, PS5 Pro support, and pre-order content.",
    updatedAt,
    status: "official",
    sourceIds: ["playstation-game", "gameplay-reveal", "hardware-reveal", "performance-preview"],
    relatedSlugs: ["guides/beginner", "guides/combat", "story"],
    sections: [
      {
        id: "release",
        title: "September 15, 2026 — Built for PS5",
        status: "official",
        body: [
          "Marvel's Wolverine launches September 15, 2026, exclusively on PlayStation 5. Insomniac Games is developing the single-player action adventure with Marvel Games and Sony Interactive Entertainment.",
          "This is a focused, narrative-led journey rather than a traditional open world. Logan's hunt crosses Canada, Tokyo, and Madripoor, with larger explorable spaces connecting tightly directed story missions.",
        ],
        highlights: ["Release: September 15, 2026", "Platform: PlayStation 5", "Mode: Single-player", "Structure: Narrative action adventure"],
      },
      {
        id: "editions",
        title: "Standard, Digital Deluxe, and Pre-order Bonuses",
        status: "official",
        body: [
          "The Standard Edition includes the full game. The Digital Deluxe Edition adds five suits, five claw styles, and bonus Technique Points; these cosmetic options do not create a competitive advantage.",
          "Pre-orders include the brown suit, reflective claws, one Technique Point, and PlayStation Network avatars. Standard Edition owners can upgrade to the Digital Deluxe content later.",
        ],
      },
      {
        id: "ps5-features",
        title: "DualSense, PS5 Pro, and Accessibility",
        status: "handsOn",
        body: [
          "The official feature list includes DualSense haptics and adaptive triggers, Tempest 3D AudioTech, Remote Play, and Game Help. PS5 Pro enhancements are also confirmed.",
          "Preview coverage reports a 60fps performance mode with ray tracing. A broad accessibility suite is planned, but exact launch settings should be checked in the final build.",
        ],
      },
    ],
    faq: [
      { question: "When does Marvel's Wolverine release?", answer: "September 15, 2026, according to the official PlayStation game page." },
      { question: "Is Marvel's Wolverine coming to PC?", answer: "Only the PlayStation 5 version is confirmed. No PC release has been announced." },
      { question: "Is it an open-world game?", answer: "No. It is a narrative action adventure with several larger spaces to explore." },
    ],
  },
  "guides/beginner": {
    slug: "guides/beginner",
    title: "Beginner Guide: Learn the Hunt Before Launch",
    eyebrow: "BEGINNER GUIDE / FIELD NOTES",
    description: "A spoiler-light Marvel's Wolverine beginner guide covering accessibility, combat flow, Rage, exploration, and the advice worth carrying into launch day.",
    updatedAt,
    status: "handsOn",
    sourceIds: ["gameplay-reveal", "playstation-hands-on", "gamesradar-hands-on"],
    relatedSlugs: ["guides/combat", "characters/wolverine", "game-info"],
    sections: [
      {
        id: "setup",
        title: "Tune the Game to Your Wolverine",
        status: "official",
        body: [
          "Start with the difficulty, camera, subtitle, audio, and controller options that make reactions readable. The game is designed around close-range pressure, so clear visual and audio cues matter more than chasing a default preset.",
          "Use Game Help and accessibility assists when needed. They are tools for shaping the experience, not shortcuts that diminish it.",
        ],
      },
      {
        id: "combat-loop",
        title: "Read, Approach, Counter, Build Rage, Finish",
        status: "handsOn",
        body: [
          "Read the group before committing: identify ranged threats, armored enemies, and anything that can interrupt Logan's pressure. Close distance decisively, counter clear attacks, and use the environment to control space.",
          "Damage and aggression build Rage. Spend it deliberately on techniques or hold it as a survival buffer when healing can no longer keep pace.",
        ],
      },
      {
        id: "exploration",
        title: "Leave the Main Path — Keep Build Advice Flexible",
        status: "handsOn",
        body: [
          "Larger areas contain optional fights, lore, upgrades, and Nightmare Doors. Logan's heightened senses help surface useful trails and hidden details.",
          "Preview builds show a Technique-based progression tree, but balance can change before release. Prioritize options that support your own timing and preferred level of aggression.",
        ],
      },
    ],
    faq: [
      { question: "What should I learn first?", answer: "Enemy tells, counter timing, and how Rage changes from an offensive resource into an emergency recovery tool." },
      { question: "Will this guide change after launch?", answer: "Yes. Preview-based advice will be replaced with tested routes, numbers, and builds after the retail version is available." },
    ],
  },
  "guides/combat": {
    slug: "guides/combat",
    title: "Combat Systems: Turn Rage Into a Second Life",
    eyebrow: "COMBAT SYSTEMS / FILE 03",
    description: "Break down Wolverine's close-range pressure, counters, Techniques, Critical Strikes, Rage recovery, vehicle combat, and launch replay systems.",
    updatedAt,
    status: "handsOn",
    sourceIds: ["gameplay-reveal", "playstation-hands-on", "gamesradar-hands-on", "replay-preview"],
    relatedSlugs: ["guides/beginner", "characters/wolverine", "story"],
    sections: [
      {
        id: "pressure",
        title: "Close Range. Constant Pressure.",
        status: "official",
        body: [
          "Combat is built around getting close and staying dangerous. Logan can lunge between targets, counter incoming blows, use improvised weapons, and turn walls, vehicles, and other environmental objects into brutal advantages.",
          "Enemy groups mix ranged pressure, shields, armor, and heavy attacks. Positioning and target priority keep the rhythm aggressive without making it careless.",
        ],
      },
      {
        id: "techniques",
        title: "Techniques and Critical Strikes",
        status: "handsOn",
        body: [
          "Techniques spend built-up resources on powerful attacks and crowd control. Critical Strikes reward precise opportunities with decisive damage and cinematic finishers.",
          "The strongest play appears to come from linking basic pressure, defensive reads, and selective Techniques instead of emptying every resource at once.",
        ],
      },
      {
        id: "rage",
        title: "Rage: Offense, Recovery, and the Edge of Control",
        status: "official",
        body: [
          "Rage grows as Logan fights. It fuels his most violent options, but it also acts as a second life: when conventional healing is exhausted, Rage can pull him back from defeat.",
          "That creates the central decision in every hard encounter—spend Rage to end the threat now, or preserve enough to survive the mistake that may come next.",
        ],
      },
      {
        id: "vehicles",
        title: "Motorcycles, Vehicles, and Set Pieces",
        status: "official",
        body: [
          "Motorcycle pursuits and vehicle-to-vehicle clashes extend combat beyond arenas. Logan can leap across moving targets and tear through machines during authored set pieces.",
        ],
      },
      {
        id: "replay",
        title: "Replay Systems at Launch",
        status: "handsOn",
        body: [
          "Preview reporting says New Game Plus and Nightmare Doors will be available at launch. Final unlock conditions, rewards, and difficulty modifiers still need retail verification.",
        ],
      },
    ],
    faq: [
      { question: "What is Rage used for?", answer: "It powers offensive Techniques and can restore Logan when his normal healing capacity is overwhelmed." },
      { question: "Does the game have New Game Plus?", answer: "Preview coverage says yes at launch; exact rules remain subject to final-build verification." },
    ],
  },
  "characters/wolverine": {
    slug: "characters/wolverine",
    title: "Wolverine Ability File: Why Logan Keeps Getting Up",
    eyebrow: "ABILITY FILE / SUBJECT LOGAN",
    description: "An evidence-led profile of Logan's adamantium skeleton, claws, healing factor, heightened senses, Rage, and how each power shapes play.",
    updatedAt,
    status: "official",
    sourceIds: ["playstation-game", "gameplay-reveal", "playstation-hands-on"],
    relatedSlugs: ["guides/combat", "story", "guides/beginner"],
    sections: [
      { id: "adamantium", title: "Adamantium Skeleton and Claws", status: "official", body: ["Logan's bonded skeleton lets him absorb punishment that would end most fights. His claws cut through enemies, armor, and selected parts of the environment, giving every close-range exchange physical weight."] },
      { id: "healing", title: "Healing Factor", status: "official", body: ["His body repairs visible damage during and after combat. Healing is powerful but not limitless: sustained pressure can overwhelm it, making Rage management and defensive timing essential."] },
      { id: "senses", title: "Heightened Senses", status: "handsOn", body: ["Heightened senses expose trails, targets, and clues during exploration. The mechanic connects Logan's hunter instincts to environmental storytelling and optional discoveries."] },
      { id: "rage-character", title: "Rage Is a Character Conflict", status: "official", body: ["Rage is both a combat resource and the emotional fault line of the story. Logan's greatest power arrives when he risks losing the control he is fighting to keep."] },
    ],
    faq: [
      { question: "Can Wolverine die in combat?", answer: "Yes. The healing factor and Rage recovery expand his margin for error; they do not make the player invulnerable." },
      { question: "Are the claws cosmetic?", answer: "Claws are central to combat. Additional claw styles in certain editions are cosmetic variations." },
    ],
  },
  story: {
    slug: "story",
    title: "Story and Characters: Team X Hunts Again",
    eyebrow: "STORY FILE / TEAM X",
    description: "A spoiler-conscious guide to Logan's Team X past, Jean Grey, Mystique, Sabretooth, Omega Red, the Reavers, the Hand, and the confirmed locations.",
    updatedAt,
    status: "official",
    sourceIds: ["gameplay-reveal", "story-trailer", "playstation-game"],
    relatedSlugs: ["characters/wolverine", "guides/combat", "game-info"],
    sections: [
      { id: "premise", title: "Logan Left Three Years Ago. The Past Did Not.", status: "official", body: ["Three years after leaving Team X, Logan is drawn back into the orbit of a former unit that included Mystique, Sabretooth, Omega Red, and others. A hunt for answers forces him to face the violence he tried to bury."] },
      { id: "allies", title: "Jean Grey, Mystique, and Sabretooth", status: "official", body: ["Jean Grey joins parts of the journey with her own playable abilities. Mystique and Sabretooth connect Logan to Team X, but the trailers deliberately leave their loyalties and motives unstable."] },
      { id: "enemies", title: "Trask, the Reavers, and the Hand", status: "official", body: ["Bolivar Trask and the cybernetic Reavers bring an organized technological threat, while the Hand expands the conflict into a secretive martial order. Lady Deathstrike is also confirmed."] },
      { id: "locations", title: "Canada, Tokyo, and Madripoor", status: "official", body: ["The story moves from frozen Canadian wilderness to Tokyo and the criminal island of Madripoor. Each location supports a different blend of pursuit, investigation, exploration, and close-quarters violence."] },
    ],
    faq: [
      { question: "Is Jean Grey playable?", answer: "Official gameplay confirms playable Jean Grey sequences alongside Logan's campaign." },
      { question: "Is this connected to Insomniac's Spider-Man games?", answer: "It is an original Insomniac interpretation. The studio has not positioned it as a direct sequel to the Spider-Man story." },
    ],
  },
};

export function getContentPage(slug: string): ContentPage {
  const page = contentPages[slug];

  if (!page) {
    throw new Error(`Unknown content page: ${slug}`);
  }

  return page;
}
