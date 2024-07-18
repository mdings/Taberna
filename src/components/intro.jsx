function Intro({ font }) {
  return (
    <section className="section__intro" id="about">
      <div className="container container--small">
        <h1 className={font.className}>Over Taberna</h1>
        <p>
          Taberna is een Mediterraanse gastrobar en delicatessenwinkel waar
          alles draait om ambacht, kwaliteit en gevoel.
        </p>
        <p>
          Mensen zijn toe aan onthaasten, goede/verse kwaliteit, en een stukje
          buitenland dichtbij. <br />
          Mediterraans, maar dan dichtbij, met een uitstraling en gevoel van ver
          weg! De wereld van antipasti, hammen, kazen en broodjes met een
          wijntje of een biertje.
        </p>
        <p>
          Als liefhebber van de Zuidelijke keuken kun je bij ons terecht voor
          een smaakvolle lunch, borrel, diner of voor een mooi assortiment van
          Mediterraanse specialiteiten (zoals, vleeswaren, olijfolie, chips en
          diverse antipasti).
        </p>
      </div>
    </section>
  );
}

export default Intro;
