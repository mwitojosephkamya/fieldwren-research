import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { divisions } from "@/content/services";
import { guides } from "@/content/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    "/training",
    "/pricing",
    "/how-to-pay",
    "/resources",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    ...divisions.map((d) => `/services/${d.slug}`),
    ...guides.map((g) => `/resources/${g.slug}`),
  ];
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}
