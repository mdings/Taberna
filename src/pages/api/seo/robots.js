import { canonicalUrl } from "@/lib/site-urls";

export default function handler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    return res.status(405).end();
  }
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, s-maxage=3600");
  return res.send(`User-agent: *\nAllow: /\n\nSitemap: ${canonicalUrl("/sitemap.xml")}\n`);
}
