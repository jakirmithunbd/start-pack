
(function($){
  "use strict";

    // Toggle menu
     $(".navbar-toggle").click(function() {
        $(this).toggleClass('in');
    });


    /*** Sticky header */
    $(window).scroll(function() {

        if ($(window).scrollTop() > 0) {
          $(".header").addClass("sticky");
        } 
        else {
          $(".header").removeClass("sticky");
        }
    });


    /*** Header height = gutter height */

    function setGutterHeight(){
        var header = document.querySelector('.header'),
            gutter = document.querySelector('.header_gutter');
            gutter.style.height = header.offsetHeight + 'px';
    }

    window.onload = setGutterHeight;
    window.onresize = setGutterHeight;


    /** Case Study Slider **/ 
    $(".case-study-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '80px',
        arrows: false,
        responsive: [{ 
            breakpoint: 500,
            settings: {
                dots: true,
            } 
        }]
    });

    /** Testimonials Slider **/ 
    $(".testimonial-slider").slick({
        dots: false,
        infinite: true,
        arrows: true,
        responsive: [{ 
            breakpoint: 500,
            settings: {
                dots: true,
            } 
        }]
    });

   function scrollNav() {
      $('.nav a').click(function(){  
        //Animate
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 20
        }, 500);
        return false;
      });
      $('.scrollTop a').scrollTop();
    }
    scrollNav();

    /***  Video Popup */
    $(".play-video").colorbox({
        close: '<i class="fas fa-times"></i>',
        iframe:true,
        innerWidth:640, 
        innerHeight:390
    });
    
})(jQuery);