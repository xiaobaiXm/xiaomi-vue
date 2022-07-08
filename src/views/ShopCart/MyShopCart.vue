<template>
  <div class="main">
    <div class="cart-header-box">
      <!-- header -->
      <MyCartHeader></MyCartHeader>
    </div>
    <!-- main -->
    <MyPageMainVue></MyPageMainVue>
  </div>
</template>

<script setup lang="ts">
import '@/style/ShopCart/Col.less'
import '@/style/ShopCart/BodyCol.less'

import MyCartHeader from './components/CartHeader/MyCartHeader.vue'
import MyPageMainVue from './components/PageMain/MyPageMain.vue'
</script>

<style lang="less" scoped>
.main {
  .cart-header-box {
    height: 102px;
    background-color: #fff;
    border-bottom: 2px solid #ff6700;
  }
}
</style>
