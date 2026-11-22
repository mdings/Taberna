export const detailRoutes = ["munttheater-diner", "typisch-taberna"];

export function canonicalOrigin() {
  const candidate = process.env.NEXT_PUBLIC_CANONICAL_SITE_URL || "https://www.tabernaweert.nl";
  const url = new URL(candidate);
  if (url.protocol !== "https:" || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("NEXT_PUBLIC_CANONICAL_SITE_URL must be an HTTPS origin without a path or credentials.");
  }
  return url.origin;
}

export function canonicalUrl(path = "/") {
  return `${canonicalOrigin()}${path}`;
}
