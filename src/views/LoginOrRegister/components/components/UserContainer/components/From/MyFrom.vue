<template>
  <div class="from">
    <MyTabListVue></MyTabListVue>
    <div class="from_container">
      <div class="info">
<!--
        <component :is="flag ? MyLoginVue : MyRegisterVue">
        </component> -->
        <router-view></router-view>

        <MyAcceptTermsVue></MyAcceptTermsVue>
        <MyLayoutToastVue v-if="false"></MyLayoutToastVue>
        <NySubmitBtnVue></NySubmitBtnVue>
        <!-- <MyFromActionVue v-if="flag"></MyFromActionVue> -->
      </div>
      <MySnsLogin></MySnsLogin>
    </div>
  </div>
</template>

<script setup lang="ts">
// import MyRegisterVue from './components/Register/MyRegister.vue'
// import MyLoginVue from './components/Login/MyLogin.vue'
import MyTabListVue from './components/MyTabList.vue'
import MyAcceptTermsVue from './components/MyAcceptTerms.vue'
// import MyFromActionVue from './components/MyFormActions.vue'
import NySubmitBtnVue from './components/SubmitBtn/MySubmitBtn.vue'
import MySnsLogin from './components/MySnsLogin.vue'
import MyLayoutToastVue from './components/ScanCodeLogin/components/MyLayoutToast.vue'

import '@/style/Login/AntPopover.less'
import '@/style/Login/LoginCom.less'
import '@/style/Login/LoginInfo.less'

// import { ref } from 'vue'

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
