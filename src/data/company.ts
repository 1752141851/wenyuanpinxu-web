import { siteCompany } from "@/data/site";

export const companyIntro = {
  sectionLabel: "ABOUT WENYUAN",
  eyebrow: "DESIGN FOUNDATION × AI EXPLORATION",
  title: "从设计服务出发，探索企业未来表达方式",
  paragraphs: [
    `${siteCompany.chineseName}专注企业品牌视觉建设与商业设计服务，围绕品牌、传播、电商及数字内容场景，为企业提供系统化视觉解决方案。`,
    "在持续服务企业视觉需求的同时，我们探索设计能力与智能化工具结合，帮助企业提升内容生产效率与品牌表达能力。",
  ],
  capabilities: [
    {
      title: "企业设计服务",
      label: "BUSINESS DESIGN",
      description: "覆盖品牌、传播、电商等企业视觉需求。",
      keywords: ["BRAND", "VISUAL", "CONTENT"],
    },
    {
      title: "技术融合探索",
      label: "AI EXPLORATION",
      description: "探索 AI 辅助设计与企业效率提升。",
      keywords: ["AI", "WORKFLOW", "EFFICIENCY"],
    },
    {
      title: "长期合作支持",
      label: "LONG-TERM PARTNERSHIP",
      description: "支持包月、年度及合同制合作模式。",
      keywords: ["MONTHLY", "YEARLY", "CONTRACT"],
    },
  ],
} as const;
