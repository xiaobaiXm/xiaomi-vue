<template>
  <div class="order_list">
    <ul>
      <li class="order_item">
        <a href="javascript:;" @click="changeOrder('1')" :class="{'active' : order==='1:DESC' || order==='1:ASC'}">综合</a>
      </li>
      <li class="order_item">
        <a href="javascript:;" @click="changeOrder('4')"  :class="{'active' : order==='4:DESC' || order==='4:ASC'}">新品</a>
      </li>
      <li class="order_item">
        <a href="javascript:;" @click="changeOrder('3')"  :class="{'active' : order==='4:DESC' || order==='4:ASC'}">销量</a>
      </li>
      <li class="order_item">
        <a href="javascript:;" @click="changeOrder('2')"
          :class="{'active' : order==='2:DESC' || order==='2:ASC'}">价格<span class="iconfont icon-shang--jiantou"
          :class="order === '2:DESC' ? 'icon-shang--jiantou' : 'icon-xia--jiantou'"></span></a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, inject, getCurrentInstance } from 'vue'

const instance = getCurrentInstance()
const order = inject<Ref<string>>('order', ref('1:DESC'))

const changeOrder = (flag: string):void => {
  let originFlag: string = order.value.split(':')[0]
  let originSort: string = order.value.split(':')[1]
  console.log(`${originFlag} ------ ${originSort}`)
  let newOrder = ref<string>('')

  if (flag === originFlag) {
    newOrder.value = `${originFlag}:${originSort === 'DESC' ? 'ASC' : 'DESC'}`
  } else {
    newOrder.value = `${flag}:${originSort === 'DESC' ? 'DESC' : 'ASC'}`
  }
  console.log(newOrder.value)
  instance?.proxy?.$Bus.emit('changeSearchOrder', newOrder.value)
}
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
