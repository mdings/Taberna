import Image from "next/image";
import Link from "next/link";
import { contentfulPdfUrl } from "@/lib/contentful-assets";

const detailRoutes = {
  "munttheater-diner": "/munttheater-diner",
  "typisch-taberna": "/typisch-taberna",
};

function ExternalLinkIcon() {
  return (
    <Image
      style={{ marginLeft: "4px", transform: "translateY(2px)" }}
      src="/open-external-link-icon.svg"
      width={12}
      height={12}
      alt="Opent in een nieuw venster"
    />
  );
}

function Offer({ offer, draftMode, inspect }) {
  const { title, description, linkLabel, detailPage, document } = offer.fields;
  const slug = detailPage?.fields?.slug;
  const detailUrl = Object.hasOwn(detailRoutes, slug) ? detailRoutes[slug] : null;
  const pdfUrl = contentfulPdfUrl(document);

  function openTheater(event) {
    if (draftMode || slug !== "munttheater-diner" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.open(event.currentTarget.href, "_blank", "popup,noopener,width=600,height=750");
  }

  return (
    <div>
      <h3 {...inspect?.(offer, "title")}>{title}</h3>
      {(description || (linkLabel && (detailUrl || pdfUrl))) && (
        <p>
          {description && <span className="editorial-lines" {...inspect?.(offer, "description")}>{description}</span>}
          {description && linkLabel && (detailUrl || pdfUrl) && <br />}
          {linkLabel && (detailUrl ? (
            <Link href={detailUrl} target={draftMode ? undefined : "_blank"} rel="noopener" prefetch={false} onClick={openTheater} {...inspect?.(offer, "linkLabel")}>
              {linkLabel}{!draftMode && <ExternalLinkIcon />}
            </Link>
          ) : pdfUrl && (
            <a href={pdfUrl} target="_blank" rel="noopener" {...inspect?.(offer, "linkLabel")}>
              {linkLabel}<ExternalLinkIcon />
            </a>
          ))}
        </p>
      )}
    </div>
  );
}

export default function Specials({ section, id, font, draftMode, inspect }) {
  const { title, offers } = section.fields;

  return (
    <section className="section__specials" id={id}>
      <div className="container">
        <h2 className={font.className} {...inspect?.(section, "title")}>{title}</h2>
        <div {...inspect?.(section, "offers")}>
          {offers?.filter((offer) => offer?.fields).map((offer) => <Offer key={offer.sys.id} offer={offer} draftMode={draftMode} inspect={inspect} />)}
        </div>
      </div>
    </section>
  );
}
