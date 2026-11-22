import { ContentfulLivePreview } from "@contentful/live-preview";
import {
  ContentfulLivePreviewProvider,
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

function EditableEntry({ entry, relatedEntry, children }) {
  const updatedEntry = useContentfulLiveUpdates(entry);
  const updatedRelatedEntry = useContentfulLiveUpdates(relatedEntry, { skip: !relatedEntry });
  const inspectorProps = useContentfulInspectorMode();
  const openEntry = (target, fieldId) => ContentfulLivePreview.openEntryInEditor({
    entryId: target.sys.id,
    fieldId,
    locale: target.sys.locale ?? entry.sys.locale,
    space: target.sys.space?.sys?.id,
    environment: target.sys.environment?.sys?.id,
  });

  return children(updatedEntry, (target, fieldId, kind) => inspectorProps({
    ...(kind === "asset" ? { assetId: target.sys.id } : { entryId: target.sys.id }),
    fieldId,
  }), updatedRelatedEntry, openEntry);
}

export default function ContentfulPreview({ entry, relatedEntry, children }) {
  return (
    <ContentfulLivePreviewProvider locale={entry.sys.locale} targetOrigin="https://app.contentful.com">
      <EditableEntry entry={entry} relatedEntry={relatedEntry}>{children}</EditableEntry>
    </ContentfulLivePreviewProvider>
  );
}
