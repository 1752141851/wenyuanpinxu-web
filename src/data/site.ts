export const siteCompany = {
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  chineseName: "安徽文远品序设计科技有限公司",
  englishName: "WENYUAN PINXU DESIGN TECHNOLOGY",
  shortName: "文远品序",
  contactName: "林振杰",
  contactTitle: "总经理",
  phone: "19049618307",
  logoPath: "/brand/logo-mark.png",
  wecomQrPath: "/qr/wecom.png",
} as const;
