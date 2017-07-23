window.noZensmooth = true

const imagesLoaded = require('imagesloaded')
const Flickity = require('flickity')
const zenscroll = require('zenscroll')

const MENU_ACTIVE_CLASS = 'is-menu-active'
const gallery = document.querySelector('[data-carousel]')
const burger = document.querySelector('[data-hamburger]')
const menu = document.querySelectorAll('.nav__main a')
const mq = window.matchMedia("(max-width: 768px)");
let flkty

const setupFlickity = () => {

    if(mq.matches) {

        // setup flickity images
        const masonryImages = document.querySelectorAll('[data-masonry]')
        Array.prototype.forEach.call(masonryImages, image => {

            image.setAttribute('src', image.getAttribute('data-src'))
        })

        imagesLoaded(gallery, () => {

            flkty = new Flickity(gallery, {
                adaptiveHeight: true
            });
        })

    } else {

        if (flkty) {

            flkty.destroy()
        }

        // setup masonry images
        const masonryImages = document.querySelectorAll('[data-masonry]')
        Array.prototype.forEach.call(masonryImages, image => {

            image.setAttribute('src', image.getAttribute('data-masonry'))
        })
    }

}

mq.addListener(setupFlickity)
setupFlickity()


burger.addEventListener('click', e => {

    document.body.classList.toggle(MENU_ACTIVE_CLASS)
    burger.classList.toggle('is-active')
})

;[].forEach.call(menu, link => {

    link.addEventListener('click', () => {

        if (document.body.classList.contains(MENU_ACTIVE_CLASS)) {

            document.body.classList.remove(MENU_ACTIVE_CLASS)
        }

        const toScrollSection = link.getAttribute('href').replace(/\#/, '')
        zenscroll.to(document.getElementById(toScrollSection))
        return false;
    })
})

const toTopLinks = document.querySelectorAll('[data-totop]')

;[].forEach.call(toTopLinks, (link) => {

    link.addEventListener('click', () => {

        zenscroll.toY(0)
        return false;
    })
})
