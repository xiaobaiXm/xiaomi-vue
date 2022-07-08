<template>
  <div class="cart-wrap">
    <MyAddonItemsTips></MyAddonItemsTips>
    <div class="cart-goods-list">
      <!-- list header -->
      <MyListHeader></MyListHeader>
      <!--  list body  -->
      <MyListBody></MyListBody>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyAddonItemsTips from './components/MyAddonItemsTips.vue'
import MyListHeader from './components/MyListHeader.vue'
import MyListBody from './components/MyListBody.vue'
</script>

<style lang="less" scoped>
.cart-wrap {

  .cart-goods-list {
    background-color: #fff;
  }
}
</style>
