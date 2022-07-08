<template>
  <div class="category clearfix ">
    <!-- tab  -->
    <MyCategoryTab :categoryName="list.categoryName"></MyCategoryTab>
    <!-- list  -->
    <MyCateGoryList :categoryChild="list.categoryChild"></MyCateGoryList>
  </div>
</template>

<script setup lang="ts">
import MyCategoryTab from './components/CateGoryTab.vue'
import MyCateGoryList from './components/CateGoryList.vue'

import { ITypeNav } from '@/store/TypeNav/Type/TypeNav'

defineProps<{
list : ITypeNav
}>()
</script>

<style lang="less" scoped>
</style>
