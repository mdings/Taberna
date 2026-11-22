import { useLayoutEffect, useRef } from "react";

const localPhotos = [
  ["012", 300], ["042", 300], ["072", 600], ["052", 300], ["048", 450],
  ["073", 300], ["055", 450], ["077", 300], ["139", 300], ["171", 450],
  ["098", 300], ["177", 450], ["122", 300], ["079", 450], ["147", 300],
  ["180", 600], ["148", 300], ["190", 300],
].map(([id, height]) => ({
  id,
  image: { url: `/img/gallery/${id}-taberna-800x600.jpg`, width: 800, height: 600 },
  desktopCrop: height === 600 ? "2:3" : height === 450 ? "8:9" : undefined,
}));

const desktopMedia = "(min-width: 768px)";
// Three columns, each with 20px of combined picture and image padding.
const gallerySizes = "(min-width: 1301px) 414px, (min-width: 768px) calc((100vw - 70px) / 3), 100vw";
const imageWidths = [240, 320, 400, 480, 640, 800, 960, 1200, 1600];
const desktopCrops = new Map([["8:9", [8, 9]], ["2:3", [2, 3]]]);
const resizableTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/avif", "image/tiff"]);
const imageHosts = new Set(["images.ctfassets.net", "images.eu.ctfassets.net", "assets.ctfassets.net", "assets.eu.ctfassets.net"]);

function fromAsset(asset) {
  const file = asset?.fields?.file;
  if (!file?.url || !file.contentType?.startsWith("image/")) return null;

  let url;
  try {
    url = new URL(file.url.startsWith("//") ? `https:${file.url}` : file.url);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || !imageHosts.has(url.host)) return null;

  const { width, height } = file.details?.image ?? {};
  return {
    url: url.href,
    width,
    height,
    resizable: width > 0 && height > 0 && url.hostname.startsWith("images.") && resizableTypes.has(file.contentType),
  };
}

function desktopVariant(image, crop) {
  if (!crop || !image.resizable) return null;
  const [wide, tall] = crop;
  const width = Math.min(image.width, Math.floor(image.height * wide / tall));
  return width > 0
    ? { ...image, width, height: Math.round(width * tall / wide), crop }
    : null;
}

function imageUrl(image, width, format) {
  if (!image.resizable) return image.url;
  const url = new URL(image.url);
  const targetWidth = Math.min(width, image.width);
  url.searchParams.set("w", targetWidth);
  url.searchParams.set("q", "78");
  if (image.crop) {
    const [wide, tall] = image.crop;
    url.searchParams.set("h", Math.round(targetWidth * tall / wide));
    url.searchParams.set("fit", "fill");
  }
  if (format) url.searchParams.set("fm", format);
  return url.href;
}

function srcSet(image, format) {
  if (!image.resizable) return image.url;
  const max = Math.min(image.width, imageWidths.at(-1));
  return [...imageWidths.filter((width) => width < max), max]
    .map((width) => `${imageUrl(image, width, format)} ${width}w`)
    .join(", ");
}

function GalleryPicture({ photo, inspect }) {
  const { entry, image, desktopCrop, alt } = photo;
  const crop = desktopCrops.get(desktopCrop);
  const desktop = desktopVariant(image, crop);
  return (
    <picture
      id={entry ? `gallery-photo-${photo.id}` : undefined}
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

function GalleryLayout({ photos, inspectorProps, inspect }) {
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
    <section className="section__pics" ref={galleryRef} id="pictures" aria-label="Sfeerimpressie" {...inspectorProps}>
      {photos.map((photo) => <GalleryPicture key={photo.id} photo={photo} inspect={inspect} />)}
    </section>
  );
}

export default function Gallery({ gallery, inspect }) {
  const photos = gallery
    ? (gallery.fields.photos ?? []).flatMap((entry) => {
      const image = fromAsset(entry?.fields?.image);
      if (!image) return [];
      return [{
        id: entry.sys.id,
        entry,
        image,
        desktopCrop: entry.fields.desktopCrop,
        alt: entry.fields.alt,
      }];
    })
    : localPhotos;

  return (
    <GalleryLayout
      // Flickity moves DOM nodes; remount its container on structural live edits.
      key={photos.map(({ id, image }) => `${id}:${image.width}x${image.height}`).join(",")}
      photos={photos}
      inspect={inspect}
      inspectorProps={gallery && inspect?.(gallery, "photos")}
    />
  );
}
