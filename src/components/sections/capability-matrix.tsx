"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { capabilities } from "@/data/capabilities";

const revealTransition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function CapabilityMatrix() {
  return (
    <section id="capabilities" className="relative isolate overflow-hidden bg-background-light text-text-primary-on-light">
      <div aria-hidden="true" className="absolute -left-36 top-16 -z-10 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,107,74,0.08),rgba(124,58,237,0.045)_46%,transparent_70%)] blur-2xl" />
      <div aria-hidden="true" className="absolute right-0 top-0 -z-10 h-full w-[34%] opacity-50 [background-image:linear-gradient(rgba(16,16,18,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(16,16,18,0.045)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_left,black,transparent)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={revealTransition}
          className="max-w-[680px]"
        >
          <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary-on-light">DESIGN CAPABILITY</p>
          <h2 className="mt-6 text-[clamp(2.25rem,4.2vw,4.5rem)] font-normal leading-[1.08] tracking-[-0.055em]">
            设计能力矩阵
          </h2>
          <p className="mt-6 max-w-[540px] text-[15px] leading-7 text-text-secondary-on-light">
            围绕企业品牌、商业传播、数字内容与空间表现，提供多场景视觉解决方案。
          </p>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ ...revealTransition, delay: index * 0.07 }}
              className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-card border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_16px_36px_rgba(16,16,18,0.07)] sm:p-7"
            >
              <div aria-hidden="true" className="absolute -right-12 -top-14 size-40 rounded-full bg-[radial-gradient(circle,rgba(255,107,74,0.14),rgba(124,58,237,0.1)_48%,transparent_72%)] opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex items-start justify-between">
                <span className="text-sm font-medium tracking-[-0.04em] text-text-tertiary-on-light">{capability.number}</span>
                <ArrowUpRight size={17} strokeWidth={1.5} className="text-text-tertiary-on-light transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-primary-on-light" />
              </div>
              <div className="relative z-10 mt-10">
                <p className="text-[10px] font-medium tracking-[0.14em] text-text-secondary-on-light">{capability.label}</p>
                <h3 className="mt-3 text-[24px] font-medium tracking-[-0.045em]">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary-on-light">{capability.description}</p>
              </div>
              <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-7">
                {capability.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-button border border-black/10 px-2.5 py-1 text-[9px] font-medium tracking-[0.08em] text-text-tertiary-on-light">
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
