<template>
  <div class="tab_list">
    <div class="tab_nav">
      <div class="login">
        <router-link to="/user/service/login" :class="flag ? '' : 'uncheck'" @click="clear">登录</router-link>
      </div>
      <div class="register">
        <router-link to="/user/service/register" :class="flag ? 'uncheck' : ''" @click="clear">注册</router-link>
      </div>
      <div class="rung" :class="flag ? '' : 'left'"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { clear } from '@/hooks/User/ChangeInpClassName'

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
.tab_list {
  width: 360px;
  height: 40px;

  .tab_nav {
    position: relative;
    display: flex;

    a {
      color: #333;
      font-size: 22px;
      transition: all 0.3s;

      &:hover {
        color: #333 !important;
      }
    }

    .uncheck {
      color: #bbb !important;

      &:hover {
        color: #bbb !important;
      }
    }

    .login {
      display: inline-block;
      margin-right: 20px;
    }

    .register {
      display: inline-block;
    }

    .rung {
      display: inline-block;
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 44px;
      height: 4px;
      border-radius: 2px;
      background-color: #ff6700;
      transition: all 0.3s;
    }

    .left {
      left: 64px;
    }
  }
}
</style>
