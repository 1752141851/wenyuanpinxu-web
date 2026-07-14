"use client";

import { motion } from "motion/react";
import { companyIntro } from "@/data/company";

const revealTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function CompanyIntroSection() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-background-light text-text-primary-on-light">
      <div aria-hidden="true" className="absolute -right-48 top-12 -z-10 size-[540px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.075),rgba(255,107,74,0.035)_38%,transparent_68%)] blur-2xl" />
      <div aria-hidden="true" className="absolute -left-28 bottom-0 -z-10 h-px w-[48%] rotate-[-14deg] bg-[linear-gradient(90deg,transparent,rgba(255,107,74,0.18),rgba(124,58,237,0.16),transparent)]" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={revealTransition}
          className="flex flex-col gap-7 border-b border-black/10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:pb-16"
        >
          <div className="max-w-[800px]">
            <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary-on-light">
              {companyIntro.sectionLabel}
            </p>
            <h2 className="mt-6 max-w-[790px] text-[2rem] font-normal leading-[1.08] tracking-[-0.055em] sm:text-[clamp(2.35rem,4.5vw,4.75rem)]">
              <span className="block whitespace-nowrap">从设计服务出发，</span>
              <span className="mt-1 block whitespace-nowrap">探索企业未来表达方式</span>
            </h2>
          </div>
          <p className="max-w-[320px] text-[11px] font-medium tracking-[0.13em] text-text-secondary-on-light lg:pb-2">
            {companyIntro.eyebrow}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...revealTransition, delay: 0.08 }}
            className="space-y-6 text-[16px] leading-8 text-text-primary-on-light/75 lg:col-span-5 lg:pr-8"
          >
            {companyIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <div className="space-y-3 lg:col-span-7">
            {companyIntro.capabilities.map((capability, index) => (
              <motion.article
                key={capability.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...revealTransition, delay: 0.14 + index * 0.09 }}
                className="group grid min-h-[164px] grid-cols-[44px_1fr] gap-x-4 rounded-card border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_16px_36px_rgba(16,16,18,0.07)] sm:grid-cols-[64px_minmax(0,1fr)_minmax(180px,0.72fr)] sm:gap-x-6 sm:p-7"
              >
                <span className="text-sm font-medium tracking-[-0.04em] text-text-tertiary-on-light">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-[10px] font-medium tracking-[0.13em] text-text-secondary-on-light">{capability.label}</p>
                  <h3 className="mt-3 text-[22px] font-medium tracking-[-0.04em]">{capability.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {capability.keywords.map((keyword) => (
                      <span key={keyword} className="rounded-button border border-black/10 px-2.5 py-1 text-[9px] font-medium tracking-[0.1em] text-text-tertiary-on-light">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="col-start-2 mt-5 max-w-[260px] text-sm leading-6 text-text-secondary-on-light sm:col-start-auto sm:mt-0 sm:self-end">{capability.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
