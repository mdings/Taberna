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

Open [Homepage – Taberna Weert](https://app.contentful.com/spaces/y7xio8b6lt17/environments/master/entries/6u1fu7pLWquc2VXD201HoQ) and select **Live Preview**. Drag entries in **Secties** to change the homepage order, or add and remove entries from the list. Publish **Homepage** to make the new order public. Open a linked entry in the editor or use Inspector Mode to edit the section's content.

- **Websitegegevens en openingstijden**: edit the logo, cover photo, navigation labels, address, phone number, email, social link, and kitchen hours. Contact details and hours update in both the header and footer.
- **Tekstsecties**: edit section headings, rich text, images, and presentation. Two consecutive sections with **Weergave → kolom** appear side by side on desktop and stack on mobile. The homepage entry also holds its browser title and meta description.
- **Specials**: open the section in **Secties** to edit its heading or reorder its offers. Open a linked offer to edit the Munttheater Diner or Typisch Taberna page, or replace the Thursday PDF. The two detail-page links stay in the same preview pane while in Draft Mode. The existing PDF URLs redirect to the published documents linked from the Thursday offer and the Typisch Taberna detail page.
- **Specials & Agenda**: move the **Twee kolommen** entry in **Secties**, or open **Kolommen in volgorde** to swap the two blocks. The first block appears on the left on desktop and first on mobile. In **Agenda**, link published **Evenement** entries. Upcoming events are sorted by date and optional Dutch local time; an empty agenda is visible in Live Preview but takes no space on the public homepage. Deploy support for the row before publishing the draft Homepage placement.

Edit prices on the linked dishes and reorder dishes under **Items in volgorde** on their menu section. Prices are display text, so both `8,-` and `5,- / 7,-` are valid. Publish changed dishes and any sections or menu entries whose links changed. Publish the homepage when its own fields or section order change.

The website reads the Contentful environment's default locale (`nl-NL`) and uses the locale returned by Contentful for Live Preview.

### One-time preview setup

1. Copy `.env.example` to `.env.local`. Create or select an API key in [Contentful → Settings → API keys](https://app.contentful.com/spaces/y7xio8b6lt17/api/keys) with access to `master`. Set `CONTENTFUL_ACCESS_TOKEN` to its Content Delivery API token and `CONTENTFUL_PREVIEW_ACCESS_TOKEN` to its Content Preview API token.
2. Generate a separate URL-safe `CONTENTFUL_PREVIEW_SECRET` with `openssl rand -hex 32`. Keep the tokens and secret server-side. The delivery token is required for the build; add the same settings to your deployment before building. The homepage and detail pages revalidate published content on traffic after a 60-second interval.
3. After deploying over HTTPS, open **Settings → Preview** in Contentful. Edit the existing **Taberna Live Preview** platform (or create it if absent). Enable only **Homepage** and set its preview URL to:

   ```text
   https://<your-preview-host>/api/contentful/preview?secret=<CONTENTFUL_PREVIEW_SECRET>&entry={entry.sys.id}
   ```

   Replace the host and secret, leaving `{entry.sys.id}` as written. Use the separate preview secret here, never either API token. The preview host must allow framing by `https://app.contentful.com` (already configured in Next.js; avoid adding a conflicting header at the hosting layer).
4. Open **Homepage – Taberna Weert** and select **Live Preview**. Edit the linked content to see updates. Refresh the preview if a newly linked entry isn't loaded yet. Close the preview pane in Contentful when you're done.

For a local Draft Mode check, open `http://localhost:3000/api/contentful/preview?secret=<CONTENTFUL_PREVIEW_SECRET>` directly in your browser. Use the deployed HTTPS URL for side-by-side preview in Contentful.

## Contentful gallery

Open [Sfeerimpressie – Homepage](https://app.contentful.com/spaces/y7xio8b6lt17/environments/master/entries/7Ki9Lcqcz94oUPdJS0gxKS) to reorder, add, or remove photos. Upload one high-quality source per **Fotogalerij – Foto** entry. Leave **Beeldverhouding op desktop** blank to keep its natural proportions, or choose a portrait ratio for the desktop masonry. Add Dutch alt text when the image conveys information. Publish the media asset and photo entry before publishing changes to the gallery's list.

The Contentful Images API generates responsive widths, WebP files, and any desktop crop from the same source. Mobile uses the uncropped image in the swipeable carousel. The browser selects a size appropriate for its viewport and display density.

## Homepage announcement

Edit [Meldingsbalk – Homepage](https://app.contentful.com/spaces/y7xio8b6lt17/environments/master/entries/7zGMRS6rgFiWhM3KBO3oIN) to show the red banner above the homepage header. In **Melding**, select the words you want to link, choose **Link to asset**, and select a published PDF from Media. Inline PDF links open in a new tab. Turn **Tonen bovenaan de homepage** on and publish this entry. To remove the banner, turn it off and publish again. The homepage itself does not need to be republished. In Homepage Live Preview, the banner or its disabled-state indicator appears above the header.

## LLM-friendly pages

`/llms.txt` is an [llms.txt](https://llmstxt.org/) index of the site, served as plain text. It lists the pages, their markdown versions and the published PDF menus. The markdown versions live at `/index.md`, `/typisch-taberna.md` and `/munttheater-diner.md`.

All four files are generated at request time from the **published** Contentful entries: website details and opening hours, editorial sections, specials, the menu with its prices and descriptions, gallery alt text, and both detail pages. Publish a change in Contentful and it appears in these files within the same 60-second window used by the pages' incremental static regeneration.

The links use the request host by default. Set `SITE_URL` (see `.env.example`) to a fixed absolute URL if the site is served behind multiple hosts or a proxy that does not forward the original host. None of these endpoints uses Draft Mode, so unpublished edits never leak into them. Draft pages remain `noindex, nofollow` and carry no `describedby` link.

## Production

See the [SEO review and launch checks](docs/seo-review.md) before switching the custom domain or submitting the sitemap.

Configure the deployment to use Node.js 24, then run:

```sh
npm run lint
npm run build
npm start
```
