<template>
  <div class="video_body clearfix">
    <ul class="clearfix">
      <li class="hover_List_up clearfix" v-for="item in videoChild"
       :key="item.videoId">
        <a href="#">
          <div class="video_img">
            <img
              v-lazy="item.videoImgUrl"
              alt="">
            <span class="video_play"><span class="iconfont icon-bofang"></span></span>
          </div>
          <h3 class="title">{{ item.videoName }}</h3>
          <p class="supplement" v-if="item.videoDesc">{{ item.videoDesc }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { IVideoChild } from '@/store/Home/Container/Type/Video'

defineProps<{
  videoChild : IVideoChild
}>()

</script>

<style lang="less" scoped>
.video_body {

  ul {
    height: 285px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    place-items: center;

    li {
      background-color: #fff;
      transition: all .2s;

      a {
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 285px;

        .video_img {
          position: relative;
          width: 296px;
          height: 180px;
          margin: 0 0 28px;

          img {
            width: 100%;
            height: 100%;
          }

          .video_play {
            position: absolute;
            left: 20px;
            bottom: 10px;
            width: 32px;
            height: 20px;
            border: 2px solid #fff;
            border-radius: 12px;
            background-color: #424242;
            background-color: rgba(0, 0, 0, .6);
            color: #fff;
            transition: all .2s;
            overflow: hidden;

            .iconfont {
              position: absolute;
              top: 2px;
              left: 10px;
              font-size: 12px;
            }
          }

          &:hover {
            .video_play {
              background-color: #ff6700;
              border-color: #ff6700;
            }

          }
        }

        .title {
          display: block;
          margin: 0 14px 6px;
          text-align: center;
          color: #333;
          font-size: 14px;
          font-weight: 400;
        }

        .supplement {
          margin: 0 14px;
          color: #b0b0b0;
          text-align: center;
        }
      }
    }
  }
}
</style>
