import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI创新探索 | 文远品序设计科技",
  description: "文远品序探索AI技术在设计协作、数字内容生产与企业效率提升中的应用方向。",
};

export default function AIInnovationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
