<template>
  <div class="reg-submit">
    <button v-if="!btnFlag" class="button-primary reg-btn button-fullWidth button-disabled">注册</button>
    <button v-else class="button-primary reg-btn button-fullWidth" @click="register">注册</button>  </div>
</template>

<script setup lang="ts">
import { ref, watch, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { from, checkStatus } from '@/hooks/User'

import { useUserStore } from '@/store/user'
const router = useRouter()
const store = useUserStore()

const instance = getCurrentInstance()
let btnFlag = ref<boolean>(false)

watch(from, () => {
  if (from.username !== '' && from.password !== '' && from.secondaryPasswordFn !== '') {
    btnFlag.value = true
  } else {
    btnFlag.value = false
  }
})

const register = async () => {
  if (checkStatus()) {
    try {
      await store.register(from)
      router.push('/user/service/login')
    } catch (err) {

    }
  } else {
    instance?.proxy?.$Bus.emit('changeUserFromToastFlag', true)
  }
}
</script>

<style lang="less" scoped>
</style>
