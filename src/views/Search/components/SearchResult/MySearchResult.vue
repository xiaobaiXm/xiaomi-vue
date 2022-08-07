<template>
  <div class="search_result">
    <div class="result_order w">
      <div class="order_list_box">
        <MyOrderListVue ></MyOrderListVue>
        <MyTypeListVue></MyTypeListVue>
      </div>
      <div class="goods_list_box">
        <Suspense>
          <template #default>
            <MyGoodsListVue v-if="!store.searchError"></MyGoodsListVue>
            <MyEmptyList v-else></MyEmptyList>
          </template>
          <template #fallback>
            <MyLoading></MyLoading>
          </template>
        </Suspense>
        <MyPagination :pageNo="1" :pageSize="20" :continues="5"></MyPagination>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyOrderListVue from './components/MyOrderList.vue'
import MyTypeListVue from './components/MyTypeList.vue'
import MyEmptyList from './components/MyEmptyList.vue'

import { defineAsyncComponent } from 'vue'

import { useSearchStore } from '@/store/Search'
import { ISearch } from '@/store/Search/Type/Search'
const store = useSearchStore()

defineProps<{
  search : ISearch
}>()

const MyGoodsListVue = defineAsyncComponent(() => import('./components/MyGoodsList.vue'))

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
