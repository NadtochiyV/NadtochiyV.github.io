$(function(){
$('.friends__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow:
      '<button class="friends-arrows friends-arrows_left"><img class="" src="./images/arrow.svg" alt=""></img></button>',
      nextArrow:
      '<button class="friends-arrows friends-arrows_right"><img class="" src="./images/arrow.svg" alt=""></img></button>',
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    let burger = document.querySelector('.header__burger');
    burger.addEventListener('click', function(){
      let menu = document.querySelector('.header__overlay');
      let html = document.querySelector('html');
      if(menu.classList.contains('active')){
        menu.classList.remove('active');
        html.style.overflow = 'auto';
        this.classList.remove('close');
      }else{
        menu.classList.add('active');
        this.classList.add('close');
        html.style.overflow = 'hidden';
      }
    })

    $(".header__nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').css('overflow', 'auto').animate({scrollTop: top}, 1000);
      $('.header__overlay').removeClass('active');
      $('.header__burger').removeClass('close');
  });
  

  let input = document.querySelector('.card');
    input.addEventListener('click', function(){
    input.select();
    document.execCommand("copy");
    // console.log("Copied the text: " + input.value);
  })

});