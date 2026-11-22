import Head from "next/head";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import menuPageOne from "../../public/typisch-taberna-1.png";
import menuPageTwo from "../../public/typisch-taberna-2.png";

const mw = Merriweather({
  weight: ["300", "400"],
  subsets: ["latin"],
});

export default function TypischTaberna() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Typisch Taberna - Menukaart</title>
        <meta name="description" content="Typisch Taberna - Menukaart" />
        <meta name="author" content="Taberna Weert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={mw.className}
        style={{
          backgroundColor: "#f5f0eb",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0",
        }}
      >
        <Image
          src={menuPageOne}
          alt="Typisch Taberna - Pagina 1"
          sizes="(max-width: 800px) 100vw, 800px"
          style={{ width: "100%", height: "auto", maxWidth: "800px", display: "block" }}
        />
        <Image
          src={menuPageTwo}
          alt="Typisch Taberna - Pagina 2"
          sizes="(max-width: 800px) 100vw, 800px"
          style={{ width: "100%", height: "auto", maxWidth: "800px", display: "block" }}
        />
      </div>
    </>
  );
}
