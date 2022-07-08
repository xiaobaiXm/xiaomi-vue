<template>
  <div class="scan-code-login">
    <MyScanCodeLoginTittleVue></MyScanCodeLoginTittleVue>
    <MyLoginQrcodeVue></MyLoginQrcodeVue>
    <!-- tips -->
    <MyScanCodeLoginTipsVue></MyScanCodeLoginTipsVue>
    <!-- app  -->
    <MyScanAppVue></MyScanAppVue>
  </div>
</template>

<script setup lang="ts">
import MyScanCodeLoginTittleVue from './components/MyScanCodeLoginTitle.vue'
import MyLoginQrcodeVue from './components/MyLoginQrcode.vue'
import MyScanCodeLoginTipsVue from './components/MyScanCodeLoginTips.vue'
import MyScanAppVue from './components/MyScanApp.vue'
</script>

<style lang="less" scoped>
.scan-code-login {
  margin: 0 auto;
}
</style>
