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
    Responsive Menu
    ---------------------------*/
    const navToogler = document.querySelector('.navbar-toggler');
    const navContent = document.querySelector('#navbar-content');
    
    navToogler.addEventListener("click", function(){
        navContent.classList.toggle("show-nav");
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
    Testimonial slider
    ---------------------------*/
    $('.testimonial-content').slick({
        arrows: false,
        dots: true,
        autoplay: true
    });
    
    
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
    
    
})(jQuery);