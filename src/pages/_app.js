import '@/styles/globals.css'
import '@/styles/main.scss'
import { useEffect } from 'react'

let flkty

export default function App({ Component, pageProps }) {
  
  const setupFlickity = mq => {
    if(mq.matches) {
      // setup flickity images
      const gallery = document.querySelector('[data-carousel]')
      const Flickity = require('flickity')
      const imagesLoaded = require('imagesloaded')
      imagesLoaded(gallery, () => {
        flkty = new Flickity(gallery, {
          adaptiveHeight: true
        });
      })
    } else {
      if (flkty) {
        flkty.destroy()
      }
    }
  }

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    mq.addListener(setupFlickity)
    setupFlickity(mq)
  })

  return <Component {...pageProps} />
}
