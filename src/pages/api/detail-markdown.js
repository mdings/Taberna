import { buildDetailMarkdown, getPublishedDetailPage, getPublishedHome, getSiteBaseUrl, setLlmsHeaders } from "@/lib/llms-txt";

const slugs = new Set(["typisch-taberna", "munttheater-diner"]);

export default async function handler(req, res) {
  const slug = req.query.slug;
  if (!slugs.has(slug)) {
    res.status(404).end("Not found");
    return;
  }

  const [entry, home] = await Promise.all([
    getPublishedDetailPage(slug),
    getPublishedHome(),
  ]);

  if (!entry) {
    res.status(404).end("Not found");
    return;
  }

  setLlmsHeaders(res, "text/markdown");
  res.status(200).send(buildDetailMarkdown({ baseUrl: getSiteBaseUrl(req), entry, home }));
}
