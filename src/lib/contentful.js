import { createClient } from "contentful";

export const menuLocale = process.env.CONTENTFUL_LOCALE || "en-US";
export const menuEntryId = process.env.CONTENTFUL_MENU_ENTRY_ID || "70rtKHhJPaHtxERhg4gk5w";

export async function getRestaurantMenu({ draftMode = false } = {}) {
  const accessToken = draftMode
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!accessToken) {
    if (draftMode) throw new Error("CONTENTFUL_PREVIEW_ACCESS_TOKEN is missing.");
    return null;
  }

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "y7xio8b6lt17",
    environment: process.env.CONTENTFUL_ENVIRONMENT_ID || "master",
    host: draftMode ? "preview.contentful.com" : "cdn.contentful.com",
    accessToken,
  });

  let menu;
  try {
    const { items } = await client.getEntries({
      content_type: "restaurantMenu",
      "sys.id": menuEntryId,
      locale: menuLocale,
      include: 2,
      limit: 1,
    });
    [menu] = items;
  } catch (error) {
    // SDK errors can include request details. Keep credentials out of logs.
    const status = error?.response?.status;
    throw new Error(`Could not load the ${draftMode ? "draft" : "published"} Contentful menu${status ? ` (HTTP ${status})` : ""}.`);
  }

  if (!menu) throw new Error(`Contentful menu entry ${menuEntryId} was not found.`);
  // Preserve the REST entry shape (including all resolved sys and fields) for Live Preview.
  return JSON.parse(JSON.stringify(menu));
}
