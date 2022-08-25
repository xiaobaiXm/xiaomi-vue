<template>
  <div class="header-top-bar">
    <div class="top-bar-info" v-if="!loginFlag">
      <router-link to="/user/service/login" class="link">登录</router-link>
      <span class="sep">|</span>
      <router-link to="/user/service/register" class="link">注册</router-link>
      <router-link to="" class="link">我的订单</router-link>
    </div>
    <MyUserVue v-else></MyUserVue>
  </div>
</template>

<script setup lang="ts">
import MyUserVue from '@/components/Home/Header/components/MyUser.vue'

import { ref } from 'vue'
import { auth } from '@/hooks/User/auth'

let loginFlag = ref<boolean>(false)

if (auth()) {
  loginFlag.value = true
}
</script>

<style lang="less" scoped>
.header-top-bar {
  padding-top: 30px;

  .top-bar-info {
    position: relative;
    float: right;

    height: 40px;
    line-height: 40px;

    .link {
      padding: 0 5px;
      text-align: center;
      color: #757575;
    }
  }
}
</style>
