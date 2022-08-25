<template>
  <div class="detail">
    <div class="page_box">
      <div class="page_info">
        <MyLoginNotVue></MyLoginNotVue>
        <MyProductContainer></MyProductContainer>
        <MyProductDetail></MyProductDetail>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyLoginNotVue from './components/LoginNot/MyLoginNot.vue'
import MyProductContainer from './components/ProductContainer/MyProductContainer.vue'
import MyProductDetail from './components/ProductDetail/MyProductDetail.vue'
</script>

<style lang="less" scoped>
</style>
