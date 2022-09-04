<template>
  <MySiteHeaderVue :title="'支付订单'"></MySiteHeaderVue>
  <div class="main">
    <div class="container w clearfix">
      <div class="confirm-context">
        <MyConfirmOrderInfoVue></MyConfirmOrderInfoVue>
        <MyConfirmPay></MyConfirmPay>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MySiteHeaderVue from '@/components/SiteHeader/MySiteHeader.vue'
import MyConfirmOrderInfoVue from './components/MyConfirmOrderInfo.vue'
import MyConfirmPay from './components/MyConfirmPay'
</script>

<style lang="less" scoped>
.main {
  padding: 38px 0;
  background: #f5f5f5;
}
</style>
