<template>
  <div class="main">
    <MySiteHeaderVue :title="'确定订单'"></MySiteHeaderVue>
    <Suspense>
      <template #default>
        <MyPageMainVue></MyPageMainVue>
      </template>
      <template #fallback>
        <MyLoading :padding="'50px 0'"></MyLoading>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import MySiteHeaderVue from '@/components/SiteHeader/MySiteHeader.vue'
import MyPageMainVue from './components/MyPageMain.vue'

import { useUserOrderStore } from '@/store/order'
import { useUserAddressStore } from '@/store/address'
const OrderStore = useUserOrderStore()
const AddressStore = useUserAddressStore()

OrderStore.getUserSelectProductInfo()
AddressStore.getUserAddressInfo()
</script>

<style lang="less" scoped>
</style>
