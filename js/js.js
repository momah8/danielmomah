$(document).ready(function(){  
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.menubar').addClass("sticky");
        }else{
            $('.menubar').removeClass("sticky");
        }
    });
    // toggle
    $('.menu-btn').click(function(){
        $('.menubar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing texts
    var typed = new Typed(".words", {
        strings: ["Designer", "Developer", "Designer"],
        typeSpeed: 150,
        backSpeed: 80,
        loop: true
    });

    var typed = new Typed(".words2", {
        strings: ["Designer", "Developer", "Designer"],
        typeSpeed: 150,
        backSpeed: 80,
        loop: true
    });
});
