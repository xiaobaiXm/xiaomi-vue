<template>
  <div class="page-main">
    <div class="container w">
      <div class="cart-container">
        <div class="container-main">
          <MyEmptyCartTopVue v-if="!loginFlag"></MyEmptyCartTopVue>
          <template v-else>
            <MyEmptyCartsVue v-if="store.count <= 0"></MyEmptyCartsVue>
            <MyCartWrap v-else></MyCartWrap>
          </template>
          <div class="placeholder-div" v-if="store.count > 0"></div>
          <MyCartBar v-if="store.count > 0"></MyCartBar>
          <Suspense>
            <template #default>
              <MyGuessYouBuyVue :title="'买购物车中商品的人还买了'"></MyGuessYouBuyVue>
            </template>
            <template #callback>
              <MyLoading></MyLoading>
            </template>
          </Suspense>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import MyEmptyCartTopVue from './components/MyEmptyCartTop.vue'
import MyCartWrap from './components/CartWrap/MyCartWrap.vue'
import MyCartBar from './components/CartBar/MyCartBar.vue'
import MyEmptyCartsVue from './components/EmptyCarts/MyEmptyCarts.vue'
import { ref, defineAsyncComponent } from 'vue'
import { useCartsStore } from '@/store/carts'
import { auth } from '@/hooks/User/auth'

const MyGuessYouBuyVue = defineAsyncComponent(() => import('@/components/GuessYouBuy/MyGuessYouBuy.vue'))
const store = useCartsStore()
let loginFlag = ref<boolean>(false)

if (auth()) {
  loginFlag.value = true
}

store.getAllUserShopCartInfo()
</script>

<style lang="less" scoped>
.page-main {
  padding: 38px 0;
  background-color: #f5f5f5;

  .container {
    .cart-container {
      .container-main {

        .placeholder-div {
          margin: 20px 0;
        }
      }
    }
  }
}
</style>
