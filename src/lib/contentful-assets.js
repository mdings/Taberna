const imageWidths = [240, 320, 400, 480, 640, 720, 800, 960, 1200, 1600, 1920];
const resizableTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/avif", "image/tiff"]);
const assetHosts = new Set(["images.ctfassets.net", "images.eu.ctfassets.net", "assets.ctfassets.net", "assets.eu.ctfassets.net"]);

export function contentfulAssetUrl(asset) {
  const raw = asset?.fields?.file?.url;
  if (!raw) return null;
  try {
    const url = new URL(raw.startsWith("//") ? `https:${raw}` : raw);
    if (url.protocol === "https:" && assetHosts.has(url.host)) return url.href;
  } catch {
    return null;
  }
  return null;
}

export function contentfulPdfUrl(asset) {
  return asset?.fields?.file?.contentType === "application/pdf" ? contentfulAssetUrl(asset) : null;
}

export function contentfulImage(asset) {
  const file = asset?.fields?.file;
  const url = contentfulAssetUrl(asset);
  if (!url || !file.contentType?.startsWith("image/")) return null;

  const { width, height } = file.details?.image ?? {};
  return {
    url, width, height,
    resizable: width > 0 && height > 0 && new URL(url).hostname.startsWith("images.") && resizableTypes.has(file.contentType),
  };
}

export function imageUrl(image, width, format) {
  if (!image.resizable) return image.url;
  const url = new URL(image.url);
  const targetWidth = Math.min(width, image.width);
  url.searchParams.set("w", targetWidth);
  url.searchParams.set("q", image.quality ?? 78);
  if (image.crop) {
    const [wide, tall] = image.crop;
    url.searchParams.set("h", Math.round(targetWidth * tall / wide));
    url.searchParams.set("fit", "fill");
  }
  if (format) url.searchParams.set("fm", format);
  return url.href;
}

export function imageSrcSet(image, format, maxWidth = 1920) {
  if (!image.resizable) return undefined;
  const max = Math.min(image.width, maxWidth);
  return [...imageWidths.filter((width) => width < max), max]
    .map((width) => `${imageUrl(image, width, format)} ${width}w`)
    .join(", ");
}
