<template>
  <div class="cart-wrap">
    <MyAddonItemsTips v-if="store.totalPrice < 70"></MyAddonItemsTips>
    <div class="cart-goods-list">
      <MyListHeader></MyListHeader>
      <MyListBody></MyListBody>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyAddonItemsTips from './components/MyAddonItemsTips.vue'
import MyListHeader from './components/MyListHeader.vue'
import MyListBody from './components/MyListBody.vue'

import { useCartsStore } from '@/store/carts'

const store = useCartsStore()
</script>

<style lang="less" scoped>
.cart-wrap {

  .cart-goods-list {
    background-color: #fff;
  }
}
</style>
