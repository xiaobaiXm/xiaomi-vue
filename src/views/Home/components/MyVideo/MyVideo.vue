<template>
  <div class="video clearfix">
    <!-- header -->
    <MyMoreVue :title="store.videoList[0]?.videoTitle + ''"></MyMoreVue>
    <!-- body -->
    <MyVideoBodyVue :videoChild="store.videoList[0]?.videoChild"></MyVideoBodyVue>
  </div>
</template>

<script setup lang="ts">
import MyMoreVue from '@/components/Home/MyMore.vue'
import MyVideoBodyVue from './VideoBody/MyVideoBody.vue'

import { useContainer } from '@/store/Home/Container/index'

const store = useContainer()

store.getVideoListInfo()
</script>

<style lang="less" scoped>
.video {
  position: relative;
  height: 357px;
  margin-top: 30px;
}
</style>
