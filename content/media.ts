export type MediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sourceUrl: string;
  focalPoint?: string;
};

export type Trailer = {
  youtubeId: string;
  title: string;
  poster: MediaAsset;
};

const officialGamePage = "https://www.playstation.com/en-us/games/marvels-wolverine/";

export const mediaAssets = {
  hero: {
    src: "/media/hero-wolverine.webp",
    alt: "Wolverine launches through the air with adamantium claws extended",
    width: 1920,
    height: 1080,
    sourceUrl: officialGamePage,
    focalPoint: "62% 42%",
  },
  combat: {
    src: "/media/combat-wolverine.webp",
    alt: "Wolverine in his yellow suit prepares to strike at close range",
    width: 1600,
    height: 900,
    sourceUrl: officialGamePage,
    focalPoint: "50% 40%",
  },
  jean: {
    src: "/media/jean-grey.webp",
    alt: "Jean Grey channels violet psychic energy through her hands and eyes",
    width: 1600,
    height: 900,
    sourceUrl: officialGamePage,
  },
  sabretooth: {
    src: "/media/sabretooth.webp",
    alt: "Sabretooth roars during a confrontation in Marvel's Wolverine",
    width: 1600,
    height: 900,
    sourceUrl: officialGamePage,
  },
  claws: {
    src: "/media/logan-claws.webp",
    alt: "Logan reveals his adamantium claws beneath cold industrial light",
    width: 1600,
    height: 900,
    sourceUrl: officialGamePage,
  },
  madripoor: {
    src: "/media/logan-madripoor.webp",
    alt: "Logan enters a dim bar wearing a cowboy hat and checked shirt",
    width: 1600,
    height: 900,
    sourceUrl: officialGamePage,
  },
  character: {
    src: "/media/wolverine-character.webp",
    alt: "Full character artwork of Wolverine crouched with claws drawn",
    width: 1200,
    height: 1077,
    sourceUrl: officialGamePage,
    focalPoint: "50% 20%",
  },
} satisfies Record<string, MediaAsset>;

export const trailers = {
  gameplay: {
    youtubeId: "OiBo_NgYI5Q",
    title: "Marvel's Wolverine — Extended Gameplay Trailer",
    poster: mediaAssets.hero,
  },
  story: {
    youtubeId: "3Z42tBfBLJY",
    title: "Marvel's Wolverine — Story Trailer",
    poster: mediaAssets.madripoor,
  },
} satisfies Record<string, Trailer>;
