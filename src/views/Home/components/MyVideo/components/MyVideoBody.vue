<template>
  <div class="video_body clearfix">
    <ul class="clearfix">
      <li class="hover_List_up clearfix" v-for="item in store.videoList"
       :key="item.id">
        <a href="javascript:;">
          <div class="video_img">
            <img v-lazy="item.img" alt="点击播放视频" @click="videoInfo(item)">
            <span class="video_play" @click="videoInfo(item)"><span class="iconfont icon-bofang"></span></span>
          </div>
          <h3 class="title">{{ item.title }}</h3>
          <p class="supplement">{{ item.desc }}</p>
        </a>
      </li>
    </ul>
  </div>
  <template v-if="videoInfoFlag">
  <MyVideoInfo :title="title" :link="link" @cutVideoInfo="cutVideoInfo"></MyVideoInfo>
  </template>
</template>

<script setup lang="ts">
import MyVideoInfo from '@/components/VideoInfo/MyVideoInfo.vue'
import { useContainerStore } from '@/store/Home/Container'
import { IVideo } from '@/store/Home/Container/Type/Video'

import { ref } from 'vue'

const store = useContainerStore()

store.getVideoListInfo()

let videoInfoFlag = ref<boolean>(false)
let title = ref<string>('')
let link = ref<string>('')

const cutVideoInfo = (flag:boolean):void => {
  videoInfoFlag.value = flag
}

const videoInfo = (item:IVideo):void => {
  videoInfoFlag.value = true
  title.value = item.title
  link.value = item.link
}

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
