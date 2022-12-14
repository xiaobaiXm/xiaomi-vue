<template>
  <div class="banner">
    <swiper
      :spaceBetween="30"
      :effect="'fade'"
      :navigation="true"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 6000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper">
      <swiper-slide v-for="item in store.bannerList" :key="item.id">
        <a href="#"> <img :src="item.img" /></a>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/less'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper'

import { useHomeStore } from '@/store/homeMain/index'

const modules = [Autoplay, EffectFade, Navigation, Pagination]

const store = useHomeStore()

store.getBannerList()
</script>

<style lang="less" scoped>
.banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 1266px;
  height: 460px;
  overflow: hidden;

  .swiper {
    position: relative;
    width: 100%;
    height: 100%;

    .swiper-slide {
      background-position: center;
      background-size: cover;
    }

    .swiper-slide {
      img {
        display: block;
        width: 100%;
      }
    }
  }

  .swiper::v-deep .swiper-pagination-bullets {
    width: 400px;
    left: auto;
    right: 30px;
    bottom: 20px;
    text-align: right;
  }

  .swiper::v-deep .swiper-pagination .swiper-pagination-bullet,
  .swiper::v-deep .swiper-pagination .swiper-pagination-bullet-active {
    width: 6px;
    height: 6px;
    border: 2px solid #fff;
    border-color: hsla(0, 0%, 100%, 0.3);
    border-radius: 10px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.4);
    opacity: 1;
  }

  .swiper::v-deep .swiper-pagination .swiper-pagination-bullet-active {
    background: hsla(0, 0%, 100%, 0.4);
    border-color: rgba(0, 0, 0, 0.4);
  }

  .swiper::v-deep .swiper-button-prev,
  .swiper::v-deep .swiper-button-next {
    width: 41px;
    height: 65px;
    color: #d1d1d1;
    transition: all 0.3s;

    &:hover {
      color: white;
      background-color: #7c7c7c;
      opacity: 0.7;
    }

    &:after {
      text-align: center;
      font-size: 30px;
    }
  }

  .swiper::v-deep .swiper-button-prev {
    left: 234px;
  }

  .swiper::v-deep .swiper-button-next {
    right: 0;
  }
}
</style>
