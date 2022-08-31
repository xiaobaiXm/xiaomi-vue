<template>
  <div class="header-box">
    <div class="header w">
      <div class="header-logo">
        <router-link to="/" title="小米官网"></router-link>
      </div>
      <div class="header-title">
        <h2 class="title">{{ title }}</h2>
        <p>{{ desc }}</p>
      </div>
      <div class="header-top-bar">
        <template v-if="!authFlag">
          <div class="top-bar-info">
            <a href="#" class="link">登录</a>
            <span class="sep">|</span>
            <a href="#" class="link">注册</a>
            <a href="#" class="link">我的订单</a>
          </div>
        </template>
        <MyUser v-else></MyUser>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyUser from '@/components/Home/Header/components/MyUser.vue'

import { ref } from 'vue'
import { auth } from '@/hooks/User/auth'

defineProps<{
  title: string
  desc?: string
}>()

let authFlag = ref<boolean>(false)

if (auth()) {
  authFlag.value = true
}
</script>

<style lang="less" scoped>
.header-box {
  height: 102px;
  background-color: #fff;
  border-bottom: 2px solid #ff6700;

  .header {

    .header-logo {
      float: left;
      margin-top: 26px;
      width: 93px;

      a {
        display: block;
        width: 48px;
        height: 48px;
        background: url(https://s02.mifile.cn/assets/static/image/logo-mi2.png) no-repeat;
        background-size: 48px;
      }
    }

    .header-title {
      float: left;
      margin-top: 26px;
      height: 48px;

      .title {
        float: left;
        height: 48px;
        margin-bottom: 0;
        line-height: 48px;
        color: #424242;
        font-size: 28px;
        font-weight: 400;
      }

      p {
        float: left;
        height: 20px;
        line-height: 20px;
        margin-top: 20px;
        margin-left: 15px;
        color: #757575;
      }
    }

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
  }
}
</style>
