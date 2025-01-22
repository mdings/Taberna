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
        <meta charset="utf-8" />
        <title>Welkom bij Taberna</title>
        <meta name="description" content="Welkom bij Taberna" />
        <meta name="author" content="Taberna Weert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={mw.className} style={{ backgroundColor: "#ffffff" }}>
        <Header />
        <Intro font={ac} />
        <Specials font={ac} />
        <About font={ac} />
        <Top />
        <Gallery />
        <Top />
        <Menu font={ac} />
        <Top />
        {/* 
        <section className="section__form" id="reservation">
          <div className="container container">
            <h2 className={ac.className}>Reserveringen</h2>
            <p>
              Met onderstaand formulier kunt u reserveringen maken bij Taberna.
              <br />
              <strong>
                Uw reservering is pas definitief zodra uw gegevens telefonisch
                of per e-mail zijn bevestigd!
              </strong>
              <br />
              Reserveringen voor dezelfde dag kunnen enkel telefonisch worden
              doorgegeven: 0495 586 339
              <br />
              <br />
            </p>
            <Hours />
            <div className="cognito">
              <Script
                src="https://services.cognitoforms.com/s/xE4pLZy25kukkzzkiHsUHQ"
                onLoad={() => {
                  Cognito.load("forms", { id: "1" });
                }}
              ></Script>

             
            </div>
          </div>
        </section> */}
        <Script
          type="text/javascript"
          src="https://gotable.app/restaurants/130189/reservations/new.js?locale=nl&layout=floating&variant=themed/337&position=bottom-right"
        ></Script>
      </div>
    </>
  );
}
