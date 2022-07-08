<template>
  <div class="search_favourite w">
    <div class="recommend">
      <MyRecommendTitleVue></MyRecommendTitleVue>
      <MyRecommendSearchVue v-if="show"></MyRecommendSearchVue>
      <MyEmptyCartBottom v-if="!show"></MyEmptyCartBottom>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyRecommendTitleVue from './components/MyRecommendTitle.vue'
import MyRecommendSearchVue from './components/MyRecommendSearch.vue'
import MyEmptyCartBottom from './components/MyEmptyCartBottom.vue'

import { useRouter } from 'vue-router'
import { computed } from 'vue'
const router = useRouter()
const currentRoute = router.currentRoute

const show = computed(() => {
  let flag = null
  if (currentRoute.value.path === '/cart') {
    flag = false
  } else {
    flag = true
  }
  return flag
})

</script>

<style lang="less" scoped>
.search_favourite {
  position: relative;
  height: 520px;
  padding: 20px 0 100px;
}
</style>
