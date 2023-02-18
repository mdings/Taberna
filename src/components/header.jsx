import Hours from "./openinghours"

function Header() {
  return (
    <div className="section__header">
    <button className="hamburger hamburger--spin" type="button" aria-label="menu" data-hamburger>
        <span className="hamburger-box">
            <span className="hamburger-inner"></span>
        </span>
        <span className="hamburger-label">Menu</span>
    </button>
    <div className="container">
        <nav className="nav__main">
            <ul>
                <li><a href="#about">Over Taberna</a></li>
                <li><a href="#pictures">Sfeerimpressie</a></li>
                <li><a href="#agenda">Agenda</a></li>
                <li><a href="#menu">Menukaart</a></li>
                <li><a href="#reservation">Reserveer</a></li>
            </ul>
        </nav>
        <div className="logo">
            <img src="/logo.svg" alt="Logo" />
        </div>
        <section className="reachability">
            <div className="reachability__hours">
              <Hours />
            </div>
            <div className="reachability__contact">
                Taberna Weert<br />
                Beekstraat 60a<br />
                <a href="tel://0495586339">Tel: 0495 586 339</a><br />
                <a href="mailto:info@tabernaweert.nl">info@tabernaweert.nl</a><br />
                <a href="https://www.facebook.com/tabernaweert/">Taberna Facebook</a>
            </div>
        </section>
    </div>
</div>
  )
}

export default Header