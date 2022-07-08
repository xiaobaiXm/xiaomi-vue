<template>
  <div class="main">
    <div class="container w">
      <MyImgVue></MyImgVue>
      <!-- promise -->
      <MyPromise></MyPromise>
      <!-- exchange -->
      <MyExchange></MyExchange>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyImgVue from './components/Ing/MyImg.vue'
import MyPromise from './components/Promise/MyPromise.vue'
import MyExchange from './components/Exchange/MyExchange.vue'
</script>

<style lang="less" scoped>
.main {
  background-color: #f5f5f5;
}
</style>
