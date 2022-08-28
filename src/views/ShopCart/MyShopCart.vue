<template>
  <div class="main">
    <div class="cart-header-box">
      <MyCartHeader></MyCartHeader>
    </div>
    <Suspense>
      <template #default>
        <MyPageMainVue></MyPageMainVue>
      </template>
      <template #fallback>
        <MyLoading :padding="'50px 0'"></MyLoading>
      </template>
    </Suspense>

  </div>
</template>

<script setup lang="ts">
import '@/style/ShopCart/Col.less'
import '@/style/ShopCart/BodyCol.less'

import MyCartHeader from './components/CartHeader/MyCartHeader.vue'
import { defineAsyncComponent } from 'vue'

const MyPageMainVue = defineAsyncComponent(() => import('./components/PageMain/MyPageMain.vue'))

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
