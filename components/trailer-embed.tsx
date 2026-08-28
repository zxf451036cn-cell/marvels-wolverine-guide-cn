"use client";

/* eslint-disable @next/next/no-img-element -- local WebP artwork is pre-optimized for this static export */

import { useState } from "react";

import type { Trailer } from "@/content/media";

export function TrailerEmbed({ trailer }: { trailer: Trailer }) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="trailer" aria-label={trailer.title}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${trailer.youtubeId}?autoplay=1&rel=0`}
          title={trailer.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Play ${trailer.title.replace("Marvel's Wolverine — ", "").toLowerCase()}`}>
          <img src={trailer.poster.src} alt="" width={trailer.poster.width} height={trailer.poster.height} loading="lazy" />
          <span className="trailer__shade" aria-hidden="true" />
          <span className="trailer__play" aria-hidden="true">▶</span>
          <span className="trailer__label"><small>OFFICIAL VIDEO</small><strong>{trailer.title}</strong></span>
        </button>
      )}
    </section>
  );
}
