import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Merriweather, Amatic_SC } from "next/font/google";
import teamPhoto from "../../public/team.jpg";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Specials from "@/components/specials";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import Menu from "@/components/menu";
import Hours from "@/components/openinghours";
import Top from "@/components/top";
import { getHomeContent } from "@/lib/contentful";

const HomePreview = dynamic(() => import("@/components/home-preview"));
const LegacyMenu = dynamic(() => import("@/components/legacy-menu"));

const mw = Merriweather({
  weight: ["300", "400"],
  subsets: ["latin"],
});

const ac = Amatic_SC({
  weight: ["400"],
  subsets: ["latin"],
});

export async function getStaticProps({ draftMode = false }) {
  const home = await getHomeContent({ draftMode });
  return {
    props: { home, draftMode },
    ...(home && !draftMode ? { revalidate: 60 } : {}),
  };
}

function Homepage({ home, draftMode = false, inspect }) {
  const { menu, gallery } = home?.fields ?? {};

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Welkom bij Taberna</title>
        <meta name="description" content="Welkom bij Taberna" />
        <meta name="author" content="Taberna Weert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {draftMode && <meta name="robots" content="noindex, nofollow" />}
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
      </Head>
      <div className={mw.className} style={{ backgroundColor: "#ffffff" }}>
        <Header />
        <Intro font={ac} />
        <Specials font={ac} />
        <About font={ac} />
        <Top />
        {draftMode && !gallery?.fields ? (
          <section id="pictures" className="preview-bar" {...inspect?.(home, "gallery")}>
            Koppel een sfeerimpressie aan de homepage.
          </section>
        ) : (
          <Gallery gallery={gallery} inspect={inspect} />
        )}
        <Top />
        {menu?.fields ? (
          <Menu menu={menu} font={ac} inspect={inspect} />
        ) : draftMode ? (
          <section id="menu" className="preview-bar" {...inspect?.(home, "menu")}>
            Koppel een menukaart aan de homepage.
          </section>
        ) : (
          <LegacyMenu font={ac} />
        )}

        <section className="section__jobs" id="jobs">
          <div className="container container--small">
            <h1 className={ac.className}>Werken bij Taberna!</h1>
            <p>
              De naam gastrobar zegt het al.. wij zijn er voor onze gasten! Ons
              Taberna Team staat klaar om onze gasten te laten genieten van de
              lekkerste gerechten, planken en dranken. Wil jij deel uitmaken van
              ons team? Laat van je horen en mail ons!
            </p>
            <Image
              src={teamPhoto}
              alt="Taberna Team!"
              sizes="(max-width: 800px) 100vw, 800px"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "800px",
              }}
              loading="lazy"
            />
          </div>
        </section>
        <Top />

        <footer>
          <div className="container">
            <section className="reachability">
              <div className="reachability__hours">
                <Hours />
              </div>
              <div className="reachability__contact">
                Taberna Weert
                <br />
                Beekstraat 60a
                <br />
                <a href="tel://0495586339">Tel: 0495 586 339</a>
                <br />
                <a href="mailto:info@tabernaweert.nl">info@tabernaweert.nl</a>
                <br />
                <a href="https://www.facebook.com/tabernaweert/">
                  Taberna Facebook
                </a>
              </div>
            </section>
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

export default function Home({ home, draftMode }) {
  if (!draftMode) return <Homepage home={home} />;

  return (
    <HomePreview home={home}>
      {(updatedHome, inspect) => <Homepage home={updatedHome} draftMode inspect={inspect} />}
    </HomePreview>
  );
}
