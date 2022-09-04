<template>
  <div class="row">
    <MyLeftVue></MyLeftVue>
    <MyRightVue></MyRightVue>
  </div>
</template>

<script setup lang="ts">
import MyLeftVue from './components/MyLeft.vue'
import MyRightVue from './components/MyRight.vue'
</script>

<style lang="less" scoped>
.row {
  position: relative
}
</style>
