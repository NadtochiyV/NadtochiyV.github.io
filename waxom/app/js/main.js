$(function () {
  $(".main__slider").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-btn main-slick-prev"> <span class="icon-left"></span></button>',
    nextArrow:
      '<button type="button" class="slick-btn main-slick-next"> <span class="icon-left"></span></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrow: false,

    //     }
    //   },

    // ]
  }); // MAIN SLIDER

  $(".posts__wrapper-slider").slick({
    dots: false,
    prevArrow:
      '<button type="button" class="slick-btn posts-slick-prev"> <span class="icon-left"></span></button>',
    nextArrow:
      '<button type="button" class="slick-btn posts-slick-next"> <span class="icon-left"></span></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // swipeToSlide: false,
          // swipe: false,
          // draggable: false,
        },
      },
    ],
  }); // IDEAS SLIDER
  $(".posts-img-slider").slick({
    dots: true,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 850,
        settings: {},
      },
    ],
  }); // IDEAS SLIDER

  var mixer = mixitup(".cases__container");

  // function start_count(){
  //   $('.counter__wrapper-item--amount').each(function () {
  //     $(this).prop('Counter',0).animate({
  //     Counter: $(this).text()
  //     }, {
  //     duration: 1500,
  //     easing: 'swing',
  //     step: function (now) {
  //       $(this).text(Math.ceil(now));
  //       }
  //     });
  //   });
  // }

  $(".burger-menu").click(function () {
    event.preventDefault();
    event.stopPropagation();
    if ($(".header__wrapper-menu ul").first().is(":hidden")) {
      $(".header__wrapper-menu ul").show();
      $(this).addClass("burger-close");
    } else {
      $(".header__wrapper-menu ul").hide();
      $(this).removeClass("burger-close");
    }
  }); // BURGER MENU

  $(".video__wrapper-play a").click(function () {
    event.preventDefault();
    event.stopPropagation();
    $(".video-overlay").toggleClass("video-active");
    $("body").css("overflow", "hidden");
  }); // OPEN VIDEO

  $(document).click(function (e) {
    if ($(e.target).closest(".video-popUp__wrapper").length) {
      return;
    }
    $(".video-overlay").removeClass("video-active");
    $("body").css("overflow", "auto");
    var videoURL = $("#if").prop("src");
    videoURL = videoURL.replace("&autoplay=1", "");
    $("#if").prop("src", "");
    $("#if").prop("src", videoURL);
  }); // CLOSE AND STOP VIDEO ON CLICK

  $(".header__wrapper-menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
    $(".header__wrapper-menu ul").hide();
    $(".burger-menu").removeClass("burger-close");
  }); // SCROLL TO ID

  $(".header-search").click(function () {
    event.preventDefault();
    event.stopPropagation();
    $(".search-field").addClass("search-active");
  });
  $(document).click(function (e) {
    if ($(e.target).closest(".search-field").length) {
      return;
    }
    $(".search-field").removeClass("search-active");
  }); // OPEN CLOSE SEARCH BAR
});
