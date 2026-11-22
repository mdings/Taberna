import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Merriweather, Amatic_SC } from "next/font/google";
import Header from "@/components/header";
import HomepageSections from "@/components/homepage-sections";
import Contact from "@/components/contact";
import SeoHead from "@/components/seo-head";
import Announcement from "@/components/announcement";
import { getAnnouncement, getHomeContent } from "@/lib/contentful";
import { homepageSectionAnchors } from "@/lib/home-sections";
import { agendaDay } from "@/lib/agenda";
import { homepageMetadata, restaurantGraph } from "@/lib/seo";

const ContentfulPreview = dynamic(() => import("@/components/contentful-preview"));

const mw = Merriweather({
  weight: ["300", "400"],
  subsets: ["latin"],
});

const ac = Amatic_SC({
  weight: ["400"],
  subsets: ["latin"],
});

export async function getStaticProps({ draftMode = false }) {
  const [home, announcement] = await Promise.all([getHomeContent({ draftMode }), getAnnouncement({ draftMode })]);
  return {
    props: { home, announcement, draftMode, today: agendaDay() },
    ...(!draftMode ? { revalidate: 60 } : {}),
  };
}

function Homepage({ home, announcement, today, draftMode = false, inspect, openEntry }) {
  const { siteDetails } = home.fields;
  const metadata = homepageMetadata(home);
  const sections = homepageSectionAnchors(home);
  const anchors = sections.flatMap((section) => section.columns ?? [section]).map(({ anchor }) => anchor).filter(Boolean);

  return (
    <>
      <SeoHead path="/" {...metadata} draftMode={draftMode} schema={draftMode ? undefined : restaurantGraph(home, metadata)} />
      <Head>
        <meta charSet="utf-8" />
        {siteDetails?.fields?.title && <meta name="author" content={siteDetails.fields.title} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {metadata.image && <link rel="preconnect" href="https://images.ctfassets.net" />}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        {!draftMode && <link rel="describedby" href="/llms.txt" />}
        {!draftMode && <link rel="alternate" type="text/markdown" href="/index.md" />}
      </Head>
      <div className={mw.className} style={{ backgroundColor: "#ffffff" }}>
        <Announcement entry={announcement} draftMode={draftMode} inspect={inspect} openEntry={openEntry} />
        <Header site={siteDetails} inspect={inspect} anchors={anchors} />
        <HomepageSections home={home} sections={sections} font={ac} today={today} draftMode={draftMode} inspect={inspect} />

        <footer>
          <div className="container">
            <Contact site={siteDetails} inspect={inspect} />
          </div>
        </footer>

        {!draftMode && (
          <Script
            type="text/javascript"
            src="https://gotable.app/restaurants/130189/reservations/new.js?locale=nl&layout=floating&variant=themed/337&position=bottom-right"
          />
        )}
      </div>
    </>
  );
}

export default function Home({ home, announcement, draftMode, today }) {
  if (!draftMode) return <Homepage home={home} announcement={announcement} today={today} />;

  return (
    <ContentfulPreview entry={home} relatedEntry={announcement}>
      {(updatedHome, inspect, updatedAnnouncement, openEntry) => <Homepage home={updatedHome} announcement={updatedAnnouncement} today={today} draftMode inspect={inspect} openEntry={openEntry} />}
    </ContentfulPreview>
  );
}
