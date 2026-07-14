import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { BrandDesignDetail } from "@/components/services/brand-design-detail";
import { BusinessCommunicationDetail } from "@/components/services/business-communication-detail";
import { EcommerceVisualDetail } from "@/components/services/ecommerce-visual-detail";
import { DesignPartnershipDetail } from "@/components/services/design-partnership-detail";
import { DigitalContentDetail } from "@/components/services/digital-content-detail";
import { getServiceBySlug, services } from "@/data/services";
import { siteCompany } from "@/data/site";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: `服务未找到｜${siteCompany.shortName}` };
  }

  return {
    title: `${service.title}｜${siteCompany.shortName}`,
    description: service.value,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  if (service.slug === "brand-design") {
    return <BrandDesignDetail service={service} />;
  }

  if (service.slug === "business-communication") {
    return <BusinessCommunicationDetail service={service} />;
  }

  if (service.slug === "ecommerce-visual") {
    return <EcommerceVisualDetail service={service} />;
  }

  if (service.slug === "design-partnership") {
    return <DesignPartnershipDetail service={service} />;
  }

  if (service.slug === "digital-content") {
    return <DigitalContentDetail service={service} />;
  }

  return (
    <main className="bg-obsidian">
      <SiteHeader />

      <section id="top" className="relative isolate overflow-hidden bg-obsidian text-text-primary">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(124,58,237,0.12),transparent_24%)]" />
        <div aria-hidden="true" className="absolute right-0 top-0 h-full w-[48%] opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:linear-gradient(to_left,black,transparent)]" />

        <div className="relative mx-auto flex min-h-[74svh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24">
          <Link href="/services" className="mb-12 inline-flex w-fit items-center gap-2 text-[12px] text-text-secondary transition-colors hover:text-text-primary">
            <ArrowLeft size={15} strokeWidth={1.5} aria-hidden="true" />
            返回服务总览
          </Link>
          <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">
            {service.number} / {service.label}
          </p>
          <h1 className="mt-6 max-w-[920px] text-balance text-[clamp(3rem,6vw,6.1rem)] font-normal leading-[1.02] tracking-[-0.065em]">
            {service.title}
          </h1>
          <p className="mt-8 max-w-[560px] text-[17px] leading-8 text-text-secondary sm:text-lg">
            {service.value}
          </p>
        </div>
      </section>

      <section className="bg-background-light text-text-primary-on-light">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-32">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary-on-light">SERVICE VALUE</p>
            <h2 className="mt-6 text-balance text-[clamp(2.25rem,4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em]">
              以清晰的设计支持，回应企业真实业务需求
            </h2>
          </div>
          <div className="space-y-6 text-[16px] leading-8 text-text-primary-on-light/75 lg:col-span-6 lg:col-start-7">
            <p>{service.value}</p>
            <p>
              服务内容会根据企业所处阶段、品牌基础与具体使用场景进行梳理，建立适配的设计协作方式与阶段性交付节奏。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-graphite text-text-primary">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="flex flex-col gap-7 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between lg:pb-16">
            <div>
              <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">SERVICE SCOPE</p>
              <h2 className="mt-6 text-balance text-[clamp(2.25rem,4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.055em]">
                聚焦关键表达环节，建立统一设计语言
              </h2>
            </div>
            <p className="max-w-[320px] text-[15px] leading-7 text-text-secondary lg:pb-2">
              以下内容作为该服务方向的基础范围，实际合作将根据需求进一步确认。
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-12">
            {service.keywords.map((keyword, index) => (
              <article key={keyword} className="min-h-[188px] rounded-card border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <span className="text-sm text-text-tertiary">0{index + 1}</span>
                <h3 className="mt-12 text-[25px] font-medium tracking-[-0.04em]">{keyword}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">围绕企业需求进行设计规划与阶段性交付。</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-obsidian text-text-primary">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="rounded-section border border-white/10 bg-[radial-gradient(circle_at_84%_18%,rgba(124,58,237,0.18),transparent_28%),linear-gradient(130deg,#151518,#0a0a0b)] p-7 sm:p-10 lg:flex lg:items-end lg:justify-between lg:p-14">
            <div className="max-w-[760px]">
              <p className="text-[11px] font-medium tracking-[0.16em] text-text-secondary">BUSINESS INQUIRY</p>
              <h2 className="mt-6 text-balance text-[clamp(2.25rem,4.25vw,4.5rem)] font-normal leading-[1.08] tracking-[-0.055em]">
                为企业当前阶段，制定适配的设计支持方案
              </h2>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-text-secondary">
                <span className="inline-flex items-center gap-2"><Check size={14} strokeWidth={1.8} className="text-signal-violet" aria-hidden="true" />明确需求与交付边界</span>
                <span className="inline-flex items-center gap-2"><Check size={14} strokeWidth={1.8} className="text-signal-violet" aria-hidden="true" />支持合同与长期协作</span>
              </div>
            </div>
            <Link href="/services" className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-button bg-soft-white px-5 text-sm font-medium text-obsidian transition duration-300 hover:-translate-y-0.5 lg:mt-0">
              返回服务总览
              <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
