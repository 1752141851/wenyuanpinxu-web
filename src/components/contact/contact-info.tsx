"use client";

import { ArrowUpRight, Phone } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { siteCompany } from "@/data/site";

const transition = { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const };

export function ContactInfo() {
  return (
    <section id="contact-info" className="bg-background-light text-text-primary-on-light">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={transition} className="flex flex-col gap-6 border-b border-black/10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-16">
          <div><p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary-on-light">GET IN TOUCH</p><h2 className="mt-6 text-balance text-[clamp(2.25rem,4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em]">联系{siteCompany.shortName}</h2></div>
          <p className="max-w-[390px] text-[15px] leading-7 text-text-secondary-on-light">欢迎企业咨询品牌建设、商业视觉、电商设计及长期合作方案。</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ ...transition, delay: 0.08 }} className="mt-10 grid gap-3 lg:mt-12 lg:grid-cols-12">
          <article className="rounded-card border border-black/10 bg-white p-6 sm:p-8 lg:col-span-8"><div className="flex items-center gap-4"><Image src={siteCompany.logoPath} alt="文远品序 Logo" width={48} height={48} className="size-12 rounded-xl object-contain" /><p className="text-[10px] font-medium tracking-[0.13em] text-text-secondary-on-light">COMPANY</p></div><h3 className="mt-5 text-[clamp(1.65rem,3vw,2.5rem)] font-medium tracking-[-0.045em]">{siteCompany.chineseName}</h3><p className="mt-3 text-[11px] font-medium tracking-[0.12em] text-text-secondary-on-light">{siteCompany.englishName}</p><div className="mt-10 grid gap-6 border-t border-black/10 pt-6 sm:grid-cols-2"><div><p className="text-[10px] font-medium tracking-[0.12em] text-text-tertiary-on-light">CONTACT</p><p className="mt-2 text-lg font-medium">{siteCompany.contactName}</p><p className="mt-1 text-sm text-text-secondary-on-light">{siteCompany.contactTitle}</p></div><div><p className="text-[10px] font-medium tracking-[0.12em] text-text-tertiary-on-light">PHONE</p><a href={`tel:${siteCompany.phone}`} className="mt-2 inline-flex min-h-11 items-center gap-2 text-lg font-medium transition-colors hover:text-signal-violet"><Phone size={16} strokeWidth={1.7} />{siteCompany.phone}<ArrowUpRight size={15} strokeWidth={1.5} /></a></div></div></article>
          <article className="flex min-h-[260px] flex-col justify-between rounded-card border border-black/10 bg-graphite p-6 text-text-primary sm:p-8 lg:col-span-4"><p className="text-[10px] font-medium tracking-[0.13em] text-text-secondary">WECHAT</p><Image src={siteCompany.wecomQrPath} alt="企业微信二维码" width={128} height={128} className="size-32 bg-white p-2 object-contain" /><p className="text-sm leading-6 text-text-secondary">添加企业微信<br />获取定制方案</p></article>
        </motion.div>
      </div>
    </section>
  );
}
