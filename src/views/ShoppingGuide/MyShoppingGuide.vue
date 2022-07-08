<template>
  <div class="main">
    <MyBread></MyBread>
    <div class="container w">
      <MyRowVue></MyRowVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyRowVue from './components/Row/MyRow.vue'
</script>

<style lang="less" scoped>
.main {
  background-color: #f5f5f5;

  min-height: 521px;

  .container {
    height: 100%;
  }
}
</style>
