"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { contactModes } from "@/data/contact";

const transition = { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const };

export function ContactMode() {
  return (
    <section className="bg-background-light text-text-primary-on-light">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={transition} className="border-b border-black/10 pb-12 lg:pb-16">
          <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary-on-light">COOPERATION MODEL</p><h2 className="mt-6 text-balance text-[clamp(2.25rem,4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em]">灵活合作方式</h2>
        </motion.div>
        <div className="mt-10 grid gap-3 lg:mt-12 lg:grid-cols-3">
          {contactModes.map((mode, index) => (
            <motion.article key={mode.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...transition, delay: index * 0.08 }} className="group flex min-h-[190px] flex-col justify-between rounded-card border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_16px_36px_rgba(16,16,18,0.07)] sm:p-7">
              <span className="text-sm text-text-tertiary-on-light">0{index + 1}</span><h3 className="mt-8 text-[23px] font-medium tracking-[-0.04em]">{mode.title}</h3><div className="mt-5 flex items-end justify-between gap-4"><p className="text-sm leading-6 text-text-secondary-on-light">{mode.description}</p><ArrowRight size={17} strokeWidth={1.5} className="shrink-0 text-text-tertiary-on-light transition-transform duration-300 group-hover:translate-x-1" /></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
