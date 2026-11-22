const dutchDay = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Amsterdam", year: "numeric", month: "2-digit", day: "2-digit" });
const eventLabel = new Intl.DateTimeFormat("nl-NL", { timeZone: "UTC", day: "numeric", month: "long", year: "numeric" });

export function agendaDay(now = new Date()) {
  const parts = Object.fromEntries(dutchDay.formatToParts(now).map(({ type, value }) => [type, value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function eventDay(value) {
  // Contentful's date-only picker can serialize its calendar date as a timestamp.
  const day = typeof value === "string" && value.match(/^\d{4}-\d{2}-\d{2}(?=T|$)/)?.[0];
  if (!day) return null;
  const parsed = new Date(`${day}T00:00:00Z`);
  return Number.isFinite(+parsed) && parsed.toISOString().startsWith(day) ? day : null;
}

export function formatEventDay(day) {
  return eventLabel.format(new Date(`${day}T00:00:00Z`));
}

export function agendaEvents(section, today, draftMode = false) {
  return (section?.fields?.events ?? [])
    .filter((event) => event?.fields)
    .map((event) => ({ event, day: eventDay(event.fields.date) }))
    .filter(({ day }) => draftMode || (day && day >= today))
    .sort((left, right) => (left.day ?? "9999").localeCompare(right.day ?? "9999")
      || (left.event.fields.time || "").localeCompare(right.event.fields.time || ""));
}

export function eventBookingUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}
