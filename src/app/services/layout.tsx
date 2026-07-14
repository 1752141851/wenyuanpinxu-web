import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "企业设计服务 | 文远品序设计科技",
  description: "文远品序提供企业品牌视觉、商业传播、电商视觉、数字内容与长期设计协作服务。",
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
