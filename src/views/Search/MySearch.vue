<template>
  <div class="main">
    <!-- filter -->
    <MySearchFilterVue></MySearchFilterVue>
    <!-- result -->
    <MySearchResultVue></MySearchResultVue>
    <!-- favourite -->
    <MyGuessLike></MyGuessLike>
  </div>
</template>

<script setup lang="ts">
import MySearchFilterVue from './components/SearchFilter/MySearchFilter.vue'
import MySearchResultVue from './components/SearchResult/MySearchResult.vue'
</script>

<style lang="less" scoped>
.main {
  background-color: #f5f5f5;
}
</style>
