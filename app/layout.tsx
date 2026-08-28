import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteUrl, siteDescription, siteName } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Marvel's Wolverine Guide | PS5 Field Archive",
    template: "%s | Wolverine Field Archive",
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: "Marvel's Wolverine Guide | PS5 Field Archive",
    description: siteDescription,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: siteName, description: siteDescription },
  keywords: ["Marvel's Wolverine guide", "Wolverine PS5", "Marvel's Wolverine release date", "Wolverine combat system", "Wolverine beginner guide"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090A0C",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
