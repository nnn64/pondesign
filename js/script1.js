// $(function (){

//     // ヒーローの高さを調整

//     // ページ内スクロール
//     $('a[href^="#"]').on("click", function () {
//         var speed = 300;
//         var href = $(this).attr("href");
//         var target = $(href == "#" || herf == "" ? "html" : href);
//         var position = target.offset().top;
//         $("html, body").animate(
//             {
//                 scrollTop: position,
//             },
//             speed,
//             "swing"
//         );
//         return false;
//     });

//     // ページトップへ戻る
//     var $pageTop = $(".page-top");
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 300) {
//             $pageTop.fadeIn();
//         } else {
//             $pageTop.fadeOut();
//         }
//     });
//     $pageTop.on("click", function () {
//         $("body,html"),animate(
//             {
//                 scrollTop: 0,
//             },
//             300
//         );
//         return false;
//     });

//     // ヘッダーの色
//     $(window).scroll(function () {
//         if ($(this).scrollTop() >0) {
//             $(".header").addClass("is-active");
//         } else {
//             $(".header").removeClass("is-active");
//         }
//     });

//     // ハンバーガーメニュー
//     var btnMenu = $(".js-btn-menu");
//     var globalNav = $(".gnav");

//     btnMenu.on("click", function () {
//         btnMenu.toggleClass("is-active");
//         globalNav.toggleClass("is-show");
//     });

//     // IE11対応 sitcky

// });

// // スワイパー
// const swiper = new Swiper(".js-swiper-container", {
//     autoplay: {
//         delay: 4000,
//     },
//     speed: 500,
//     loop: true,
//     effect: "fade",

//     pagination: {
//         el: ".swiper-pagination",
//     },

//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },

//     scrollbar: {
//         el: ".swiper-scrollbar",
//     },
// });

