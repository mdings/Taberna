import { galleryEntryId, homeEntryId, menuEntryId } from "@/lib/contentful";
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

  const { entry, section } = req.query;
  const validEntry = typeof entry === "string" && /^[\w-]{1,64}$/.test(entry);
  const gallery = section === "gallery" || entry === galleryEntryId;
  const homepage = entry === homeEntryId || (!validEntry && !gallery);
  const anchor = gallery
    ? (validEntry && entry !== galleryEntryId ? `gallery-photo-${entry}` : "pictures")
    : (validEntry && entry !== menuEntryId ? `menu-entry-${entry}` : "menu");

  setPreviewCookie(res, true);
  return res.redirect(307, homepage ? "/" : `/#${anchor}`);
}
