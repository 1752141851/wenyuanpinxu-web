"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { contactDirections } from "@/data/contact";

const transition = { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const };

export function ContactDirection() {
  return (
    <section className="relative isolate overflow-hidden bg-background-light text-text-primary-on-light">
      <div aria-hidden="true" className="absolute -left-32 top-12 -z-10 size-[430px] rounded-full bg-[radial-gradient(circle,rgba(255,107,74,0.075),rgba(124,58,237,0.04)_48%,transparent_70%)] blur-2xl" />
      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={transition} className="border-b border-black/10 pb-12 lg:pb-16">
          <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary-on-light">BUSINESS DIRECTION</p>
          <h2 className="mt-6 text-balance text-[clamp(2.25rem,4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em]">我们支持哪些合作需求</h2>
          <p className="mt-6 max-w-[570px] text-[15px] leading-7 text-text-secondary-on-light">围绕企业发展需求，提供从品牌建设到长期视觉支持的设计服务。</p>
        </motion.div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {contactDirections.map((direction, index) => (
            <motion.article key={direction.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...transition, delay: index * 0.07 }} className="group flex min-h-[270px] flex-col rounded-card border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_16px_36px_rgba(16,16,18,0.07)] sm:p-7">
              <div className="flex items-start justify-between"><span className="text-sm text-text-tertiary-on-light">{direction.number}</span><ArrowUpRight size={17} strokeWidth={1.5} className="text-text-tertiary-on-light transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div>
              <p className="mt-9 text-[10px] font-medium tracking-[0.13em] text-text-secondary-on-light">{direction.label}</p>
              <h3 className="mt-3 text-[23px] font-medium tracking-[-0.04em]">{direction.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary-on-light">{direction.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-7">{direction.items.map((item) => <span key={item} className="rounded-button border border-black/10 px-2.5 py-1 text-[9px] font-medium tracking-[0.07em] text-text-tertiary-on-light">{item}</span>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
