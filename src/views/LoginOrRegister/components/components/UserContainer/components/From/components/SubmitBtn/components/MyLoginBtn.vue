<template>
  <div class="login-submit">
    <button v-if="!btnFlag" class="button-primary login-btn button-fullWidth button-disabled">登录</button>
    <button v-else class="button-primary login-btn button-fullWidth" @click="login">登录</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { from, checkStatus } from '@/hooks/User'
import { loginError } from '@/hooks/User/ChangeInpClassName'

import { useUserStore } from '@/store/User/LoginOrRegister'
const store = useUserStore()
const route = useRoute()
const router = useRouter()

const instance = getCurrentInstance()
const btnFlag = ref<boolean>(false)

watch(from, () => {
  if (from.username !== '' && from.password !== '') {
    btnFlag.value = true
  } else {
    btnFlag.value = false
  }
})

const login = async (): Promise<void> => {
  if (checkStatus()) {
    try {
      await store.login(from)
      let toPath: string = route.query.redirect || '/home'
      router.push(toPath)
    } catch (err) {
      loginError.value = true
    }
  } else {
    instance?.proxy?.$Bus.emit('changeUserFromToastFlag', true)
  }
}
</script>

<style lang="less" scoped>
</style>
