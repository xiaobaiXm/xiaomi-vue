<template>
  <div class="con_right">
    <MyUserHeaderVue></MyUserHeaderVue>
    <MyUserContainerVue></MyUserContainerVue>
    <MyUserCopyRightVue></MyUserCopyRightVue>
  </div>
</template>

<script setup lang="ts">
import MyUserHeaderVue from './components/UserHeader/MyUserHeader.vue'
import MyUserContainerVue from './components/UserContainer/MyUserContainer.vue'
import MyUserCopyRightVue from './components/UserCopyRight/MyUserCopyRight.vue'

</script>

<style lang="less" scoped>
.con_right {
  width: 100%;
  height: 100%;
}
</style>
