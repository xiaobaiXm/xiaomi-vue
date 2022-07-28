<template>
  <main class="header_main w">
    <!-- banner -->
    <MyBannerVue></MyBannerVue>
  </main>
  <!-- hero -->
  <MyHeroSubVue></MyHeroSubVue>
  <!-- container -->
  <MyContainerVue></MyContainerVue>
</template>

<script setup lang="ts">
import MyBannerVue from './components/Banner/MyBanner.vue'
import MyHeroSubVue from './components/HeroSub/MyHeroSub.vue'
import MyContainerVue from './components/Container/MyContainer.vue'
</script>

<style lang="less" scoped>
.header_main {
  position: relative;
  height: 460px;
}
</style>
