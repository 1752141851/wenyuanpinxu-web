"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/layout/site-header";

const blocks = [
  ["WHAT WE EXPLORE", "关注 AI 技术与企业发展的连接方式", "我们不追逐概念，而关注 AI 技术如何在真实企业场景中创造价值。", ["AI辅助设计", "企业智能协作", "数字内容效率"]],
  ["AI × DESIGN", "AI 与设计协作", "AI并不是替代设计，而是成为设计流程中的辅助工具，帮助团队提高探索速度和验证效率。", ["创意探索", "方案验证", "内容优化"]],
  ["AI BUSINESS EXPLORATION", "AI 与未来企业工作方式", "关注 AI 数字员工、智能工作流以及企业协作方式的发展方向。", ["AI数字员工探索", "企业知识协作", "工作流优化"]],
  ["WORKFLOW RESEARCH", "探索更高效的工作方式", "探索数字工具与 AI 辅助方式如何提升企业内容生产与协作效率。", ["内容生产优化", "设计流程优化", "工具应用研究", "企业效率提升"]],
] as const;

export default function AIInnovationPage() {
  return <main className="bg-obsidian"><SiteHeader />
    <section className="bg-obsidian text-text-primary"><div className="mx-auto flex min-h-[74svh] max-w-[1280px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:px-12"><p className="text-[11px] tracking-[.16em] text-text-secondary">AI INNOVATION</p><h1 className="mt-6 text-[clamp(3rem,6vw,6.1rem)] font-normal tracking-[-.065em]">探索 AI 时代企业效率的新可能</h1><p className="mt-5 text-[11px] tracking-[.16em] text-text-secondary">DESIGN × AI × FUTURE</p><p className="mt-8 max-w-[660px] text-[17px] leading-8 text-text-secondary">文远品序关注 AI 技术在设计协作、数字内容生产与企业服务中的应用方向，通过设计能力与数字工具结合，探索企业表达方式和工作效率提升的新可能。</p><div className="mt-9 flex gap-3"><Link href="/services" className="inline-flex min-h-12 items-center rounded-button bg-soft-white px-5 text-sm font-medium text-obsidian">了解服务</Link><Link href="/contact" className="inline-flex min-h-12 items-center rounded-button border border-white/20 px-5 text-sm">商务合作</Link></div></div></section>
    {blocks.map(([label,title,intro,items], index) => <section key={label} className={index % 2 ? "bg-graphite text-text-primary" : "bg-background-light text-text-primary-on-light"}><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"><motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.65,ease:[.16,1,.3,1]}}><p className="text-[11px] tracking-[.16em] opacity-60">{label}</p><h2 className="mt-6 text-[clamp(2.25rem,4vw,4.25rem)] font-normal">{title}</h2><p className="mt-6 max-w-[650px] text-[16px] leading-7 opacity-70">{intro}</p></motion.div><div className={`mt-10 grid gap-3 ${items.length===4?"lg:grid-cols-4":"lg:grid-cols-3"}`}>{items.map((item,i)=><motion.article key={item} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.65,delay:i*.08,ease:[.16,1,.3,1]}} className="min-h-[180px] rounded-card border border-current/10 bg-white/[.04] p-6 transition duration-200 hover:-translate-y-1"><span className="opacity-50">0{i+1}</span><h3 className="mt-8 text-[22px] font-medium">{item}</h3><p className="mt-3 text-sm leading-6 opacity-70">持续关注、探索和研究这一方向在企业场景中的辅助价值。</p></motion.article>)}</div></div></section>)}
    <section className="bg-obsidian text-text-primary"><div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12"><p className="text-[11px] tracking-[.16em] text-text-secondary">START COLLABORATION</p><h2 className="mt-6 text-[clamp(2.25rem,4vw,4.25rem)] font-normal">一起探索未来合作方式</h2><p className="mt-6 max-w-[660px] text-[16px] leading-7 text-text-secondary">如果你的企业正在探索品牌建设、数字内容升级或 AI 应用方向，欢迎与文远品序进行交流。</p><Link href="/contact" className="mt-8 inline-flex min-h-12 items-center rounded-button bg-soft-white px-5 text-sm font-medium text-obsidian">商务合作</Link></div></section>
  </main>;
}
