$(function(){

  $('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    dots: true,
    infinite: false
  });

	$('.work__slider').slick({
      arrows: true,
      slidesToScroll: 1,
      prevArrow: '.slider__arrow_left',
      nextArrow: '.slider__arrow_right'
    });
  $('.feedback__slick').slick({
      arrows: true,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: '.feedback__arrow_left',
      nextArrow: '.feedback__arrow_right'
    });

  $('.menu__btn').click(function() {
            $('.header__menu_btn ul').slideToggle();
        });

});
$(document).ready(function() {
var i = 1;
$('.progress .circle').removeClass().addClass('circle');
$('.progress .bar').removeClass().addClass('bar');
setInterval(function() {
$('.progress .circle:nth-of-type(' + i + ')').addClass('active');

$('.progress .circle:nth-of-type(' + (i - 1) + ')').removeClass('active').addClass('done');

$('.progress .circle:nth-of-type(' + (i - 1) + ') .label').html('&#10003;');

$('.progress .bar:nth-of-type(' + (i - 1) + ')').addClass('active');

$('.progress .bar:nth-of-type(' + (i - 2) + ')').removeClass('active').addClass('done');

i++;

if (i == 0) {
$('.progress.active').removeClass().addClass('bar');
$('.progress div.circle').removeClass().addClass('circle');
i = 1;
}
}, 10000);
});
