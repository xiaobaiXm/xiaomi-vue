<template>
  <div class="recommend_search">
    <swiper :slidesPerView="5" :slidesPerGroup="5" :spaceBetween="21" :pagination="{
      clickable: true,
    }" :autoplay="{
  delay: 6000,
  disableOnInteraction: false,
}" :modules="modules" class="mySwiper">
      <swiper-slide v-for="(item, index) in 10" :key="index">
        <a href="#">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/45e49d5b5f78f11e9f99a9f95381235e.jpg?thumb=1&w=225&h=225&f=webp&q=90"
            alt="">
          <div class="title">小米手环6</div>
          <div class="price">229元</div>
          <div class="tips">70.9万人好评</div>
          <div class="add_shopcar">加入购物车</div>
          <div class="recommend-action ">
            <a href="javascript:;" class="btn btn-small btn-line-primary" @click="joinCart">加入购物车</a>
          </div>
          <div class="recommend-notice" :class="flag === 0 ? 'joinCart' : ''">
            <a href="#" class="btn btn-green btn-block">成功加入购物车</a>
          </div>
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import '@/style/AddCartOrJoinAuccess/style.less'
import { Autoplay, Pagination } from 'swiper'

import { ref } from 'vue'

const modules = [Pagination, Autoplay]

let flag = ref<number>(1)
// eslint-disable-next-line no-undef
let timer: null | NodeJS.Timeout = null

const joinCart = (): void => {
  flag.value = 0
  timer = setTimeout(() => {
    flag.value = 1
    clearInterval(Number(timer))
  }, 1500)
}
</script>

<style lang="less" scoped>
.recommend_search {
  position: relative;
  height: 300px;

  .swiper::v-deep {
    position: static;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-align: center;
      font-size: 14px;

      img {
        display: block;
        margin: 40px auto 20px;
        width: 140px;
        height: 140px;
      }

      .title {
        height: 18px;
        margin: 0 10px 10px;
        color: #333;
      }

      .price {
        height: 18xp;
        margin: 0 0 10px 0;
        color: #ff6700;
      }

      .tips {
        position: relative;
        color: #757575;
      }

      .add_shopcar {
        position: absolute;
        bottom: -35px;
        left: 50%;
        transform: translateX(-50%);
        width: 155px;
        height: 32px;
        line-height: 30px;
        font-size: 12px;
        color: #ff6700;
        background-color: #fff;
        border: 1px solid #ff6700;
        transition: all .3s;
        z-index: -1;

        &:hover {
          color: #fff;
          background-color: #ff6700;
        }
      }

      .show {
        bottom: 10px !important;
        z-index: 99;
      }
    }

    &:hover {
      .recommend-action {
        transform: none !important;
      }
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.swiper::v-deep .swiper-pagination {
  padding: 14px;
  bottom: -50px;
}

.swiper::v-deep .swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  margin: 0 8px !important;
  border: 2px solid #f5f5f5;
  display: inline-block;
  border-radius: 10px;
  overflow: hidden;
  background: rgba(0, 0, 0, .4);
  opacity: .8;
}

.swiper::v-deep .swiper-pagination-bullet-active {
  width: 6px;
  height: 6px;
  margin: 0 8px !important;
  border: 2px solid #f5f5f5;
  transition: all .5s;
  opacity: 1;
  background: #fff;
  border-color: #ff6700;
}
</style>
