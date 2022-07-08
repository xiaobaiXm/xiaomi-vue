<template>
<!-- banner -->
  <MyBannerVue></MyBannerVue>
  <!-- title -->
  <MyTitleVue></MyTitleVue>
<!-- container -->
  <MyContainerVue v-for="(item , index) in 8" :key="index"></MyContainerVue>
</template>

<script setup lang="ts">
import MyBannerVue from './components/Banner/MyBanner.vue'
import MyTitleVue from './components/Title/MyTitle.vue'
import MyContainerVue from './components/Container/MyContainer.vue'
</script>

<style lang="less" scoped>
</style>
