"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { contactProcess } from "@/data/contact";

const transition = { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const };

export function ContactProcess() {
  return (
    <section className="relative isolate overflow-hidden bg-obsidian text-text-primary">
      <div aria-hidden="true" className="absolute bottom-0 right-0 h-[68%] w-[48%] opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_top,black,transparent)]" />
      <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={transition} className="flex flex-col gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-16">
          <div><p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">WORKFLOW</p><h2 className="mt-6 text-balance text-[clamp(2.25rem,4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em]">从需求到交付</h2></div>
          <p className="max-w-[340px] text-[15px] leading-7 text-text-secondary">通过清晰流程推进项目，让设计真正进入企业业务流程。</p>
        </motion.div>
        <div className="mt-10 grid gap-3 lg:mt-12 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
          {contactProcess.map((step, index) => (
            <motion.article key={step.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...transition, delay: index * 0.08 }} className="relative min-h-[212px] rounded-card border border-white/10 bg-white/[0.025] p-6 sm:p-7 lg:rounded-none lg:border-y-0 lg:border-r-0 lg:border-l-0 lg:bg-transparent">
              <span className="text-sm text-text-tertiary">{step.number}</span><h3 className="mt-9 text-[22px] font-medium tracking-[-0.04em]">{step.title}</h3><p className="mt-3 text-sm leading-6 text-text-secondary">{step.description}</p>
              {index < contactProcess.length - 1 && <ArrowDown size={15} strokeWidth={1.5} className="absolute bottom-5 right-5 text-text-tertiary lg:hidden" aria-hidden="true" />}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
