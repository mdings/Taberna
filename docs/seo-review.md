# Taberna SEO review

The audit checked the public custom domain, the Vercel site, and the current Next.js project. The apex domain redirects to `www.tabernaweert.nl`; `www` and the Vercel hostname were serving different versions of the site. Neither hostname returned a sitemap, robots file, canonical tag, or restaurant structured data.

## Implemented

- Canonical URLs and social metadata for all three public HTML pages. The preferred HTTPS origin defaults to `https://www.tabernaweert.nl`; HTML, sitemap and Markdown links use the same origin.
- `robots.txt` and an XML sitemap for the homepage and published detail pages. Draft pages keep their `noindex, nofollow` directive, and Markdown/preview endpoints are kept out of search indexing without blocking crawlers from reading the links.
- Restaurant and website JSON-LD sourced from the published homepage, plus visible and structured breadcrumbs on the two special pages. Exact structured opening hours are intentionally omitted because some published closing times are ranges or alternatives.
- Distinct Dutch page titles and descriptions. The Friday menu has an editable HTML summary and course list above the original images, plus a link to its PDF. Update the text and brochure together when the menu changes.
- Lower photo quality targets for the darkened hero and gallery, an extra responsive image width, one high-priority hero request, and keyboard-accessible back-to-top links.

## Baseline and launch checks

One throttled Lighthouse mobile run against the previous Vercel deployment reported **67 performance**, **93 accessibility**, and **6.6 s LCP**. It flagged the hero and gallery images; it did not catch the missing sitemap or the split between hostnames. These are lab observations, not field Core Web Vitals.

A local production build scored **89 performance** with **3.8 s LCP** in one run. This is a different serving environment, so it does not establish a production speed gain. For the selected hero request, the measured transfer dropped from about **111 KB to 98 KB**. Re-run on the canonical production host after launch.

The special-page edits are published in Contentful. The homepage’s revised metadata is saved alongside the existing Agenda draft. Deploy support for that layout before publishing Homepage; the updated code already provides better homepage metadata when the old “Welkom bij Taberna” copy is still published.

1. Serve this build on `www.tabernaweert.nl` before submitting the sitemap. Keep the apex-to-`www` redirect and verify the three canonical URLs return `200` on the preferred host. The Vercel URL can still be used by Contentful Live Preview.
2. Submit `https://www.tabernaweert.nl/sitemap.xml` in Google Search Console and inspect the homepage and each special page. Check Google’s selected canonical, indexing, and real-user Core Web Vitals after the change is live.
3. Review the Google Business Profile and keep the restaurant name, address, phone, menu link, and opening hours consistent with the published website. Add factual Dutch alt text to gallery photos that convey information.

Search Console coverage, Google Business Profile settings, and historical ranking data were not available in this audit.
