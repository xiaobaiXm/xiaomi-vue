<template>
  <MyDetailNavBarVue></MyDetailNavBarVue>
  <Suspense>
    <template #default>
      <MyDetailInfo></MyDetailInfo>
    </template>
    <template #fallback>
      <MyLoading></MyLoading>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import MyDetailNavBarVue from './components/DetailNavBar/MyDetailNavBar.vue'

import { reactive, onMounted, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'

import { useDetailStore } from '@/store/Detail'
const MyDetailInfo = defineAsyncComponent(() => import('./components/DetailInfo/MyDetailInfo.vue'))
const router = useRouter()
const currentRoute = router.currentRoute
const store = useDetailStore()

type IProductInfo = {
  productId: number
}
let productInfo = reactive<IProductInfo>({
  productId: 0
})

const getProductDetail = (): void => {
  Object.assign(productInfo, currentRoute.value.query)
  store.getProductDetailInfo(productInfo.productId)
}

onMounted(() => {
  getProductDetail()
})
</script>

<style lang="less" scoped>
</style>
