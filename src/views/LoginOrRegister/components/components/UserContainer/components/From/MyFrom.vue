<template>
  <div class="from">
    <MyTabListVue></MyTabListVue>
    <div class="from_container">
      <div class="info">
        <router-view></router-view>
        <MyAcceptTermsVue></MyAcceptTermsVue>
        <MyLayoutToastVue v-if="toastFlag"></MyLayoutToastVue>
        <NySubmitBtnVue></NySubmitBtnVue>
      </div>
      <MySnsLogin></MySnsLogin>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyTabListVue from './components/MyTabList.vue'
import MyAcceptTermsVue from './components/MyAcceptTerms.vue'
import NySubmitBtnVue from './components/SubmitBtn/MySubmitBtn.vue'
import MySnsLogin from './components/MySnsLogin.vue'
import MyLayoutToastVue from './components/ScanCodeLogin/components/MyLayoutToast.vue'

import { ref } from 'vue'

let toastFlag = ref<boolean>(false)

</script>

<style lang="less" scoped>
.from {
  width: 360px;
  .from_container {
    position: relative;
    padding-top: 20px;
    height: 100%;
  }
}
</style>
