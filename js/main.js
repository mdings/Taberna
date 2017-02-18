const $ = require('jquery')

;(function($){

    $('.menu__name').on('click', function() {

        $(this).next().slideToggle(100)
    })
})($)