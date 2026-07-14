"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { siteCompany } from "@/data/site";

const navigation = [
  { label: "服务能力", href: "/services" },
  { label: "AI创新探索", href: "/ai-innovation" },
  { label: "关于我们", href: "/about" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-x-0 top-0 z-30"
    >
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          aria-label={`${siteCompany.shortName}首页`}
          className="group flex min-h-11 min-w-11 items-center gap-3"
        >
          <span className="grid size-11 place-items-center overflow-hidden rounded-[10px] bg-soft-white transition-transform duration-300 group-hover:scale-105">
            <Image
              src={siteCompany.logoPath}
              alt="文远品序设计科技 Logo"
              width={44}
              height={44}
              className="size-full object-contain"
              priority
            />
          </span>
          <span className="hidden flex-col gap-0.5 sm:flex">
            <span className="text-sm font-medium leading-none tracking-[-0.02em] text-text-primary">
              {siteCompany.shortName}
            </span>
            <span className="text-[8px] font-medium leading-none tracking-[0.12em] text-text-secondary">
              DESIGN TECHNOLOGY
            </span>
          </span>
        </Link>

        <nav aria-label="主导航" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden min-h-12 items-center gap-2 rounded-button border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-text-primary transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1] md:inline-flex"
        >
          商务合作
          <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
        </a>

        <button
          type="button"
          aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="grid min-h-11 min-w-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-text-primary transition-colors duration-200 hover:bg-white/[0.12] md:hidden"
        >
          {isMenuOpen ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            aria-label="移动端主导航"
            className="mx-5 rounded-card border border-white/10 bg-graphite/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:mx-8 md:hidden"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex min-h-11 items-center justify-between rounded-xl px-3 py-3 text-sm text-text-secondary transition-colors hover:bg-white/[0.06] hover:text-text-primary"
              >
                {item.label}
                <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-button bg-soft-white px-4 py-3 text-sm font-medium text-obsidian"
            >
              商务合作
              <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
