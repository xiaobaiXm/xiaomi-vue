<template>
  <div class="search_favourite w">
    <div class="recommend clearfix">
      <MyRecommendTitleVue :title="title"></MyRecommendTitleVue>
      <MyRecommendSearchVue></MyRecommendSearchVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyRecommendTitleVue from './components/MyRecommendTitle.vue'
import MyRecommendSearchVue from './components/MyRecommendSearch.vue'

defineProps<{
  title: string
}>()
</script>

<style lang="less" scoped>
.search_favourite {
  position: relative;
  padding: 140px 0 120px;
}
</style>
