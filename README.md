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

## Contentful menu

The homepage uses the [Menukaart entry](https://app.contentful.com/spaces/y7xio8b6lt17/environments/master/entries/70rtKHhJPaHtxERhg4gk5w). Reorder sections on that entry and dishes under **Items in volgorde** on each section. Prices are display text, so both `8,-` and `5,- / 7,-` are valid. Publish changed dishes and any sections or menu entries whose links changed. The specials pages and their PDFs are separate from the homepage menu.

The website reads the Contentful environment's default locale (`nl-NL`) and uses the locale returned by Contentful for Live Preview.

1. Copy `.env.example` to `.env.local`. Create or select an API key in [Contentful → Settings → API keys](https://app.contentful.com/spaces/y7xio8b6lt17/api/keys) with access to `master`. Set `CONTENTFUL_ACCESS_TOKEN` to its Content Delivery API token and `CONTENTFUL_PREVIEW_ACCESS_TOKEN` to its Content Preview API token.
2. Generate a separate URL-safe `CONTENTFUL_PREVIEW_SECRET` with `openssl rand -hex 32`. Keep the tokens and secret server-side. Add the same environment variables to your deployment before building. If the delivery token is absent, the site renders the original local menu for development and rollout; it won't receive published edits. With the delivery token set, the homepage revalidates published content on traffic after a 60-second interval.
3. After deploying over HTTPS, open **Settings → Preview → Create preview platform** in Contentful. Name it **Taberna Live Preview**, enable **Menukaart**, **Menukaart – Sectie**, and **Menukaart – Item**, and set each preview URL to:

   ```text
   https://<your-preview-host>/api/contentful/preview?secret=<CONTENTFUL_PREVIEW_SECRET>&entry={entry.sys.id}
   ```

   Replace the host and secret, leaving `{entry.sys.id}` as written. Use the separate preview secret here, never either API token. The preview host must allow framing by `https://app.contentful.com` (already configured in Next.js; avoid adding a conflicting header at the hosting layer).
4. Open an entry and select **Live Preview**. Edit a dish or price to see updates and use Inspector Mode to jump to the corresponding field. Link new sections and items into **Menukaart** to see them in context; refresh the preview if a newly linked entry isn't loaded yet. **Voorbeeld sluiten** switches back to published content.

For a local Draft Mode check, open `http://localhost:3000/api/contentful/preview?secret=<CONTENTFUL_PREVIEW_SECRET>` directly in your browser. Use the deployed HTTPS URL for side-by-side preview in Contentful.

## Production

Configure the deployment to use Node.js 24, then run:

```sh
npm run lint
npm run build
npm start
```
