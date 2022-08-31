<template>
  <div class="detail-section count-detail">
    <MySectionDiscountVue></MySectionDiscountVue>
    <MySectionBillVue></MySectionBillVue>
  </div>
</template>

<script setup lang="ts">
import MySectionDiscountVue from './components/MySectionDiscount.vue'
import MySectionBillVue from './components/MySectionBill.vue'
</script>

<style lang="less" scoped>
.count-detail {
  position: relative;
  min-height: 200px;
  padding: 20px 0;
  margin: 0 48px;
}
</style>
