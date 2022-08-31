<template>
  <div class="main">
    <div class="cart-header-box">
      <MySiteHeaderVue :title="'我的购物车'" :desc="'温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算'"></MySiteHeaderVue>
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

import MySiteHeaderVue from '@/components/SiteHeader/MySiteHeader.vue'
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
