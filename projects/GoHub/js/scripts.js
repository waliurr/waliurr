//For preloader timeout
setTimeout(function(){
    $('#preloader').fadeToggle();
},1500);

/*---------------------------
sticky header
---------------------------*/
window.addEventListener("scroll", function(){
    const header = document.querySelector("#header-area");
    header.classList.toggle("header-bg", window.scrollY > 60);
});

//fow wow animation
new WOW().init();

//for scroll to top
$(window).scroll(function(){
    if($(this).scrollTop()>600){
        $('.scrollup').fadeIn();
    }else{
        $('.scrollup').fadeOut();
    }
});

$('.scrollup').click(function(){
    $("html,body").animate({scrollTop : 0 }, 600);
    return false;
});