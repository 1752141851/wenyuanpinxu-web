import type { Service } from "@/types/service";

type ServiceDetailData = {
  englishTitle?: string;
  description?: string;
  detailSubtitle?: string;
  valuePoints?: readonly {
    number: string;
    title: string;
    description: string;
  }[];
  serviceItems?: readonly {
    number: string;
    title: string;
    description: string;
    keywords?: readonly string[];
  }[];
  customerTypes?: readonly {
    title: string;
    description: string;
  }[];
  cooperationModes?: readonly {
    title: string;
    description: string;
  }[];
};

export const services = [
  {
    number: "01",
    slug: "brand-design",
    label: "BRAND DESIGN",
    englishTitle: "BRAND DESIGN",
    title: "企业品牌视觉",
    value: "帮助企业建立统一品牌表达，提高市场识别度。",
    description: "从品牌基础建设到视觉体系完善，帮助企业建立清晰、统一、有价值的品牌表达。",
    keywords: ["Logo设计", "VI系统", "品牌物料"],
    valuePoints: [
      { number: "01", title: "品牌识别", description: "建立统一视觉语言，让企业拥有清晰的市场记忆。" },
      { number: "02", title: "商业信任", description: "提升企业专业形象，加强客户对品牌价值的认可。" },
      { number: "03", title: "长期资产", description: "形成可持续使用的视觉体系，支持企业长期发展。" },
    ],
    serviceItems: [
      { number: "01", title: "Logo与品牌标识设计", description: "设计企业核心视觉符号，建立品牌第一识别。" },
      { number: "02", title: "VI视觉系统建设", description: "建立完整视觉规范，包括色彩、字体、版式和应用规则。" },
      { number: "03", title: "企业宣传体系设计", description: "支持宣传册、海报、折页、企业物料等商业传播设计。" },
      { number: "04", title: "品牌应用延展", description: "根据企业发展需求持续优化品牌视觉应用。" },
    ],
    customerTypes: [
      { title: "初创企业", description: "需要建立品牌基础。" },
      { title: "成长企业", description: "需要提升品牌形象。" },
      { title: "长期发展企业", description: "需要持续视觉支持。" },
    ],
    cooperationModes: [
      { title: "项目合作", description: "适合单次品牌建设、视觉升级及专项设计需求。" },
      { title: "长期设计支持", description: "适合企业持续视觉维护、营销传播和内容更新需求。" },
      { title: "年度品牌合作", description: "适合企业长期品牌规划、视觉优化和持续设计服务。" },
    ],
  },
  {
    number: "02",
    slug: "business-communication",
    label: "BUSINESS COMMUNICATION",
    englishTitle: "BUSINESS COMMUNICATION",
    title: "商业视觉传播",
    value: "帮助企业提升市场传播效率，让品牌信息通过视觉方式更清晰、更有效地触达目标用户。",
    description: "帮助企业提升传播效率，让品牌信息在不同商业场景中更加清晰有效。",
    keywords: ["宣传设计", "活动视觉", "企业内容"],
    valuePoints: [
      { number: "01", title: "信息表达", description: "将企业产品、活动和品牌信息转化为清晰有效的视觉内容。" },
      { number: "02", title: "市场传播", description: "通过专业视觉提升营销活动和企业传播效果。" },
      { number: "03", title: "品牌一致性", description: "保持不同传播场景中的统一视觉语言。" },
    ],
    serviceItems: [
      { number: "01", title: "企业宣传设计", description: "支持企业宣传册、折页、介绍资料等商业传播内容设计。", keywords: ["Brochure", "Profile", "Print"] },
      { number: "02", title: "活动视觉设计", description: "支持企业活动、发布会、周年庆、招聘等场景视觉设计。", keywords: ["Event", "Campaign", "Poster"] },
      { number: "03", title: "营销物料设计", description: "根据企业推广需求，设计海报、展板、宣传物料等视觉内容。", keywords: ["Poster", "Banner", "Marketing"] },
      { number: "04", title: "企业内容设计", description: "帮助企业持续输出符合品牌定位的视觉传播内容。", keywords: ["Content", "Visual", "Communication"] },
    ],
    customerTypes: [
      { title: "企业宣传需求企业", description: "需要提升对外信息表达。" },
      { title: "活动推广企业", description: "需要统一活动视觉体验。" },
      { title: "持续营销企业", description: "需要长期内容与传播支持。" },
    ],
    cooperationModes: [
      { title: "项目合作", description: "适合单次宣传、活动或营销设计。" },
      { title: "长期设计支持", description: "适合企业持续宣传内容需求。" },
      { title: "年度视觉支持", description: "适合企业长期传播规划。" },
    ],
  },
  {
    number: "03",
    slug: "ecommerce-visual",
    label: "E-COMMERCE VISUAL",
    englishTitle: "E-COMMERCE VISUAL",
    title: "电商视觉增长",
    value: "通过产品视觉优化与内容设计支持，帮助企业提升线上展示效果，加强用户理解与商业转化。",
    description: "通过产品视觉优化，帮助企业提升线上展示效果与商业表达能力。",
    keywords: ["详情页", "产品视觉", "营销素材"],
    valuePoints: [
      { number: "01", title: "产品表达", description: "通过专业视觉呈现产品特点，提高用户理解效率。" },
      { number: "02", title: "购买决策", description: "优化产品展示内容，帮助用户更快速了解产品价值。" },
      { number: "03", title: "品牌统一", description: "保持线上产品视觉与企业品牌形象一致。" },
    ],
    serviceItems: [
      { number: "01", title: "产品主视觉设计", description: "设计产品主图、推广海报等核心展示内容。", keywords: ["Main Image", "Product Visual", "Campaign"] },
      { number: "02", title: "商品详情页设计", description: "优化产品详情页面结构，提高信息表达效率。", keywords: ["Detail Page", "Layout", "Conversion"] },
      { number: "03", title: "产品精修与场景合成", description: "通过图片优化和场景表达提升产品展示效果。", keywords: ["Retouch", "Composite", "Visual"] },
      { number: "04", title: "平台视觉适配", description: "支持不同电商平台的视觉内容需求。", keywords: ["E-commerce", "Platform", "Content"] },
    ],
    customerTypes: [
      { title: "产品企业", description: "需要提升线上产品展示。" },
      { title: "电商品牌", description: "需要持续优化营销视觉。" },
      { title: "制造型企业", description: "需要建立数字化产品表达。" },
    ],
    cooperationModes: [
      { title: "项目合作", description: "适合单个产品或阶段性视觉需求。" },
      { title: "长期视觉支持", description: "适合持续产品更新和营销内容需求。" },
      { title: "企业年度合作", description: "适合品牌长期电商视觉规划。" },
    ],
  },
  {
    number: "04",
    slug: "digital-content",
    label: "DIGITAL CONTENT",
    englishTitle: "DIGITAL CONTENT",
    title: "数字内容设计",
    value: "结合设计能力与数字工具，帮助企业建立高效内容生产方式，并探索 AI 辅助企业表达的新可能。",
    description: "通过数字内容设计与 AI 辅助探索，帮助企业提升内容生产效率和品牌表达能力。",
    keywords: ["数字内容", "社交传播", "创意素材"],
    valuePoints: [{ number:"01",title:"内容效率",description:"帮助企业建立更加稳定、高效的内容生产方式。"},{number:"02",title:"品牌表达",description:"通过统一视觉语言，提高企业数字内容质量。"},{number:"03",title:"未来适应",description:"探索 AI 等新技术对企业内容生产和协作方式的影响。"}],
    serviceItems: [{number:"01",title:"企业数字视觉内容",description:"支持企业公众号、社交媒体、线上宣传等数字内容设计。",keywords:["Digital","Content","Visual"]},{number:"02",title:"AI辅助视觉探索",description:"利用 AI 工具辅助创意探索、视觉方案验证和内容生产流程优化。",keywords:["AI Assist","Creative","Workflow"]},{number:"03",title:"内容模板与资产建设",description:"帮助企业建立可持续使用的视觉模板和内容资产。",keywords:["Template","System","Asset"]},{number:"04",title:"数字工作流程探索",description:"研究数字工具和智能化方式如何提升企业协作效率。",keywords:["Workflow","Efficiency","Innovation"]}],
    customerTypes:[{title:"正在进行数字化转型的企业",description:"需要提升内容生产效率。"},{title:"需要持续内容输出的企业",description:"需要稳定数字视觉支持。"},{title:"希望探索AI应用的企业",description:"关注未来企业工作方式变化。"}],
    cooperationModes:[{title:"项目合作",description:"适合企业阶段性数字内容需求。"},{title:"长期内容支持",description:"适合持续内容生产和视觉维护。"},{title:"AI应用探索合作",description:"适合希望探索 AI 提升企业效率的合作交流。"}],
  },
  {
    number: "05",
    slug: "space-visual",
    label: "3D & SPACE VISUAL",
    title: "空间与三维表现",
    value: "提供空间、产品与工程视觉表达支持。",
    keywords: ["CAD", "C4D", "空间表现"],
  },
  {
    number: "06",
    slug: "design-partnership",
    label: "DESIGN PARTNERSHIP",
    englishTitle: "DESIGN PARTNERSHIP",
    title: "长期设计合作",
    value: "成为企业长期视觉合作伙伴，持续支持品牌建设、商业传播和内容设计需求。",
    description: "成为企业长期视觉合作伙伴，持续支持品牌建设、传播升级与内容设计。",
    keywords: ["包月", "包年", "合同合作"],
    valuePoints: [
      { number: "01", title: "持续支持", description: "无需组建设计团队，也能获得稳定视觉支持。" },
      { number: "02", title: "降低沟通成本", description: "长期合作能够深入理解企业品牌和业务需求。" },
      { number: "03", title: "保持品牌统一", description: "持续维护企业视觉体系，保持长期一致表达。" },
    ],
    serviceItems: [
      { number: "01", title: "品牌视觉维护", description: "持续优化企业品牌视觉应用。", keywords: ["Brand", "VI", "Update"] },
      { number: "02", title: "企业传播支持", description: "支持日常宣传、活动和营销视觉需求。", keywords: ["Content", "Campaign", "Visual"] },
      { number: "03", title: "电商内容支持", description: "持续支持产品视觉和线上内容更新。", keywords: ["Product", "E-commerce", "Design"] },
      { number: "04", title: "设计顾问支持", description: "根据企业发展需求提供视觉方向建议。", keywords: ["Consulting", "Strategy", "Support"] },
    ],
    customerTypes: [
      { title: "没有专职设计团队的企业", description: "需要稳定设计支持。" },
      { title: "快速发展的企业", description: "需要持续优化品牌和传播。" },
      { title: "有长期视觉规划的企业", description: "需要合作伙伴持续支持。" },
    ],
    cooperationModes: [
      { title: "月度设计支持", description: "适合持续设计需求和日常视觉维护。" },
      { title: "年度合作方案", description: "适合企业长期品牌和传播规划。" },
      { title: "项目专项合作", description: "适合阶段性品牌升级或专项设计。" },
    ],
  },
] as const satisfies readonly (Service & ServiceDetailData)[];

export type BrandDesignService = Extract<(typeof services)[number], { slug: "brand-design" }>;
export type BusinessCommunicationService = Extract<(typeof services)[number], { slug: "business-communication" }>;
export type EcommerceVisualService = Extract<(typeof services)[number], { slug: "ecommerce-visual" }>;
export type DesignPartnershipService = Extract<(typeof services)[number], { slug: "design-partnership" }>;
export type DigitalContentService = Extract<(typeof services)[number], { slug: "digital-content" }>;

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const cooperationSteps = [
  { number: "01", title: "需求沟通", description: "理解企业阶段目标、业务场景与设计需求。" },
  { number: "02", title: "方案设计", description: "梳理视觉策略与项目推进方案，明确交付边界。" },
  { number: "03", title: "阶段交付", description: "以阶段成果持续确认，让设计与业务节奏同步。" },
  { number: "04", title: "长期协作", description: "根据企业发展需求，建立持续迭代的设计支持。" },
] as const;

export const partnershipModes = [
  {
    title: "专项设计合作",
    label: "PROJECT-BASED",
    description: "面向品牌升级、活动传播、电商视觉等明确项目需求。",
  },
  {
    title: "月度设计支持",
    label: "MONTHLY SUPPORT",
    description: "适合需要稳定内容输出与高频视觉协作的企业团队。",
  },
  {
    title: "年度合作机制",
    label: "ANNUAL PARTNERSHIP",
    description: "通过合同化协作，为品牌与传播升级提供长期设计支持。",
  },
] as const;
