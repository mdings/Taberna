import EditorialText from "./editorial-text";

function hasText(node) {
  return Boolean(node?.value?.trim() || node?.content?.some(hasText));
}

export default function Announcement({ entry, draftMode, inspect, openEntry }) {
  if (!entry?.fields) return null;
  const { enabled, message } = entry.fields;

  if (!enabled || !hasText(message)) {
    const fieldId = enabled ? "message" : "enabled";
    return draftMode ? (
      <button
        type="button"
        className="preview-bar announcement-preview-button"
        onClick={() => openEntry(entry, fieldId)}
        {...inspect?.(entry, fieldId)}
      >
        {enabled ? "Voeg tekst toe aan de meldingsbalk." : "Meldingsbalk is uitgeschakeld."}
        <span className="announcement-preview-action">Bewerk meldingsbalk</span>
      </button>
    ) : null;
  }

  return (
    <aside className="announcement" aria-label="Mededeling">
      <div className="container">
        <EditorialText document={message} {...inspect?.(entry, "message")} />
      </div>
    </aside>
  );
}
