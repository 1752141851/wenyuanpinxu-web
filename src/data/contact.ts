export const contactDirections = [
  {
    number: "01",
    title: "企业品牌建设",
    label: "BRAND BUILDING",
    description: "帮助企业建立统一品牌视觉体系。",
    items: ["Logo设计", "VI系统", "品牌视觉升级"],
  },
  {
    number: "02",
    title: "商业传播设计",
    label: "BUSINESS COMMUNICATION",
    description: "支持企业市场传播与商业内容表达。",
    items: ["活动视觉", "宣传物料", "营销设计"],
  },
  {
    number: "03",
    title: "数字内容支持",
    label: "DIGITAL CONTENT",
    description: "结合数字工具提升企业内容生产效率。",
    items: ["电商视觉", "数字内容", "AI辅助设计探索"],
  },
  {
    number: "04",
    title: "长期设计合作",
    label: "DESIGN PARTNERSHIP",
    description: "成为企业长期视觉合作伙伴。",
    items: ["包月支持", "年度合作", "持续优化"],
  },
] as const;

export const contactProcess = [
  { number: "01", title: "需求沟通", description: "了解企业目标、业务需求和设计方向。" },
  { number: "02", title: "方案规划", description: "根据企业需求制定视觉解决方案。" },
  { number: "03", title: "阶段确认", description: "分阶段沟通，持续优化设计结果。" },
  { number: "04", title: "交付合作", description: "完成项目交付，并支持后续长期合作。" },
] as const;

export const contactModes = [
  { title: "项目合作", description: "适合单次品牌建设、视觉设计、电商设计等专项需求。" },
  { title: "长期设计支持", description: "适合需要持续视觉维护和内容更新的企业。" },
  { title: "年度合作", description: "适合企业品牌长期规划与持续设计支持。" },
] as const;
