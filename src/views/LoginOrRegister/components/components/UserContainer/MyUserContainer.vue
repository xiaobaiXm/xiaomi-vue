<template>
  <div class="con_container">
    <div class="user">
      <MyQrSwitchWrapVue></MyQrSwitchWrapVue>

      <component :is="flag ? MyFromVue : MyScanCodeLoginVue">
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyQrSwitchWrapVue from './components/QrSwitchWrap/MyQrSwitchWrap.vue'
import MyScanCodeLoginVue from './components/From/components/ScanCodeLogin/MyScanCodeLogin.vue'
import MyFromVue from './components/From/MyFrom.vue'

import { ref, getCurrentInstance } from 'vue'

const instance = getCurrentInstance()

let flag = ref<boolean>(true)

instance?.proxy?.$Bus.on('changeFromFlag', (show) => {
  flag.value = show as boolean
})
</script>

<style lang="less" scoped>
.con_container {
  padding-top: 20px;

  .user {
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
