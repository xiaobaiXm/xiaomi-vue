<template>
  <div class="main">
    <div class="nav">
      <MyBread></MyBread>
    </div>
    <div class="container w clearfix">
      <MyCateGory v-for="(item, index) in store.category" :key="index" :list="item"></MyCateGory>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyCateGory from './components/CateGory.vue'
import { useHomeStore } from '../../store/home'

const store = useHomeStore()

store.getCategoryList()
</script>

<style lang="less" scoped>
.main {
  .nav {
    height: 40px;
    background-color: #f5f5f5;
    color: #757575;
  }

  .container {
    padding-bottom: 100px;
  }
}
</style>
