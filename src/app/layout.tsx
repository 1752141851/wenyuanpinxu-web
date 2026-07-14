import type { Metadata } from "next";
import { siteCompany } from "@/data/site";
import { SiteFooter } from "@/components/layout/site-footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteCompany.siteUrl),
  title: "安徽文远品序设计科技有限公司 | 企业品牌设计与AI创新探索",
  description: "安徽文远品序设计科技有限公司，专注企业品牌视觉建设、商业传播、电商视觉与数字内容设计，同时探索AI技术赋能企业协作与效率提升的新可能。",
  keywords: ["企业品牌设计", "商业视觉设计", "电商视觉设计", "数字内容设计", "AI辅助设计", "企业设计服务", siteCompany.chineseName],
  openGraph: {
    title: siteCompany.chineseName,
    description: "以设计提升企业价值，以 AI 探索增长可能。",
    type: "website",
    locale: "zh_CN",
    siteName: "文远品序设计科技",
    images: [{ url: "/og/default-cover.png", width: 1200, height: 630, alt: "文远品序设计科技有限公司" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteCompany.chineseName,
    description: "Design × AI × Business",
    images: ["/og/default-cover.png"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon.ico", type: "image/x-icon" },
      { url: "/icons/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<SiteFooter /></body>
    </html>
  );
}
