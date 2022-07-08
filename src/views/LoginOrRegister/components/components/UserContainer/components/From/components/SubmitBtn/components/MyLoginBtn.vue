<template>
  <div class="login-submit">
    <button v-if="!btnFlag" class="button-primary login-btn button-fullwidth button-disabled">登录</button>
    <button v-else class="button-primary login-btn button-fullwidth">登录</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const btnFlag = ref<boolean>(false)
</script>

<style lang="less" scoped>
</style>
