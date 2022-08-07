<template>
  <div class="nav_bar">
    <ul>
      <li v-for="item in store.navBarList" :key="item.id"><a href="#">{{ item.name }}</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/store/Home/Header/index'
const store = useHeaderStore()
store.getHeaderNavBarList()
</script>

<style lang="less" scoped>
.nav_bar {
  position: absolute;
  top: 0;
  left: 0;

  ul {
    li {
      float: left;
      line-height: 40px;

      a {
        &:hover {
          color: #fff !important;
        }
      }

      &:nth-child(-n + 12) {
        padding-right: 17px;

        &::after {
          content: '';
          display: inline-block;
          position: absolute;
          top: 13px;
          margin-left: 8px;
          width: 1px;
          height: 16px;
          background-color: #424242;
        }
      }
    }
  }
}
</style>
