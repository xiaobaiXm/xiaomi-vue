em<template>
  <div class="cart-info" @mouseenter="flag = !flag" @mouseleave="flag = !flag">
    <router-link to="/cart" :class="store.count > 0 ? 'not_empty ' : ''">
      <em class="iconfont" :class="store.count <= 0 ? 'icon-ic_gouwuchecopy' : 'icon-gouwucheman'"></em>
      <em>购物车</em>
      <span>({{ store.count }})</span>
    </router-link>
    <Suspense v-if="flag">
      <template #default>
        <div class="cart_info" v-if="store.count <= 0">
          购物车中还没有商品，赶紧选购吧！
        </div>
        <MyCartMenuVue v-else :list="store.cart" :count="store.count"></MyCartMenuVue>
      </template>
      <template #fallback>
        <MyLoading></MyLoading>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineAsyncComponent, onMounted } from 'vue'
import { useCartsStore } from '@/store/Carts'
import { auth } from '@/hooks/User/auth'

const store = useCartsStore()
const MyCartMenuVue = defineAsyncComponent(() => import('./MyCartMenu.vue'))

let flag = ref<boolean>(false)

watch(flag, (newValue) => {
  if (newValue) {
    if (auth()) {
      store.getAllUserShopCartInfo()
    } else {
      store.count = 0
    }
  } else {
    store.cart = []
  }
})

onMounted(() => {
  if (auth()) {
    if (!flag.value) {
      store.getAllUserShopCartInfo()
    }
  } else {
    store.count = 0
  }
})
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
      font-size: 16px;
      margin-right: 5px;
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
