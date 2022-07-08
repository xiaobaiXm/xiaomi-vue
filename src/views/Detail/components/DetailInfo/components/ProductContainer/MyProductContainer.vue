<template>
  <div class="product_container w">
    <!-- banner -->
  <MyConBannerVue></MyConBannerVue>
    <!-- info -->
  <MyConInfoVue></MyConInfoVue>
  </div>
</template>

<script setup lang="ts">
import MyConBannerVue from './components/ConBanner/MyConBanner.vue'
import MyConInfoVue from './components/ConInfo/MyConInfo.vue'
</script>

<style lang="less" scoped>
.product_container {
  display: flex;
  justify-content: center;
  padding-top: 32px;

}
</style>
