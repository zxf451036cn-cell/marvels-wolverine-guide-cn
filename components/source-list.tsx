import { sources } from "@/content/sources";

export function SourceList({ sourceIds }: { sourceIds: readonly string[] }) {
  return (
    <section className="source-panel" aria-labelledby="sources-title">
      <div className="section-kicker">SOURCES / TRACE THE INTEL</div>
      <h2 id="sources-title">Sources and Verification</h2>
      <ol>
        {sourceIds.map((sourceId) => {
          const source = sources[sourceId];
          if (!source) return null;
          return (
            <li key={source.id}>
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.title}
              </a>
              <span>{source.publisher} · {source.publishedAt} · {source.kind === "official" ? "Official" : "Press"}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
