"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/game-info", label: "Game Overview" },
  { href: "/guides/beginner", label: "Beginner Guide" },
  { href: "/guides/combat", label: "Combat Systems" },
  { href: "/characters/wolverine", label: "Wolverine" },
  { href: "/story", label: "Story" },
  { href: "/news", label: "Latest" },
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
        <Link className="brand" href="/" aria-label="Wolverine Field Archive home">
          <span className="brand__mark" aria-hidden="true">X</span>
          <span className="brand__copy">
            <strong>WOLVERINE</strong>
            <small>FIELD ARCHIVE</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
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
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        <p className="mobile-nav__label">SELECT FILE / FIELD ARCHIVE</p>
        <Link href="/" onClick={closeMenu}>Home</Link>
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
