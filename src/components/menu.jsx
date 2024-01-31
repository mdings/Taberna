function Menu({font}) {
  return (
    <section className="section__menu" id="menu">
    <div className="container container--small">
        <h2 className={font.className}>Menukaart</h2>
        <p>
            Verse en smaakvolle gerechten!<br />
            Geniet tijdens je bezoek van de beste hammen, worsten, kazen, belegde broodjes, salades, soepen en antipasti.<br />
            Onze kaart is gevarieerd, smaakvol en gemaakt met pure en verse ingrediënten. Je kunt terecht voor een uitgebreide lunch, een aangeklede borrel of een diner. Voor ieder wat wils!
        </p>
    </div>

    <div className="container">
        <article className="menu">
            <h3 className={`menu__name ${font.className}`}>
                Antipasto
            </h3>
            <section className="menu__intro">
                <div className="container container--small">
                    <p>
                        Een antipasto (meervoud: antipasti) is een Italiaans aperitiefhapje dat traditioneel voor het avondmaal geserveerd wordt. Antipasti betekent letterlijk voor de maaltijd en duidt een vrij lichte schotel aan.
                    </p>
                    <p>
                        <em>"Eten is een moment van rust nemen, proeven, delen en genieten."</em><br />
                    </p>
                </div>
            </section>
            <section className="menu__content">
                <ul>
                    <li>
                        <span className="item">Plancha Pane</span>
                        <span className="item__dots"></span>
                        <span className="item__price">7,5</span>
                        <span className="item__description">Plankje met brood, grissini, dips en olijfjes</span>
                    </li>
                    <li>
                        <span className="item">Pane</span>
                        <span className="item__dots"></span>
                        <span className="item__price">4,8</span>
                        <span className="item__description">Broodmandje met twee dips</span>
                    </li>
                    <li>
                        <span className="item">Oliva</span>
                        <span className="item__dots"></span>
                        <span className="item__price">4,5</span>
                        <span className="item__description">Portie gemarineerde olijven (groen, zwart of gemengd)</span>
                    </li>
                    <li>
                        <span className="item">Croquetas Jamon Iberico</span>
                        <span className="item__dots"></span>
                        <span className="item__price">7,9</span>
                        <span className="item__description">Kroketjes met zachte vulling van het Iberico varken, met kruidenaioli</span>
                    </li>
                    <li>
                        <span className="item">Formaggio</span>
                        <span className="item__dots"></span>
                        <span className="item__price">10,5</span>
                        <span className="item__description">Plankje met diverse Mediterraanse kaasjes, vijgenbalsamico en vijgenbrood</span>
                    </li>
                    <li>
                        <span className="item">Croquetas Bacalao</span>
                        <span className="item__dots"></span>
                        <span className="item__price">7,9</span>
                        <span className="item__description">Kroketjes met een vulling van kabeljauw, met limoen aioli</span>
                    </li>
                    <li>
                        <span className="item">Scampi aglio e olio</span>
                        <span className="item__dots"></span>
                        <span className="item__price">10,5</span>
                        <span className="item__description">Mediterraanse scampi gebakken in olijfolie met knoflook en Spaanse peper</span>
                    </li>
                    <li>
                        <span className="item">Gamba frito</span>
                        <span className="item__dots"></span>
                        <span className="item__price">7,9</span>
                        <span className="item__description">Gefrituurde garnalen in een krokant jasje, met limoen-aioli</span>
                    </li>
                    <li>
                        <span className="item">Bruschetta Pomodori</span>
                        <span className="item__dots"></span>
                        <span className="item__price">9,-</span>
                        <span className="item__description">Italiaanse klassieker</span>
                    </li>
                    <li>
                        <span className="item">Bruschetta Trio</span>
                        <span className="item__dots"></span>
                        <span className="item__price">10,5</span>
                        <span className="item__description">Op diverse wijzen belegd</span>
                    </li>
                    <li>
                        <span className="item">Calamaris</span>
                        <span className="item__dots"></span>
                        <span className="item__price">7,5</span>
                        <span className="item__description">Gefrituurde inktvisringen met limoen-aioli</span>
                    </li>
                    <li>
                        <span className="item">Nacho</span>
                        <span className="item__dots"></span>
                        <span className="item__price">8,5</span>
                        <span className="item__description">Gekruide tortillachips met tomatensaus en      mozzarella uit de oven
                        <span className="bold">Extra lekker met kip en chili-aioli + 3,-</span>
                        </span>
                        <span className="bold">Extra lekker met gehakt en chili-aioli + 3,-</span>
                    </li>
                    <li>
                        <span className="item">Cebolla</span>
                        <span className="item__dots"></span>
                        <span className="item__price">7,5</span>
                        <span className="item__description">Gefrituurde uienringen met kruidenaioli</span>
                    </li>
                    
                    <li>
                        <span className="item">Chorizo Assado</span>
                        <span className="item__dots"></span>
                        <span className="item__price">10,5</span>
                        <span className="item__description">Op tafel geflambeerde chorizo!</span>
                    </li>
                    <li>
                        <span className="item">Pollo frito</span>
                        <span className="item__dots"></span>
                        <span className="item__price">7,9</span>
                        <span className="item__description">Gefrituurde kipstukjes met chili-aioli</span>
                    </li>
                    <li>
                        <span className="item">Fuet</span>
                        <span className="item__dots"></span>
                        <span className="item__price">5,5-</span>
                        <span className="item__description">Catalaanse fuet worst</span>
                    </li>
                    <li>
                        <span className="item">Antipasti Salumi</span>
                        <span className="item__dots"></span>
                        <span className="item__price">12,9 pp</span>
                        <span className="item__description">Gevulde plank met diverse vleeswaren en olijfjes</span>
                    </li>
                    <li>
                        <span className="item">Antipasti Vegetariano</span>
                        <span className="item__dots"></span>
                        <span className="item__price">12,9 pp</span>
                        <span className="item__description">Gevulde plank met kaas, gegrilde groenten en olijfjes</span>
                    </li>
                    <li>
                        <span className="item">Antipasti Mixto</span>
                        <span className="item__dots"></span>
                        <span className="item__price">13,9 pp</span>
                        <span className="item__description">Gevulde plank met diverse vleeswaren, kaas, groenten en olijfjes</span>
                    </li>
                    <li>
                        <span className="item">Antipasti Taberna</span>
                        <span className="item__dots"></span>
                        <span className="item__price">16,9 pp</span>
                        <span className="item__description">Een rijkelijk gevulde plank met warme en koude antipasti én daarbij een huisgemaakt soepje</span>
                    </li>
                   
                </ul>
            </section>
        </article>

        <article className="menu">
            <h3 className={`menu__name ${font.className}`}>
                Zuppa
            </h3>
            <section className="menu__intro">
                <div className="container container--small">
                    <p>
                        In Spanje eet men twee keer per dag warm. Soep wordt dan ook veel genuttigd tijdens de lunch. Bij Taberna maken we soepen van de lekkerste verse producten.
                        <span className="bold">Extra lekker met een mandje brood! 4,5</span>
                    </p>
                </div>
            </section>
            <section className="menu__content">
                <ul>
                    <li>
                        <span className="item">Zuppa di Pomodoro</span>
                        <span className="item__dots"></span>
                        <span className="item__price">4,4 (klein) /  6,5</span>
                        <span className="item__description">Gemaakt van pomodori tomaten, met spekjes en basilicum-mascarpone</span>
                    </li>
                    <li>
                        <span className="item">Sopa de Batata e Ajo</span>
                        <span className="item__dots"></span>
                        <span className="item__price">4,4 (klein) /  6,5</span>
                        <span className="item__description">Aardappelsoep met knoflook, Parmezaanse kaas, stukjes kippendij en basilicum-mascarpone</span>
                    </li>
                    <li>
                        <span className="item">Zuppa & Sopa</span>
                        <span className="item__dots"></span>
                        <span className="item__price">8,-</span>
                        <span className="item__description">Duo van soepjes met brood en 1 dip</span>
                    </li>
                </ul>
            </section>
        </article>

        <article className="menu">
            <h3 className={`menu__name ${font.className}`}>
                Insalata
            </h3>
            <section className="menu__intro">
                <div className="container container--small">
                    <p>
                    De salades worden gemaakt met een mesclun salade, kruidenvinaigrette en huisgemaakte croutons.
De salades kunnen genuttigd worden als voorgerecht of volledige maaltijd.
                            <span className="bold">Extra lekker met een mandje brood! 4,5</span>
                    </p>
                </div>
            </section>
            <section className="menu__content">
                <ul>
                    <li>
                        <span className="item">Carpaccio</span>
                        <span className="item__dots"></span>
                        <span className="item__price">11,5 / 14,9 (groot)</span>
                        <span className="item__description">Carpaccio van het rund met zongedroogde tomaatjes, truffelcrème, geroosterde amandelschaafsel en Parmezaanse kaas</span>
                    </li>
                    <li>
                        <span className="item">Queso frito</span>
                        <span className="item__dots"></span>
                        <span className="item__price">11,5 / 14,9 (groot)</span>
                        <span className="item__description">Met gefrituurde geitenkaas, truffel balsamico, gebrande amandelen, crème van rode biet, balsamico-uitjes en gepofte cherrytomaatjes</span>
                    </li>
                    <li>
                        <span className="item">Cesare</span>
                        <span className="item__dots"></span>
                        <span className="item__price">11,5 / 14,9 (groot)</span>
                        <span className="item__description">Met gekruide kippendijfilet, Parmezaanse kaas, gekookt ei en een romige knoflookdressing</span>
                    </li>
                    <li>
                        <span className="item">Pescado</span>
                        <span className="item__dots"></span>
                        <span className="item__price">11,5 / 14,9 (groot)</span>
                        <span className="item__description">Met tonijnsalade, gemarineerde garnaaltjes, crème van rode bietjes, gepofte cherrytomaatjes en een limoen-aioli</span>
                    </li>
                   
                  
                    <li>
                        <span className="item">Vitello Tonnato</span>
                        <span className="item__dots"></span>
                        <span className="item__price">11,5 / 14,9 (groot)</span>
                        <span className="item__description">Met dungesneden kalfsmuis, een romige tonijn crème, kappertjes
en zongedroogde tomaatjes</span>
                    </li>
                </ul>
            </section>
        </article>

        <article className="menu">
            <h3 className={`menu__name ${font.className}`}>
                Panino
            </h3>
            <section className="menu__intro">
                <div className="container container--small">
                    <p>
                        Panino is Italiaans voor ‘broodje’. Onze panino wordt gemaakt van rustiek brood, koud belegd. Bij Taberna krijg je dus <em><u>géén platgedrukt stokbroodje met grillstrepen</u></em>. Keuze uit Foccacia wit of meergranen foccacia.
                    </p>
                </div>
            </section>
            <section className="menu__content">
                <ul>
                    <li>
                        <span className="item">Tonno</span>
                        <span className="item__dots"></span>
                        <span className="item__price">10,4</span>
                        <span className="item__description">Met tapenade van zongedroogde tomaat, belegd met gemengde sla en huisgemaakte tonijnsalade</span>
                    </li>
                    {/* <li>
                        <span className="item">Jamon Serrano</span>
                        <span className="item__dots"></span>
                        <span className="item__price">11,5</span>
                        <span className="item__description">Met tapenade van gedroogde tomaatjes, Serranoham, mesclun sla, basilicum-mascarpone en gekookt ei</span>
                    </li> */}
                    <li>
                        <span className="item">Queso</span>
                        <span className="item__dots"></span>
                        <span className="item__price">11,5-</span>
                        <span className="item__description">Met crème van rode biet, gefrituurde geitenkaas, gegrilde courgette, mesclun sla en gedroogde tomaatjes</span>
                    </li>
                    <li>
                        <span className="item">Carpaccio</span>
                        <span className="item__dots"></span>
                        <span className="item__price">11,5-</span>
                        <span className="item__description">Met truffelcrème, carpaccio, gedroogde tomaatjes, mesclun sla, Parmezaanse kaas en amandelschaafsel</span>
                    </li>
                    <li>
                        <span className="item">Cesare</span>
                        <span className="item__dots"></span>
                        <span className="item__price">10,9</span>
                        <span className="item__description">Met chili-aioli, kipdijfilet, mesclun sla en Parmezaanse kaas</span>
                    </li>
                    <li>
                        <span className="item">Bruschetta con Funghi</span>
                        <span className="item__dots"></span>
                        <span className="item__price">11,5</span>
                        <span className="item__description">Toast met gebakken champignons, truffelcrème, mesclun sla en Parmezaanse kaas</span>
                    </li>        
                    <li>
                        <span className="item">Spianata Romana</span>
                        <span className="item__dots"></span>
                        <span className="item__price">10,4</span>
                        <span className="item__description">Met kruidenaioli, Spianata Romana, Parmezaanse kaas en gegrilde paprika</span>
                    </li>        
                    <li>
                        <span className="item">Vitello Tonnato</span>
                        <span className="item__dots"></span>
                        <span className="item__price">11,5</span>
                        <span className="item__description">Met tonijn crème, dun gesneden kalfsmuis, zongedroogde tomaatjes en kappertjes</span>
                    </li>        
                    <li>
                        <span className="item">Croquetas Jamon Iberico</span>
                        <span className="item__dots"></span>
                        <span className="item__price">10,9</span>
                        <span className="item__description">Gefrituurde kroketjes van het Iberico varken met kruidenaioli</span>
                    </li>        
                    <li>
                        <span className="item">Croquetas Bacalao</span>
                        <span className="item__dots"></span>
                        <span className="item__price">10,9</span>
                        <span className="item__description">Gefrituurde kroketjes van kabeljauw met limoen-aioli</span>
                    </li>        
                </ul>
            </section>
            <section className="menu__outro">
                <div className="container container--small">
                    <p>
                        <b>Lunchdeal!</b>
                        <br />
                        Voor 3,5 extra maak je je lunch compleet met
                        een kleine soep naar keuze!
                    </p>
                </div>
            </section>
        </article>

        <article className="menu">
            <h3 className={`menu__name ${font.className}`}>
                Plancha Taberna
            </h3>
            <section className="menu__intro">
                <div className="container container--small">
                    <p>
                        Plancha is plank in het Spaans. Hier serveren wij onze variant van het ’12-uurtje’ op.
                        Keuze uit Foccacia wit of meergranen foccacia.
                    </p>
                </div>
            </section>
            <section className="menu__content">
                <ul>
                    <li>
                        <span className="item">Plancha Prosciutto</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,8</span>
                        <span className="item__description">Kleine soep naar keuze ~ half broodje met kruidenaioli en
                            ibericoham kroketjes ~ halve panino Carpaccio</span>
                    </li>
                    <li>
                        <span className="item">Plancha Pescado</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,8</span>
                        <span className="item__description">Kleine soep naar keuze ~ half broodje met limoen-aioli en
                            kabeljauw kroketjes ~ halve panino Tonno</span>
                    </li>
                    <li>
                        <span className="item">Plancha Verdura</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,8</span>
                        <span className="item__description">Kleine soep naar keuze ~ half broodje met tomaten tapenade en
                            gefrituurde geitenkaas ~ halve panino truffelmayo en gegrilde groenten</span>
                    </li>
                </ul>
            </section>
        </article>

        <article className="menu">
            <h3 className={`menu__name ${font.className}`}>
                Pizza 2.0
            </h3>
            <section className="menu__intro">
                <div className="container container--small">
                    <p>
                    Onze pizza’s 2.0 worden nét anders gemaakt dan anders. Wij gebruiken hiervoor Pinsa Romana.
Pinsa Romana is een variant van pizza die je maakt met een mix aan bloemsoorten, veel water en een
lange rijstijd. Het deeg wordt daardoor super luchtig en heel licht verteerbaar.
Deze worden net als de traditionele pizza’s belegd met tomatensaus, mozzarella en de lekkerste
ingrediënten.
                    </p>
                </div>
            </section>
            <section className="menu__content">
                <ul>
                    <li>
                        <span className="item">Pizza Margharita</span>
                        <span className="item__dots"></span>
                        <span className="item__price">12,5</span>
                        <span className="item__description"></span>
                    </li>
                    <li>
                        <span className="item">Pizza Parma</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,9</span>
                        <span className="item__description">Belegd met Prosciutto, rucola, Parmezaanse kaas en zongedroogde tomaat</span>
                    </li>
                    <li>
                        <span className="item">Pizza Piemonte</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,9</span>
                        <span className="item__description">Belegd met champignons, paddenstoelen, rucola en truffel crème</span>
                    </li>
                    <li>
                        <span className="item">Pizza Bologna</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,9</span>
                        <span className="item__description">Belegd met gekruid gehakt, Parmezaanse kaas, chili-aioli en rucola</span>
                    </li>
                    <li>
                        <span className="item">Pizza Toscane</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,9</span>
                        <span className="item__description">Belegd met gemarineerde garnaaltjes, gegrilde courgette, limoen-aioli en
rucola</span>
                    </li>
                    <li>
                        <span className="item">Pizza Napoli</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,9</span>
                        <span className="item__description">Belegd met kippendijfilet, chili-aioli, rucola en cherrytomaatjes</span>
                    </li>
                </ul>
            </section>
        </article>

        <article className="menu">
            <h3 className={`menu__name ${font.className}`}>
                Burgers
            </h3>
            <section className="menu__intro">
                <div className="container container--small">
                    <p>
                    Onze verse burgers met de lekkerste kruiden worden geserveerd op een burgerbroodje. De broodjes worden
belegd met sla, tomaat, komkommer en verder uiteraard de lekkerste Spaanse of Italiaanse ingrediënten.
We serveren hier een licht pikante aardappelsalade bij.
                    </p>
                </div>
            </section>
            <section className="menu__content">
                <ul>
                    <li>
                        <span className="item">Burger España</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,5</span>
                        <span className="item__description">Gekruide burger met kruidenaioli en dungesneden Chorizo &amp; Serranoham</span>
                    </li>
                    <li>
                        <span className="item">Burger Italia</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,5</span>
                        <span className="item__description">Gekruide burger met truffelcrème, plakjes Coppa di Parma en Parmezaanse kaas</span>
                    </li>
                    <li>
                        <span className="item">Burger Tortilla</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,5</span>
                        <span className="item__description">Vegetarische burger met een tapenade van gedroogde tomaatjes, gegrilde groenten,
                        tortillachips en met mozzarella</span>
                    </li>
                    <li>
                        <span className="item">Burger Cipolla</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,5</span>
                        <span className="item__description">Gekruide burger met chili-knoflooksaus en gefrituurde uienringen</span>
                    </li>
                    <li>
                        <span className="item">Burger Mediteraans</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,5</span>
                        <span className="item__description">Gekruide burger met basilicum-pesto, rucola, Parmezaanse kaas en
                            gedroogde tomaatjes</span>
                    </li>
                </ul>
                <span className="item__description">Graag een portie frietjes erbij? <span className="item__price">4,-</span></span>
            </section>
        </article>

        <article className="menu">
            <h3 className={`menu__name ${font.className}`}>
                Pasta
            </h3>
            <section className="menu__intro">
                <div className="container container--small">
                    <p>
                        Pasta (Italiaans voor deeg) eten ze in Italië als eerste gang, de zogenaamde <em>'primo'</em>.

Bij ons een grotere variant van verse Bigoli (dikkere spaghetti).
De pasta’s worden geserveerd met Parmezaanse kaas en rucola<br/><br/>
<b>OP DONDERDAGAVOND ZIJN ALLE PASTA’S TE BESTELLEN VOOR MAAR 14,5</b>

                    </p>
                </div>
            </section>
            <section className="menu__content">
                <ul>
                    <li>
                        <span className="item">Aglio e olio</span>
                        <span className="item__dots"></span>
                        <span className="item__price">14,-</span>
                        <span className="item__description">Pasta met gebakken scampi, knoflook, Spaanse peper, olijfolie en peterselie</span>
                    </li>
                    <li>
                        <span className="item">Aglio e olio + SCAMPI</span>
                        <span className="item__dots"></span>
                        <span className="item__price">17,-</span>
                        <span className="item__description">Pasta aglio e olio met gebakken (gepelde) scampi</span>
                    </li>
                    <li>
                        <span className="item">Aglio e olio + KIPPENDIJ</span>
                        <span className="item__dots"></span>
                        <span className="item__price">16,-</span>
                        <span className="item__description">Pasta aglio e olio met gebakken gekruide kippendijfilet</span>
                    </li>
                    <li>
                        <span className="item">Carbonara 2.0</span>
                        <span className="item__dots"></span>
                        <span className="item__price">16,-</span>
                        <span className="item__description">Pasta met Pancetta, Mortadella, roomsaus, knoflook en Parmezaanse kaas</span>
                    </li>
                    <li>
                        <span className="item">Pasta Bolognese</span>
                        <span className="item__dots"></span>
                        <span className="item__price">16,-</span>
                        <span className="item__description">Pasta met gekruid gehakt en tomatensaus</span>
                    </li>
                    <li>
                        <span className="item">Tartufo e funghi</span>
                        <span className="item__dots"></span>
                        <span className="item__price">17,-</span>
                        <span className="item__description">Pasta met gebakken champignons en paddenstoelen in een romige saus van truffel</span>
                    </li>
                </ul>
            </section>
        </article>

        <article className="menu">
            <h3 className={`menu__name ${font.className}`}>
                Iets na?
            </h3>
            <section className="menu__intro">
                <div className="container container--small">
                    <p>
                        Het dessert na het hoofdgerecht kan worden genuttigd om meerdere redenen. Om een voldaan gevoel te

                        geven aan het einde van de maaltijd, maar natuurlijk vooral omdat het lekker is!
                    </p>
                </div>
            </section>
            <section className="menu__content">
                <ul>
                    <li>
                        <span className="item">Formaggio</span>
                        <span className="item__dots"></span>
                        <span className="item__price">10,5</span>
                        <span className="item__description">Plankje met diverse Mediterraanse kaasjes, vijgenbalsamico en vijgentoast</span>
                    </li>
                    <li>
                        <span className="item">Affogato (Italiaans voor ‘verdronken’)</span>
                        <span className="item__dots"></span>
                        <span className="item__price">7,-</span>
                        <span className="item__description">Vanille-ijs 'verdronken' in warme espresso met slagroom en cantuccini</span>
                    </li>
                    <li>
                        <span className="item">Tiramisu</span>
                        <span className="item__dots"></span>
                        <span className="item__price">7,8</span>
                        <span className="item__description">Dé Italiaanse klassieker. De naam betekent letterlijk 'trek mij omhoog'. <br />Gemaakt met espresso, Amaretto, Savoiardi lange vingers en mascarpone</span>
                    </li>
                    <li>
                        <span className="item">Churro's</span>
                        <span className="item__dots"></span>
                        <span className="item__price">7,-</span>
                        <span className="item__description">Spaanse ‘donuts’ met karamelsaus en een bolletje vanille-ijs</span>
                    </li>
                    <li>
                        <span className="item">Frutto Amarena</span>
                        <span className="item__dots"></span>
                        <span className="item__price">7,-</span>
                        <span className="item__description">Warme kersen met rode port, vanille-ijs, amarettini en slagroom</span>
                    </li>
                    <li>
                        <span className="item">Taberna's Arretjescake</span>
                        <span className="item__dots"></span>
                        <span className="item__price">7,5</span>
                        <span className="item__description">Arretjescake gemaakt van diverse koekjes en cacao, met slagroom</span>
                    </li>
                    <li>
                        <span className="item">Grande Dolce</span>
                        <span className="item__dots"></span>
                        <span className="item__price">10,5</span>
                        <span className="item__description">Dessert met diverse Taberna’s lekkernijen</span>
                    </li>
                    <li>
                        <span className="item">Biscotti Italiano</span>
                        <span className="item__dots"></span>
                        <span className="item__price">6,5</span>
                        <span className="item__description">Mix van diverse Italiaanse koekjes, zoals cantuccini, amarettini, en Italiaanse Merengue</span>
                    </li>
                </ul>
            </section>
        </article>
    </div>
</section>
  )
}

export default Menu