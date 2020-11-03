(function($){
    "use strict";
    
    
    //for timeout preloader
    setTimeout(function(){
        $('#preloader-area').fadeToggle();
    },1500);
    
    //for sticky menu
    $(window).on('scroll',function(){
        if($(window).scrollTop()>50){
            $('#header-area').addClass('menu-bg');
        }else{
            $('#header-area').removeClass('menu-bg');
        }
    });
    
    //for responsive mobile menu
    var dropdownBtn = document.querySelectorAll(".main-menu li a");
    
    dropdownBtn.forEach((Element) => {
        Element.addEventListener("click",(event) => {   
            event.stopPropagation();
            Element.nextElementSibling.classList.toggle("display");
        });
    });
    
    
    //for slider branding slide
    $('.branding-slide').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    $('.branding-slide-all').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    //for blog single slider
    $('.blog-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    //for portfolio single slide
    $('.porfolio-single-slide').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });
    
    //for portfolio related slider
    $('.porfolio-related-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><</button>',
        nextArrow: '<button type="button" class="slick-next">></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    /*--- testimonial slider ---*/
    $('.testimonial-slider').slick({
        centerMode: true,
        centerPadding: '0px',
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    /*--- for video link ---*/
    $('.venobox').venobox({
        bgcolor: '#000',
        closeColor: '#000'
    }); 
    
    /*--- counter up ---*/
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    
    
    //for scroll to top
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $('.scroll-to-top').fadeIn();
        }else{
            $('.scroll-to-top').fadeOut();
        }
    });
    
    $('.scroll-to-top').click(function(){
        $("html,body").animate({scrollTop : 0 }, 3000);
        return false;
    });
    
    //for wow animation
    new WOW().init();
    
    /*--- for sign in form validation ---*/
    const form = document.getElementById("frm");
    const userName = document.getElementById("uname");
    const userPassword = document.getElementById("upass");
    var userNameError = document.querySelector(".username-error");
    var userPasswordError = document.querySelector(".password-error");
    
    form.addEventListener("submit", (e) => {
        if(userName.value === "" || userName.value == null){
            e.preventDefault();
            userNameError.innerHTML = "Please enter username";
        }
        if(userName.value === "username"){
            e.preventDefault();
            userNameError.innerHTML = "Username can not be an username";
        }
        if(userPassword.value < 6){
            e.preventDefault();
            userPasswordError.innerHTML = "Password must be longer than 6 characters";
        }
        if(userPassword.value > 20){
            e.preventDefault();
            userPasswordError.innerHTML = "Password must be less than 20 characters";
        }
        if(userPassword.value === "password"){
            userPasswordError.innerHTML = "Password can not be a password";
        }
    });
    
})(jQuery);