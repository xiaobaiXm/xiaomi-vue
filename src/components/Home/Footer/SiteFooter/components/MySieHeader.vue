<template>
  <div class="site_header">
    <ul>
      <li v-for="item in store.footerHelpList" :key="item.id">
        <router-link to=""> <span class="iconfont" :class="item.icon"></span>{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from '@/store/home'

const store = useHomeStore()

store.getFooterHelpInfo()
</script>

<style lang="less" scoped>
.site_header {
  width: 100%;
  height: 80px;
  padding: 27px 0;
  border-bottom: 1px solid #e0e0e0;
  box-sizing: border-box;
  transition: all 0.5s;

  ul {
    display: flex;

    li {
      flex: 1;
      float: left;
      font-size: 16px;
      line-height: 25px;
      text-align: center;
      border-left: 1px solid #e0e0e0;

      a {
        color: #616161;
        transition: color 0.2s;

        .iconfont {
          margin-right: 6px;
          font-size: 22px;
        }
      }

      &:nth-child(1) {
        border: 0;
      }
    }
  }
}
</style>
