<template>
  <div class="page-main">
    <div class="container w">
      <div class="checkout-wrap">
        <!-- loading -->
        <div class="loading"></div>
        <!-- main -->
        <MyCheckoutMainVue></MyCheckoutMainVue>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyCheckoutMainVue from './components/MyCheckoutMain.vue'
</script>

<style lang="less" scoped>
.page-main {
  padding: 40px 0 60px;
  background-color: #f5f5f5;

  .container {
    background-color: #fff;
  }
}
</style>
