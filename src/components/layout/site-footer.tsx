import Link from "next/link";

import { siteCompany } from "@/data/site";

const footerLinks = [
  { label: "首页", href: "/" },
  { label: "服务能力", href: "/services" },
  { label: "AI创新探索", href: "/ai-innovation" },
  { label: "关于我们", href: "/about" },
  { label: "商务合作", href: "/contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-obsidian text-text-primary">
      <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 lg:px-12">
        <p className="text-[11px] font-medium tracking-[0.15em] text-text-secondary">
          {siteCompany.englishName}
        </p>
        <p className="mt-3 text-sm text-text-secondary">{siteCompany.chineseName}</p>
        <p className="mt-3 text-sm text-text-tertiary">Design × AI × Business</p>

        <nav
          className="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-sm text-text-secondary sm:flex sm:flex-wrap sm:gap-x-6"
          aria-label="页脚导航"
        >
          {footerLinks.map((link) => (
            <Link
              className="flex min-h-11 items-center transition-colors hover:text-text-primary"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-6 text-[11px] tracking-[0.08em] text-text-tertiary">
          © 2026 {siteCompany.englishName}.
        </p>
      </div>
    </footer>
  );
}
