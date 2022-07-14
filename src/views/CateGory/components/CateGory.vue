<template>
  <div class="category clearfix ">
    <!-- tab  -->
    <MyCategoryTab :categoryTitle="list.categoryTitle"></MyCategoryTab>
    <!-- list  -->
    <MyCateGoryList :categoryChild="list.categoryChild"></MyCateGoryList>
  </div>
</template>

<script setup lang="ts">
import MyCategoryTab from './components/CateGoryTab.vue'
import MyCateGoryList from './components/CateGoryList.vue'

import { ICategory } from '@/store/Home/Category/Type/Category'

defineProps<{
list : ICategory
}>()
</script>

<style lang="less" scoped>
</style>
