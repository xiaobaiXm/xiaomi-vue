<template>
  <div class="selection-left">
    <router-link to="/category" class="back-shoppinp">继续购物</router-link>
    <span class="cart-total">已选择<i>{{ store.selectCount }}</i>件</span>
  </div>
</template>

<script setup lang="ts">
import { useCartsStore } from '@/store/carts'

const store = useCartsStore()
</script>

<style lang="less" scoped>
.selection-left {
  float: left;
  line-height: 50px;
  font-size: 14px;

  .back-shoppinp {
    margin-left: 32px;
    transition: color .3s;
  }

  .cart-total {
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
    color: #757575;

    i {
      color: #ff6700;
    }
  }
}
</style>
