(function ($) {
    "use strict";
    
    new WOW().init();

    
    $(window).scroll(function () {
        $('.sticky-top').css('top', $(this).scrollTop() > 300 ? '0px' : '-100px');
    });

    
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function() {
                    $(this).addClass(showClass).find($dropdownToggle).attr("aria-expanded", "true").end().find($dropdownMenu).addClass(showClass);
                },
                function() {
                    $(this).removeClass(showClass).find($dropdownToggle).attr("aria-expanded", "false").end().find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 900,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>']
    });

    
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 800,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: { 0:{ items:1 }, 768:{ items:2 }, 992:{ items:3 } }
    });

})(jQuery);
