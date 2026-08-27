"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/game-info", label: "游戏资料" },
  { href: "/guides/beginner", label: "新手入门" },
  { href: "/guides/combat", label: "战斗系统" },
  { href: "/characters/wolverine", label: "角色能力" },
  { href: "/story", label: "剧情档案" },
  { href: "/news", label: "最新动态" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="金刚狼情报档案首页">
          <span className="brand__mark" aria-hidden="true">X</span>
          <span className="brand__copy">
            <strong>WOLVERINE</strong>
            <small>情报与攻略档案</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="主导航">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "关闭导航" : "打开导航"}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="移动导航"
        hidden={!menuOpen}
      >
        <p className="mobile-nav__label">SELECT FILE / 选择档案</p>
        <Link href="/" onClick={closeMenu}>首页</Link>
        {navigation.map((item, index) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            <span aria-hidden="true">0{index + 1}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
