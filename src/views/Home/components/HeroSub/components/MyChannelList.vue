<template>
  <div class="channel_list">
    <ul>
      <li v-for="item in store.heroList" :key="item.id">
        <a href="#">
          <span class="iconfont" :class="item.icon"></span>
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useHeaderMainStore } from '@/store/Home/HeaderMain/index'

const store = useHeaderMainStore()

store.getHeroList()
</script>

<style lang="less" scoped>
.channel_list {
  position: absolute;
  top: 0;
  left: 0;
  width: 234px;
  height: 170px;
  padding: 3px;
  background-color: #5f5750;
  box-sizing: border-box;

  ul {
    position: relative;

    li {
      float: left;
      width: 70px;
      height: 82px;
      padding: 0 3px;

      a {
        display: block;
        width: 76px;
        height: 64px;
        padding: 18px 0 0;
        text-align: center;
        transition: color 0.3s;

        .iconfont {
          font-size: 24px;
          padding: 0 23px 4px;
        }

        &:hover {
          color: #fff !important;
        }
      }

      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        margin-left: 4px;
        width: 64px;
        height: 1px;
        background-color: #665e57;
      }

      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 10px;
        width: 1px;
        height: 64px;
        background-color: #665e57;
      }
    }
  }
}
</style>
