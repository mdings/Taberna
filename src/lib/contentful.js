import { createClient } from "contentful";

export const menuEntryId = process.env.CONTENTFUL_MENU_ENTRY_ID || "70rtKHhJPaHtxERhg4gk5w";
export const galleryEntryId = process.env.CONTENTFUL_GALLERY_ENTRY_ID || "7Ki9Lcqcz94oUPdJS0gxKS";
export const homeEntryId = process.env.CONTENTFUL_HOME_ENTRY_ID || "6u1fu7pLWquc2VXD201HoQ";

function getClient(draftMode) {
  const accessToken = draftMode
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!accessToken) {
    if (draftMode) throw new Error("CONTENTFUL_PREVIEW_ACCESS_TOKEN is missing.");
    return null;
  }

  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "y7xio8b6lt17",
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID || "master",
    host: draftMode ? "preview.contentful.com" : "cdn.contentful.com",
    accessToken,
  });
}

export async function getHomeContent({ draftMode }) {
  const client = getClient(draftMode);
  if (!client) return null;

  let entry;
  try {
    const { items } = await client.getEntries({
      content_type: "homepage",
      "sys.id": homeEntryId,
      // Homepage → menu → section → dish and homepage → gallery → photo → asset.
      include: 3,
      limit: 1,
    });
    [entry] = items;
  } catch (error) {
    // SDK errors can include request details. Keep credentials out of logs.
    const status = error?.response?.status;
    throw new Error(`Could not load the ${draftMode ? "draft" : "published"} Contentful homepage${status ? ` (HTTP ${status})` : ""}.`);
  }

  if (!entry) throw new Error(`Contentful homepage entry ${homeEntryId} was not found.`);
  if (!draftMode && (!entry.fields.menu?.fields || !entry.fields.gallery?.fields)) {
    throw new Error("The published Contentful homepage requires a published menu and gallery.");
  }
  // Preserve the REST entry shape (including all resolved sys and fields) for Live Preview.
  return JSON.parse(JSON.stringify(entry));
}
