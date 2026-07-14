"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { cooperationModes, cooperationSteps } from "@/data/capabilities";

const revealTransition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function CooperationSection() {
  return (
    <section id="cooperation" className="relative isolate overflow-hidden bg-obsidian text-text-primary">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(124,58,237,0.13),transparent_26%),radial-gradient(circle_at_76%_82%,rgba(255,107,74,0.08),transparent_24%)]" />
      <div aria-hidden="true" className="absolute bottom-0 right-0 h-[68%] w-[48%] opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_top,black,transparent)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={revealTransition}
          className="flex flex-col gap-7 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-16"
        >
          <div>
            <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">COLLABORATION PROCESS</p>
            <h2 className="mt-6 text-[clamp(2.25rem,4.2vw,4.5rem)] font-normal leading-[1.08] tracking-[-0.055em]">
              从一次需求，到长期合作
            </h2>
          </div>
          <p className="max-w-[340px] text-[15px] leading-7 text-text-secondary lg:pb-1">
            以明确流程、合同合作和持续支持，为企业建立稳定的设计协作关系。
          </p>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
          {cooperationSteps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ ...revealTransition, delay: index * 0.08 }}
              className="relative min-h-[190px] rounded-card border border-white/10 bg-white/[0.025] p-6 sm:p-7 lg:min-h-[240px] lg:rounded-none lg:border-y-0 lg:border-r-0 lg:border-l-0 lg:bg-transparent"
            >
              <span className="text-sm font-medium tracking-[-0.04em] text-text-tertiary">{step.number}</span>
              <h3 className="mt-10 text-[22px] font-medium tracking-[-0.04em] text-text-primary">{step.title}</h3>
              <p className="mt-3 max-w-[230px] text-sm leading-6 text-text-secondary">{step.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10 lg:mt-20 lg:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={revealTransition}
            className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">COOPERATION MODEL</p>
              <h3 className="mt-4 text-[clamp(1.8rem,3.2vw,3rem)] font-normal tracking-[-0.05em]">适配企业不同阶段的协作方式</h3>
            </div>
            <p className="max-w-[310px] text-sm leading-6 text-text-secondary">支持企业合作、合同合作与长期设计支持，协作节奏可按实际需求制定。</p>
          </motion.div>

          <div className="mt-8 grid gap-3 lg:mt-10 lg:grid-cols-3">
            {cooperationModes.map((mode, index) => (
              <motion.article
                key={mode.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ ...revealTransition, delay: 0.08 + index * 0.08 }}
                className="group flex min-h-[156px] flex-col justify-between rounded-card border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[0.22] hover:bg-[radial-gradient(circle_at_92%_8%,rgba(124,58,237,0.12),transparent_36%),rgba(255,255,255,0.04)] sm:p-7"
              >
                <h4 className="text-[21px] font-medium tracking-[-0.04em] text-text-primary">{mode.title}</h4>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <p className="max-w-[255px] text-sm leading-6 text-text-secondary">{mode.description}</p>
                  <ArrowRight size={17} strokeWidth={1.5} className="shrink-0 text-text-tertiary transition duration-300 group-hover:translate-x-1 group-hover:text-text-primary" aria-hidden="true" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
