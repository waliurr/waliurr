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
        const header = document.querySelector("#header-area");
        header.classList.toggle("sticky", window.scrollY > 0);
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
    Progress line
    ---------------------------*/
    const progressDone = document.querySelectorAll(".progress-done");

    Array.from(progressDone).forEach(function(item){
        item.style.width = item.getAttribute('data-percent') + '%';
        item.style.opacity = 1;
    });

    
    /*---------------------------
    Education slider
    ---------------------------*/
    $('.owl-carousel.education-slider').owlCarousel({
        loop:true,
        items:2,
        margin:30,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items: 2
            }
        }
    });
    
    
    /*---------------------------
    Portfolio slider
    ---------------------------*/
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    
    /*---------------------------
    counter
    ---------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    /*---------------------------
    Testimonial slider
    ---------------------------*/
    $('.owl-carousel.testi-slider').owlCarousel({
        loop:true,
        items:1,
        margin:30,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        navSpeed: false,
        navElement: 'button type="button" role="presentation"',
        navContainer: false,
        navContainerClass: 'owl-nav',
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            }
        }
    });
    
    /*---------------------------
    Achivement slider
    ---------------------------*/
    $('.owl-carousel.achivement-slider').owlCarousel({
        loop:true,
        items:3,
        margin:30,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
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