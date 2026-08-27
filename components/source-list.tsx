import { sources } from "@/content/sources";

export function SourceList({ sourceIds }: { sourceIds: readonly string[] }) {
  return (
    <section className="source-panel" aria-labelledby="sources-title">
      <div className="section-kicker">SOURCES / 可核查资料</div>
      <h2 id="sources-title">资料来源</h2>
      <ol>
        {sourceIds.map((sourceId) => {
          const source = sources[sourceId];
          if (!source) return null;
          return (
            <li key={source.id}>
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.title}
              </a>
              <span>{source.publisher} · {source.publishedAt} · {source.kind === "official" ? "官方" : "媒体"}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
