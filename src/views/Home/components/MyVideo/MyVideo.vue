<template>
  <div class="video clearfix">
    <!-- header -->
    <MyMoreVue :title="'视频'"></MyMoreVue>
    <!-- body -->
    <MyVideoBodyVue></MyVideoBodyVue>
  </div>
</template>

<script setup lang="ts">
import MyMoreVue from '@/components/Home/MyMore.vue'
import MyVideoBodyVue from './components/MyVideoBody.vue'

</script>

<style lang="less" scoped>
.video {
  position: relative;
  height: 357px;
  margin-top: 30px;
}
</style>
