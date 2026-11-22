import { createClient } from "contentful";
import { homepageSections } from "./home-sections";

export const menuEntryId = process.env.CONTENTFUL_MENU_ENTRY_ID || "70rtKHhJPaHtxERhg4gk5w";
export const galleryEntryId = process.env.CONTENTFUL_GALLERY_ENTRY_ID || "7Ki9Lcqcz94oUPdJS0gxKS";
export const homeEntryId = process.env.CONTENTFUL_HOME_ENTRY_ID || "6u1fu7pLWquc2VXD201HoQ";
const announcementEntryId = process.env.CONTENTFUL_ANNOUNCEMENT_ENTRY_ID || "7zGMRS6rgFiWhM3KBO3oIN";

function getClient(draftMode) {
  const tokenKey = draftMode ? "CONTENTFUL_PREVIEW_ACCESS_TOKEN" : "CONTENTFUL_ACCESS_TOKEN";
  const accessToken = process.env[tokenKey];
  if (!accessToken) throw new Error(`${tokenKey} is missing.`);

  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "y7xio8b6lt17",
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID || "master",
    host: draftMode ? "preview.contentful.com" : "cdn.contentful.com",
    accessToken,
  });
}

async function getEntry(query, { draftMode = false, label }) {
  const client = getClient(draftMode);

  let entry;
  try {
    const { items } = await client.getEntries({
      ...query,
      limit: 1,
    });
    [entry] = items;
  } catch (error) {
    // SDK errors can include request details. Keep credentials out of logs.
    const status = error?.response?.status;
    throw new Error(`Could not load the ${draftMode ? "draft" : "published"} Contentful ${label}${status ? ` (HTTP ${status})` : ""}.`);
  }
  // Keep the complete entry shape, including nested sys links, for Live Preview.
  return entry ? JSON.parse(JSON.stringify(entry)) : null;
}

export async function getHomeContent({ draftMode }) {
  const entry = await getEntry({
    content_type: "homepage",
    "sys.id": homeEntryId,
    include: 4,
    // Keep the full Preview API response for the Live Preview SDK. Only delivery
    // can omit the deprecated links, which would duplicate the section graph.
    ...(!draftMode && { select: "sys,fields.title,fields.seoTitle,fields.seoDescription,fields.siteDetails,fields.sections" }),
  }, { draftMode, label: "homepage" });
  if (!entry) throw new Error(`Contentful homepage entry ${homeEntryId} was not found.`);
  if (!draftMode && (!entry.fields.siteDetails?.fields || homepageSections(entry).length === 0)) {
    throw new Error("The published Contentful homepage requires published website details and at least one published section.");
  }
  return entry;
}

export async function getDetailContent(slug, { draftMode }) {
  return getEntry({ content_type: "detailPage", "fields.slug": slug, include: 1 }, { draftMode, label: "detail page" });
}

export async function getAnnouncement({ draftMode }) {
  return getEntry({ content_type: "siteAnnouncement", "sys.id": announcementEntryId, include: 1 }, { draftMode, label: "announcement" });
}

export async function getDinnerDocument() {
  const offer = await getEntry({ content_type: "specialOffer", "sys.id": "2XjiUU8v09hyHasG2e6IqV", include: 1 }, { label: "dinner menu PDF" });
  return offer?.fields.document;
}
