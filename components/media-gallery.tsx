import type { MediaAsset } from "@/content/media";

/* eslint-disable @next/next/no-img-element -- local WebP artwork is pre-optimized for this static export */

export function MediaGallery({ assets }: { assets: readonly MediaAsset[] }) {
  return (
    <div className="media-gallery">
      {assets.map((asset) => (
        <figure key={asset.src}>
          <img src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} loading="lazy" style={{ objectPosition: asset.focalPoint }} />
          <a href={asset.sourceUrl} target="_blank" rel="noreferrer">Official artwork source ↗</a>
        </figure>
      ))}
    </div>
  );
}
