import { agendaEvents, eventBookingUrl, formatEventDay } from "@/lib/agenda";
import ContentfulPicture from "./contentful-picture";
import EditorialText from "./editorial-text";

function AgendaEvent({ event, day, today, draftMode, inspect }) {
  const { title, time, description, image, bookingUrl, bookingLabel } = event.fields;
  const url = eventBookingUrl(bookingUrl);

  return (
    <li className="agenda__event">
      <div className="agenda__date">
        {day ? <time dateTime={day} {...inspect?.(event, "date")}>{formatEventDay(day)}</time>
          : <span {...inspect?.(event, "date")}>Datum nog niet ingesteld</span>}
        {time && <span {...inspect?.(event, "time")}>{time}</span>}
        {draftMode && day && day < today && <span className="agenda__past">Afgelopen</span>}
      </div>
      <h3 {...inspect?.(event, "title")}>{title}</h3>
      <ContentfulPicture asset={image} className="section-image" sizes="(min-width: 768px) 50vw, 100vw" {...inspect?.(event, "image")} />
      <EditorialText document={description} {...inspect?.(event, "description")} />
      {url && <a href={url} {...inspect?.(event, bookingLabel ? "bookingLabel" : "bookingUrl")}>{bookingLabel || "Meer informatie"}</a>}
    </li>
  );
}

export default function Agenda({ section, id, font, today, draftMode, inspect }) {
  const { title, introduction } = section.fields;
  const events = agendaEvents(section, today, draftMode);
  if (!draftMode && !events.length) return null;

  return (
    <section className="section__agenda" id={id}>
      <div className="container">
        <h2 className={font.className} {...inspect?.(section, "title")}>{title}</h2>
        <EditorialText document={introduction} {...inspect?.(section, "introduction")} />
        {events.length ? (
          <ul className="agenda__events" {...inspect?.(section, "events")}>
            {events.map(({ event, day }) => <AgendaEvent key={event.sys.id} event={event} day={day} today={today} draftMode={draftMode} inspect={inspect} />)}
          </ul>
        ) : (
          <p className="preview-bar" {...inspect?.(section, "events")}>Voeg evenementen toe aan de agenda.</p>
        )}
      </div>
    </section>
  );
}
