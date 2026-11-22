import { contentfulPdfUrl } from "@/lib/contentful-assets";
import { getDetailContent, getDinnerDocument } from "@/lib/contentful";

export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    return res.status(405).end();
  }

  try {
    const asset = req.query.menu === "typisch-taberna"
      ? (await getDetailContent("typisch-taberna", { draftMode: false }))?.fields.document
      : await getDinnerDocument();
    const url = contentfulPdfUrl(asset);
    if (!url) return res.status(404).end();
    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    return res.redirect(307, url);
  } catch {
    return res.status(503).end();
  }
}
