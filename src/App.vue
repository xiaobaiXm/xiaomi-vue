<template>
  <MyHeader v-if="currentRoute.meta.HeaderShow"></MyHeader>
  <MyFixedSildebar  v-if="currentRoute.meta.FixedSildebar"></MyFixedSildebar>
  <router-view></router-view>
  <MyFooter v-if="currentRoute.meta.FooterShow"></MyFooter>
</template>

<script setup lang="ts">
import MyHeader from '@/components/Home/Header/MyHeader.vue'
import MyFooter from '@/components/Home/Footer/MyFooter.vue'

import { useRouter } from 'vue-router'
const router = useRouter()
const currentRoute = router.currentRoute
</script>

<style lang="less" scoped>
</style>
