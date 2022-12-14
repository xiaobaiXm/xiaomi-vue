<template>
  <div class="list-header">
    <div class="col col-check">
      <i @click="selectAll" :class="status ? 'check-active' : ''" class="iconfont icon-a-Frame3163 icon-checkbox"></i>全选
    </div>
    <div class="col col-img">&nbsp;</div>
    <div class="col col-name">商品名称</div>
    <div class="col col-price">单价</div>
    <div class="col col-num">数量</div>
    <div class="col col-total">小计</div>
    <div class="col col-action">操作</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartsStore } from '@/store/carts'

const store = useCartsStore()

const status = computed((): boolean => {
  return store.cart.every((currentValue): boolean => {
    return currentValue.selected
  })
})

const selectAll = (): void => {
  let newStatus = !status.value
  try {
    store.selectAllUserCart(newStatus)
  } catch (err) {
    alert(err)
  }
}
</script>

<style lang="less" scoped>
.list-header {
  height: 70px;
  line-height: 70px;
  padding-right: 26px;
  color: #424242;

  .col {
    float: left;

    .check-active {
      color: #fff;
      border-color: #ff6700;
      background-color: #ff6700;
    }
  }
}
</style>
