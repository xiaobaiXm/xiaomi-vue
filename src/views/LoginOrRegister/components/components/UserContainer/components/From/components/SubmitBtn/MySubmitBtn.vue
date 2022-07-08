<template>
  <MyLoginBtnVue v-if="flag"></MyLoginBtnVue>
  <MyRegisterBtnVue v-else></MyRegisterBtnVue>
</template>

<script setup lang="ts">
import MyLoginBtnVue from './components/MyLoginBtn.vue'
import MyRegisterBtnVue from './components/MyRegisterBtn.vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = router.currentRoute

let flag = ref<boolean| undefined>(currentRoute?.value?.meta?.User)

</script>

<style lang="less" scoped>
</style>
