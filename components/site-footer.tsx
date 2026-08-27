import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <p className="site-footer__brand">WOLVERINE / FIELD ARCHIVE</p>
          <p>面向简体中文玩家的非官方情报与攻略档案。</p>
        </div>
        <div>
          <p className="site-footer__label">情报原则</p>
          <p>区分官方确认、媒体试玩与发售后验证，不使用泄露资料。</p>
        </div>
        <div>
          <p className="site-footer__label">资料日期</p>
          <p><time dateTime="2026-08-28">更新于 2026-08-28</time></p>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>Marvel 与 Wolverine 为其权利方所有。本网站与 Marvel、Sony 或 Insomniac Games 无隶属关系。</p>
        <Link href="/news">查看来源动态 →</Link>
      </div>
    </footer>
  );
}
