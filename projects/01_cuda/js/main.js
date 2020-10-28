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
        header.classList.toggle("sticky", window.scrollY > 60);
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
    skills pie chart
    ---------------------------*/
    $('#demo-pie-1').pieChart({
        barColor: '#30BAE8',
        trackColor: '#DFE8ED',
        lineCap: 'butt',
        lineWidth: 14,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });
    
    $('#demo-pie-2').pieChart({
        barColor: '#D74681',
        trackColor: '#DFE8ED',
        lineCap: 'butt',
        lineWidth: 14,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });
    
    $('#demo-pie-3').pieChart({
        barColor: '#15C6A9',
        trackColor: '#DFE8ED',
        lineCap: 'butt',
        lineWidth: 14,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
        }
    });
    
    $('#demo-pie-4').pieChart({
        barColor: '#EB7D4C',
        trackColor: '#DFE8ED',
        lineCap: 'butt',
        lineWidth: 14,
        onStep: function (from, to, percent) {
            $(this.element).find('.pie-value').text(Math.round(percent) + '%');
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