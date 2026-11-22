import { contentfulImage, imageSrcSet, imageUrl } from "@/lib/contentful-assets";

export default function ContentfulPicture({ asset, alt, sizes = "100vw", className, priority = false, eager = false, quality, ...attributes }) {
  const image = contentfulImage(asset);
  if (!image) return null;
  image.quality = quality;

  return (
    <picture className={className} {...attributes}>
      {image.resizable && <source type="image/webp" srcSet={imageSrcSet(image, "webp")} sizes={sizes} />}
      <img
        src={imageUrl(image, 640)}
        srcSet={imageSrcSet(image)}
        sizes={image.resizable ? sizes : undefined}
        width={image.width}
        height={image.height}
        alt={alt ?? asset.fields.description ?? ""}
        loading={priority || eager ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </picture>
  );
}
