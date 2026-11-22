import { useLayoutEffect, useRef } from "react";
import { contentfulImage, imageSrcSet, imageUrl } from "@/lib/contentful-assets";

const desktopMedia = "(min-width: 768px)";
// Three columns, each with 20px of combined picture and image padding.
const gallerySizes = "(min-width: 1301px) 414px, (min-width: 768px) calc((100vw - 70px) / 3), 100vw";
const desktopCrops = new Map([["8:9", [8, 9]], ["2:3", [2, 3]]]);

function desktopVariant(image, crop) {
  if (!crop || !image.resizable) return null;
  const [wide, tall] = crop;
  const width = Math.min(image.width, Math.floor(image.height * wide / tall));
  return width > 0
    ? { ...image, width, height: Math.round(width * tall / wide), crop }
    : null;
}

function srcSet(image, format) {
  return imageSrcSet(image, format, 1600);
}

function GalleryPicture({ photo, inspect, anchorPrefix }) {
  const { entry, image, desktopCrop, alt } = photo;
  const crop = desktopCrops.get(desktopCrop);
  const desktop = desktopVariant(image, crop);
  return (
    <picture
      id={`${anchorPrefix}-${photo.id}`}
      className={crop && !desktop ? "gallery-local-crop" : undefined}
      style={crop && !desktop ? { "--gallery-desktop-ratio": crop.join(" / ") } : undefined}
      {...(entry && inspect?.(entry, "image"))}
    >
      {desktop && (
        <source media={desktopMedia} type="image/webp" srcSet={srcSet(desktop, "webp")} sizes={gallerySizes} width={desktop.width} height={desktop.height} />
      )}
      {desktop && (
        <source media={desktopMedia} srcSet={srcSet(desktop)} sizes={gallerySizes} width={desktop.width} height={desktop.height} />
      )}
      {image.resizable && (
        <source type="image/webp" srcSet={srcSet(image, "webp")} sizes={gallerySizes} />
      )}
      <img
        src={imageUrl(image, 640)}
        srcSet={image.resizable ? srcSet(image) : undefined}
        sizes={image.resizable ? gallerySizes : undefined}
        width={image.width}
        height={image.height}
        alt={alt ?? ""}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}

function GalleryLayout({ photos, id, label, inspectorProps, inspect }) {
  const galleryRef = useRef(null);

  useLayoutEffect(() => {
    const gallery = galleryRef.current;
    if (gallery.children.length < 2) return;

    const mobile = window.matchMedia("(width < 768px)");
    let carousel;

    function stop() {
      carousel?.destroy();
      carousel = undefined;
    }

    function update() {
      if (!mobile.matches) {
        stop();
      } else if (!carousel) {
        const Flickity = require("flickity");
        const initialIndex = Array.from(gallery.children).findIndex((photo) => `#${photo.id}` === window.location.hash);
        carousel = new Flickity(gallery, {
          adaptiveHeight: true,
          prevNextButtons: false,
          initialIndex: Math.max(initialIndex, 0),
        });
      }
    }

    // Intrinsic dimensions are available before the browser loads the lazy images.
    // Re-measure after a non-standard upload without intrinsic dimensions loads.
    const resize = ({ target }) => {
      if (!target.hasAttribute("width") || !target.hasAttribute("height")) carousel?.resize();
    };
    mobile.addEventListener("change", update);
    gallery.addEventListener("load", resize, true);
    update();
    return () => {
      mobile.removeEventListener("change", update);
      gallery.removeEventListener("load", resize, true);
      stop();
    };
  }, []);

  return (
    <section className="section__pics" ref={galleryRef} id={id} aria-label={label} {...inspectorProps}>
      {photos.map((photo) => (
        <GalleryPicture key={photo.id} photo={photo} inspect={inspect} anchorPrefix={id === "pictures" ? "gallery-photo" : `${id}-photo`} />
      ))}
    </section>
  );
}

export default function Gallery({ gallery, id = "pictures", label, inspect }) {
  const photos = (gallery?.fields?.photos ?? []).flatMap((entry) => {
      const image = contentfulImage(entry?.fields?.image);
      if (!image) return [];
      return [{
        id: entry.sys.id,
        entry,
        image: { ...image, quality: 68 },
        desktopCrop: entry.fields.desktopCrop,
        alt: entry.fields.alt,
      }];
  });

  return (
    <GalleryLayout
      // Flickity moves DOM nodes; remount its container on structural live edits.
      key={photos.map(({ id, image }) => `${id}:${image.width}x${image.height}`).join(",")}
      photos={photos}
      id={id}
      label={label}
      inspect={inspect}
      inspectorProps={gallery && inspect?.(gallery, "photos")}
    />
  );
}
