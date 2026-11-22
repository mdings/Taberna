import { Fragment } from "react";
import { agendaEvents } from "@/lib/agenda";
import Agenda from "./agenda";
import Gallery from "./gallery";
import Menu from "./menu";
import Specials from "./specials";
import TextSection from "./text-section";
import Top from "./top";

function groupSections(sections) {
  const groups = [];
  for (const section of sections) {
    const column = section.type === "textSection" && section.entry.fields.layout === "kolom";
    const previous = groups.at(-1);
    if (column && previous?.column && previous.sections.length === 1) {
      previous.sections.push(section);
    } else {
      groups.push({ column, sections: [section] });
    }
  }
  return groups;
}

export default function HomepageSections({ home, sections, font, today, draftMode, inspect }) {
  const site = home.fields.siteDetails;
  const lead = sections.find(({ type, entry }) => type === "textSection" && entry.fields.layout === "introductie");
  const backToTop = <Top site={site} inspect={inspect} />;

  function renderSection({ entry, type, id, columns }) {
    switch (type) {
      case "agendaSection":
        return <Agenda section={entry} id={id} font={font} today={today} draftMode={draftMode} inspect={inspect} />;
      case "twoColumnSection": {
        const visible = columns.filter((column) => column.type !== "agendaSection" || draftMode || agendaEvents(column.entry, today).length);
        if (!visible.length) return null;
        return (
          <div className={visible.length > 1 ? "homepage-columns" : undefined} id={id} {...inspect?.(entry, "columns")}>
            {visible.map((column) => <Fragment key={column.id}>{renderSection(column)}</Fragment>)}
          </div>
        );
      }
      case "photoGallery":
        return <><Gallery gallery={entry} id={id} label={site?.fields?.galleryLabel || entry.fields.title} inspect={inspect} />{backToTop}</>;
      case "restaurantMenu":
        return <Menu menu={entry} id={id} font={font} inspect={inspect} />;
      case "specialsSection":
        return <Specials section={entry} id={id} font={font} inspect={inspect} draftMode={draftMode} />;
      case "textSection": {
        const intro = entry.fields.layout === "introductie";
        const featured = entry.fields.layout === "uitgelicht";
        return (
          <>
            <TextSection
              entry={entry}
              id={id}
              className={intro ? "section__intro" : featured ? "section__jobs" : "section__copy"}
              containerClass="container container--small"
              heading={lead?.id === id ? "h1" : "h2"}
              background={intro}
              font={font}
              inspect={inspect}
            />
            {featured && backToTop}
          </>
        );
      }
      default:
        return null;
    }
  }

  return (
    <main id="homepage-sections" {...inspect?.(home, "sections")}>
      {!lead && <h1 className="visually-hidden">{home.fields.seoTitle || site?.fields?.title || home.fields.title}</h1>}
      {draftMode && !sections.length && <div className="preview-bar">Koppel een gepubliceerde sectie aan de homepage.</div>}
      {groupSections(sections).map(({ sections: group, column }) => (
        <Fragment key={group[0].id}>
          {column ? (
            <>
              <div className="section__about">
                <div className="container">
                  {group.map(({ entry, id }) => (
                    <TextSection key={id} entry={entry} id={id} className="about__column" containerClass="about__content" font={font} inspect={inspect} />
                  ))}
                </div>
              </div>
              {backToTop}
            </>
          ) : renderSection(group[0])}
        </Fragment>
      ))}
    </main>
  );
}
