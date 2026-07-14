import type { MetadataRoute } from "next";
import { siteCompany } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/.next/", "/api/"],
    },
    sitemap: `${siteCompany.siteUrl}/sitemap.xml`,
  };
}
