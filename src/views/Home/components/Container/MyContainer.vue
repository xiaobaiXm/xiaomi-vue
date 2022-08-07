<template>
  <div>
    <div class="main">
      <div class="container w">
        <!-- <MyBigBanner :img="store.bigBannerList[0].img"></MyBigBanner> -->
        <MySimpleContainer></MySimpleContainer>
        <MyComplexContainer v-for="(item, index) in store.firstContainer" :key="index" :list="item">
        </MyComplexContainer>
        <!-- <MyBigBanner :img="store.bigBannerList[1].img"></MyBigBanner> -->
        <MyComplexContainer v-for=" (item, index) in store.contentContainer" :key="index" :list="item">
        </MyComplexContainer>
        <!-- <MyBigBanner :img="store.bigBannerList[2].img"></MyBigBanner> -->
        <MyComplexContainer v-for=" (item, index) in store.lastContainer" :key="index" :list="item">
        </MyComplexContainer>
        <MyVideo></MyVideo>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import MyBigBanner from '@/components/Home/MyBigBanner.vue'
import MySimpleContainer from './components/SimpleContainer/MySimpleContainer.vue'
import MyComplexContainer from './components/ComplexContainer/MyComplexContainer.vue'
import MyVideo from '../MyVideo/MyVideo.vue'
import { useContainerStore } from '@/store/Home/Container'

const store = useContainerStore()

store.getContainerList()
store.getBigBannerInfo()

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
