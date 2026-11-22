import Head from "next/head";
import { canonicalUrl } from "@/lib/site-urls";
import { shareImage } from "@/lib/seo";

export default function SeoHead({ path, title, description, image, siteName = "Taberna Weert", draftMode, schema }) {
  const url = canonicalUrl(path);
  const social = draftMode ? null : shareImage(image);

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {draftMode ? <meta name="robots" content="noindex, nofollow" /> : (
        <>
          <link rel="canonical" href={url} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="nl_NL" />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:title" content={title} />
          <meta property="og:url" content={url} />
          {description && <meta property="og:description" content={description} />}
          {social && <meta property="og:image" content={social.url} />}
          {social && <meta property="og:image:width" content={social.width} />}
          {social && <meta property="og:image:height" content={social.height} />}
          {social?.alt && <meta property="og:image:alt" content={social.alt} />}
          <meta name="twitter:card" content={social ? "summary_large_image" : "summary"} />
          {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />}
        </>
      )}
    </Head>
  );
}
