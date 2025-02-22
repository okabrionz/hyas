< script >
  (function () {
    // INITIALIZATION OF SWIPER
    // =======================================================
    var sliderThumbs = new Swiper('.js-swiper-shop-hero-thumbs', {
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      history: false,
      slidesPerView: 3,
      spaceBetween: 15,
      on: {
        beforeInit: (swiper) => {
          const css = `.swiper-slide-thumb-active .swiper-thumb-progress .swiper-thumb-progress-path {
                opacity: 1;
                -webkit-animation: ${swiper.originalParams.autoplay.delay}ms linear 0ms forwards swiperThumbProgressDash;
                animation: ${swiper.originalParams.autoplay.delay}ms linear 0ms forwards swiperThumbProgressDash;
            }`
          style = document.createElement('style')
          document.head.appendChild(style)
          style.type = 'text/css'
          style.appendChild(document.createTextNode(css));

          swiper.el.querySelectorAll('.js-swiper-thumb-progress')
            .forEach(slide => {
              slide.insertAdjacentHTML('beforeend', '<span class="swiper-thumb-progress"><svg version="1.1" viewBox="0 0 160 160"><path class="swiper-thumb-progress-path" d="M 79.98452083651917 4.000001576345426 A 76 76 0 1 1 79.89443752470656 4.0000733121155605 Z"></path></svg></span>')
            })
        },
      },
    });

    var swiper = new Swiper('.js-swiper-shop-classic-hero', {
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: '.js-swiper-shop-classic-hero-button-next',
        prevEl: '.js-swiper-shop-classic-hero-button-prev',
      },
      thumbs: {
        swiper: sliderThumbs
      }
    });
  })() <
  /script>
