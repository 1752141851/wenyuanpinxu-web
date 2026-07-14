"use client";

import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/layout/site-header";
import type { BrandDesignService } from "@/data/services";
import { siteCompany } from "@/data/site";

const revealTransition = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1] as const,
};

const processSteps = [
  { number: "01", title: "需求沟通", description: "了解企业目标、业务需求和设计方向。" },
  { number: "02", title: "方案规划", description: "制定符合企业定位的视觉解决方案。" },
  { number: "03", title: "阶段确认", description: "根据项目阶段持续沟通和优化。" },
  { number: "04", title: "交付优化", description: "完成设计交付并支持后续调整。" },
] as const;

type BrandDesignDetailProps = {
  service: BrandDesignService;
};

export function BrandDesignDetail({ service }: BrandDesignDetailProps) {
  return (
    <main className="bg-obsidian">
      <SiteHeader />

      <ServiceDetailHero service={service} />
      <ServiceValueSection service={service} />
      <ServiceScopeList service={service} />
      <CustomerTypeSection service={service} />
      <CooperationProcess />
      <CooperationModeSection service={service} />
      <BrandContactSection />
    </main>
  );
}

function ServiceDetailHero({ service }: BrandDesignDetailProps) {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-obsidian text-text-primary">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_34%,rgba(124,58,237,0.13),transparent_26%),radial-gradient(circle_at_68%_76%,rgba(255,107,74,0.08),transparent_24%)]" />
      <div aria-hidden="true" className="absolute right-0 top-0 h-full w-[50%] opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_left,black,transparent)]" />
      <div aria-hidden="true" className="absolute right-[13%] top-[29%] h-48 w-48 rotate-[-18deg] rounded-[42%] border border-white/10 bg-[linear-gradient(135deg,rgba(255,107,74,0.12),rgba(124,58,237,0.12),transparent)] blur-[1px] sm:h-64 sm:w-64" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={revealTransition}
        className="relative mx-auto flex min-h-[74svh] max-w-[1280px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24"
      >
        <Link href="/services" className="mb-12 inline-flex min-h-11 w-fit items-center gap-2 text-[12px] text-text-secondary transition-colors hover:text-text-primary">
          <ArrowLeft size={15} strokeWidth={1.5} aria-hidden="true" />
          返回服务列表
        </Link>
        <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">SERVICE</p>
        <p className="mt-4 text-[11px] font-medium tracking-[0.16em] text-text-secondary">{service.englishTitle}</p>
        <h1 className="mt-6 max-w-[900px] text-balance text-[clamp(3rem,6vw,6.1rem)] font-normal leading-[1.02] tracking-[-0.065em]">{service.title}</h1>
        <p className="mt-8 max-w-[620px] text-[17px] leading-8 text-text-secondary sm:text-lg">{service.description}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-button bg-soft-white px-5 text-sm font-medium text-obsidian transition duration-300 hover:-translate-y-0.5">
            获取定制方案
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </Link>
          <Link href="/services" className="inline-flex min-h-12 items-center justify-center rounded-button border border-white/20 px-5 text-sm font-medium text-text-primary transition duration-300 hover:border-white/40 hover:bg-white/[0.04]">
            返回服务列表
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

function ServiceValueSection({ service }: BrandDesignDetailProps) {
  return (
    <section className="bg-background-light text-text-primary-on-light">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={revealTransition} className="border-b border-black/10 pb-12 lg:pb-16">
          <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary-on-light">BUSINESS VALUE</p>
          <h2 className="mt-6 text-balance text-[clamp(2.25rem,4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em]">企业为什么需要品牌设计</h2>
        </motion.div>
        <div className="mt-10 grid gap-3 lg:mt-12 lg:grid-cols-3">
          {service.valuePoints.map((point, index) => (
            <motion.article key={point.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...revealTransition, delay: index * 0.08 }} className="group min-h-[230px] rounded-card border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_16px_36px_rgba(16,16,18,0.07)] sm:p-7">
              <span className="text-sm font-medium tracking-[-0.04em] text-text-tertiary-on-light">{point.number}</span>
              <h3 className="mt-10 text-[26px] font-medium tracking-[-0.04em]">{point.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary-on-light">{point.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceScopeList({ service }: BrandDesignDetailProps) {
  return (
    <section className="bg-graphite text-text-primary">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={revealTransition} className="border-b border-white/10 pb-12 lg:pb-16">
          <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">SERVICE SCOPE</p>
          <h2 className="mt-6 text-balance text-[clamp(2.25rem,4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em]">从品牌基础，到持续应用</h2>
        </motion.div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12">
          {service.serviceItems.map((item, index) => (
            <motion.article key={item.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ ...revealTransition, delay: index * 0.07 }} className="group min-h-[206px] rounded-card border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[0.22] hover:bg-[radial-gradient(circle_at_88%_10%,rgba(124,58,237,0.11),transparent_36%),rgba(255,255,255,0.04)] sm:p-7">
              <span className="text-sm text-text-tertiary">{item.number}</span>
              <h3 className="mt-9 text-[24px] font-medium tracking-[-0.04em]">{item.title}</h3>
              <p className="mt-3 max-w-[420px] text-sm leading-6 text-text-secondary">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CustomerTypeSection({ service }: BrandDesignDetailProps) {
  return (
    <section className="bg-background-light text-text-primary-on-light">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={revealTransition} className="flex flex-col gap-6 border-b border-black/10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-16">
          <div>
            <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary-on-light">WHO IT IS FOR</p>
            <h2 className="mt-6 text-balance text-[clamp(2.25rem,4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em]">适配不同发展阶段的企业</h2>
          </div>
          <p className="max-w-[310px] text-[15px] leading-7 text-text-secondary-on-light">基于企业所处阶段与品牌基础，制定相应的视觉建设节奏。</p>
        </motion.div>
        <div className="mt-10 grid gap-3 lg:mt-12 lg:grid-cols-3">
          {service.customerTypes.map((customerType, index) => (
            <motion.article key={customerType.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...revealTransition, delay: index * 0.08 }} className="min-h-[184px] rounded-card border border-black/10 bg-white p-6 sm:p-7">
              <span className="text-sm font-medium tracking-[-0.04em] text-text-tertiary-on-light">0{index + 1}</span>
              <h3 className="mt-8 text-[23px] font-medium tracking-[-0.04em]">{customerType.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary-on-light">{customerType.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CooperationProcess() {
  return (
    <section className="bg-obsidian text-text-primary">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={revealTransition} className="flex flex-col gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-16">
          <div>
            <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">COOPERATION PROCESS</p>
            <h2 className="mt-6 text-balance text-[clamp(2.25rem,4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em]">以阶段确认，推进品牌升级</h2>
          </div>
          <p className="max-w-[310px] text-[15px] leading-7 text-text-secondary">明确的沟通与交付节奏，让品牌建设持续贴合企业实际需求。</p>
        </motion.div>
        <div className="mt-10 grid gap-3 lg:mt-12 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
          {processSteps.map((step, index) => (
            <motion.article key={step.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...revealTransition, delay: index * 0.08 }} className="relative min-h-[210px] rounded-card border border-white/10 bg-white/[0.025] p-6 sm:p-7 lg:rounded-none lg:border-y-0 lg:border-r-0 lg:border-l-0 lg:bg-transparent">
              <span className="text-sm text-text-tertiary">{step.number}</span>
              <h3 className="mt-9 text-[22px] font-medium tracking-[-0.04em]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{step.description}</p>
              {index < processSteps.length - 1 && <ArrowDown size={15} strokeWidth={1.5} className="absolute bottom-5 right-5 text-text-tertiary lg:hidden" aria-hidden="true" />}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CooperationModeSection({ service }: BrandDesignDetailProps) {
  return (
    <section className="bg-background-light text-text-primary-on-light">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={revealTransition} className="border-b border-black/10 pb-12 lg:pb-16">
          <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary-on-light">COOPERATION MODE</p>
          <h2 className="mt-6 text-balance text-[clamp(2.25rem,4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em]">选择适配的品牌合作方式</h2>
          <p className="mt-5 max-w-[560px] text-[15px] leading-7 text-text-secondary-on-light">支持项目合作、长期合作与合同合作，建立稳定、可持续的企业设计协作。</p>
        </motion.div>
        <div className="mt-10 grid gap-3 lg:mt-12 lg:grid-cols-3">
          {service.cooperationModes.map((mode, index) => (
            <motion.article key={mode.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...revealTransition, delay: index * 0.08 }} className="group min-h-[188px] rounded-card border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_16px_36px_rgba(16,16,18,0.07)] sm:p-7">
              <span className="text-sm font-medium tracking-[-0.04em] text-text-tertiary-on-light">0{index + 1}</span>
              <h3 className="mt-8 text-[23px] font-medium tracking-[-0.04em]">{mode.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary-on-light">{mode.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandContactSection() {
  return (
    <section id="contact" className="bg-obsidian text-text-primary">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={revealTransition} className="rounded-section border border-white/10 bg-[radial-gradient(circle_at_84%_18%,rgba(124,58,237,0.17),transparent_28%),linear-gradient(130deg,#151518,#0a0a0b)] p-7 sm:p-10 lg:flex lg:items-end lg:justify-between lg:p-14">
          <div className="max-w-[720px]">
            <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">BUSINESS INQUIRY</p>
            <h2 className="mt-6 text-balance text-[clamp(2.25rem,4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em]">开始一次品牌升级</h2>
            <p className="mt-6 max-w-[590px] text-[16px] leading-7 text-text-secondary">无论是品牌建立、视觉升级，还是长期设计支持，欢迎企业与{siteCompany.shortName}沟通合作。</p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-text-secondary">
              <span className="inline-flex items-center gap-2"><Check size={14} strokeWidth={1.8} className="text-signal-violet" aria-hidden="true" />支持企业合作</span>
              <span className="inline-flex items-center gap-2"><Check size={14} strokeWidth={1.8} className="text-signal-violet" aria-hidden="true" />支持合同合作</span>
              <span className="inline-flex items-center gap-2"><Check size={14} strokeWidth={1.8} className="text-signal-violet" aria-hidden="true" />支持长期支持</span>
            </div>
          </div>
          <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-button bg-soft-white px-5 text-sm font-medium text-obsidian transition duration-300 hover:-translate-y-0.5 lg:mt-0">
            商务合作
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
