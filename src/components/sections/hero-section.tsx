"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const capabilityTags = [
  { english: "BRAND DESIGN", chinese: "企业品牌服务" },
  { english: "AI EXPLORATION", chinese: "AI 创新探索" },
  { english: "BUSINESS SOLUTIONS", chinese: "长期设计协作" },
];
const enterEase = [0.16, 1, 0.3, 1] as const;

function GridLayer() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-[5%] rounded-section border border-white/[0.08] opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:radial-gradient(ellipse_at_center,black_18%,transparent_74%)]"
    />
  );
}

function GradientFlow() {
  return (
    <>
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 16, -6, 0], y: [0, -10, 8, 0] }}
        transition={{ duration: 16, ease: "easeInOut", repeat: Infinity }}
        className="absolute left-[13%] top-[15%] h-[48%] w-[74%] origin-center bg-[linear-gradient(120deg,rgba(255,107,74,0.72),rgba(241,90,140,0.58),rgba(124,58,237,0.64))] opacity-75 [clip-path:polygon(0_16%,75%_0,100%_36%,34%_100%,8%_76%)]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -14, 8, 0], y: [0, 12, -5, 0] }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        className="absolute bottom-[13%] left-[20%] h-[42%] w-[65%] border border-white/25 bg-[linear-gradient(125deg,rgba(255,255,255,0.18),rgba(124,58,237,0.2))] backdrop-blur-sm [clip-path:polygon(12%_0,100%_18%,84%_100%,0_78%)]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: [-5, -1, -5], x: [0, 8, 0] }}
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        className="absolute right-[8%] top-[28%] h-[28%] w-[35%] border border-white/30 bg-[linear-gradient(135deg,rgba(255,107,74,0.34),rgba(255,255,255,0.05))] [clip-path:polygon(0_0,100%_22%,78%_100%,12%_76%)]"
      />
    </>
  );
}

function GlassGlow() {
  return (
    <motion.div
      aria-hidden="true"
      animate={{ opacity: [0.45, 0.78, 0.45], scale: [0.98, 1.03, 0.98] }}
      transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      className="absolute bottom-[17%] right-[5%] h-[38%] w-[46%] border border-white/20 bg-white/[0.06] shadow-[0_0_90px_rgba(124,58,237,0.16)] backdrop-blur-[2px] [clip-path:polygon(16%_0,100%_0,84%_100%,0_82%)]"
    />
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.18, ease: enterEase }}
      className="relative mx-auto h-[220px] w-full max-w-[430px] sm:h-[300px] lg:mx-0 lg:h-[min(58vw,620px)] lg:max-w-none"
    >
      <GridLayer />
      <GradientFlow />
      <GlassGlow />
      <div aria-hidden="true" className="absolute inset-x-[17%] bottom-[12%] h-px bg-white/25" />
      <div aria-hidden="true" className="absolute left-[17%] top-[11%] size-2 bg-soft-white" />
      <div aria-hidden="true" className="absolute left-[11%] top-[22%] h-[22%] w-[20%] border-l border-t border-white/20" />
      <div aria-hidden="true" className="absolute bottom-[19%] right-[14%] h-[16%] w-[22%] border-b border-r border-white/20" />
      <span aria-hidden="true" className="absolute left-[11%] top-[16%] text-[8px] font-medium tracking-[0.14em] text-white/35">X 01</span>
      <span aria-hidden="true" className="absolute bottom-[14%] right-[14%] text-[8px] font-medium tracking-[0.14em] text-white/35">Y 02</span>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] overflow-hidden bg-obsidian text-text-primary">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(124,58,237,0.13),transparent_28%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-5 pb-7 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pb-10 lg:pt-28">
        <div className="grid flex-1 -translate-y-2 items-center gap-8 lg:-translate-y-10 lg:grid-cols-12 lg:gap-0">
          <div className="relative z-10 flex flex-col items-start lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: enterEase }}
              className="mb-7 text-[11px] font-medium tracking-[0.18em] text-text-secondary"
            >
              WENYUAN PINXU
              <span className="mx-2 text-text-tertiary">/</span>
              DESIGN × AI × BUSINESS
            </motion.p>

            <div className="max-w-[840px] overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18, ease: enterEase }}
                className="text-balance text-[clamp(3rem,5.1vw,5.1rem)] font-medium leading-[1.06] tracking-[-0.065em] lg:whitespace-nowrap lg:leading-[1.03]"
              >
                以设计提升企业价值
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: enterEase }}
                className="mt-3 text-balance text-[clamp(2.45rem,4.3vw,4.25rem)] font-light leading-[1.12] tracking-[-0.055em] text-text-secondary lg:mt-2 lg:whitespace-nowrap lg:leading-[1.06]"
              >
                以 <span className="bg-[linear-gradient(110deg,#ff6b4a,#f15a8c,#a78bfa)] bg-clip-text text-transparent">AI</span> 探索增长可能
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: enterEase }}
              className="mt-7 max-w-[520px] text-pretty text-[15px] leading-7 text-text-secondary sm:text-base"
            >
              文远品序专注企业品牌视觉建设，并探索 AI 在内容生产、设计协作与企业服务中的创新应用。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.56, ease: enterEase }}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <a href="#services" className="group inline-flex h-12 items-center justify-center gap-2 rounded-button bg-soft-white px-5 text-sm font-medium text-obsidian transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,107,74,0.2)]">
                了解服务
                <ArrowUpRight size={16} strokeWidth={1.75} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
              <a href="/contact" className="group inline-flex h-12 items-center justify-center gap-2 rounded-button border border-white/20 bg-white/[0.03] px-5 text-sm font-medium text-text-primary transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08]">
                商务合作
                <ArrowUpRight size={16} strokeWidth={1.75} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          <div className="relative lg:col-start-9 lg:col-span-4">
            <HeroVisual />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.68, ease: enterEase }}
          className="mt-4 flex flex-col gap-5 border-t border-white/10 pt-5 lg:mt-0 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {capabilityTags.map((tag) => (
              <span key={tag.english} className="flex min-w-[132px] flex-col gap-1 border-l border-white/20 pl-3">
                <span className="text-[10px] font-medium tracking-[0.1em] text-text-secondary">{tag.english}</span>
                <span className="text-[11px] tracking-normal text-text-tertiary">{tag.chinese}</span>
              </span>
            ))}
          </div>
          <span className="flex items-center gap-2 text-[11px] tracking-[0.12em] text-text-tertiary">
            SCROLL TO EXPLORE
            <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
