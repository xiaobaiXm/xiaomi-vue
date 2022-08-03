<template>
  <MyHeader v-if="currentRoute.meta.HeaderShow"></MyHeader>
  <MyFixedSlideBar v-if="currentRoute.meta.FixedSlideBar"></MyFixedSlideBar>
  <Suspense>
    <template #default>
      <router-view></router-view>
    </template>
    <template #fallback>
      <MyLoading></MyLoading>
    </template>
  </Suspense>
  <MyFooter v-if="currentRoute.meta.FooterShow"></MyFooter>
</template>

<script setup lang="ts">
import MyHeader from '@/components/Home/Header/MyHeader.vue'
import MyFooter from '@/components/Home/Footer/MyFooter.vue'

// import {defineAsyncComponent} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const currentRoute = router.currentRoute
</script>

<style lang="less" scoped>
</style>
