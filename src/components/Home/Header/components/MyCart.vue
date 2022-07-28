<template>
  <div class="cart-info">
    <router-link to="/cart" :class="cart > 0 ? 'not_empty ' : ''">
      <em class="iconfont" :class="cart < 0 ? 'icon-gouwuchekong' : 'icon-gouwucheman'"></em>
      <em>购物车</em>
      <span>({{ cart }})</span>
    </router-link>

    <div class="cart_info" v-if="cart <= 0">
      购物车中还没有商品，赶紧选购吧！
    </div>
    <Suspense v-else>
      <template #default>
        <MyCartMenuVue></MyCartMenuVue>
      </template>
      <template #fallback>
        <MyLoading></MyLoading>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

const MyCartMenuVue = defineAsyncComponent(() => import('./MyCartMenu.vue'))

let cart = ref<number>(111)
</script>

<style lang="less" scoped>
.cart-info {
  a {
    display: block;
    width: 120px;
    height: 40px;
    margin-left: 15px;
    text-align: center;
    background-color: #424242;
    transition: all .5s;

    .iconfont {
      font-size: 18px;
    }

    &:hover {
      background-color: #fff;
    }
  }

  .not_empty {
    background-color: #ff6700 !important;
    color: #fff !important;

    &:hover {
      color: #ff6700 !important;
      background-color: #fff !important;
    }
  }

  .cart_info {
    position: absolute;
    top: 40px;
    right: 0;
    width: 316px;
    height: 0;
    line-height: 100px;
    background-color: #fff;
    text-align: center;
    color: #424242;
    box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
    font-size: 12px;
    transition: all .3s;
    overflow: hidden;
    z-index: 33;
  }

  &:hover .cart_info {
    height: 100px !important;
  }

  &:hover .cart-menu {
    height: auto;
  }
}
</style>
