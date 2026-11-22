export function sectionType(entry) {
  return entry?.sys?.contentType?.sys?.id;
}

export function homepageSections(home) {
  return (home?.fields?.sections ?? []).filter((entry) => entry?.fields);
}

export function sectionColumns(entry) {
  return (entry.fields.columns ?? []).filter((column) => column?.fields);
}

export function homepageLeafSections(home) {
  return homepageSections(home).flatMap((entry) => sectionType(entry) === "twoColumnSection" ? sectionColumns(entry) : [entry]);
}

export function homepageSectionAnchors(home) {
  const used = new Set();
  function describe(entry, parentId) {
    const type = sectionType(entry);
    const textAnchor = entry.fields.navigationAnchor;
    const requested = type === "photoGallery" ? "pictures"
      : type === "restaurantMenu" ? "menu"
        : type === "agendaSection" ? "agenda"
        : type === "textSection" && ["about", "jobs"].includes(textAnchor) ? textAnchor : null;
    const anchor = requested && !used.has(requested) ? requested : null;
    if (anchor) used.add(anchor);
    const id = anchor ?? `${parentId || "section"}-${entry.sys.id}`;
    const columns = type === "twoColumnSection" ? sectionColumns(entry).map((column) => describe(column, id)) : undefined;
    return { entry, type, anchor, id, columns };
  }
  return homepageSections(home).map((entry) => describe(entry));
}
