$(document).ready(function () {
    // On Page Scroll Add Background color to header...
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".header").addClass("bg-color");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("bg-color");
        }
    });

    // Customer Slider Progress Bar
    var $carousel = $('.carousel');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label');
    $carousel.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
        
        $progressBar
          .css('background-size', calc + '% 100%')
          .attr('aria-valuenow', calc );
        
        $progressBarLabel.text( calc + '% completed' );
      });

       // Customer Card Slider 
    $carousel.slick({
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        centerMode: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,

            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                dots: true,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });


    // Onclick Search Icon Search bar Show with close button....
    let $search = $("#search");//nav-link search icon
    let $close = $("#close");//nav-link close icon display none 
    let $searchBar = $("#search-bar")// list-item
    let $form = $("#srcForm"); //search bar modal form

    $search.on('click', function(){
        $form.css('display', 'block');
        $searchBar.addClass("show");
    });

    $close.on('click', function(){
        $form.css('display', 'none');
        if($searchBar.hasClass("show")){
            $searchBar.removeClass("show");
        }
    });


});







// Subscribe Form Validation
let emailNode= $("#email");
let subBtn = $("#sub-btn")
let errorNode = $("#error");
let border1 ="1px solid #f00";
let border2 ="1px solid #0f0";



function validate(){
    errorNode.text("");
    let email  =emailNode.val();
    let subStr = email.substring(email.indexOf('@')+1);
    console.log(subStr);

    if(email==""){
        errorNode.text("this field is required");
        emailNode.css("border",border1);
        return false;
    }
    else if(!email.includes('@') || subStr == ''){
        errorNode.text("invalid email id...");
        emailNode.css("border",border1);
        return false;
    }
    else{
        emailNode.css("border",border2);
        return true;
    }
    
}

function validateForm(){
    let st1 = validate();
    return st1;
    
}
