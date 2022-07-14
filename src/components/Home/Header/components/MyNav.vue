<template>
  <div class="header_nav">
    <ul class="clearfix">
      <li class="category category-hide"><router-link to="/category"><span class="text">全部商品分类</span></router-link></li>
      <li class="nav-item nav-item-active" v-for="(item,index ) in store.navList" :key="index"
        @mouseenter="shoeIdChange(index)" @mouseleave="shoeIdChange(null)">
        <a href="#">
          <span class="text">{{ item.navTitle }}</span>
        </a>
      </li>
       <li class="nav-item nav-item-active"><a href="#"><span class="text">服务中心</span></a></li>
      <li class="nav-item nav-item-active"><a href="#"><span class="text">社区</span></a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { useHeaderStore } from '@/store/Home/Header/index'
const store = useHeaderStore()

store.getHeaderNav()

const instance = getCurrentInstance()

const shoeIdChange = (index: number | null): void => {
  instance?.proxy?.$Bus.emit('navIndexChange', index)
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
