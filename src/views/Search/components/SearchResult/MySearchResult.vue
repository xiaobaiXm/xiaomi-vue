<template>
  <div class="search_result">
    <div class="result_order w">
      <div class="order_list_box">
        <!-- address -->

        <!-- header -->
        <!-- order list -->
        <MyOrderListVue></MyOrderListVue>
        <!-- type list -->
        <MyTypeListVue></MyTypeListVue>
      </div>
      <!-- 商品信息 -->
      <div class="goods_list_box">
        <!-- goods list -->
        <MyGoodsListVue></MyGoodsListVue>
        <!-- page nav -->
        <MyPageNav></MyPageNav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyOrderListVue from './components/MyOrderList.vue'
import MyTypeListVue from './components/MyTypeList.vue'
import MyGoodsListVue from './components/MyGoodsList.vue'
import MyPageNav from './components/MyPageNav.vue'
</script>

<style lang="less" scoped>
.search_result {
  padding: 20px 0 100px;

  .result_order {
    .order_list_box {
      position: relative;
      height: 30px;
      margin: 30px 0;

    }
  }
}
</style>
