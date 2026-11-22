import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function allowedLink(uri) {
  if (typeof uri !== "string") return false;
  if (/^(?:#[^\s]*|\/(?![/\\]))/.test(uri)) return true;
  try {
    return ["https:", "http:", "mailto:", "tel:"].includes(new URL(uri).protocol);
  } catch {
    return false;
  }
}

const options = {
  preserveWhitespace: true,
  renderMark: {
    bold: (text) => <strong>{text}</strong>,
    italic: (text) => <em>{text}</em>,
  },
  renderNode: {
    hyperlink: ({ data }, children) => allowedLink(data.uri) ? <a href={data.uri}>{children}</a> : children,
  },
};

export default function EditorialText({ document, ...attributes }) {
  if (!document) return null;
  return <div className="editorial-text" {...attributes}>{documentToReactComponents(document, options)}</div>;
}
