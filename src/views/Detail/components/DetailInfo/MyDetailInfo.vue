<template>
  <div class="detail">
    <div class="page_box">
      <div class="page_info">
        <!-- login -->
        <MyLoginNoticVue></MyLoginNoticVue>
        <!-- product container -->
        <MyProductContainer></MyProductContainer>
        <!-- product detail -->
        <MyProductDetail></MyProductDetail>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyLoginNoticVue from './components/LoginNotic/MyLoginNotic.vue'
import MyProductContainer from './components/ProductContainer/MyProductContainer.vue'
import MyProductDetail from './components/ProductDeatil/MyProductDetail.vue'
</script>

<style lang="less" scoped>
</style>
