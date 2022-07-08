<template>
  <div class="reg-submit">
    <button v-if="!btnFlag" class="button-primary reg-btn button-fullwidth button-disabled">注册</button>
    <button v-else class="button-primary reg-btn button-fullwidth">注册</button>  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let btnFlag = ref<boolean>(false)
</script>

<style lang="less" scoped>
</style>
