import { useEffect, useState } from "react";
import Contact from "./contact";
import ContentfulPicture from "./contentful-picture";

const links = new Map([
  ["about", "aboutLabel"], ["pictures", "galleryLabel"],
  ["menu", "menuLabel"], ["jobs", "jobsLabel"],
]);

export default function Header({ site, inspect, anchors }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("is-menu-active", open);
    return () => document.body.classList.remove("is-menu-active");
  }, [open]);

  if (!site?.fields) return null;
  const { logo, headerImage, title, mobileMenuLabel } = site.fields;

  function goTo(event, id) {
    const target = document.getElementById(id);
    if (!target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setOpen(false);
    target.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="section__header" id="top">
      <ContentfulPicture asset={headerImage} alt="" className="section-background" priority quality={62} {...inspect?.(site, "headerImage")} />
      <button
        className={`hamburger hamburger--spin${open ? " is-active" : ""}`}
        type="button"
        aria-label={mobileMenuLabel}
        aria-expanded={open}
        aria-controls="main-navigation"
        data-hamburger
        onClick={() => setOpen(!open)}
        {...inspect?.(site, "mobileMenuLabel")}
      >
        <span className="hamburger-box"><span className="hamburger-inner" /></span>
        <span className="hamburger-label">{mobileMenuLabel}</span>
      </button>
      <div className="container">
        <nav className="nav__main" id="main-navigation" aria-label="Hoofdnavigatie">
          <ul>
            {anchors.filter((id) => links.has(id)).map((id) => {
              const field = links.get(id);
              return (
                <li key={id} data-navigation={id}>
                  <a href={`#${id}`} onClick={(event) => goTo(event, id)} {...inspect?.(site, field)}>
                    {site.fields[field]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="logo">
          <ContentfulPicture asset={logo} alt={logo?.fields?.description || title} eager sizes="(max-width: 410px) calc(100vw - 50px), 360px" {...inspect?.(site, "logo")} />
        </div>
        <Contact site={site} inspect={inspect} />
      </div>
    </header>
  );
}
