<template>
  <div class="content_complex">
    <MyConHeaderVue :title="list.containerTitle" :list="list.containerChild.right"></MyConHeaderVue>
    <div class="cont_body">
      <div class="row">
        <MyConLeftVue :containerLeft="list.containerChild.left"></MyConLeftVue>
        <MyConRightVue :containerRight="list.containerChild.right"></MyConRightVue>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyConHeaderVue from './components/MyConHeader.vue'
import MyConLeftVue from './components/MyConLeft.vue'
import MyConRightVue from './components/MyConRight.vue'

import { ref, provide } from 'vue'
import { IContainer } from '@/model/Container'

defineProps<{
  list: IContainer
}>()

let flag = ref<number>(0)

provide('containerFlag', ref(flag))
</script>

<style lang="less" scoped>
.content_complex {
  position: relative;

  .cont_body {
    position: relative;
    height: 614px;
    margin-bottom: 8px;

    .row {
      margin-left: -14px;
    }
  }
}
</style>
