import Image from "next/image";

function ExternalLinkIcon() {
  return (
    <Image
      style={{ marginLeft: "4px", transform: "translateY(2px)" }}
      src="/open-external-link-icon.svg"
      width={12}
      height={12}
      alt="Opent in een nieuw venster"
    />
  );
}

function Specials({ font }) {
  return (
    <section className="section__specials">
      <div className="container">
        <h2 className={font.className}>Specials</h2>

        <h3>Munttheater diner</h3>
        <p>
          <a
            href="/munttheater-diner"
            target="_blank"
            rel="noopener"
            onClick={(e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
              e.preventDefault();
              window.open(
                e.currentTarget.href,
                "_blank",
                "popup,noopener,width=600,height=750"
              );
            }}
          >
            Maak een avondje uit in het Munttheater compleet met het
            &quot;Munttheater-diner&quot;!
            <ExternalLinkIcon />
          </a>
        </p>

        <h3>Taberna lunchdeal</h3>
        <p>
          {" "}
          Voor 3,8 extra krijg je een kleine soep naar keuze bij je Panino naar
          keuze
        </p>

        <h3>Donderdagavond</h3>
        <p>
          3 gangen keuzemenu vanaf 28,- p.p. <br />
          <a href="/3-gangen-keuzemenu.pdf" target="_blank" rel="noopener">
            (Bekijk het keuzemenu)
            <ExternalLinkIcon />
          </a>
        </p>

        <h3>Vrijdagavond</h3>
        <p>
          Typisch Taberna; Avondvullend dineren met kleine gerechtjes (keuze uit
          5 gangen voor 35,- of 6 gangen voor 37,50)
          <br />
          <a href="/typisch-taberna" target="_blank" rel="noopener">
            (Bekijk het menu)
            <ExternalLinkIcon />
          </a>
        </p>
      </div>
    </section>
  );
}

export default Specials;
