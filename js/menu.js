$(document).ready(function(){

    $('.menu').click(function() {
        if( $('body').hasClass('menu-mobile-open') ) {

        } else {
            $('body').addClass('menu-mobile-open');
        }
    })

});