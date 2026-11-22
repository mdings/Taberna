# Taberna Weert

Restaurant website built with Next.js and React. Pages live in `src/pages`, shared components in `src/components`, and static assets in `public`.

## Development

Use Node.js 24 LTS (also specified in `.nvmrc`).

```sh
nvm use
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Editing the homepage in Contentful

Open [Homepage – Taberna Weert](https://app.contentful.com/spaces/y7xio8b6lt17/environments/master/entries/6u1fu7pLWquc2VXD201HoQ) and select **Live Preview**. The single homepage entry links the **Menukaart** and **Sfeerimpressie**. Open either link in the editor or use Inspector Mode in Live Preview to jump to the field you want to edit. The specials pages and PDFs are separate from the homepage menu.

Edit prices on the linked dishes and reorder dishes under **Items in volgorde** on their section. Prices are display text, so both `8,-` and `5,- / 7,-` are valid. Publish changed dishes and any sections or menu entries whose links changed. Publish the homepage only when its own links change.

The website reads the Contentful environment's default locale (`nl-NL`) and uses the locale returned by Contentful for Live Preview.

### One-time preview setup

1. Copy `.env.example` to `.env.local`. Create or select an API key in [Contentful → Settings → API keys](https://app.contentful.com/spaces/y7xio8b6lt17/api/keys) with access to `master`. Set `CONTENTFUL_ACCESS_TOKEN` to its Content Delivery API token and `CONTENTFUL_PREVIEW_ACCESS_TOKEN` to its Content Preview API token.
2. Generate a separate URL-safe `CONTENTFUL_PREVIEW_SECRET` with `openssl rand -hex 32`. Keep the tokens and secret server-side. Add the same environment variables to your deployment before building. If the delivery token is absent, the site renders the original local menu for development and rollout; it won't receive published edits. With the delivery token set, the homepage revalidates published content on traffic after a 60-second interval.
3. After deploying over HTTPS, open **Settings → Preview** in Contentful. Edit the existing **Taberna Live Preview** platform (or create it if absent). Enable only **Homepage** and set its preview URL to:

   ```text
   https://<your-preview-host>/api/contentful/preview?secret=<CONTENTFUL_PREVIEW_SECRET>&entry={entry.sys.id}
   ```

   Replace the host and secret, leaving `{entry.sys.id}` as written. Use the separate preview secret here, never either API token. The preview host must allow framing by `https://app.contentful.com` (already configured in Next.js; avoid adding a conflicting header at the hosting layer).
4. Open **Homepage – Taberna Weert** and select **Live Preview**. Edit the linked content to see updates. Refresh the preview if a newly linked entry isn't loaded yet. **Voorbeeld sluiten** switches back to published content.

For a local Draft Mode check, open `http://localhost:3000/api/contentful/preview?secret=<CONTENTFUL_PREVIEW_SECRET>` directly in your browser. Use the deployed HTTPS URL for side-by-side preview in Contentful.

## Contentful gallery

Open [Sfeerimpressie – Homepage](https://app.contentful.com/spaces/y7xio8b6lt17/environments/master/entries/7Ki9Lcqcz94oUPdJS0gxKS) to reorder, add, or remove photos. Upload one high-quality source per **Fotogalerij – Foto** entry. Leave **Beeldverhouding op desktop** blank to keep its natural proportions, or choose a portrait ratio for the desktop masonry. Add Dutch alt text when the image conveys information. Publish the media asset and photo entry before publishing changes to the gallery's list.

The Contentful Images API generates responsive widths, WebP files, and any desktop crop from the same source. Mobile uses the uncropped image in the swipeable carousel. The browser selects a size appropriate for its viewport and display density.

## Production

Configure the deployment to use Node.js 24, then run:

```sh
npm run lint
npm run build
npm start
```
