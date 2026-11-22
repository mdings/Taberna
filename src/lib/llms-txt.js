import { contentfulAssetUrl, contentfulPdfUrl } from "@/lib/contentful-assets";
import { getDetailContent, getHomeContent } from "@/lib/contentful";
import { homepageLeafSections, sectionType } from "@/lib/home-sections";
import { agendaDay, agendaEvents, eventBookingUrl, formatEventDay } from "@/lib/agenda";
import { canonicalOrigin, detailRoutes } from "@/lib/site-urls";

const REVALIDATE_SECONDS = 60;
const DETAIL_ROUTES = detailRoutes.map((slug) => ({ slug, path: `/${slug}` }));
const RESERVATION_URL = "https://gotable.app/restaurants/130189/reservations/new";

export async function getPublishedHome() {
  try {
    return await getHomeContent({ draftMode: false });
  } catch (error) {
    console.warn(`[llms] ${error.message}`);
    return null;
  }
}

export async function getPublishedDetailPage(slug) {
  try {
    const entry = await getDetailContent(slug, { draftMode: false });
    return entry?.fields ? entry : null;
  } catch (error) {
    console.warn(`[llms] ${error.message}`);
    return null;
  }
}

export async function getPublishedDetailPages() {
  const pages = await Promise.all(
    DETAIL_ROUTES.map(async (route) => {
      const entry = await getPublishedDetailPage(route.slug);
      return entry ? { ...route, entry } : null;
    })
  );
  return pages.filter(Boolean);
}

export function setLlmsHeaders(res, contentType = "text/plain") {
  res.setHeader("Content-Type", `${contentType}; charset=utf-8`);
  res.setHeader(
    "Cache-Control",
    `public, max-age=0, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=3600`
  );
}

export function getSiteBaseUrl() {
  return canonicalOrigin();
}

function oneLine(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function sentence(value) {
  const text = oneLine(value);
  if (!text) return "";
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function descriptionParts(description) {
  return oneLine(description) === ""
    ? []
    : String(description)
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
}

function formatDescription(description) {
  const lines = descriptionParts(description);
  const variants = lines.filter((line) => line.startsWith("~")).map((line) => line.slice(1).trim());
  if (!variants.length) return { inline: oneLine(lines.join(" ")), variants: [] };

  return {
    inline: "",
    variants: variants.map((variant) => {
      const separator = variant.indexOf(";");
      return separator === -1
        ? variant
        : `${variant.slice(0, separator).trim()}: ${variant.slice(separator + 1).trim()}`;
    }),
  };
}

function inlineMarkdown(node) {
  if (!node) return "";
  if (node.nodeType === "text") {
    let value = String(node.value ?? "");
    const marks = node.marks ?? [];
    if (marks.some((mark) => mark.type === "bold")) value = `**${value}**`;
    if (marks.some((mark) => mark.type === "italic")) value = `*${value}*`;
    return value;
  }
  if (node.nodeType === "hyperlink") {
    const text = (node.content ?? []).map(inlineMarkdown).join("");
    return node.data?.uri ? `[${text}](${node.data.uri})` : text;
  }
  return (node.content ?? []).map(inlineMarkdown).join("");
}

function blockText(node) {
  return oneLine(inlineMarkdown(node));
}

function joinMarkdown(lines) {
  const blocks = [];
  for (const line of lines) {
    if (!line) continue;
    const isListItem = /^(\s*)([-*]|\d+\.)\s+/.test(line);
    const lastBlock = blocks[blocks.length - 1];
    const endsWithListItem = lastBlock && /^(\s*)([-*]|\d+\.)\s+/.test(lastBlock.split("\n").pop());
    if (isListItem && endsWithListItem) blocks[blocks.length - 1] = `${lastBlock}\n${line}`;
    else blocks.push(line);
  }
  return blocks.join("\n\n");
}

export function richTextToMarkdown(document) {
  if (!document?.content) return "";

  const blocks = [];
  for (const node of document.content) {
    const text = blockText(node);
    if (!text) continue;

    switch (node.nodeType) {
      case "heading-1":
      case "heading-2":
      case "heading-3":
      case "heading-4":
      case "heading-5":
      case "heading-6":
        blocks.push(`### ${text}`);
        break;
      case "ordered-list":
        (node.content ?? []).forEach((item, index) => {
          const value = blockText(item);
          if (value) blocks.push(`${index + 1}. ${value}`);
        });
        break;
      case "unordered-list":
        (node.content ?? []).forEach((item) => {
          const value = blockText(item);
          if (value) blocks.push(`- ${value}`);
        });
        break;
      case "blockquote":
        blocks.push(`> ${text}`);
        break;
      case "hr":
        blocks.push("---");
        break;
      default:
        blocks.push(text);
    }
  }

  return blocks.join("\n\n");
}

function resolved(entry) {
  return entry?.fields ? entry : null;
}

function siteDetails(home) {
  return resolved(home?.fields?.siteDetails)?.fields ?? null;
}

function firstParagraph(document) {
  const first = document?.content?.find((node) => node.nodeType === "paragraph");
  return first ? oneLine(inlineMarkdown(first)) : "";
}

function getPageTitle(home) {
  return oneLine(siteDetails(home)?.title) || "Taberna Weert";
}

function getSummary(home) {
  const intro = homepageLeafSections(home).find((entry) => sectionType(entry) === "textSection" && entry.fields.layout === "introductie");
  return (
    firstParagraph(intro?.fields.body) ||
    oneLine(home?.fields?.seoDescription) ||
    `${getPageTitle(home)} in Weert.`
  );
}

function getContactLines(site) {
  const lines = [];
  const address = oneLine(site?.address);
  const phone = oneLine(site?.phone);
  const email = oneLine(site?.email);
  if (address || phone || email) {
    lines.push(
      ["Adres: " + address, phone && "Telefoon: " + phone, email && "E-mail: " + email]
        .filter(Boolean)
        .join(". ") + "."
    );
  }
  const hours = (site?.hours ?? []).map(oneLine).filter(Boolean);
  if (hours.length) {
    lines.push(`${oneLine(site?.hoursTitle) || "Openingstijden"}: ${hours.join("; ")}.`);
  }
  return lines.length ? [lines.join("\n")] : [];
}

function currentMenu(home) {
  return homepageLeafSections(home).find((entry) => sectionType(entry) === "restaurantMenu")?.fields ?? null;
}

function currentSections(menu) {
  return (menu?.sections ?? []).map(resolved).filter(Boolean);
}

function currentItems(section) {
  return (section.fields.items ?? []).map(resolved).filter(Boolean);
}

export function getMenuOverview(home) {
  const menu = currentMenu(home);
  if (!menu) return null;

  const sections = currentSections(menu).map((section) => ({
    title: oneLine(section.fields.title),
    itemCount: currentItems(section).length,
  }));

  return {
    title: oneLine(menu.title),
    sections,
    itemCount: sections.reduce((total, section) => total + section.itemCount, 0),
    updatedAt: home?.sys?.updatedAt ?? null,
  };
}

function menuMarkdown(menu) {
  const lines = [];
  const title = oneLine(menu.title);
  if (title) lines.push(`## ${title}`);

  const introduction = richTextToMarkdown(menu.introduction);
  if (introduction) lines.push(introduction);

  for (const section of currentSections(menu)) {
    const sectionTitle = oneLine(section.fields.title);
    if (sectionTitle) lines.push(`### ${sectionTitle}`);

    const intro = richTextToMarkdown(section.fields.intro);
    if (intro) lines.push(intro);

    for (const item of currentItems(section)) {
      const { title: name, price, description, extras, isNote } = item.fields;
      const label = oneLine(name);
      if (!label) continue;

      if (isNote) {
        lines.push(`*${label}*`);
      } else {
        const priceLabel = price ? ` — ${oneLine(price)}` : "";
        const { inline, variants } = formatDescription(description);
        lines.push(`- ${label}${priceLabel}${inline ? `: ${inline}` : ""}`);
        for (const variant of variants) lines.push(`  - ${variant}`);
      }

      if (extras?.length) {
        lines.push(`  - Opties: ${extras.map(oneLine).filter(Boolean).join(", ")}`);
      }
    }

    const outro = richTextToMarkdown(section.fields.outro);
    if (outro) lines.push(outro);
  }

  return joinMarkdown(lines);
}

function textSectionMarkdown(entry) {
  const title = oneLine(entry.fields.title);
  const body = richTextToMarkdown(entry.fields.body);
  return [title && `## ${title}`, body].filter(Boolean).join("\n\n");
}

function specials(home) {
  return homepageLeafSections(home)
    .filter((entry) => sectionType(entry) === "specialsSection")
    .flatMap((entry) => (entry.fields.offers ?? []).map(resolved).filter(Boolean));
}

function offerUrl(offer) {
  const slug = oneLine(offer?.fields?.detailPage?.fields?.slug);
  const route = DETAIL_ROUTES.find((item) => item.slug === slug);
  return route?.path ?? contentfulPdfUrl(offer?.fields?.document);
}

function specialsMarkdown(section, baseUrl) {
  const offers = (section.fields.offers ?? []).map(resolved).filter(Boolean);
  const lines = [];
  const title = oneLine(section.fields.title);
  if (title) lines.push(`## ${title}`);

  for (const offer of offers) {
    const { title: offerTitle, description, linkLabel } = offer.fields;
    const label = oneLine(offerTitle);
    if (!label) continue;
    const url = offerUrl(offer);
    const detail = oneLine(description);
    lines.push(
      `### ${label}`,
      [detail, url && oneLine(linkLabel) && `- [${oneLine(linkLabel)}](${new URL(url, baseUrl)})`]
        .filter(Boolean)
        .join("\n")
    );
  }

  return joinMarkdown(lines);
}

function galleryLines(gallery) {
  const photos = gallery.fields.photos ?? [];
  return photos
    .map(resolved)
    .filter(Boolean)
    .map((photo) => oneLine(photo.fields.alt))
    .filter(Boolean);
}

function detailDescription(entry) {
  return firstParagraph(entry?.fields?.body) || oneLine(entry?.fields?.title);
}

export function buildLlmsTxt({ baseUrl, home, detailPages = [] }) {
  const site = siteDetails(home);
  const title = getPageTitle(home);
  const overview = getMenuOverview(home);
  const lines = [
    `# ${title}`,
    "",
    `> ${getSummary(home)}`,
    "",
    ...getContactLines(site),
  ];

  if (home) {
    lines.push(
      "",
      "Deze uitgave wordt opgebouwd uit de gepubliceerde Contentful-gegevens van de website. Nieuwe publicaties, zoals prijswijzigingen op de menukaart, verschijnen binnen 60 seconden ook in deze llms.txt en de gekoppelde markdown-pagina's."
    );
  }

  if (overview) {
    const sections = overview.sections
      .map(({ title: name, itemCount }) => `${name} (${itemCount})`)
      .join(", ");
    const published = overview.updatedAt ? `, laatst bijgewerkt ${overview.updatedAt}` : "";
    lines.push(
      "",
      `Actuele menukaart in Contentful: ${overview.sections.length} rubrieken en ${overview.itemCount} items${published}. Rubrieken: ${sections}.`
    );
  }

  const today = agendaDay();
  const homeTopics = homepageLeafSections(home)
    .filter((entry) => sectionType(entry) !== "agendaSection" || agendaEvents(entry, today).length)
    .map((entry) => oneLine(entry.fields.title)).filter(Boolean);

  lines.push(
    "",
    "## Site",
    "",
    `- [Homepage](${baseUrl}/): ${homeTopics.length ? sentence(homeTopics.join(", ")) : "Overzicht van de website."}`
  );

  for (const { path, entry } of detailPages) {
    lines.push(`- [${oneLine(entry.fields.title)}](${baseUrl}${path}): ${sentence(detailDescription(entry))}`);
  }

  const facebookUrl = oneLine(site?.facebookUrl);
  if (/^https:\/\//i.test(facebookUrl)) {
    lines.push(`- [${oneLine(site?.facebookLabel) || "Facebook"}](${facebookUrl})`);
  }

  lines.push(
    "",
    "## Markdown",
    "",
    `- [Homepage als markdown](${baseUrl}/index.md): Volledige homepage-inhoud uit Contentful, met de menukaart inclusief prijzen en omschrijvingen.`
  );

  for (const { path, entry } of detailPages) {
    lines.push(
      `- [${oneLine(entry.fields.title)} als markdown](${baseUrl}${path}.md): ${sentence(detailDescription(entry))}`
    );
  }

  const pdfs = specials(home)
    .map((offer) => ({ url: contentfulPdfUrl(offer.fields.document), offer }))
    .filter(({ url }) => url);

  lines.push("", "## Optional", "");
  for (const { url, offer } of pdfs) {
    lines.push(`- [${oneLine(offer.fields.title)} (PDF)](${url}): ${sentence(offer.fields.description)}`);
  }
  lines.push(`- [Reserveren via Gotable](${RESERVATION_URL}): Online een tafel reserveren.`);
  lines.push("");

  return joinMarkdown(lines);
}

export function buildHomeMarkdown({ baseUrl, home }) {
  const site = siteDetails(home);
  const lines = [
    `# ${getPageTitle(home)}`,
    "",
    `> ${getSummary(home)}`,
    "",
    ...getContactLines(site),
  ];

  const today = agendaDay();
  for (const section of homepageLeafSections(home)) {
    switch (sectionType(section)) {
      case "textSection":
        lines.push("", textSectionMarkdown(section));
        break;
      case "specialsSection":
        lines.push("", specialsMarkdown(section, baseUrl));
        break;
      case "agendaSection": {
        const events = agendaEvents(section, today);
        if (!events.length) break;
        lines.push("", `## ${oneLine(section.fields.title)}`, richTextToMarkdown(section.fields.introduction));
        for (const { event, day } of events) {
          const { title, time, description, bookingLabel, bookingUrl } = event.fields;
          const link = eventBookingUrl(bookingUrl);
          lines.push(`### ${oneLine(title)}`, [formatEventDay(day), oneLine(time)].filter(Boolean).join(" · "), richTextToMarkdown(description));
          if (link) lines.push(`[${oneLine(bookingLabel) || "Meer informatie"}](${link})`);
        }
        break;
      }
      case "restaurantMenu":
        lines.push("", menuMarkdown(section.fields));
        break;
      case "photoGallery": {
        const altTexts = galleryLines(section);
        if (altTexts.length) lines.push("", `## ${oneLine(section.fields.title) || "Sfeerimpressie"}`, "", ...altTexts.map((alt) => `- ${alt}`));
        break;
      }
    }
  }

  lines.push(
    "",
    "## Meer informatie",
    "",
    `- [Homepage](${baseUrl}/)`,
    `- [Volledige lijst met pagina's](${baseUrl}/llms.txt)`,
    ""
  );

  return joinMarkdown(lines);
}

export function buildDetailMarkdown({ baseUrl, entry, home }) {
  const { title, body, images } = entry.fields;
  const lines = [
    `# ${oneLine(title)}`,
    "",
    `> ${detailDescription(entry)}`,
    "",
    ...getContactLines(siteDetails(home)),
  ];

  const content = richTextToMarkdown(body);
  if (content) lines.push("", content);

  const imageLinks = (images ?? [])
    .map((asset) => {
      const url = contentfulAssetUrl(asset);
      if (!url) return null;
      const label = oneLine(asset?.fields?.title) || "Afbeelding";
      return `- [${label}](${String(url).startsWith("//") ? `https:${url}` : url})`;
    })
    .filter(Boolean);

  if (imageLinks.length) lines.push("", "## Afbeeldingen", "", ...imageLinks);

  lines.push(
    "",
    "## Meer informatie",
    "",
    `- [Homepage](${baseUrl}/)`,
    `- [Volledige lijst met pagina's](${baseUrl}/llms.txt)`,
    ""
  );

  return joinMarkdown(lines);
}
