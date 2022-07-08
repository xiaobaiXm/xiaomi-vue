<template>
  <div class="header_nav">
    <ul class="clearfix">
      <li class="category category-hide"><a href="#"><span class="text">全部商品分类</span></a></li>
      <li class="nav-item nav-item-active" v-for="item in store.navList" :key="item.navId"
        @mouseenter="shoeIdChange(item.navId)">
        <a href="#">
          <span class="text">{{ item.navTitle }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

import { getCurrentInstance } from 'vue'
import { useHeaderStore } from '@/store/Home/Header/index'
// import { storeToRefs } from 'pinia'
const store = useHeaderStore()

// 加载数据
store.getHeaderNav()

// const { navList } = storeToRefs(store)

const instance = getCurrentInstance()

const shoeIdChange = (index: number) => {
  instance?.proxy?.$Bus.emit('indexChange', index)
}
</script>

<style lang="less" scoped>
.header_nav {
  position: absolute;
  top: 0;
  left: 100px;
  width: 850px;
  height: 100px;

  ul {
    position: relative;

    .category {
      position: relative;
      float: left;
      width: 131px;
      padding-right: 15px;

      a {
        display: block;
        height: 88px;
        padding: 10px 10px;
        line-height: 88px;
        color: #333;
        font-size: 16px;

        &:hover {
          color: #333 !important;
        }
      }
    }

    .nav-item {
      float: left;

      a {
        display: block;
        height: 88px;
        padding: 10px 10px;
        line-height: 88px;
        color: #333;
        font-size: 16px;

        &:hover {
          color: #ff6a00;
        }
      }
    }

    .nav-item-active {
      position: relative;
    }

    .category-hide {
      visibility: hidden;
    }
  }
}
</style>
