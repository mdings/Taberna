function About({ font }) {
  return (
    <section className="section__about">
      <div className="container">
        <section className="about__taberna">
          <div className="about__content">
            <h2 className={font.className}>Delicatessen</h2>
            <div>
              <p>
                In het winkelgedeelte hebben we een vast assortiment in
                authentieke producten uit de ‘Mediterraanse wereld’, maar
                daarnaast maken we ook veel producten zelf, welke ook te koop
                zijn. <br />
                Denk hierbij aan olijfolie, balsamico, vleeswaren, kazen,
                tapenades, olijfjes en nog veel meer!
              </p>
              <p>
                Buiten ons vast assortiment zullen we ook altijd wisselende
                producten hebben, zodat je bezoek aan Taberna iedere keer weer
                een verrassing zal zijn.
              </p>
              <p>
                We werken samen met (veelal kleine) leveranciers welke
                rechtstreeks importeren vanuit onder andere Spanje en Italië.
                <br />
                Hebben we iets niet in huis wat je graag zou willen hebben, we
                zullen ons best doen dit de volgende keer in huis te hebben voor
                je!
              </p>
            </div>
          </div>
        </section>
        <section className="about__catering">
          <div className="about__content">
            <h2 className={font.className}>Catering &amp; geschenken</h2>
            <div>
              <p>
                <em>
                  Stel je eens voor, authentieke Mediterraanse hapjes gemaakt
                  met de lekkerste ingrediënten..
                </em>
                <br />
                <br />
                Heb je een feestje of een speciale gelegenheid? Bij Taberna zijn
                hier voldoende mogelijkheden voor! Of heb je gewoon zin in een
                lekker hapje voor thuis bij de borrel? Afhalen kan ook! Vraag
                naar de mogelijkheden, wij zijn heel flexibel!
              </p>
              <p>
                Op zoek naar een mooi cadeaupakket?
                <br />
                Een selectie van originele en ambachtelijke delicatessen maakt
                een geschenk zeer bijzonder. Wij stellen (samen met jou) een
                mooi pakket samen. Ook hier zijn weer diverse mogelijkheden qua
                grootte en prijs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
