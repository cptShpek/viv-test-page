import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm.js';
Swiper.use([Navigation, Pagination]);


var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})