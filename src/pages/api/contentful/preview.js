import { menuEntryId } from "@/lib/contentful";
import { isPreviewSecret, setPreviewCookie } from "@/lib/contentful-preview";

export default function handler(req, res) {
  res.setHeader("Cache-Control", "private, no-store");
  res.setHeader("Referrer-Policy", "no-referrer");

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end();
  }

  if (!isPreviewSecret(req.query.secret)) return res.status(401).end("Invalid preview secret.");
  if (!process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    return res.status(503).end("Contentful preview is not configured.");
  }

  const { entry } = req.query;
  const anchor = typeof entry === "string" && entry !== menuEntryId && /^[\w-]{1,64}$/.test(entry)
    ? `menu-entry-${entry}`
    : "menu";

  setPreviewCookie(res, true);
  return res.redirect(307, `/#${anchor}`);
}
