import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { contentfulPdfUrl } from "@/lib/contentful-assets";

function allowedLink(uri) {
  if (typeof uri !== "string") return false;
  if (/^(?:#[^\s]*|\/(?![/\\]))/.test(uri)) return true;
  try {
    return ["https:", "http:", "mailto:", "tel:"].includes(new URL(uri).protocol);
  } catch {
    return false;
  }
}

function isPdfLink(uri) {
  return /\.pdf(?:$|[?#])/i.test(uri);
}

const options = {
  preserveWhitespace: true,
  renderMark: {
    bold: (text) => <strong>{text}</strong>,
    italic: (text) => <em>{text}</em>,
  },
  renderNode: {
    hyperlink: ({ data }, children) => {
      if (!allowedLink(data.uri)) return children;
      const externalPdf = isPdfLink(data.uri);
      return <a href={data.uri} target={externalPdf ? "_blank" : undefined} rel={externalPdf ? "noopener" : undefined}>{children}</a>;
    },
    "asset-hyperlink": ({ data }, children) => {
      const url = contentfulPdfUrl(data.target);
      return url ? <a href={url} target="_blank" rel="noopener">{children}</a> : children;
    },
  },
};

export default function EditorialText({ document, ...attributes }) {
  if (!document) return null;
  return <div className="editorial-text" {...attributes}>{documentToReactComponents(document, options)}</div>;
}
