<template>
  <div class="detail-section footer-detail clearfix">
    <MyFooterAddressVue></MyFooterAddressVue>

    <MyHandleActionVue></MyHandleActionVue>
  </div>
</template>

<script setup lang="ts">
import MyFooterAddressVue from './components/MyFooterAddress.vue'
import MyHandleActionVue from './components/MyHandleAction.vue'
</script>

<style lang="less" scoped>
.footer-detail {
  padding: 20px 48px !important;
  border-top: 2px solid #f5f5f5;
  font-size: 14px;
}
</style>
