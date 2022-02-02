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




const linkPort =document.querySelectorAll('.port_items')


// portfolio filter
$(document).ready(function(){  
    $(window).on("load", function(){
        var $container =$('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                queue: true
            }
        });

        $('.portfolio-nav li').click(function(){
            $('.portfolio-nav .current').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
            filter: selector,
                animationOptions: {
                queue: true
                }
                
            });
            return false;
        });

    });

    $('portfolio-item').mixItUo();
});
// end portfolio




// $('.menu-btn').click(function(){
//     $('.nav .menu').toggle("active");
//     $('.menu-btn i').toggleClass("active");
// });

// filter starts
// const mixer = mixitup('.port_con', {
//     selectors: {
//         target: '.port_cont'
//     },
//     animation: {
//         duration: 400
//     }
// });

function imageGallery() {
    const highlight = document.querySelector(".gallery-hightlight");
    const previews = document.querySelectorAll(".room-preview img");
  
    previews.forEach(preview => {
      preview.addEventListener("click", function() {
        const smallSrc = this.src;
        const bigSrc = smallSrc.replace("small", "big");
        previews.forEach(preview => preview.classList.remove("room-active"));
        highlight.src = bigSrc;
        preview.classList.add("room-active");
      });
    });
  }
  
  imageGallery();