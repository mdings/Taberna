import { createHash, timingSafeEqual } from "node:crypto";

export function isPreviewSecret(candidate) {
  const secret = process.env.CONTENTFUL_PREVIEW_SECRET;
  if (!secret || typeof candidate !== "string") return false;
  const digest = (value) => createHash("sha256").update(value).digest();
  return timingSafeEqual(digest(candidate), digest(secret));
}

export function setPreviewCookie(res, enable) {
  res.setDraftMode({ enable });
  // A partitioned cookie keeps Draft Mode working in the Contentful iframe
  // in browsers that block ordinary third-party cookies.
  if (process.env.NODE_ENV === "production") {
    const cookies = res.getHeader("Set-Cookie");
    res.setHeader("Set-Cookie", cookies.map((cookie) => (
      cookie.startsWith("__prerender_bypass=") ? `${cookie}; Partitioned` : cookie
    )));
  }
}
