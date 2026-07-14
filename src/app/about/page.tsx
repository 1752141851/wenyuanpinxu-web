import type { Metadata } from "next";
import { AboutCTA, AboutDirection, AboutIntro, AboutPartnership, AboutValue } from "@/components/about/about-content";
import { AboutHero } from "@/components/about/about-hero";
import { SiteHeader } from "@/components/layout/site-header";
import { siteCompany } from "@/data/site";
export const metadata: Metadata = { title: `关于${siteCompany.shortName} | ${siteCompany.chineseName}`, description: `了解${siteCompany.chineseName}的企业定位、设计服务方向、长期合作理念及 AI 应用探索。` };
export default function AboutPage(){return <main className="bg-obsidian"><SiteHeader/><AboutHero/><AboutIntro/><AboutDirection/><AboutValue/><AboutPartnership/><AboutCTA/></main>}
