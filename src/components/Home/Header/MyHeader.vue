<template>
  <!-- 头部 start-->
  <header class="header">
    <!-- 头部导航栏 start -->
    <div class="top_nav">
      <div class="topMain w">
        <!-- nav bar -->
        <MyNavBarVue></MyNavBarVue>
        <!-- user  -->
        <MyUserInfoVue></MyUserInfoVue>
      </div>
    </div>
    <div id="nav-nav">
      <div class="navMain w">
        <!-- logo -->
        <MyLogoVue></MyLogoVue>
        <!-- nav -->
        <MyNavVue></MyNavVue>
        <!-- search -->
        <MySearchVue></MySearchVue>
      </div>
      <MyNavInfoVue :navList="navList"></MyNavInfoVue>
    </div>
  </header>
</template>

<script setup lang="ts">
import MyNavBarVue from './components/MyNavBar.vue'
import MyUserInfoVue from './components/MyUserInfo.vue'
import MyLogoVue from './components/MyLogo.vue'
import MyNavVue from './components/MyNav.vue'
import MySearchVue from './components/MySearch.vue'

import MyNavInfoVue from './components/MyNavInfo.vue'

import { useHeaderStore } from '@/store/Home/Header/index'
import { storeToRefs } from 'pinia'
const store = useHeaderStore()

const { navList } = storeToRefs(store)
</script>

<style scoped lang="less">
.header {
  height: 140px;

  .top_nav {
    height: 40px;
    background-color: #333333;

    .topMain {
      position: relative;
    }
  }
}

#nav-nav {
  .navMain {
    position: relative;
    height: 100px;
  }
}
</style>
