import type { MediaAsset } from "@/content/media";

export function MediaHero({ asset, eager = true }: { asset: MediaAsset; eager?: boolean }) {
  return (
    <figure className="media-hero">
      <img src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} style={{ objectPosition: asset.focalPoint }} />
      <a href={asset.sourceUrl} target="_blank" rel="noreferrer">Official artwork source ↗</a>
    </figure>
  );
}
