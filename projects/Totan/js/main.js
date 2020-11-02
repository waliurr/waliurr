/*-------------------------------------------------------
All javascript and jquery plugins activation
-------------------------------------------------------*/
(function($){
    "use strict";
    
    /*---------------------------
    preloader timeout
    ---------------------------*/
    setTimeout(function(){
        $('#preloader-area').fadeOut();
    }, 1500);
    
    
    /*---------------------------
    sticky header
    ---------------------------*/
    window.addEventListener("scroll", function(){
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });  
    
    
    /*---------------------------
    side menu
    ---------------------------*/
    const openMenu = document.querySelector('.open-menu');
    const closeMenu = document.querySelector('.close-menu');
    const sideMenubar = document.querySelector('.side-menubar');
    
    openMenu.addEventListener("click", function() {
        sideMenubar.classList.add("display");
    });
    
    closeMenu.addEventListener("click", function() {
        sideMenubar.classList.remove("display"); 
    });
    
    
    /*---------------------------
    Smooth scrolling
    ---------------------------*/
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            let hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    
    
    /*---------------------------
    counter
    ---------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    
    /*---------------------------
    Video link
    ---------------------------*/
    $('.venobox').venobox(); 
    
    
    /*---------------------------
    parallax sections
    ---------------------------*/
    $('.section-video').parallax('50%',0.1);
    $('.section-testimonial').parallax('50%',0.1);
    
    
    /*---------------------------
    Testimonial slider
    ---------------------------*/
    $('.owl-carousel.testi-slider').owlCarousel({
        loop:true,
        items:3,
        margin:30,
        nav: true,
        navText: [
            '<i class="ti-angle-left"></i>',
            '<i class="ti-angle-right"></i>'
        ],
        navSpeed: false,
        navElement: 'button type="button" role="presentation"',
        navContainer: false,
        navContainerClass: 'owl-nav',
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    
    
    /*---------------------------
    branding slider
    ---------------------------*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:5,
        margin:30,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:5
            }
        }
    });
    
    
    /*---------------------------
    Scroll to top
    ---------------------------*/
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $('#scroll-to-top').fadeIn();
        }else{
            $('#scroll-to-top').fadeOut();
        }
    });
    
    $('#scroll-to-top').click(function(){
        $("html,body").animate({scrollTop : 0 }, 600);
        return false;
    });
    
    
    /*---------------------------
    WOW animation
    ---------------------------*/
    new WOW().init();
    
    
})(jQuery);