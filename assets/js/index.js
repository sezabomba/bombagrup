bannerOverlapHeaderInit();

$("#owl-banner").owlCarousel({
  nav: false,
  mouseDrag: false,
  dots: false,
  loop: false,
  items: 1,
  // autoplay: true,
  // autoplayTimeout: 3000,
  // autoplayHoverPause: false,
  // navText: [
  //   '<span class="iconify" data-icon="akar-icons:chevron-left" data-inline="false"></span>',
  //   '<span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false"></span>',
  // ],
});

$("#owl-remarks").owlCarousel({
  dots: true,
  mouseDrag: false,
  loop: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause: true,
  navText: [
    '<span class="iconify" data-icon="akar-icons:chevron-left" data-inline="false"></span>',
    '<span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false"></span>',
  ],
});

$("#owl-companies").owlCarousel({
  loop: true,
  mouseDrag: false,
  margin: 50,
  nav: true,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
  navText: [
    '<span class="iconify" data-icon="akar-icons:chevron-left" data-inline="false"></span>',
    '<span class="iconify" data-icon="akar-icons:chevron-right" data-inline="false"></span>',
  ],
});

$("#coal-carousel").owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 4000,
  items: 1,
});

$("#logistik-carousel").owlCarousel({
  loop: true,
  mouseDrag: true,
  margin: 50,
  nav: true,
  autoplay: true,
  autoplayTimeout: 4321,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

let navPillar = document.getElementsByClassName("nav-pillar");
let navIconBlack = document.getElementsByClassName("navbar-icon-black");
let navIconWhite = document.getElementsByClassName("navbar-icon-white");
let headersAccord = document.getElementsByClassName("header-accordion-wrapper");
let subMenu = document.getElementsByClassName("sub-menu");

document.addEventListener("DOMContentLoaded", function () {
  // navbar menu button dropdown clickable
  for (let i = 0; i < headersAccord.length; i++) {
    headersAccord[i].addEventListener("click", function () {
      subMenu[i].classList.toggle("d-none");
    });
  }

  // navpillar onhover
  for (let i = 0; i < navPillar.length; i++) {
    navPillar[i].addEventListener("mouseover", function () {
      navIconBlack[i].classList.toggle("d-none", true);
      navIconWhite[i].classList.toggle("d-none", false);
    });
    navPillar[i].addEventListener("mouseout", function () {
      navIconBlack[i].classList.toggle("d-none", false);
      navIconWhite[i].classList.toggle("d-none", true);
    });
  }
});
