<template>
  <div class="cart-bar clearfix">
    <MySelectionLeft></MySelectionLeft>
    <MyTotalPrice></MyTotalPrice>
    <MyNoSelectTipVue v-if="store.selectCount <= 0"></MyNoSelectTipVue>
  </div>
</template>

<script setup lang="ts">
import MySelectionLeft from './components/MySelectionLeft.vue'
import MyTotalPrice from './components/MyTotalPrice.vue'
import MyNoSelectTipVue from './components/MyNoSelectTip.vue'

import { useCartsStore } from '@/store/Carts'

const store = useCartsStore()

</script>

<style lang="less" scoped>
.cart-bar {
  position: relative;
  position: sticky;
  bottom: 0;
  left: 0;
  height: 50px;
  text-align: right;
  background-color: #fff;
  transition: background .3s ease, top .3s ease;
  box-shadow: 0 -3px 1px rgb(0 0 0 / 5%);
}
</style>
