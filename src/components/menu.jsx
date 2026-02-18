function Menu({ font }) {
  return (
    <section className="section__menu" id="menu">
      <div className="container container--small">
        <h2 className={font.className}>Menukaart</h2>
        <p>
          Verse en smaakvolle gerechten!
          <br />
          Geniet tijdens je bezoek van de beste hammen, worsten, kazen, belegde
          broodjes, salades, soepen en antipasti.
          <br />
          Onze kaart is gevarieerd, smaakvol en gemaakt met pure en verse
          ingrediënten. Je kunt terecht voor een uitgebreide lunch, een
          aangeklede borrel of een diner. Voor ieder wat wils!
        </p>
      </div>

      <div className="container">
        <article className="menu">
          <h3 className={`menu__name ${font.className}`}>Antipasto</h3>
          <section className="menu__intro">
            <div className="container container--small">
              <p>
                Een antipasto (meervoud: antipasti) is een Italiaans
                aperitiefhapje dat traditioneel voor het avondmaal geserveerd
                wordt.
                <br />
                Antipasti betekent letterlijk voor de maaltijd en duidt een vrij
                lichte schotel aan.
              </p>
              <p>
                <em>
                  "Eten is een moment van rust nemen, proeven, delen en
                  genieten."
                </em>
                <br />
              </p>
            </div>
          </section>
          <section className="menu__content">
            <ul>
              <li>
                <span className="item">Plancha Pane</span>
                <span className="item__dots"></span>
                <span className="item__price">8,-</span>
                <span className="item__description">
                  Plankje met brood, grissini, dips en olijfjes
                </span>
              </li>
              <li>
                <span className="item">Pane</span>
                <span className="item__dots"></span>
                <span className="item__price">5,8</span>
                <span className="item__description">
                  Broodmandje met twee dips
                </span>
              </li>
              <li>
                <span className="item">Oliva</span>
                <span className="item__dots"></span>
                <span className="item__price">5,-</span>
                <span className="item__description">
                  Portie gemarineerde olijven (groen, zwart of gemengd)
                </span>
              </li>
              <li>
                <span className="item">Croquetas Jamon Iberico</span>
                <span className="item__dots"></span>
                <span className="item__price">8,-</span>
                <span className="item__description">
                  Kroketjes met zachte vulling van het Iberico varken, met
                  kruidenaioli
                </span>
              </li>
              <li>
                <span className="item">Formaggio</span>
                <span className="item__dots"></span>
                <span className="item__price">11,-</span>
                <span className="item__description">
                  Plankje met diverse Mediterraanse kaasjes, vijgenbalsamico en
                  vijgentoast
                </span>
              </li>
              <li>
                <span className="item">Croquetas Bacalao</span>
                <span className="item__dots"></span>
                <span className="item__price">8,-</span>
                <span className="item__description">
                  Kroketjes met een vulling van kabeljauw, met limoen-aioli
                </span>
              </li>
              <li>
                <span className="item">Scampi aglio e olio</span>
                <span className="item__dots"></span>
                <span className="item__price">11,-</span>
                <span className="item__description">
                  Mediterraanse scampi gebakken in olijfolie met knoflook en
                  Spaanse peper
                </span>
              </li>
              <li>
                <span className="item">Croquetas Risotto</span>
                <span className="item__dots"></span>
                <span className="item__price">8,-</span>
                <span className="item__description">
                  Kroketjes met een romige vulling van risotto met truffelmayo
                </span>
              </li>
              <li>
                <span className="item">Bruschetta</span>
                <span className="item__dots"></span>
                <span className="item__price">9,- / 11,5</span>
                <span className="item__description">
                  ~ Pomodori; Italiaanse klassieker
                  <br />~ Trio; op diverse wijzen belegd
                </span>
              </li>
              <li>
                <span className="item">Shrimp Twister</span>
                <span className="item__dots"></span>
                <span className="item__price">8,5</span>
                <span className="item__description">
                  Twister garnalen en kruiden met limoen-aioli
                </span>
              </li>
              <li>
                <span className="item">Nacho</span>
                <span className="item__dots"></span>
                <span className="item__price">9,5</span>
                <span className="item__description">
                  Tortillachips met tomatensaus en mozzarella uit de oven
                  <br />
                  <span className="bold">
                    Extra lekker met kip en chili-aioli + 3,5
                  </span>
                  <br />
                  <span className="bold">
                    Extra lekker met gehakt en chili-aioli + 3,5
                  </span>
                </span>
              </li>
              <li>
                <span className="item">Calamari Fritti</span>
                <span className="item__dots"></span>
                <span className="item__price">8,5</span>
                <span className="item__description">
                  In panko gefrituurde verse inktvisringen met limoen-aioli
                </span>
              </li>
              <li>
                <span className="item">Cebolla Croccante</span>
                <span className="item__dots"></span>
                <span className="item__price">8,-</span>
                <span className="item__description">
                  Gefrituurde uienringen met kruidenaioli
                </span>
              </li>
              <li>
                <span className="item">Patatas Taberna</span>
                <span className="item__dots"></span>
                <span className="item__price">8,-</span>
                <span className="item__description">
                  Krokante aardappeltjes met kruidenaioli en Bravasaus
                </span>
              </li>
              <li>
                <span className="item">Pollo frito</span>
                <span className="item__dots"></span>
                <span className="item__price">8,-</span>
                <span className="item__description">
                  Krokant gefrituurde stukjes kippendij met chili-aioli
                </span>
              </li>
              <li>
                <span className="item">Fuet</span>
                <span className="item__dots"></span>
                <span className="item__price">6,-</span>
                <span className="item__description">Catalaanse fuet worst</span>
              </li>
              <li>
                <span className="item">Burrata Plato</span>
                <span className="item__dots"></span>
                <span className="item__price">13,- p.p.</span>
                <span className="item__description">
                  Italiaanse smeuïge kaas uit Puglia. Geserveerd met pesto,
                  rucola, tomaatjes en vleeswaren. Met crostini om lekker te
                  dippen! (vanaf 2 personen)
                </span>
              </li>
              <li>
                <span className="item">Antipasti Salumi</span>
                <span className="item__dots"></span>
                <span className="item__price">13,- pp</span>
                <span className="item__description">
                  Gevulde plank met diverse vleeswaren en olijfjes
                </span>
              </li>
              <li>
                <span className="item">Antipasti Vegetariano</span>
                <span className="item__dots"></span>
                <span className="item__price">13,- pp</span>
                <span className="item__description">
                  Gevulde plank met kaas, gegrilde groenten en olijfjes
                </span>
              </li>
              <li>
                <span className="item">Antipasti Mixto</span>
                <span className="item__dots"></span>
                <span className="item__price">14,- pp</span>
                <span className="item__description">
                  Gevulde plank met diverse vleeswaren, kaas, groenten en
                  olijfjes
                </span>
              </li>
              <li>
                <span className="item">Antipasti Taberna</span>
                <span className="item__dots"></span>
                <span className="item__price">18,5 pp</span>
                <span className="item__description">
                  Een rijkelijk gevulde plank met warme en koude antipasti én
                  daarbij een soepje
                </span>
              </li>
            </ul>
            <span className="item__description">
              <span className="bold">
                Extra lekker met een mandje brood! 5,8
              </span>
            </span>
          </section>
        </article>

        <article className="menu">
          <h3 className={`menu__name ${font.className}`}>Zuppa</h3>
          <section className="menu__intro">
            <div className="container container--small">
              <p>
                In Spanje eet men twee keer per dag warm. Soep wordt dan ook
                veel genuttigd tijdens de lunch. Bij Taberna maken we soepen van
                de lekkerste verse producten.
                <span className="bold">
                  Extra lekker met een mandje brood! 5,8
                </span>
              </p>
            </div>
          </section>
          <section className="menu__content">
            <ul>
              <li>
                <span className="item">Zuppa di Pomodori</span>
                <span className="item__dots"></span>
                <span className="item__price">5,- / 7,-</span>
                <span className="item__description">
                  Gemaakt van pomodori tomaten, met spekjes en
                  basilicum-mascarpone
                </span>
              </li>
              <li>
                <span className="item">Sopa de Batata e Porro</span>
                <span className="item__dots"></span>
                <span className="item__price">5,- / 7,-</span>
                <span className="item__description">
                  Mediterraanse aardappel-prei soep met stukjes kippendij
                </span>
              </li>
              <li>
                <span className="item">Zuppa & Sopa</span>
                <span className="item__dots"></span>
                <span className="item__price">10,-</span>
                <span className="item__description">
                  Duo van soepjes met brood en 1 dip
                </span>
              </li>
            </ul>
          </section>
        </article>

        <article className="menu">
          <h3 className={`menu__name ${font.className}`}>Insalata</h3>
          <section className="menu__intro">
            <div className="container container--small">
              <p>
                De salades worden gemaakt met een mesclun salade,
                kruidenvinaigrette en huisgemaakte croutons. De salades kunnen
                genuttigd worden als voorgerecht of volledige maaltijd.
                <span className="bold">
                  Extra lekker met een mandje brood! 5,8
                </span>
              </p>
            </div>
          </section>
          <section className="menu__content">
            <ul>
              <li>
                <span className="item">Carpaccio</span>
                <span className="item__dots"></span>
                <span className="item__price">13,5 / 16,5</span>
                <span className="item__description">
                  Carpaccio van het rund met zongedroogde tomaatjes,
                  truffelcrème, geroosterde amandelschaafsel en Parmezaanse kaas
                </span>
              </li>
              <li>
                <span className="item">Queso frito</span>
                <span className="item__dots"></span>
                <span className="item__price">13,5 / 16,5</span>
                <span className="item__description">
                  Met gefrituurde geitenkaas, truffel balsamico, gebrande
                  amandelen, crème van rode biet, balsamico-uitjes en gepofte
                  cherrytomaatjes
                </span>
              </li>
              <li>
                <span className="item">Cesare</span>
                <span className="item__dots"></span>
                <span className="item__price">13,- / 16,-</span>
                <span className="item__description">
                  Met gekruide kippendijfilet, Parmezaanse kaas en een romige
                  knoflookdressing
                </span>
              </li>
              <li>
                <span className="item">Pescado</span>
                <span className="item__dots"></span>
                <span className="item__price">13,5 / 16,5</span>
                <span className="item__description">
                  Met gerookte zalm, tonijnsalade, cherrytomaatjes en een crème
                  van rode biet
                </span>
              </li>
              <li>
                <span className="item">Salade Serrano y Manchego</span>
                <span className="item__dots"></span>
                <span className="item__price">13,- / 16,-</span>
                <span className="item__description">
                  Met vijgenbalsamico, dungesneden Jamon Serrano, Pedro Ximenez
                  Manchego, zongedroogde tomaatjes en hazelnoot
                </span>
              </li>
              <li>
                <span className="item">Fungo e funghi</span>
                <span className="item__dots"></span>
                <span className="item__price">13,- / 16,-</span>
                <span className="item__description">
                  Met gebakken champignon, paddenstoel, truffelcrème,
                  Parmezaanse kaas en zongedroogde tomaatjes
                </span>
              </li>
            </ul>
          </section>
        </article>

        <article className="menu">
          <h3 className={`menu__name ${font.className}`}>Panino</h3>
          <section className="menu__intro">
            <div className="container container--small">
              <p>
                Panino is Italiaans voor 'broodje'. Onze panino wordt gemaakt
                van rustiek Schiacciata. Bij Taberna krijg je dus{" "}
                <em>
                  <u>géén platgedrukt stokbroodje met grillstrepen</u>
                </em>
                . Keuze uit wit of meergranen Schiacciata.
              </p>
            </div>
          </section>
          <section className="menu__content">
            <ul>
              <li>
                <span className="item">Tonno</span>
                <span className="item__dots"></span>
                <span className="item__price">11,5</span>
                <span className="item__description">
                  Met tapenade van zongedroogde tomaat, belegd met gemengde sla
                  en huisgemaakte tonijnsalade
                </span>
              </li>
              <li>
                <span className="item">Queso</span>
                <span className="item__dots"></span>
                <span className="item__price">12,9</span>
                <span className="item__description">
                  Met crème van rode biet, gefrituurde geitenkaas, gegrilde
                  courgette, mesclun sla en gedroogde tomaatjes
                </span>
              </li>
              <li>
                <span className="item">Carpaccio</span>
                <span className="item__dots"></span>
                <span className="item__price">12,9</span>
                <span className="item__description">
                  Met truffelcrème, carpaccio, gedroogde tomaatjes, mesclun sla,
                  Parmezaanse kaas en amandelschaafsel
                </span>
              </li>
              <li>
                <span className="item">Cesare</span>
                <span className="item__dots"></span>
                <span className="item__price">11,9</span>
                <span className="item__description">
                  Met chili-aioli, kipdijfilet, mesclun sla en Parmezaanse kaas
                </span>
              </li>
              <li>
                <span className="item">Bruschetta con Funghi</span>
                <span className="item__dots"></span>
                <span className="item__price">12,5</span>
                <span className="item__description">
                  Toast met gebakken champignons, truffelcrème, mesclun sla en
                  Parmezaanse kaas
                </span>
              </li>
              <li>
                <span className="item">Serrano</span>
                <span className="item__dots"></span>
                <span className="item__price">11,5</span>
                <span className="item__description">
                  Met een frisse tapenade van gedroogde tomaatjes en dungesneden
                  Jamon Serrano
                </span>
              </li>
              <li>
                <span className="item">Salmone</span>
                <span className="item__dots"></span>
                <span className="item__price">12,9</span>
                <span className="item__description">
                  Met basilicum-mascarpone, gerookte zalm, cherrytomaatjes en
                  een pistache-pesto
                </span>
              </li>
              <li>
                <span className="item">Pollo frito</span>
                <span className="item__dots"></span>
                <span className="item__price">12,5</span>
                <span className="item__description">
                  Met lichtpikante sriracha-mayo, en gefrituurde stukjes
                  kippendij
                </span>
              </li>
              <li>
                <span className="item">Croquetas</span>
                <span className="item__dots"></span>
                <span className="item__price">11,9</span>
                <span className="item__description">
                  - Jamon Iberico → Gefrituurde kroketjes van het Iberico varken
                  met kruidenaioli
                  <br />
                  óf
                  <br />- Bacalao → Gefrituurde kroketjes van kabeljauw met
                  limoen-aioli
                </span>
              </li>
              <li>
                <span className="item">Burrata bruschetta</span>
                <span className="item__dots"></span>
                <span className="item__price">13,5</span>
                <span className="item__description">
                  Toast met smeuïge burrata, tomaatjes, basilicum, rucola en
                  pesto
                </span>
              </li>
            </ul>
          </section>
          <section className="menu__outro">
            <div className="container container--small">
              <p>
                <b>Lunchdeal!</b>
                <br />
                Voor 3,8 extra maak je je lunch compleet met een kleine soep
                naar keuze!
              </p>
            </div>
          </section>
        </article>

        <article className="menu">
          <h3 className={`menu__name ${font.className}`}>Plancha Taberna</h3>
          <section className="menu__intro">
            <div className="container container--small">
              <p>
                Plancha is plank in het Spaans. Hier serveren wij onze variant
                van het '12-uurtje' op. Keuze uit wit of meergranen
                Schiacciata.
              </p>
            </div>
          </section>
          <section className="menu__content">
            <ul>
              <li>
                <span className="item">Plancha Prosciutto</span>
                <span className="item__dots"></span>
                <span className="item__price">16,-</span>
                <span className="item__description">
                  Kleine soep naar keuze ~ halve panino met Iberico ham
                  kroketjes en aioli ~ halve panino Carpaccio met truffelcrème
                </span>
              </li>
              <li>
                <span className="item">Plancha Pescado</span>
                <span className="item__dots"></span>
                <span className="item__price">16,-</span>
                <span className="item__description">
                  Kleine soep naar keuze ~ halve panino met kabeljauwkroketjes
                  en aioli ~ halve panino Tonno met tomaten tapenade
                </span>
              </li>
              <li>
                <span className="item">Plancha Verdura</span>
                <span className="item__dots"></span>
                <span className="item__price">16,-</span>
                <span className="item__description">
                  Kleine soep naar keuze ~ halve panino met gefrituurde
                  geitenkaas en tomaten tapenade ~ halve panino truffelcrème en
                  gegrilde groenten
                </span>
              </li>
            </ul>
          </section>
        </article>

        <article className="menu">
          <h3 className={`menu__name ${font.className}`}>Pizza 2.0</h3>
          <section className="menu__intro">
            <div className="container container--small">
              <p>
                Onze pizza's 2.0 worden nét anders gemaakt dan anders. Wij
                gebruiken hiervoor Pinsa Romana. Pinsa Romana is een variant van
                pizza die je maakt met een mix aan bloemsoorten, veel water en
                een lange rijstijd. Het deeg wordt daardoor super luchtig en
                heel licht verteerbaar. Deze worden net als de traditionele
                pizza's belegd met tomatensaus, mozzarella en de lekkerste
                ingrediënten.
              </p>
            </div>
          </section>
          <section className="menu__content">
            <ul>
              <li>
                <span className="item">Pizza Margherita</span>
                <span className="item__dots"></span>
                <span className="item__price">13,9</span>
                <span className="item__description"></span>
              </li>
              <li>
                <span className="item">Pizza Parma</span>
                <span className="item__dots"></span>
                <span className="item__price">16,5</span>
                <span className="item__description">
                  Belegd met Prosciutto di Parma, rucola, Parmezaanse kaas en
                  zongedroogde tomaat
                </span>
              </li>
              <li>
                <span className="item">Pizza Piemonte</span>
                <span className="item__dots"></span>
                <span className="item__price">16,-</span>
                <span className="item__description">
                  Belegd met champignons, paddenstoelen, rucola en truffel crème
                </span>
              </li>
              <li>
                <span className="item">Pizza Bologna Mortadella</span>
                <span className="item__dots"></span>
                <span className="item__price">16,-</span>
                <span className="item__description">
                  Belegd met dungesneden Mortadella, rucola, cherrytomaatjes en
                  pistache-pesto
                </span>
              </li>
              <li>
                <span className="item">Pizza Napoli</span>
                <span className="item__dots"></span>
                <span className="item__price">16,-</span>
                <span className="item__description">
                  Belegd met kippendijfilet, chili-aioli, rucola en
                  cherrytomaatjes
                </span>
              </li>
              <li>
                <span className="item">Pizza Puglia</span>
                <span className="item__dots"></span>
                <span className="item__price">16,5</span>
                <span className="item__description">
                  Belegd met gerookte zalm, cherrytomaatjes,
                  basilicum-mascarpone en rucola
                </span>
              </li>
              <li>
                <span className="item">Pizza Florence</span>
                <span className="item__dots"></span>
                <span className="item__price">16,5</span>
                <span className="item__description">
                  Belegd met diverse soorten kazen, amandelschaafsel,
                  vijgenbalsamico, tomaatjes en rucola
                </span>
              </li>
              <li>
                <span className="item">Pizza Burrata</span>
                <span className="item__dots"></span>
                <span className="item__price">17,5</span>
                <span className="item__description">
                  Belegd met een bol Burrata, rucola, tomaatjes en pesto
                  <br />
                  <span className="bold">
                    Extra lekker met dungesneden Coppa di Parma +1,5
                  </span>
                </span>
              </li>
            </ul>
          </section>
        </article>

        <article className="menu">
          <h3 className={`menu__name ${font.className}`}>Burgers</h3>
          <section className="menu__intro">
            <div className="container container--small">
              <p>
                Onze verse burgers met de lekkerste kruiden worden geserveerd op
                een burgerbroodje. De broodjes worden belegd met gemengde sla,
                tomaat, komkommer en de lekkerste Spaanse of Italiaanse
                ingrediënten. We serveren hier een licht pikante
                aardappelsalade bij.
              </p>
            </div>
          </section>
          <section className="menu__content">
            <ul>
              <li>
                <span className="item">Burger España</span>
                <span className="item__dots"></span>
                <span className="item__price">15,-</span>
                <span className="item__description">
                  Gekruide burger met kruidenaioli en dungesneden Chorizo &amp;
                  Serranoham
                </span>
              </li>
              <li>
                <span className="item">Burger Italia</span>
                <span className="item__dots"></span>
                <span className="item__price">15,-</span>
                <span className="item__description">
                  Gekruide burger met truffelcrème, plakjes Coppa di Parma en
                  Parmezaanse kaas
                </span>
              </li>
              <li>
                <span className="item">Burger Tortilla</span>
                <span className="item__dots"></span>
                <span className="item__price">15,-</span>
                <span className="item__description">
                  Vegetarische burger met een tapenade van gedroogde tomaatjes,
                  gegrilde groenten, tortillachips en met mozzarella
                </span>
              </li>
              <li>
                <span className="item">Burger Cipolla</span>
                <span className="item__dots"></span>
                <span className="item__price">15,-</span>
                <span className="item__description">
                  Gekruide burger met chili-knoflooksaus en gefrituurde
                  uienringen
                </span>
              </li>
              <li>
                <span className="item">Burger Mediterraans</span>
                <span className="item__dots"></span>
                <span className="item__price">15,-</span>
                <span className="item__description">
                  Gekruide burger met basilicum-pesto, rucola, Parmezaanse kaas
                  en gedroogde tomaatjes
                </span>
              </li>
              <li>
                <span className="item">Burger Pescado</span>
                <span className="item__dots"></span>
                <span className="item__price">15,-</span>
                <span className="item__description">
                  Visburger van kabeljauw met limoen-aioli, gegrilde courgette
                  en sriracha-mayo
                </span>
              </li>
            </ul>
            <span className="item__description">
              Graag een portie frietjes erbij?{" "}
              <span className="item__price">4,-</span>
            </span>
          </section>
        </article>

        <article className="menu">
          <h3 className={`menu__name ${font.className}`}>Pasta</h3>
          <section className="menu__intro">
            <div className="container container--small">
              <p>
                Pasta (Italiaans voor deeg) eten ze in Italië als eerste gang,
                de zogenaamde <em>'primo'</em>. Bij ons een grotere variant van
                verse Bigoli (dikkere spaghetti). De pasta's worden geserveerd
                met Parmezaanse kaas en rucola
                <br />
                <br />
              </p>
            </div>
          </section>
          <section className="menu__content">
            <ul>
              <li>
                <span className="item">Aglio e olio</span>
                <span className="item__dots"></span>
                <span className="item__price">14,-</span>
                <span className="item__description">
                  Pasta met knoflook, Spaanse peper, olijfolie en peterselie
                </span>
              </li>
              <li>
                <span className="item">Scampi aglio e olio</span>
                <span className="item__dots"></span>
                <span className="item__price">17,5</span>
                <span className="item__description">
                  Pasta aglio e olio met gebakken (gepelde) scampi
                </span>
              </li>
              <li>
                <span className="item">Alfredo Pollo Pesto</span>
                <span className="item__dots"></span>
                <span className="item__price">17,-</span>
                <span className="item__description">
                  Pasta met romige saus, kippendij, pesto, knoflook en
                  amandelschaafsel
                </span>
              </li>
              <li>
                <span className="item">Carbonara 2.0</span>
                <span className="item__dots"></span>
                <span className="item__price">16,5</span>
                <span className="item__description">
                  Pasta met guanciale (Italiaans spek), Mortadella, roomsaus,
                  knoflook en Parmezaanse kaas
                </span>
              </li>
              <li>
                <span className="item">Pasta Bolognese</span>
                <span className="item__dots"></span>
                <span className="item__price">16,5</span>
                <span className="item__description">
                  Pasta met gekruid gehakt en tomatensaus
                </span>
              </li>
              <li>
                <span className="item">Tartufo e funghi</span>
                <span className="item__dots"></span>
                <span className="item__price">17,5</span>
                <span className="item__description">
                  Pasta met gebakken champignons en paddenstoelen in een romige
                  saus van truffel
                </span>
              </li>
            </ul>
          </section>
        </article>

        <article className="menu">
          <h3 className={`menu__name ${font.className}`}>Iets na?</h3>
          <section className="menu__intro">
            <div className="container container--small">
              <p>
                Het dessert na het hoofdgerecht kan worden genuttigd om meerdere
                redenen. Om een voldaan gevoel te geven aan het einde van de
                maaltijd, maar natuurlijk vooral omdat het lekker is!
              </p>
            </div>
          </section>
          <section className="menu__content">
            <ul>
              <li>
                <span className="item">Formaggio</span>
                <span className="item__dots"></span>
                <span className="item__price">11,-</span>
                <span className="item__description">
                  Plankje met diverse Mediterraanse kaasjes, vijgenbalsamico en
                  vijgentoast
                </span>
              </li>
              <li>
                <span className="item">
                  Affogato (Italiaans voor 'verdronken')
                </span>
                <span className="item__dots"></span>
                <span className="item__price">7,-</span>
                <span className="item__description">
                  Vanille-ijs 'verdronken' in warme espresso met slagroom en
                  cantuccini
                </span>
              </li>
              <li>
                <span className="item">Tiramisu</span>
                <span className="item__dots"></span>
                <span className="item__price">7,8</span>
                <span className="item__description">
                  Dé Italiaanse klassieker. De naam betekent letterlijk 'trek
                  mij omhoog'. <br />
                  Gemaakt met espresso, Amaretto, Savoiardi lange vingers en
                  mascarpone
                </span>
              </li>
              <li>
                <span className="item">Churro's</span>
                <span className="item__dots"></span>
                <span className="item__price">7,-</span>
                <span className="item__description">
                  Spaanse 'donuts' met karamelsaus en een bolletje vanille-ijs
                </span>
              </li>
              <li>
                <span className="item">Torta Gelato</span>
                <span className="item__dots"></span>
                <span className="item__price">7,8</span>
                <span className="item__description">
                  Italiaanse ijstaart met chocolade, merengue, karamel en lange
                  vingers
                </span>
              </li>
              <li>
                <span className="item">Taberna's Arretjescake</span>
                <span className="item__dots"></span>
                <span className="item__price">7,5</span>
                <span className="item__description">
                  Arretjescake gemaakt van diverse koekjes en cacao, met
                  slagroom
                </span>
              </li>
              <li>
                <span className="item">Grande Dolce</span>
                <span className="item__dots"></span>
                <span className="item__price">12,-</span>
                <span className="item__description">
                  Dessert met diverse Taberna's lekkernijen
                </span>
              </li>
              <li>
                <span className="item">Biscotti Italiano</span>
                <span className="item__dots"></span>
                <span className="item__price">6,5</span>
                <span className="item__description">
                  Mix van diverse Italiaanse koekjes, zoals cantuccini,
                  amarettini, en Italiaanse Merengue
                </span>
              </li>
            </ul>
            <span className="item__description">
              <span className="bold">
                De toetjes zijn extra lekker met een glaasje Premium Limoncello!
                4,5
              </span>
            </span>
            <ul>
              <li>
                <span className="item">Taberna Coffee</span>
                <span className="item__dots"></span>
                <span className="item__price">7,8</span>
                <span className="item__description">
                  Een kopje heerlijke Bacio koffie, met bonbon, amarettini,
                  cantuccini én een glaasje koude Limoncello
                </span>
              </li>
              <li>
                <span className="item">Spanish Coffee</span>
                <span className="item__dots"></span>
                <span className="item__price">7,8</span>
                <span className="item__description">
                  Koffie met Cuarenta Y Tres en slagroom, met bonbon, amarettini
                  en cantuccini
                </span>
              </li>
              <li>
                <span className="item">Italian Coffee</span>
                <span className="item__dots"></span>
                <span className="item__price">7,8</span>
                <span className="item__description">
                  Koffie met Disaronno Originale en slagroom, met bonbon,
                  amarettini en cantuccini
                </span>
              </li>
              <li>
                <span className="item">Brandy Coffee</span>
                <span className="item__dots"></span>
                <span className="item__price">8,-</span>
                <span className="item__description">
                  Koffie met Vecchia Romagna, Italiaanse brandy van de Trebbiano
                  druif en slagroom met bonbon, amarettini en cantuccini
                </span>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </section>
  );
}

export default Menu;
