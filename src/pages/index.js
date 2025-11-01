import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { Merriweather, Amatic_SC } from "@next/font/google";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Specials from "@/components/specials";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import Menu from "@/components/menu";
import Hours from "@/components/openinghours";
import Top from "@/components/top";

const mw = Merriweather({
  weight: ["300", "400"],
  subsets: ["latin"],
});

const ac = Amatic_SC({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Welkom bij Taberna</title>
        <meta name="description" content="Welkom bij Taberna" />
        <meta name="author" content="Taberna Weert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <div className="announcement">
          Na het succes van vorig jaar (1e keer open op 1e Kerstdag) breiden we
          het dit jaar uit; ook 2e Kerstdag zijn we open!
          <br />
          <a href="/kerst2025.pdf" target="_blank">
            Bekijk het kerstmenu
          </a>
        </div>
        <Header />
        <Intro font={ac} />
        <Specials font={ac} />
        <About font={ac} />
        <Top />
        <Gallery />
        <Top />
        <Menu font={ac} />

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
              src="/team.jpg"
              alt="Taberna Team!"
              width={0}
              height={0}
              sizes="100vw"
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

        <Script
          type="text/javascript"
          src="https://gotable.app/restaurants/130189/reservations/new.js?locale=nl&layout=floating&variant=themed/337&position=bottom-right"
        ></Script>
      </div>
    </>
  );
}
