<template>
  <div class="page-main">
    <div class="container w">
      <div class="cart-container">
        <div class="container-main">
          <!-- 未登录 -->
          <MyEmptyCartTopVue></MyEmptyCartTopVue>
          <!-- 购物车 -->
          <MyCartWrap></MyCartWrap>
          <div class="placeholder-div"></div>
          <!-- cart bar -->
          <MyCartBar></MyCartBar>
          <!-- 推荐 -->
        <MyGuessLike></MyGuessLike>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import MyEmptyCartTopVue from './components/MyEmptyCartTop.vue'
import MyCartWrap from './components/CartWrap/MyCartWrap.vue'
import MyCartBar from './components/CartBar/MyCartBar.vue'
</script>

<style lang="less" scoped>
.page-main {
  padding: 38px 0;
  background-color: #f5f5f5;

  .container {
    .cart-container {
      .container-main {

        .placeholder-div {
          margin: 20px 0;
        }
      }
    }
  }
}
</style>
