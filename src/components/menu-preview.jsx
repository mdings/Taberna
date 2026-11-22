import {
  ContentfulLivePreviewProvider,
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import Menu from "./menu";

function EditableMenu({ menu, font }) {
  const updatedMenu = useContentfulLiveUpdates(menu);
  const inspectorProps = useContentfulInspectorMode();

  return (
    <>
      <form method="post" action="/api/contentful/exit-preview" className="menu-preview-bar">
        <span>Conceptweergave</span>
        <button type="submit">Voorbeeld sluiten</button>
      </form>
      <Menu
        menu={updatedMenu}
        font={font}
        inspect={(entry, fieldId) => inspectorProps({ entryId: entry.sys.id, fieldId })}
      />
    </>
  );
}

export default function MenuPreview({ menu, font }) {
  return (
    <ContentfulLivePreviewProvider locale={menu.sys.locale} targetOrigin="https://app.contentful.com">
      <EditableMenu menu={menu} font={font} />
    </ContentfulLivePreviewProvider>
  );
}
