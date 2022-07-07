var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 2000,
    },
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        400: {
          slidesPerView: 1,
          spaceBetween: 1
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        920: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1250: {
            slidesPerView: 5,
            spaceBetween: 40
        }
      }
  });