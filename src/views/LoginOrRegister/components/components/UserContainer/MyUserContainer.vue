<template>
  <div class="con_container">
    <div class="users">
      <MyQrSwitchWrapVue></MyQrSwitchWrapVue>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyQrSwitchWrapVue from './components/QrSwitchWrap/MyQrSwitchWrap.vue'
import '@/style/Login/AntPopover.less'
import '@/style/Login/LoginCom.less'
import '@/style/Login/LoginInfo.less'
</script>

<style lang="less" scoped>
.con_container {
  padding-top: 20px;
  .users {
    position: relative;
    width: 450px;
    min-width: 450px;
    padding: 40px 45px;
    margin: 0 auto 80px;
    border-radius: 4px;
    box-shadow: 0 20px 50px 0 hsl(0deg 0% 64% / 10%);
    box-sizing: border-box;
  }
}
</style>
