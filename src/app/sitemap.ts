import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = [
  {
    url: "",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    url: "/about",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    url: "/calculadora",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    url: "/contact",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
