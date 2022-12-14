<template>
  <div class="search_result">
    <div class="result_order w">
      <div class="order_list_box">
        <MyOrderListVue></MyOrderListVue>
        <MyTypeListVue></MyTypeListVue>
      </div>
      <div class="goods_list_box">
        <MyGoodsListVue v-if="!store.searchError"></MyGoodsListVue>
        <MyEmptyList v-else></MyEmptyList>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyOrderListVue from './components/MyOrderList.vue'
import MyTypeListVue from './components/MyTypeList.vue'
import MyGoodsListVue from './components/MyGoodsList.vue'
import MyEmptyList from './components/MyEmptyList.vue'

import { useSearchStore } from '@/store/search'

const store = useSearchStore()

</script>

<style lang="less" scoped>
.search_result {
  padding: 20px 0 0;

  .result_order {
    .order_list_box {
      position: relative;
      height: 30px;
      margin: 30px 0;
    }
  }
}
</style>
