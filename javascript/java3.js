/*jslint browser: true*/
/*global $, window, */

$(document).ready(function () {
    "use strict";
    $('.circlechart').circlechart();
    
    
    //smooth scroll
    
    $("a, footer .up a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

      
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function () {
   
                window.location.hash = hash;
            });
        }
    });

});