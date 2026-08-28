import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <p className="site-footer__brand">WOLVERINE / FIELD ARCHIVE</p>
          <p>An independent, source-led guide to Insomniac Games' Marvel's Wolverine.</p>
        </div>
        <div>
          <p className="site-footer__label">EDITORIAL STANDARD</p>
          <p>Official facts, hands-on reporting, and post-launch verification are clearly separated. No leaked material.</p>
        </div>
        <div>
          <p className="site-footer__label">ARCHIVE DATE</p>
          <p><time dateTime="2026-08-28">Updated August 28, 2026</time></p>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>Marvel and Wolverine belong to their respective owners. Not affiliated with Marvel, Sony, or Insomniac Games.</p>
        <Link href="/news">View sourced updates →</Link>
      </div>
    </footer>
  );
}
