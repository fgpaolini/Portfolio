<template>
  <section class="portfolio-carsouel section-padding" data-scroll-index="3">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Our Portfolio</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2>Our featured <span class="fw-200">projects</span></h2>
          <div class="ml-auto">
            <div class="swiper-arrow-control">
              <div class="swiper-button-prev">
                <span class="ti-arrow-left"></span>
              </div>
              <div class="swiper-button-next">
                <span class="ti-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="work-swiper-center">
        <ClientOnly>
          <Swiper id="content-carousel-container-unq-work" v-bind="swiperOptions">
            <SwiperSlide v-for="(item, i) in data" :key="`slide-${i}-${item.img}`">
              <div class="item">
                <div class="img">
                  <img :src="item.img" :alt="item.title" />
                </div>
                <div
                  class="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom"
                >
                  <div>
                    <h5>{{ item.title }}</h5>
                    <p>{{ item.subTitle }}</p>
                  </div>
                  <div class="ml-auto">
                    <a :href="item.link" class="rmore">
                      <img
                        src="/dark/assets/imgs/arrow-right.png"
                        alt="View project"
                        class="icon-img-20"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <template #fallback>
            <div class="portfolio-fallback">
              <div class="row">
                <div 
                  v-for="(item, i) in data" 
                  :key="`fallback-${i}`"
                  class="col-lg-6 col-md-6 mb-4"
                >
                  <div class="item">
                    <div class="img">
                      <img :src="item.img" :alt="item.title" />
                    </div>
                    <div
                      class="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom"
                    >
                      <div>
                        <h5>{{ item.title }}</h5>
                        <p>{{ item.subTitle }}</p>
                      </div>
                      <div class="ml-auto">
                        <a :href="item.link" class="rmore">
                          <img
                            src="/dark/assets/imgs/arrow-right.png"
                            alt="View project"
                            class="icon-img-20"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from '@/data/portfolios/works1';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

const swiperOptions = {
  modules: [Navigation],
  speed: 600,
  loop: true,
  navigation: {
    nextEl: '.swiper-arrow-control .swiper-button-next',
    prevEl: '.swiper-arrow-control .swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    // when window width is >= 768px
    768: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 50,
      centeredSlides: false,
    },
    // when window width is >= 1200px
    1200: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 100,
      centeredSlides: true,
    },
  },
};
</script>
