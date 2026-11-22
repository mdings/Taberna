import {
  ContentfulLivePreviewProvider,
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

function EditableEntry({ entry, children }) {
  const updatedEntry = useContentfulLiveUpdates(entry);
  const inspectorProps = useContentfulInspectorMode();

  return (
    <>
      <form method="post" action="/api/contentful/exit-preview" className="preview-bar">
        <span>Conceptweergave</span>
        <button type="submit">Voorbeeld sluiten</button>
      </form>
      {children(updatedEntry, (target, fieldId, kind) => inspectorProps({
        ...(kind === "asset" ? { assetId: target.sys.id } : { entryId: target.sys.id }),
        fieldId,
      }))}
    </>
  );
}

export default function ContentfulPreview({ entry, children }) {
  return (
    <ContentfulLivePreviewProvider locale={entry.sys.locale} targetOrigin="https://app.contentful.com">
      <EditableEntry entry={entry}>{children}</EditableEntry>
    </ContentfulLivePreviewProvider>
  );
}
