function Specials({font}) {
  return (
    <section className="section__specials">
      <div className="container">
          <h2 className={font.className}>Specials</h2>
          
          <h3>Munttheater diner</h3>
          <p><a href="javascript:void(0);" onClick={e => window.open('/munttheater-diner', 'Munttheater Diner', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=600,height=750')}>Maak een avondje uit in het Munttheater compleet met het "Munttheater-diner"!</a></p>

          <h3>Taberna lunchdeal</h3>
          <p> Voor 3,5 extra krijg je een kleine soep naar keuze bij je Panino naar keuze</p>

          <h3>Donderdagavond</h3>
          <p>3 gangen keuze menu à 25,90 p.p. (meer dan 30 keuzes)</p>

          <h3>Vrijdagavond</h3>
          <p>Typisch Taberna; Avondvullend dineren met kleine gerechtjes (keuze uit 5 of 6 gangen, meer dan 30 keuzes)</p>
         
      </div>
  </section>
  )
}

export default Specials