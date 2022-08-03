<template>
  <div class="scan-code-login">
    <MyScanCodeLoginTittleVue></MyScanCodeLoginTittleVue>
    <MyLoginQrCodeVue></MyLoginQrCodeVue>
    <!-- tips -->
    <MyScanCodeLoginTipsVue></MyScanCodeLoginTipsVue>
    <!-- app  -->
    <MyScanAppVue></MyScanAppVue>
  </div>
</template>

<script setup lang="ts">
import MyScanCodeLoginTittleVue from './components/MyScanCodeLoginTitle.vue'
import MyLoginQrCodeVue from './components/MyLoginQrcode.vue'
import MyScanCodeLoginTipsVue from './components/MyScanCodeLoginTips.vue'
import MyScanAppVue from './components/MyScanApp.vue'
</script>

<style lang="less" scoped>
.scan-code-login {
  margin: 0 auto;
}
</style>
