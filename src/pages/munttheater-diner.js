import Head from 'next/head'
import Script from 'next/script'
import { Merriweather, Amatic_SC } from '@next/font/google'

const mw = Merriweather({ 
  weight: ['300', '400'], 
  subsets: ['latin'] 
})

const ac = Amatic_SC({ 
  weight: ['400'], 
  subsets: ['latin'] 
})

export default function MunttheaterDiner() {
  
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Welkom bij Taberna - Munttheater Diner</title>
        <meta name="description" content="Welkom bij Taberna - Munttheater Diner" />
        <meta name="author" content="Taberna Weert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`popup ${mw.className}`}>
        <img src="/img/munttheaterWeert.jpg" />
        <div className="container">
          <h1 className={ac.className}>Munttheater Diner</h1>
          <p>Maak een avondje uit in het Munttheater compleet met het "Munttheater-diner"!</p>
          <p>Wij zijn gevestigd op loopafstand van het Munttheater en zorgen ervoor, dat je:</p>
          <ul>
            <li>Kunt genieten van een heerlijk diner dat wij op eigen wijze vormgeven</li>
            <li>uiterlijk 45 minuten voor aanvang van de voorstelling gereed bent en dus tijdig in het Munttheater aanwezig kunt zijn voor het bezoeken van de voorstelling.</li>
          </ul>

          <p>
            Boeken doe je rechtstreeks bij een ons:</p>
            <ul>
            <li>Reserveer uitsluitend telefonisch</li>
            <li>Vermeld dat het een “Munttheater-diner” betreft en je na het diner een bezoek brengt aan een voorstelling in het Munttheater</li>
            <li>Vermeld de aanvangstijd van de voorstelling</li>
            <li>Vermeld eventuele dieetwensen</li>
           
            </ul>
            <p>Wij wensen je alvast een heerlijke culinaire en culturele avond!</p>
        </div>
      </div>
    </>
  )
}