<template>
  <div class="order_list">
    <ul>
      <li class="order_item">
        <a href="javascript:;" @click="changeOrder('1')" :class="{ 'active': isOne }">综合</a>
      </li>
      <li class="order_item">
        <a href="javascript:;" @click="changeOrder('4')" :class="{ 'active': isFour }">新品</a>
      </li>
      <li class="order_item">
        <a href="javascript:;" @click="changeOrder('3')" :class="{ 'active': isThere }">销量</a>
      </li>
      <li class="order_item">
        <a href="javascript:;" @click="changeOrder('2')" :class="{ 'active': isTwo }">价格<span
            class="iconfont"
            :class="{ 'icon-shang--jiantou': isDesc, 'icon-xia--jiantou': isAsc }"></span></a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, computed, inject } from 'vue'

const order = inject<Ref<string>>('order', ref(''))

const changeOrder = (flag: string): void => {
  const originFlag: string = order.value.split(':')[0]
  const originSort: string = order.value.split(':')[1]
  let newOrder = ref<string>('')
  if (flag === originFlag) {
    newOrder.value = `${originFlag}:${originSort === 'DESC' ? 'ASC' : 'DESC'}`
  } else {
    newOrder.value = `${flag}:${originSort === 'DESC' ? 'DESC' : 'ASC'}`
  }
  order.value = newOrder.value
}

const isOne = computed(() => {
  return order.value.indexOf('1') !== -1
})
const isTwo = computed(() => {
  return order.value.indexOf('2') !== -1
})
const isThere = computed(() => {
  return order.value.indexOf('3') !== -1
})
const isFour = computed(() => {
  return order.value.indexOf('4') !== -1
})
const isDesc = computed(() => {
  return order.value.indexOf('DESC') !== -1
})
const isAsc = computed(() => {
  return order.value.indexOf('ASC') !== -1
})

</script>

<style lang="less" scoped>
.order_list {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  line-height: 30px;

  ul {
    .order_item {
      float: left;
      padding: 0 30px;
      font-size: 14px;

      a {
        color: #424242;
        transition: color 0.2s;

        .iconfont {
          font-size: 10px;
        }
      }

      &:nth-child(-n+3) {
        border-right: 1px solid #e0e0e0;
      }
    }

    .active {
      color: #ff6700 !important;
    }
  }
}
</style>
