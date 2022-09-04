<template>
  <div class="recommend_search">
    <swiper :slidesPerView="5" :slidesPerGroup="5" :spaceBetween="21" :pagination="{
      clickable: true,
    }" :autoplay="{
  delay: 6000,
  disableOnInteraction: false,
}" :modules="modules" class="mySwiper">
      <swiper-slide v-for="(item, index) in 10" :key="index">
        <a href="javascript:;">
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/45e49d5b5f78f11e9f99a9f95381235e.jpg?thumb=1&w=225&h=225&f=webp&q=90"
            alt="">
          <div class="title">小米手环6</div>
          <div class="price">229元</div>
          <div class="tips">70.9万人好评</div>
          <div class="recommend-action ">
            <a href="javascript:;" class="btn btn-small btn-line-primary" @click="joinCart(index)">加入购物车</a>
          </div>
          <div class="recommend-notice" :class="flag === index ? 'joinCart' : ''">
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
import { Autoplay, Pagination } from 'swiper'

import { flag, joinCart } from '@/hooks/Guess'

const modules = [Pagination, Autoplay]

</script>

<style lang="less" scoped>
.recommend_search {
  position: relative;
  height: 300px;

  .recommend-action {
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    opacity: 1;
    transform: translate3d(0, 200%, 0);
    transition: all .4s;
  }

  .recommend-notice {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    opacity: 0;
    transform: translate3d(0, -10px, 0);
    transition: all .2s linear;

  }

  .joinCart {
    opacity: 1 !important;
    transform: none !important;
  }

  .recommend-action,
  .recommend-notice {

    .btn {
      display: inline-block;
      width: 158px;
      height: 38px;
      padding: 0;
      margin: 0;
      border: 1px solid #b0b0b0;
      font-size: 12px !important;
      line-height: 38px;
      text-align: center;
      color: #b0b0b0;
      cursor: pointer;
      transition: all .4s;
    }

    .btn-line-primary {
      border-color: #ff6700;
      background: #fff;
      color: #ff6700;

      &:hover {
        color: #fff !important;
        background-color: #ff6700;
      }
    }

    .btn-small {
      width: 118px;
      height: 28px;
      font-size: 12px;
      line-height: 28px;
    }

    .btn-green {
      background: #83c44e;
      border-color: #83c44e;
      color: #fff;

      &:hover {
        color: #fff !important;
      }
    }

    .btn-block {
      display: block;
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    }
  }

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
