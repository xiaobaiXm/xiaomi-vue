<template>
  <div>
    <div class="main">
      <div class="container w">
        <MyBigBannerVue></MyBigBannerVue>
        <MySimpleContainerVue></MySimpleContainerVue>
        <MyComplexContainerVue
        v-for="(item, index) in store.containerList" :key="index"
        :list="item"></MyComplexContainerVue>
        <MyVideoVue></MyVideoVue>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyBigBannerVue from '@/components/Home/BigBanner/MyBigBanner.vue'
import MySimpleContainerVue from './components/SimpleContainer/MySimpleContainer.vue'
import MyComplexContainerVue from './components/ComplexContainer/MyComplexContainer.vue'
import MyVideoVue from '../MyVideo/MyVideo.vue'
import { useContainer } from '@/store/Home/Container/index'

const store = useContainer()

store.getContainerList()

</script>

<style scoped lang="less">
.main {
  width: 100%;
  margin-top: 26px;
  padding-top: 4px;
  padding-bottom: 12px;
  background-color: #f5f5f5;
  .container {
    .hover_List_up:hover {
      box-shadow: 8px 15px 15px rgb(0 0 0 / 10%) !important;
      transform: translateY(-2px) !important;
    }
  }
}
</style>
