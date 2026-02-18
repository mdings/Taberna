import Head from "next/head";
import { Merriweather } from "@next/font/google";

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
        <img
          src="/typisch-taberna-1.png"
          alt="Typisch Taberna - Pagina 1"
          style={{ width: "100%", maxWidth: "800px", display: "block" }}
        />
        <img
          src="/typisch-taberna-2.png"
          alt="Typisch Taberna - Pagina 2"
          style={{ width: "100%", maxWidth: "800px", display: "block" }}
        />
      </div>
    </>
  );
}
