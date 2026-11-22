import { useEffect, useRef } from "react";

const photos = [
  ["012", 300], ["042", 300], ["072", 600], ["052", 300], ["048", 450],
  ["073", 300], ["055", 450], ["077", 300], ["139", 300], ["171", 450],
  ["098", 300], ["177", 450], ["122", 300], ["079", 450], ["147", 300],
  ["180", 600], ["148", 300], ["190", 300],
];

export default function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const mobile = window.matchMedia("(width < 768px)");
    let carousel;
    let pendingImages;

    function stop() {
      pendingImages?.off("always", start);
      pendingImages = undefined;
      carousel?.destroy();
      carousel = undefined;
    }

    function start() {
      pendingImages = undefined;
      const Flickity = require("flickity");
      carousel = new Flickity(gallery, {
        adaptiveHeight: true,
        prevNextButtons: false,
      });
    }

    function update() {
      if (!mobile.matches) {
        stop();
      } else if (!carousel && !pendingImages) {
        const imagesLoaded = require("imagesloaded");
        pendingImages = imagesLoaded(gallery, start);
      }
    }

    mobile.addEventListener("change", update);
    update();
    return () => {
      mobile.removeEventListener("change", update);
      stop();
    };
  }, []);

  return (
    <section className="section__pics" ref={galleryRef} id="pictures">
      {photos.map(([id, height]) => (
        <picture key={id}>
          <source
            srcSet={`/img/gallery/${id}-taberna-400x${height}.jpg`}
            media="(min-width: 768px)"
            width={400}
            height={height}
          />
          <img src={`/img/gallery/${id}-taberna-800x600.jpg`} width={800} height={600} alt="" />
        </picture>
      ))}
    </section>
  );
}
