<template>
  <div class="cart-bar clearfix">
    <MySelectionLeft></MySelectionLeft>
    <MyTotalPrice></MyTotalPrice>
    <MyNoSelectTipVue v-if="noSelectTipShow"></MyNoSelectTipVue>
  </div>
</template>

<script setup lang="ts">
import MySelectionLeft from './components/MySelectionLeft.vue'
import MyTotalPrice from './components/MyTotalPrice.vue'
import MyNoSelectTipVue from './components/MyNoSelectTip.vue'

const noSelectTipShow = false
</script>

<style lang="less" scoped>
.cart-bar {
  position: relative;
  height: 50px;
  text-align: right;
  background-color: #fff;
  transition: background .3s ease, top .3s ease;
}
</style>
