<template>
  <MyLoginBtnVue v-if="flag"></MyLoginBtnVue>
  <MyRegisterBtnVue v-else></MyRegisterBtnVue>
</template>

<script setup lang="ts">
import MyLoginBtnVue from './components/MyLoginBtn.vue'
import MyRegisterBtnVue from './components/MyRegisterBtn.vue'

import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = router.currentRoute

let flag = ref<boolean>()

watch(() => currentRoute.value.path, (newPath) => {
  if (newPath === '/user/service/register') {
    flag.value = false
  } else {
    flag.value = true
  }
}, { immediate: true })
</script>

<style lang="less" scoped>
</style>
