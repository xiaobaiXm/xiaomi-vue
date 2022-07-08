<template>
  <div class="checkout-main">
    <div class="checkout-detail">
      <div class="fixed-header"></div>
      <!-- address detail -->
      <MyAddressDetailVue></MyAddressDetailVue>
      <!-- detail info -->
      <MyDetailInfoVue></MyDetailInfoVue>
      <!-- other -->
      <MyOtherVue></MyOtherVue>
      <!-- count -->
      <MyCountDetailVue></MyCountDetailVue>
      <!-- footer -->
      <MyFooterDetailVue></MyFooterDetailVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyAddressDetailVue from './components/MyAddressDetail.vue'
import MyDetailInfoVue from './components/MyDetailInfo.vue'
import MyOtherVue from './components/MyOther.vue'
import MyCountDetailVue from './components/MyCountDetail.vue'
import MyFooterDetailVue from './components/MyFooterDetail.vue'
</script>

<style lang="less" scoped>
.checkout-main {
  .checkout-detail {
        position: relative;
    padding: 48px 0 0;
    .detail-section {
      position: relative;
      padding: 0 24px;
    }
  }
}
</style>
