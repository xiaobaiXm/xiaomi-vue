<template>
  <div class="content_complex">
    <MyComplexContainerHeaderVue
    :title="list.containerTitle"
    :container ="list.containerChild.right"
    ></MyComplexContainerHeaderVue>
    <div class="cont_body">
      <div class="row">
        <MyConLeftVue :containerLeft="list.containerChild.left"></MyConLeftVue>
        <MyConRightVue :containerRight ="list.containerChild.right"></MyConRightVue>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyComplexContainerHeaderVue from './components/MyComplexContainerHeader.vue'
import MyConLeftVue from './components/MyConLeft.vue'
import MyConRightVue from './components/MyConRight.vue'

import { IContainer } from '@/store/Home/Container/Type/Container'

defineProps<{
  list: IContainer
}>()

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
