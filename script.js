var MainSwiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
var SubSwiper = new Swiper(".mySwiper1", {
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
MainSwiper.controller.control = SubSwiper;
SubSwiper.controller.control = MainSwiper;

$(function () {
  $(".tabcontent > div").hide();
  $(".tabnav a")
    .click(function () {
      $(".tabcontent > div").hide().filter(this.hash).fadeIn();
      $(".tabnav a").removeClass("active");
      $(this).addClass("active");
      return false;
    })
    .filter(":eq(0)")
    .click();
});

// var imgSwiper = new Swiper(".mySwiper2", {
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// var buttonSwiper = new Swiper(".mySwiper02", {
//   loop: true,
//   spaceBetween: 20,
//   slidesPerView: 6,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
// buttonSwiper.controller.control = imgSwiper;
// imgSwiper.controller.control = buttonSwiper;

new Swiper(".mySwiper3", {
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

new Swiper(".mySwiper4", {
  spaceBetween: 40,
  slidesPerView: 5,
  centeredSlides: true,
  slideToClickedSlide: true,
  resistance: false,
  // roundLengths: true,
  loop: true,
  loopedSlides: 2,
  loopAdditionalSlides: 3,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

var mainSwiper5 = new Swiper(".mySwiper5", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var pagingSwiper = new Swiper(".mySwiper5", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});
mainSwiper5.controller.control = pagingSwiper;
// var pagingSwiper = new Swiper(".mySwiper5", {
//   pagination: {
//     el: ".swiper-pagination2",
//     type: "progressbar",
//   },
// });
// var mainSwiper5 = new Swiper(".mySwiper5", {
//   loop: true,
//   slidesPerView: 4,
//   spaceBetween: 20,
//   // autoplay: {
//   //   delay: 4000,
//   //   disableOnInteraction: false,
//   // },
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// var pagingSwiper = new Swiper(".mySwiper5", {
//   pagination: {
//     el: ".swiper-pagination2",
//     type: "progressbar",
//   },
// });

// mainSwiper5.controller.control = pagingSwiper;

new Swiper(".mySwiper6", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
