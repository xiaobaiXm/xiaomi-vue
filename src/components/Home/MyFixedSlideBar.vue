<template>
  <div class="sideNavigationBar">
    <a href="#" class="item">
      <span class="iconfont icon-shouji"></span>
      <span class="text">手机APP</span>
    </a>
    <a href="#" class="item">
      <span class="iconfont icon-gerenzhongxin"></span>
      <span class="text">个人中心</span>
    </a>
    <a href="#" class="item">
      <span class="iconfont icon-weixiubanshou"></span>
      <span class="text">售后服务</span>
    </a>
    <a href="#" class="item">
      <span class="iconfont icon-kefu"></span>
      <span class="text">人工客服</span>
    </a>
    <router-link to="/cart" class="item cart" style="position: relative;">
      <span class="iconfont icon-xiazai1"></span>
      <span class="text">购物车</span>
      <span class="cart-num" v-if="false">{{ 1 }}</span>
    </router-link>
    <a href="javascript:;" class="goBackTop item" v-if="goBackTopFlag" @click="goBack">
      <span class="iconfont icon-dingbu"></span>
      <span class="text">回顶部</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useCartsStore } from '@/store/Carts'
import { goBack } from '@/hooks/BackTop'

const store = useCartsStore()

let goBackTopFlag = ref<boolean>(false)

const handleScroll = (): void => {
  if (document.documentElement.scrollTop > 800) {
    goBackTopFlag.value = true
  } else {
    goBackTopFlag.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="less" scoped>
.sideNavigationBar {
  position: fixed;
  bottom: 70px;
  right: 0;
  width: 84px;
  height: 455px;
  z-index: 99;

  .item {
    display: block;
    width: 82px;
    height: 90px;
    padding-top: 6px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;
    box-sizing: border-box;
    transition: color 0.3s;

    .iconfont {
      font-size: 30px;
      color: #757575;
    }

    .text {
      display: block;
      margin: 8px auto 0;
      font-size: 14px;
      color: #757575;
    }

    .cart-num {
      position: absolute;
      right: 14px;
      top: 10px;
      padding: 0 5px;
      height: 14px;
      line-height: 14px;
      color: #fff;
      font-size: 10px;
      background-color: #ff6700;
      border: 2px solid #fff;
      border-radius: 9px;
    }

    &:hover {
      color: #ff6700;

      span {
        color: #ff6700;
      }

      .cart-num {
        color: #fff !important;
      }
    }
  }

  .goBackTop {
    margin-top: 14px !important;
  }
}
</style>
