export default function Contact({ site, inspect }) {
  if (!site?.fields) return null;
  const { title, address, phone, email, facebookUrl, facebookLabel, hoursTitle, hours } = site.fields;
  const facebook = /^https:\/\//i.test(facebookUrl ?? "") ? facebookUrl : null;

  return (
    <section className="reachability">
      <div className="reachability__hours">
        <div {...inspect?.(site, "hoursTitle")}>{hoursTitle}</div>
        <div {...inspect?.(site, "hours")}>
          {hours?.map((line, index) => <div key={index}>{line}</div>)}
        </div>
      </div>
      <div className="reachability__contact">
        <div {...inspect?.(site, "title")}>{title}</div>
        <div className="editorial-lines" {...inspect?.(site, "address")}>{address}</div>
        {phone && <div><a href={`tel:${phone.replace(/[^+\d]/g, "")}`} {...inspect?.(site, "phone")}>Tel: {phone}</a></div>}
        {email && <div><a href={`mailto:${email.split("@").map(encodeURIComponent).join("@")}`} {...inspect?.(site, "email")}>{email}</a></div>}
        {facebook && facebookLabel && <div><a href={facebook} {...inspect?.(site, "facebookLabel")}>{facebookLabel}</a></div>}
      </div>
    </section>
  );
}
