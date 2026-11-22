import {
  ContentfulLivePreviewProvider,
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
function EditableHomepage({ home, children }) {
  const updatedHome = useContentfulLiveUpdates(home);
  const inspectorProps = useContentfulInspectorMode();

  return (
    <>
      <form method="post" action="/api/contentful/exit-preview" className="preview-bar">
        <span>Conceptweergave</span>
        <button type="submit">Voorbeeld sluiten</button>
      </form>
      {children(updatedHome, (entry, fieldId) => inspectorProps({ entryId: entry.sys.id, fieldId }))}
    </>
  );
}

export default function HomePreview({ home, children }) {
  return (
    <ContentfulLivePreviewProvider locale={home.sys.locale} targetOrigin="https://app.contentful.com">
      <EditableHomepage home={home}>{children}</EditableHomepage>
    </ContentfulLivePreviewProvider>
  );
}
