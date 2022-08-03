<template>
  <div class="userInfo">
    <div class="shop_car">
      <MyCartVue></MyCartVue>
    </div>

    <MyUserVue v-if="!authFlag"></MyUserVue>
    <div class="user" v-else>
      <ul>
        <li><span>
            <router-link to="">登录</router-link>
          </span></li>
        <li><span>
            <router-link to="">注册</router-link>
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

import { ref } from 'vue'

import { useCartsStore } from '@/store/Carts'

const store = useCartsStore()

let authFlag = ref<boolean>(false)

</script>

<style lang="less" scoped>
.shop_car {
  position: relative;
  float: right;
}

.userInfo {
  position: absolute;
  top: 0;
  right: 0;
  line-height: 40px;
}
</style>
