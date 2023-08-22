$(function () {
  // btn-menu
  var btnMenu = $(".js-btn-menu");
  var gNav = $(".gnav");

  btnMenu.on("click", function () {
    btnMenu.toggleClass("is-active");
    gNav.toggleClass("is-show");
  });

  // scroll
  $('a[href^="#"]').on("click", function() {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  // page-top
  var $pageTop = $(".page-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
  $pageTop.on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });

  // header color
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0){
      $(".header").addClass("is-active");
    } else {
      $(".header").removeClass("is-active");
    }
  });
});

// swiper
const swiper = new Swiper(".js-swiper-container", {
  autoplay: {
    delay:4000,
  },
  speed: 500,
  loop: true,
  effect: "fade",

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});