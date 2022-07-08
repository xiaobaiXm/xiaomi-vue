<template>
  <div class="con_header">
    <MyConTitleVue></MyConTitleVue>
    <MyConNavVue></MyConNavVue>
  </div>
</template>

<script setup lang="ts">
import MyConTitleVue from './components/MyConTitle.vue'
import MyConNavVue from './components/MyConNav.vue'
</script>

<style lang="less" scoped>
.con_header {
  position: relative;
  height: 80px;
  padding: 20px;
  box-sizing: border-box;

}
</style>
