import { contentfulImage, imageUrl } from "./contentful-assets";
import { homepageLeafSections, sectionType } from "./home-sections";
import { canonicalUrl } from "./site-urls";

export function homepageMetadata(home) {
  const { seoTitle, seoDescription, siteDetails } = home.fields;
  const site = siteDetails?.fields;

  return {
    title: seoTitle && seoTitle !== "Welkom bij Taberna" ? seoTitle : "Taberna Weert | Mediterrane gastrobar & delicatessen",
    description: seoDescription && seoDescription !== "Welkom bij Taberna" ? seoDescription : "Lunch, borrel of dineer bij Taberna Weert, een mediterrane gastrobar en delicatessenwinkel. Bekijk de menukaart, specials en openingstijden.",
    siteName: site?.title,
    image: site?.headerImage,
  };
}

export function shareImage(asset) {
  const image = contentfulImage(asset);
  if (!image?.resizable) return null;
  const width = Math.min(image.width, 1200);
  return { url: imageUrl(image, width, "jpg"), width, height: Math.round(image.height * width / image.width), alt: asset.fields.description || asset.fields.title };
}

export function restaurantGraph(home, metadata) {
  const site = home.fields.siteDetails?.fields;
  const page = canonicalUrl();
  const restaurantId = `${page}#restaurant`;
  const websiteId = `${page}#website`;
  const image = shareImage(site?.headerImage);
  const logo = contentfulImage(site?.logo);
  const hasMenu = homepageLeafSections(home).some((entry) => sectionType(entry) === "restaurantMenu");

  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": websiteId, name: site?.title || "Taberna Weert", url: page, inLanguage: "nl-NL", publisher: { "@id": restaurantId } },
      { "@type": "WebPage", "@id": `${page}#webpage`, url: page, name: metadata.title, description: metadata.description, inLanguage: "nl-NL", isPartOf: { "@id": websiteId }, about: { "@id": restaurantId } },
      {
        "@type": "Restaurant", "@id": restaurantId, name: site?.title || "Taberna Weert", url: page,
        description: metadata.description, servesCuisine: "Mediterraans",
        ...(site?.address && { address: { "@type": "PostalAddress", streetAddress: site.address, addressLocality: "Weert", addressCountry: "NL" } }),
        ...(site?.phone && { telephone: site.phone.replace(/^0/, "+31 ") }),
        ...(site?.email && { email: site.email }),
        ...(site?.facebookUrl?.startsWith("https://www.facebook.com/") && { sameAs: [site.facebookUrl] }),
        ...(image && { image: image.url }),
        ...(logo && { logo: logo.url }),
        ...(hasMenu && { hasMenu: `${page}#menu` }),
      },
    ],
  };
}

export function breadcrumbGraph(title, path) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Taberna Weert", item: canonicalUrl() },
      { "@type": "ListItem", position: 2, name: title, item: canonicalUrl(path) },
    ],
  };
}
