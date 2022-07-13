<template>
  <div class="video clearfix">
    <!-- header -->
    <MyMoreVue :title="title|| ''"></MyMoreVue>
    <!-- body -->
    <MyVideoBodyVue :video="store.videoList[0].videoInfo"></MyVideoBodyVue>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MyMoreVue from '@/components/Home/MyMore.vue'
import MyVideoBodyVue from './VideoBody/MyVideoBody.vue'

import { useContainer } from '@/store/Home/Container/index'

const store = useContainer()

store.getVideoListInfo()

const title = ref<string>('视频')
</script>

<style lang="less" scoped>
.video {
  position: relative;
  height: 357px;
  margin-top: 30px;
}
</style>
