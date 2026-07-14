"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { siteCompany } from "@/data/site";

const transition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

export function ContactHero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-obsidian text-text-primary">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(124,58,237,0.14),transparent_25%),radial-gradient(circle_at_64%_78%,rgba(255,107,74,0.08),transparent_26%)]" />
      <div aria-hidden="true" className="absolute right-0 top-0 h-full w-[50%] opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_left,black,transparent)]" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={transition} className="relative mx-auto flex min-h-[74svh] max-w-[1280px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24">
        <Link href="/" className="mb-12 inline-flex min-h-11 w-fit items-center gap-2 text-[12px] text-text-secondary transition-colors hover:text-text-primary">
          <ArrowLeft size={15} strokeWidth={1.5} aria-hidden="true" />
          返回首页
        </Link>
        <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">BUSINESS INQUIRY</p>
        <h1 className="mt-6 max-w-[920px] text-balance text-[clamp(3rem,6vw,6.1rem)] font-normal leading-[1.02] tracking-[-0.065em]">企业合作咨询与项目对接</h1>
        <p className="mt-8 max-w-[620px] text-[17px] leading-8 text-text-secondary sm:text-lg">围绕品牌建设、商业视觉与长期设计支持，{siteCompany.shortName}为企业提供清晰的合作对接入口。</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#contact-info" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-button bg-soft-white px-5 text-sm font-medium text-obsidian transition duration-300 hover:-translate-y-0.5">
            联系{siteCompany.shortName}
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </a>
          <Link href="/services" className="inline-flex min-h-12 items-center justify-center rounded-button border border-white/20 px-5 text-sm font-medium text-text-primary transition duration-300 hover:border-white/40 hover:bg-white/[0.04]">返回服务</Link>
        </div>
      </motion.div>
    </section>
  );
}
