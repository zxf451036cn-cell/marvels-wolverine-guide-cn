import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteUrl, siteDescription, siteName } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "漫威金刚狼中文攻略｜Wolverine PS5 情报档案",
    template: "%s｜Wolverine 中文攻略",
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName,
    title: "漫威金刚狼中文攻略｜Wolverine PS5 情报档案",
    description: siteDescription,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: siteName, description: siteDescription },
  keywords: ["漫威金刚狼攻略", "Wolverine PS5", "漫威金刚狼发售日期", "金刚狼战斗系统", "Marvel's Wolverine"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090A0C",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">跳到主要内容</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
