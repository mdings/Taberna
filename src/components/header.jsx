import Hours from "./openinghours";

function ToggleMenu(e) {
  const elm = document.querySelector("[data-hamburger]");
  document.body.classList.toggle("is-menu-active");
  elm.classList.toggle("is-active");
}

function CloseMenu() {
  const elm = document.querySelector("[data-hamburger]");
  document.body.classList.remove("is-menu-active");
  elm.classList.remove("is-active");
}

function Goto(e, id) {
  const elm = document.querySelector(id);
  const offset = elm.offsetTop;
  window.scrollTo({ top: offset, left: 0, behavior: "smooth" });
  CloseMenu();
  e.preventDefault();
}

function Header() {
  return (
    <div className="section__header">
      <button
        className="hamburger hamburger--spin"
        type="button"
        aria-label="menu"
        data-hamburger
        onClick={(e) => ToggleMenu(e)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
        <span className="hamburger-label">Menu</span>
      </button>
      <div className="container">
        <nav className="nav__main">
          <ul>
            <li>
              <a href="#about" onClick={(e) => Goto(e, "#about")}>
                Over Taberna
              </a>
            </li>
            <li>
              <a href="#pictures" onClick={(e) => Goto(e, "#pictures")}>
                Sfeerimpressie
              </a>
            </li>
            <li>
              <a href="#menu" onClick={(e) => Goto(e, "#menu")}>
                Menukaart
              </a>
            </li>
            <li>
              <a href="#jobs" onClick={(e) => Goto(e, "#jobs")}>
                Vacatures
              </a>
            </li>
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
            Taberna Weert
            <br />
            Beekstraat 60a
            <br />
            <a href="tel://0495586339">Tel: 0495 586 339</a>
            <br />
            <a href="mailto:info@tabernaweert.nl">info@tabernaweert.nl</a>
            <br />
            <a href="https://www.facebook.com/tabernaweert/">
              Taberna Facebook
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;
