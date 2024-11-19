function Specials({ font }) {
  return (
    <section className="section__specials">
      <div className="container">
        <h2 className={font.className}>Specials</h2>

        <div class="special__highlight">
          <h3>
            1<sup>e</sup> Kerstdag
          </h3>
          <p>
            Op 1<sup>e</sup> Kerstdag geniet je bij Taberna van de lekkerste
            gerechtjes. <br /> Je begint met een amuse en kiest daarna per ronde
            je lekkerste gerechtje of laat je verrassen, in totaal 6 gangen.
            <br />
            <br />
            Antipasti, soep, salade, pizza, hoofdgerecht en een toetje.
            <br />
            <br />
            Alles standaard typisch Taberna gerechtjes aangevuld met extra
            specials!
            <br />
            <br />
            13.00 uur - 17:00 uur
            <br />
            &euro; 47,50 p.p. <br />
            <br />
            Reserveren verplicht!
            <br />
            Voor kinderen is een special menu beschikbaar, vraag naar de opties!
            <br />
            <a href="/Typisch_Kerst_1.png" target="_blank">
              (Bekijk het Kerstmenu)
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

        <h3>Munttheater diner</h3>
        <p>
          <a
            href="javascript:void(0);"
            onClick={(e) =>
              window.open(
                "/munttheater-diner",
                "Munttheater Diner",
                "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=600,height=750"
              )
            }
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
          Voor 3,5 extra krijg je een kleine soep naar keuze bij je Panino naar
          keuze
        </p>

        <h3>Donderdagavond</h3>
        <p>
          3 gangen keuze menu à 27,50 p.p. <br />
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
          5 gangen voor 34,- of 6 gangen voor 36,50)
          <br />
          <a href="/typisch-taberna-2.pdf" target="_blank">
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
