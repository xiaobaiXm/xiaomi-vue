<template>
  <div class="content">
    <!-- header -->
    <MyMoreVue :title="'手机'"></MyMoreVue>
    <div class="cont_body">
      <!-- left -->
      <MyConLeftVue></MyConLeftVue>
      <!-- right -->
      <MyConRightVue :phoneRight="store?.phoneList[0]?.phoneChild"></MyConRightVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyMoreVue from '@/components/Home/MyMore.vue'
import MyConLeftVue from './components/MyConLeft.vue'
import MyConRightVue from './components/MyConRight.vue'

import { useHomeStore } from '@/store/home'

const store = useHomeStore()

store.getPhoneListInfo()
</script>

<style lang="less" scoped>
.content {
  position: relative;
  height: 686px;
  margin-bottom: 8px;

  .cont_body {
    position: relative;
    height: 614px;
    margin-bottom: 8px;
  }
}
</style>
