import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Merriweather, Amatic_SC } from "next/font/google";
import ContentfulPicture from "./contentful-picture";
import EditorialText from "./editorial-text";
import SeoHead from "./seo-head";
import { breadcrumbGraph } from "@/lib/seo";
import { contentfulPdfUrl } from "@/lib/contentful-assets";

const ContentfulPreview = dynamic(() => import("./contentful-preview"));
const bodyFont = Merriweather({ weight: ["300", "400"], subsets: ["latin"] });
const headingFont = Amatic_SC({ weight: ["400"], subsets: ["latin"] });

function DetailContent({ entry, draftMode, inspect }) {
  const { title, seoTitle, seoDescription, slug, body, images, document } = entry.fields;
  const menuDocument = slug === "typisch-taberna";
  const path = `/${slug}`;
  const pdf = contentfulPdfUrl(document);
  const content = (
    <div className="container detail-copy">
      <h1 className={headingFont.className} {...inspect?.(entry, "title")}>{title}</h1>
      <EditorialText document={body} {...inspect?.(entry, "body")} />
      {pdf && <p><a href={pdf} {...inspect?.(entry, "document")}>Download het menu als PDF</a></p>}
    </div>
  );

  const gallery = (
    <div className="detail-images" {...inspect?.(entry, "images")}>
      {images?.filter((asset) => asset?.fields).map((asset) => (
        <ContentfulPicture
          key={asset.sys.id}
          asset={asset}
          sizes={menuDocument ? "(max-width: 800px) 100vw, 800px" : "100vw"}
          {...inspect?.(asset, "file", "asset")}
        />
      ))}
    </div>
  );

  return (
    <>
      <SeoHead path={path} title={seoTitle || title} description={seoDescription} image={images?.find((asset) => asset?.fields?.file)} draftMode={draftMode} schema={draftMode ? undefined : breadcrumbGraph(title, path)} />
      {!draftMode && <Head><link rel="alternate" type="text/markdown" href={`${path}.md`} /></Head>}
      <main className={`${menuDocument ? "detail-menu-document" : "popup"} ${bodyFont.className}`}>
        <nav className="detail-breadcrumb" aria-label="Broodkruimelpad">
          <Link href="/" prefetch={false}>Taberna Weert</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{title}</span>
        </nav>
        {menuDocument && content}
        {gallery}
        {!menuDocument && content}
      </main>
    </>
  );
}

export default function DetailPage({ entry, draftMode }) {
  if (!draftMode) return <DetailContent entry={entry} />;
  return (
    <ContentfulPreview entry={entry}>
      {(updated, inspect) => <DetailContent entry={updated} draftMode inspect={inspect} />}
    </ContentfulPreview>
  );
}
