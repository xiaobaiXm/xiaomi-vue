<template>
  <div class="main">
    <MyBread></MyBread>
    <MySearchFilterVue></MySearchFilterVue>
    <MySearchResultVue :search="search"></MySearchResultVue>
    <MyGuessLike></MyGuessLike>
  </div>
</template>

<script setup lang="ts">
import MySearchFilterVue from './components/SearchFilter/MySearchFilter.vue'
import MySearchResultVue from './components/SearchResult/MySearchResult.vue'

import { reactive, provide, getCurrentInstance, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { useSearchStore } from '@/store/Search'
import { ISearch } from '@/store/Search/Type/Search'
const router = useRouter()
const currentRoute = router.currentRoute
const store = useSearchStore()
const instance = getCurrentInstance()
let search = reactive<ISearch>({
  keyword: '',
  order: '1:DESC',
  filterTag: [{
    promotion: false,
    installment: false,
    available: false
  }],
  pageNo: 1,
  pageSize: 20
})

Object.assign(search, currentRoute.value.query)
provide('type', search.filterTag[0])
provide('keyword', search.keyword)
provide('order', search.order)

instance?.proxy?.$Bus.on('changeSearchFilterTag', (type): void => {
  switch (type as string) {
    case 'promotion':
      search.filterTag[0].promotion = !search.filterTag[0].promotion
      getData()
      break
    case 'installment':
      search.filterTag[0].installment = !search.filterTag[0].installment
      getData()
      break
    case 'available':
      search.filterTag[0].available = !search.filterTag[0].available
      getData()
      break
  }
})

instance?.proxy?.$Bus.on('changeSearchKeyword', (keyword): void => {
  search.keyword = keyword as string
  getData()
})

instance?.proxy?.$Bus.on('changeSearchOrder', (order): void => {
  search.order = order as string
  getData()
})

const getData = (): void => {
  store.getSearchProductInfo(search)
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
