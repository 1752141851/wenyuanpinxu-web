"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

const revealTransition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function ServiceValueGrid() {
  return (
    <section id="services" className="relative isolate overflow-hidden bg-obsidian text-text-primary">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(124,58,237,0.12),transparent_26%)]" />
      <div aria-hidden="true" className="absolute right-0 top-0 h-full w-[46%] opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_left,black,transparent)]" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={revealTransition}
          className="flex flex-col gap-7 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-16"
        >
          <div>
            <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">DESIGN SERVICE SYSTEM</p>
            <h2 className="mt-6 text-[clamp(2.2rem,4.25vw,4.5rem)] font-normal leading-[1.08] tracking-[-0.055em]">
              <span className="block">从品牌表达，到商业增长，</span>
              <span className="mt-1 block">提供多场景设计支持</span>
            </h2>
          </div>
          <p className="max-w-[320px] text-[15px] leading-7 text-text-secondary lg:pb-2">
            围绕企业发展场景，文远品序提供品牌、传播、电商、数字内容与长期视觉协作服务。
          </p>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.14 }}
              transition={{ ...revealTransition, delay: index * 0.06 }}
              className={`group relative isolate flex min-h-[248px] flex-col overflow-hidden rounded-card border p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[0.22] sm:min-h-[292px] sm:p-7 ${
                service.number === "06"
                  ? "border-signal-violet/35 bg-[radial-gradient(circle_at_85%_12%,rgba(241,90,140,0.16),transparent_34%),linear-gradient(135deg,#1d1722,#17151b)]"
                  : "border-white/10 bg-graphite/75 hover:bg-[radial-gradient(circle_at_86%_12%,rgba(124,58,237,0.12),transparent_36%),#1b1b20]"
              }`}
            >
              <div className="relative z-10 flex items-start justify-between gap-4">
                <span className="text-sm font-medium tracking-[-0.04em] text-text-tertiary">{service.number}</span>
                <span className="flex items-center gap-2">
                  <span className="hidden text-[9px] font-medium tracking-[0.12em] text-text-secondary opacity-0 transition duration-300 group-hover:opacity-100 lg:inline">VIEW SERVICE</span>
                  <ArrowUpRight size={17} strokeWidth={1.5} className="text-text-secondary transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-primary" aria-hidden="true" />
                </span>
              </div>

              <div className="relative z-10 mt-8 sm:mt-9">
                <p className="text-[10px] font-medium tracking-[0.13em] text-text-secondary">{service.label}</p>
                <h3 className="mt-3 text-[24px] font-medium tracking-[-0.04em] text-text-primary">{service.title}</h3>
                <p className="mt-3 max-w-[280px] text-sm leading-6 text-text-secondary">{service.value}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.keywords.map((keyword) => (
                    <span key={keyword} className="rounded-button border border-white/15 px-2.5 py-1 text-[10px] tracking-[0.04em] text-text-tertiary">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
