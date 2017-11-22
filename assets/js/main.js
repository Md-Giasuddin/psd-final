(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();



        $(".product-list").masonry();


     $(".slider-active").owlCarousel({
         items: 1,
         loop: true,
         nav: true,
         dots: false,
         navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
         
     });
     $(".product-promotion").owlCarousel({
         items: 1,
         loop: true,
         nav: false,
         dots: true,
         
     });

    $(".menu-trigger").on("click", function() {
        $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
        return false;
    });

    $(".menu-close, .off-canvas-overlay").on("click", function() {
        $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
    });

    });


    jQuery(window).load(function () {


    });


}(jQuery));
