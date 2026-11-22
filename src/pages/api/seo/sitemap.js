import { getDetailContent } from "@/lib/contentful";
import { canonicalUrl, detailRoutes } from "@/lib/site-urls";

export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    return res.status(405).end();
  }
  try {
    const pages = await Promise.all(detailRoutes.map((slug) => getDetailContent(slug, { draftMode: false })));
    const paths = ["/", ...detailRoutes.filter((_, index) => pages[index]).map((slug) => `/${slug}`)];
    const urls = paths.map((path) => `<url><loc>${canonicalUrl(path)}</loc></url>`).join("\n");
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=0, s-maxage=300, stale-while-revalidate=3600");
    return res.send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
  } catch {
    res.setHeader("Cache-Control", "no-store");
    return res.status(503).end();
  }
}
