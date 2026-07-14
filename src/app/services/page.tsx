"use client";

import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { cooperationSteps, partnershipModes, services } from "@/data/services";

const revealTransition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function ServicesPage() {
  return (
    <main className="bg-obsidian">
      <SiteHeader />
      <section id="top" className="relative isolate overflow-hidden bg-obsidian text-text-primary">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(124,58,237,0.13),transparent_24%)]" />
        <div aria-hidden="true" className="absolute right-0 top-0 h-full w-1/2 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_left,black,transparent)]" />

        <div className="relative mx-auto flex min-h-[78svh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={revealTransition}
            className="text-[11px] font-medium tracking-[0.16em] text-text-secondary"
          >
            SERVICES / WENYUAN PINXU
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...revealTransition, delay: 0.1 }}
            className="mt-6 max-w-[980px] text-balance text-[clamp(3rem,6.2vw,6.25rem)] font-normal leading-[1.02] tracking-[-0.065em]"
          >
            企业设计科技服务体系
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...revealTransition, delay: 0.2 }}
            className="mt-8 max-w-[580px] text-[16px] leading-8 text-text-secondary sm:text-lg"
          >
            帮助企业通过设计提升品牌表达、传播效率和商业价值，同时探索 AI 技术辅助企业内容生产。
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...revealTransition, delay: 0.3 }}
            href="#services"
            className="mt-10 inline-flex h-12 w-fit items-center gap-2 rounded-button bg-soft-white px-5 text-sm font-medium text-obsidian transition duration-300 hover:-translate-y-0.5"
          >
            浏览服务体系
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </motion.a>
        </div>
      </section>

      <section id="services" className="bg-background-light text-text-primary-on-light">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={revealTransition}
            className="flex flex-col gap-7 border-b border-black/10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-16"
          >
            <div>
              <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary-on-light">01 / SERVICE SYSTEM</p>
              <h2 className="mt-6 max-w-[810px] text-balance text-[clamp(2.35rem,4.5vw,4.75rem)] font-normal leading-[1.08] tracking-[-0.055em]">
                从品牌表达，到商业增长，提供多场景设计支持
              </h2>
            </div>
            <p className="max-w-[330px] text-[15px] leading-7 text-text-secondary-on-light lg:pb-2">
              六项服务围绕企业真实发展场景组织，支持独立项目与持续合作。
            </p>
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ ...revealTransition, delay: index * 0.05 }}
                className={`group flex min-h-[280px] flex-col rounded-card border p-6 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_16px_36px_rgba(16,16,18,0.07)] sm:p-7 ${
                  service.number === "06"
                    ? "border-signal-violet/25 bg-[radial-gradient(circle_at_88%_12%,rgba(124,58,237,0.1),transparent_30%),white]"
                    : "border-black/10 bg-white"
                }`}
              >
                <Link href={`/services/${service.slug}`} className="flex h-full flex-col" aria-label={`查看${service.title}服务`}>
                  <div className="flex items-start justify-between">
                    <span className="text-sm font-medium tracking-[-0.04em] text-text-tertiary-on-light">{service.number}</span>
                    <ArrowUpRight size={17} strokeWidth={1.5} className="text-text-tertiary-on-light transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-primary-on-light" aria-hidden="true" />
                  </div>
                  <div className="mt-9">
                    <p className="text-[10px] font-medium tracking-[0.13em] text-text-secondary-on-light">{service.label}</p>
                    <h3 className="mt-3 text-[24px] font-medium tracking-[-0.04em]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-text-secondary-on-light">{service.value}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.keywords.map((keyword) => (
                        <span key={keyword} className="rounded-button border border-black/10 px-2.5 py-1 text-[10px] text-text-tertiary-on-light">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite text-text-primary">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={revealTransition}
            className="max-w-[760px]"
          >
            <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">02 / COOPERATION</p>
            <h2 className="mt-6 text-balance text-[clamp(2.35rem,4.5vw,4.75rem)] font-normal leading-[1.08] tracking-[-0.055em]">
              清晰协作，让设计进入企业业务流程
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {cooperationSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...revealTransition, delay: index * 0.08 }}
                className="min-h-[210px] bg-graphite p-6 sm:p-7"
              >
                <span className="text-sm text-text-tertiary">{step.number}</span>
                <h3 className="mt-10 text-xl font-medium tracking-[-0.035em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background-light text-text-primary-on-light">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={revealTransition}
            className="flex flex-col gap-7 border-b border-black/10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-16"
          >
            <div>
              <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary-on-light">03 / PARTNERSHIP</p>
              <h2 className="mt-6 max-w-[800px] text-balance text-[clamp(2.35rem,4.5vw,4.75rem)] font-normal leading-[1.08] tracking-[-0.055em]">
                为不同阶段的企业，建立适配的合作方式
              </h2>
            </div>
            <p className="max-w-[320px] text-[15px] leading-7 text-text-secondary-on-light lg:pb-2">
              服务模式可根据企业项目周期、内容频率与团队协作方式灵活组合。
            </p>
          </motion.div>

          <div className="mt-10 grid gap-3 lg:mt-12 lg:grid-cols-3">
            {partnershipModes.map((mode, index) => (
              <motion.article
                key={mode.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ ...revealTransition, delay: index * 0.08 }}
                className="rounded-card border border-black/10 bg-white p-6 sm:p-7"
              >
                <p className="text-[10px] font-medium tracking-[0.13em] text-text-secondary-on-light">{mode.label}</p>
                <h3 className="mt-5 text-[25px] font-medium tracking-[-0.04em]">{mode.title}</h3>
                <p className="mt-4 text-sm leading-6 text-text-secondary-on-light">{mode.description}</p>
                <div className="mt-8 flex items-center gap-2 text-[12px] text-text-secondary-on-light">
                  <Check size={14} strokeWidth={1.8} className="text-signal-violet" aria-hidden="true" />
                  支持明确服务边界与合同协作
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-obsidian text-text-primary">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={revealTransition}
            className="rounded-section border border-white/10 bg-[radial-gradient(circle_at_84%_18%,rgba(124,58,237,0.18),transparent_28%),linear-gradient(130deg,#151518,#0a0a0b)] p-7 sm:p-10 lg:flex lg:items-end lg:justify-between lg:p-14"
          >
            <div className="max-w-[760px]">
              <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">04 / BUSINESS INQUIRY</p>
              <h2 className="mt-6 text-balance text-[clamp(2.25rem,4.25vw,4.5rem)] font-normal leading-[1.08] tracking-[-0.055em]">
                从一次具体需求开始，建立长期设计协作
              </h2>
              <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-text-secondary">
                欢迎了解适合企业当前阶段的服务支持方式，获取定制化合作建议。
              </p>
            </div>
            <a href="#contact" className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-button bg-soft-white px-5 text-sm font-medium text-obsidian transition duration-300 hover:-translate-y-0.5 lg:mt-0">
              商务咨询
              <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
