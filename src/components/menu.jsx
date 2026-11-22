import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const richTextOptions = {
  preserveWhitespace: true,
  renderMark: {
    italic: (text) => <em>{text}</em>,
    bold: (text) => <strong>{text}</strong>,
  },
};
const noInspector = () => ({});

function MenuItem({ item, inspect, anchor }) {
  const { title, price, description, extras } = item.fields;
  return (
    <li id={anchor}>
      <span className="item" {...inspect(item, "title")}>{title}</span>
      <span className="item__dots" aria-hidden="true" />
      {price && <span className="item__price" {...inspect(item, "price")}>{price}</span>}
      <span className="item__description">
        <span className="menu__text" {...inspect(item, "description")}>{description}</span>
        {extras?.length > 0 && (
          <span {...inspect(item, "extras")}>
            {extras.map((extra, index) => <span className="bold" key={index}>{extra}</span>)}
          </span>
        )}
      </span>
    </li>
  );
}

function MenuNote({ item, inspect, anchor }) {
  const { title, price, description, extras } = item.fields;
  return (
    <div className="item__description menu__note" id={anchor}>
      <span className={price ? undefined : "bold"} {...inspect(item, "title")}>{title}</span>
      {price && <> <span className="item__price" {...inspect(item, "price")}>{price}</span></>}
      {description && <div className="menu__text" {...inspect(item, "description")}>{description}</div>}
      {extras?.length > 0 && (
        <div {...inspect(item, "extras")}>
          {extras.map((extra, index) => <span className="bold" key={index}>{extra}</span>)}
        </div>
      )}
    </div>
  );
}

// An unresolved link has sys but no fields. Skip it until the entry is available.
function groupItems(items) {
  const groups = [];
  for (const item of items ?? []) {
    if (!item?.fields) continue;
    const previous = groups.at(-1);
    if (item.fields.isNote || !previous || previous[0].fields.isNote) {
      groups.push([item]);
    } else {
      previous.push(item);
    }
  }
  return groups;
}

function MenuSection({ section, font, inspect, itemAnchorSections }) {
  const { title, intro, items, outro } = section.fields;
  const anchorFor = (item) => itemAnchorSections.get(item.sys.id) === section.sys.id
    ? `menu-entry-${item.sys.id}`
    : undefined;
  return (
    <article className="menu" id={`menu-entry-${section.sys.id}`}>
      <h3 className={`menu__name ${font.className}`} {...inspect(section, "title")}>{title}</h3>
      {intro && (
        <section className="menu__intro" {...inspect(section, "intro")}>
          <div className="container container--small">
            {documentToReactComponents(intro, richTextOptions)}
          </div>
        </section>
      )}
      <section className="menu__content" {...inspect(section, "items")}>
        {groupItems(items).map((group) => {
          const [first] = group;
          return first.fields.isNote ? (
            <MenuNote key={first.sys.id} item={first} inspect={inspect} anchor={anchorFor(first)} />
          ) : (
            <ul key={first.sys.id}>
              {group.map((item) => (
                <MenuItem key={item.sys.id} item={item} inspect={inspect} anchor={anchorFor(item)} />
              ))}
            </ul>
          );
        })}
      </section>
      {outro && (
        <section className="menu__outro" {...inspect(section, "outro")}>
          <div className="container container--small">
            {documentToReactComponents(outro, richTextOptions)}
          </div>
        </section>
      )}
    </article>
  );
}

export default function Menu({ menu, font, inspect = noInspector }) {
  const { title, introduction, sections } = menu.fields;
  const resolvedSections = (sections ?? []).filter((section) => section?.fields);
  const itemAnchorSections = new Map();
  for (const section of resolvedSections) {
    for (const item of section.fields.items ?? []) {
      if (item?.fields && !itemAnchorSections.has(item.sys.id)) {
        itemAnchorSections.set(item.sys.id, section.sys.id);
      }
    }
  }

  return (
    <section className="section__menu" id="menu">
      <div className="container container--small">
        <h2 className={font.className} {...inspect(menu, "title")}>{title}</h2>
        {introduction && (
          <div className="menu__introduction" {...inspect(menu, "introduction")}>
            {documentToReactComponents(introduction, richTextOptions)}
          </div>
        )}
      </div>
      <div className="container" {...inspect(menu, "sections")}>
        {resolvedSections.map((section) => (
          <MenuSection
            key={section.sys.id}
            section={section}
            font={font}
            inspect={inspect}
            itemAnchorSections={itemAnchorSections}
          />
        ))}
      </div>
    </section>
  );
}
