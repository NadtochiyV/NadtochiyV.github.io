$(function () {

  $('.slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  });

  $('.deal__wrapper').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  infinite: true,
  centerMode:true,
  arrow: false,
  responsive: [
    {
      breakpoint: 768, // - от какой ширины изменять настройки(1024 и ниже)
      settings: {
        // вносим изменения на ширине 1024 и ниже 
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480, // брекпоинтов может быть сколько угодно
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  $(".footer__btn-up").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

});

$('.bottom__btn').click(function() {

  $('#cart-item').removeClass('display-none');
  $('#empty_cart').addClass('display-none');

});

$('#header__cart').click(function() {

  $('.aside').css({
    "display":"block",
    });



});


$(window).scroll(function(){
    var scroll_top = $(window).scrollTop();
    var div_1 = $('#categories-1');
    var div_2 = $('#categories-2');
    var div_3 = $('#categories-3');
    var div_4 = $('#categories-4');
    var div_5 = $('#categories-5');
    var div_6 = $('#categories-6');

    var a_1 = $('#categories-1 a');
    var a_2 = $('#categories-2 a');
    var a_3 = $('#categories-3 a');
    var a_4 = $('#categories-4 a');
    var a_5 = $('#categories-5 a');
    var a_6 = $('#categories-6 a');

    var off_1 = div_1.offset().top - 200;
    var off_2 = div_2.offset().top - 200;
    var off_3 = div_3.offset().top - 200;
    var off_4 = div_4.offset().top - 200;
    var off_5 = div_5.offset().top - 200;
    var off_6 = div_6.offset().top - 200;

    var height_1 = div_1.height();
    var height_2 = div_2.height();
    var height_3 = div_3.height();
    var height_4 = div_4.height();
    var height_5 = div_5.height();
    var height_6 = div_6.height();

    var bottom_1 = off_1+height_1 + 100;
    var bottom_2 = off_2+height_2 + 100;
    var bottom_3 = off_3+height_3 + 100;
    var bottom_4 = off_4+height_4 + 100;
    var bottom_5 = off_5+height_5 + 100;
    var bottom_6 = off_6+height_6 + 100;

    if($(window).width() <= 768){

    if (scroll_top > off_1 && scroll_top < bottom_1) {
        div_1.css({
            "transition":"0.3s",
            "width":"98%",
            "height":"245px",
            "margin":"0 1% 17px 1%"
        });
         a_1.css({
           "transition":"0.3s",
          "background":"rgba(0,0,0,0.2)"
         });
        
    }
    else{
      div_1.css({
            "transition":"0.3s",
            "width":"92%",
            "height":"237px",
            "margin":"0 4% 25px 4%"
        });
       a_1.css({
           "transition":"0.3s",
          "background":"rgba(0,0,0,0.5)"
         });
    }

     if (scroll_top > off_2 && scroll_top < bottom_2) {
        div_2.css({
            "transition":"0.3s",
            "width":"98%",
            "height":"245px",
            "margin":"0 1% 17px 1%"
        });
         a_2.css({
           "transition":"0.3s",
          "background":"rgba(0,0,0,0.2)"
         });
        
    }
    else{
      div_2.css({
            "transition":"0.3s",
            "width":"92%",
            "height":"237px",
            "margin":"0 4% 25px 4%"
        });
       a_2.css({
           "transition":"0.3s",
          "background":"rgba(0,0,0,0.5)"
         });
    }

     if (scroll_top > off_3 && scroll_top < bottom_3) {
        div_3.css({
            "transition":"0.3s",
            "width":"98%",
            "height":"245px",
            "margin":"0 1% 17px 1%"
        });
         a_3.css({
           "transition":"0.3s",
          "background":"rgba(0,0,0,0.2)"
         });
        
    }
    else{
      div_3.css({
            "transition":"0.3s",
            "width":"92%",
            "height":"237px",
            "margin":"0 4% 25px 4%"
        });
       a_3.css({
           "transition":"0.3s",
          "background":"rgba(0,0,0,0.5)"
         });
    }

     if (scroll_top > off_4 && scroll_top < bottom_4) {
        div_4.css({
            "transition":"0.3s",
            "width":"98%",
            "height":"245px",
            "margin":"0 1% 17px 1%"
        });
         a_4.css({
           "transition":"0.3s",
          "background":"rgba(0,0,0,0.2)"
         });
        
    }
    else{
      div_4.css({
            "transition":"0.3s",
            "width":"92%",
            "height":"237px",
            "margin":"0 4% 25px 4%"
        });
       a_4.css({
           "transition":"0.3s",
          "background":"rgba(0,0,0,0.5)"
         });
    }

     if (scroll_top > off_5 && scroll_top < bottom_5) {
        div_5.css({
            "transition":"0.3s",
            "width":"98%",
            "height":"245px",
            "margin":"0 1% 17px 1%"
        });
         a_5.css({
           "transition":"0.3s",
          "background":"rgba(0,0,0,0.2)"
         });
        
    }
    else{
      div_5.css({
            "transition":"0.3s",
            "width":"92%",
            "height":"237px",
            "margin":"0 4% 25px 4%"
        });
       a_5.css({
           "transition":"0.3s",
          "background":"rgba(0,0,0,0.5)"
         });
    }

     if (scroll_top > off_6 && scroll_top < bottom_6) {
        div_6.css({
            "transition":"0.3s",
            "width":"98%",
            "height":"245px",
            "margin":"0 1% 17px 1%"
        });
         a_6.css({
           "transition":"0.3s",
          "background":"rgba(0,0,0,0.2)"
         });
        
    }
    else{
      div_6.css({
            "transition":"0.3s",
            "width":"92%",
            "height":"237px",
            "margin":"0 4% 25px 4%"
        });
       a_6.css({
           "transition":"0.3s",
          "background":"rgba(0,0,0,0.5)"
         });
    }
}
    
});
