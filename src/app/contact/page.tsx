import { ContactDirection } from "@/components/contact/contact-direction";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactMode } from "@/components/contact/contact-mode";
import { ContactProcess } from "@/components/contact/contact-process";
import { SiteHeader } from "@/components/layout/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "商务合作 | 文远品序设计科技",
  description: "联系文远品序，获取企业品牌设计、数字内容与AI探索方向合作方案。",
};

export default function ContactPage() {
  return (
    <main className="bg-obsidian">
      <SiteHeader />
      <ContactHero />
      <ContactDirection />
      <ContactProcess />
      <ContactMode />
      <ContactInfo />
    </main>
  );
}
