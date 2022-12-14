<template>
  <div class="main">
    <MyBread></MyBread>
    <MySearchFilterVue></MySearchFilterVue>
    <keep-alive>
      <Suspense>
        <template #default>
          <MySearchResultVue :search="search"></MySearchResultVue>
        </template>
        <template #fallback>
          <MyLoading></MyLoading>
        </template>
      </Suspense>
    </keep-alive>
    <MyPagination v-if="total > 20" @updateData="updateData" :total="total" :pageNo="pageNo" :pageSize="pageSize"
      :continues="5"></MyPagination>
    <Suspense>
      <template #default>
        <MyGuessLike :title="'猜你喜欢'"></MyGuessLike>
      </template>
      <template #fallback>
        <MyLoading></MyLoading>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import MySearchFilterVue from './components/SearchFilter/MySearchFilter.vue'

import { ref, reactive, watch, provide, getCurrentInstance, defineAsyncComponent, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useSearchStore } from '@/store/search'
import { ISearch } from '@/model/Search'

const MySearchResultVue = defineAsyncComponent(() => import('./components/SearchResult/MySearchResult.vue'))
const MyGuessLike = defineAsyncComponent(() => import('@/components/GuessLike/MyGuessLike.vue'))
const router = useRouter()
const currentRoute = router.currentRoute
const store = useSearchStore()
const instance = getCurrentInstance()
const { pageNo, pageSize, total } = store.searchProductInfo

let key = ref<string>('')
let ord = ref<string>('1:DESC')
let search = reactive<ISearch>({
  keyword: '',
  order: '',
  filterTag: [{
    promotion: false,
    installment: false,
    available: false
  }],
  pageNo: 1,
  pageSize: 20
})

key.value = currentRoute.value.query.keyword as string
provide('type', search.filterTag[0])
provide('keyword', ref(key))
provide('order', ref(ord))

watch(search, () => {
  getData()
})
watch([key, ord], () => {
  getData()
})

instance?.proxy?.$Bus.on('resetSearchConditions', (): void => {
  key.value = currentRoute.value.query.keyword as string
  ord.value = '1:DESC'
  search.filterTag[0] = {
    promotion: false,
    installment: false,
    available: false
  }
  search.pageNo = 1
  search.pageSize = 20
  getData()
})

const getData = (): void => {
  search.keyword = key.value
  search.order = ord.value
  store.getSearchProductInfo(search)
}

const updateData = (pageNo: number): void => {
  search.pageNo = pageNo
}

onBeforeMount(() => {
  getData()
})
</script>

<style lang="less" scoped>
.main {
  background-color: #f5f5f5;
}
</style>
