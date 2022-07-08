<template>
  <div class="tab_list">
    <div class="tab_nav">
      <div class="login">
        <router-link to="/user/login" @click="login(flag)" :class="flag ? '' : 'uncheck'">登录</router-link>
      </div>
      <div class="register">
        <router-link to="/user/register" @click="register(flag)" :class="flag ? 'uncheck' : ''">注册</router-link>
      </div>
        <div class="rung" :class="flag ? '' : 'left'"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = router.currentRoute

const { User } = reactive(currentRoute.value.meta)

let flag = ref<boolean | undefined>(User)

const login = (flag: boolean | undefined) => {
  console.log(flag)
}
const register = (flag: boolean | undefined) => {
  console.log(flag)
}
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
