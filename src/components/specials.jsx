function Specials({ font }) {
  return (
    <section className="section__specials">
      <div className="container">
        <h2 className={font.className}>Specials</h2>

        <h3>Munttheater diner</h3>
        <p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "/munttheater-diner",
                "Munttheater Diner",
                "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=600,height=750"
              );
            }}
          >
            Maak een avondje uit in het Munttheater compleet met het
            "Munttheater-diner"!
            <img
              style={{ marginLeft: "4px", transform: "translateY(2px)" }}
              src="/open-external-link-icon.svg"
              width="12"
              height="auto"
              alt="Opens in new tab"
            ></img>
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
          3 gangen keuze menu à 28,- p.p. <br />
          <a href="/3-gangen-keuzemenu.pdf" target="_blank">
            (Bekijk het keuzemenu)
            <img
              style={{ marginLeft: "4px", transform: "translateY(2px)" }}
              src="/open-external-link-icon.svg"
              width="12"
              height="auto"
              alt="Opens in new tab"
            ></img>
          </a>
        </p>

        <h3>Vrijdagavond</h3>
        <p>
          Typisch Taberna; Avondvullend dineren met kleine gerechtjes (keuze uit
          5 gangen voor 34,50 of 6 gangen voor 37,-)
          <br />
          <a href="/typisch-taberna.pdf" target="_blank">
            (Bekijk het keuzemenu)
            <img
              style={{ marginLeft: "4px", transform: "translateY(2px)" }}
              src="/open-external-link-icon.svg"
              width="12"
              height="auto"
              alt="Opens in new tab"
            ></img>
          </a>
        </p>
      </div>
    </section>
  );
}

export default Specials;
