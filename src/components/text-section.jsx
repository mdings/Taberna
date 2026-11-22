import ContentfulPicture from "./contentful-picture";
import EditorialText from "./editorial-text";

export default function TextSection({ entry, font, inspect, id, className, containerClass, heading: Heading = "h2", background = false }) {
  if (!entry?.fields) return null;
  const { title, body, image } = entry.fields;

  return (
    <section id={id} className={className}>
      {background && (
        <ContentfulPicture asset={image} alt="" className="section-background" {...inspect?.(entry, "image")} />
      )}
      <div className={containerClass}>
        <Heading className={font.className} {...inspect?.(entry, "title")}>{title}</Heading>
        <EditorialText document={body} {...inspect?.(entry, "body")} />
        {!background && (
          <ContentfulPicture
            asset={image}
            className="section-image"
            sizes="(max-width: 800px) 100vw, 800px"
            {...inspect?.(entry, "image")}
          />
        )}
      </div>
    </section>
  );
}
