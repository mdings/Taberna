function Top({ site, inspect }) {
  const label = site?.fields?.backToTopLabel;
  if (!label) return null;
  return (
    <div className="totop">
      <a
        className="button"
        data-totop
        href="#top"
        {...inspect?.(site, "backToTopLabel")}
        onClick={(event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        {label}
      </a>
    </div>
  );
}

export default Top;
