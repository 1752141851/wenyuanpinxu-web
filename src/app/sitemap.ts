import type { MetadataRoute } from "next";
import { siteCompany } from "@/data/site";

const routes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/brand-design", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/business-communication", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/ecommerce-visual", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/digital-content", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/space-visual", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/design-partnership", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/ai-innovation", changeFrequency: "monthly", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteCompany.siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
