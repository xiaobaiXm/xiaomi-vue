<template>
  <div class="userInfo">
    <div class="shop_car">
      <MyCartVue></MyCartVue>
    </div>
    <MyUserVue v-if="auth()"></MyUserVue>
    <div class="userL" v-else>
      <ul>
        <li><span>
            <router-link to="/user/service/login">登录</router-link>
          </span></li>
        <li><span>
            <router-link to="/user/service/register">注册</router-link>
          </span></li>
        <li><span><a href="#">消息通知</a></span></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import '@/style/Home/Header.user.less'
import MyCartVue from './MyCart.vue'
import MyUserVue from './MyUser.vue'

import { auth } from '@/hooks/User/auth'

</script>

<style lang="less" scoped>
.userInfo {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 40px;

  .shop_car {
    position: relative;
    float: right;
  }

  .userL {
    float: right;

    ul {
      li {
        position: relative;
        float: left;

        span {
          padding: 0 10px;

          a {
            &:hover {
              color: #fff !important;
            }
          }
        }
      }
    }
  }
}
</style>
