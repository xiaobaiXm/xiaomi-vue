<template>
  <div class="video_main">
    <!-- title -->
    <MyVideoTitleVue></MyVideoTitleVue>
    <!-- content -->
    <MyContentImgVue></MyContentImgVue>
  </div>
</template>

<script setup lang="ts">
import MyVideoTitleVue from './components/VideoTitle/MyVideoTitle.vue'
import MyContentImgVue from './components/VideoContent/components/MyContentImg.vue'
</script>

<style lang="less" scoped>
.video_main {
  background: #f5f5f5;
}
</style>
