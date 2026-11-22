import { setPreviewCookie } from "@/lib/contentful-preview";

export default function handler(req, res) {
  res.setHeader("Cache-Control", "private, no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end();
  }

  setPreviewCookie(res, false);
  return res.redirect(303, "/#menu");
}
