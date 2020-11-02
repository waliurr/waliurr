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
    cursor animation
    ---------------------------*/
    let mouseCursor = document.querySelector(".cursor");
    let linkCursor = document.querySelectorAll("a");
    
    window.addEventListener("mousemove",cursor);
    
    function cursor(e){
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";
    }
    
    linkCursor.forEach(link => {
        link.addEventListener("mouseover", () =>{
            mouseCursor.classList.add("cursor-big");
        });
        link.addEventListener("mouseleave", () =>{
            mouseCursor.classList.remove("cursor-big");
        });
    });
    
    
    /*---------------------------
    sticky header
    ---------------------------*/
    window.addEventListener("scroll", function(){
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    
    
    /*---------------------------
    main menu
    ---------------------------*/
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navbarToggler.addEventListener('click', function(){
        navbarCollapse.classList.add('navbar-display');
        const close = document.querySelector('.close-btn');
        
        close.addEventListener('click', function(){
            navbarCollapse.classList.remove('navbar-display'); 
        });
    });
    
    const liDropdown = document.querySelectorAll('.dropdown');
    liDropdown.forEach(function (item){
        item.addEventListener('click', function (){
            item.children[1].classList.toggle('display'); 
        });
    });
    
    
    /*---------------------------
    main slider
    ---------------------------*/
    $(".slider-content").slick({
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></button>',
    });
    
    
    /*---------------------------
    about slider
    ---------------------------*/
    $(".about-slider").slick({
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });    
    
    
    /*---------------------------
    counter
    ---------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    
    /*---------------------------
    parallax sections
    ---------------------------*/
    $('.section-booking').parallax('50%',0.1);
    $('.section-counter').parallax('50%',0.1);
    $('.section-contact').parallax('50%',0.1);
    
    
    /*---------------------------
    Scroll to top
    ---------------------------*/
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $('.scroll-to-top').fadeIn();
        }else{
            $('.scroll-to-top').fadeOut();
        }
    });
    
    $('.scroll-to-top').click(function(){
        $("html,body").animate({scrollTop : 0 }, 600);
        return false;
    });
    
    
    /*---------------------------
    WOW animation
    ---------------------------*/
    new WOW().init();
    
    
})(jQuery);