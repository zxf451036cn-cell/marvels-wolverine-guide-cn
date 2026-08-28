import Link from "next/link";

import type { ContentPage } from "@/content/types";
import { StatusBadge } from "@/components/status-badge";

export function ContentCard({ page }: { page: ContentPage }) {
  return (
    <Link className="content-card" href={`/${page.slug}`}>
      <div>
        <span className="content-card__eyebrow">{page.eyebrow}</span>
        <StatusBadge status={page.status} />
      </div>
      <h3>{page.title}</h3>
      <p>{page.description}</p>
      <span className="content-card__action">Open file →</span>
    </Link>
  );
}
