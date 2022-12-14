<template>
  <!-- 侧边二级菜单 -->
  <div class="main">
    <div class="type_nav" :class="showFlag ? '' : 'site-category-list'">
      <ul>
        <li v-for="(item, index) in store.category" :key="index">
          <a href="javascript:;">{{ item.categoryTitle }}<span class="iconfont icon-youjiantou"></span></a>
          <div class="secondary_menu">
            <a href="#" v-for="childItem in item.categoryChild" :key="childItem.id">
              <img v-lazy="childItem.img" alt="" />
              <span>{{ childItem.name }}</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from '@/store/home'
const store = useHomeStore()

store.getCategoryList()

defineProps<{
  showFlag: boolean
}>()
</script>

<style lang="less" scoped>
.site-category-list {
  display: none;
  border: 1px solid #ff6700;
  background: #fff !important;
  > ul {
    > li {
      > a {
        color: #424242 !important;
      }
    }
  }
}

.type_nav {
  position: absolute;
  top: 100px;
  left: -100px;
  width: 234px;
  height: 460px;
  z-index: 999;
  color: #fff;
  background: rgba(105, 101, 101, 0.6);

  ul {
    padding: 20px 0;

    li {
      > a {
        display: block;
        width: 204px;
        height: 42px;
        line-height: 42px;
        color: #fff;
        padding: 0 0 0 30px;
        font-size: 14px;

        &:hover {
          color: #fff !important;
          background-color: #ff6a00;

          .secondary_menu {
            display: block;
          }
        }

        .iconfont {
          float: right;
          margin-right: 20px;
          color: #e0e0e0;
        }
      }

      .secondary_menu {
        position: absolute;
        top: 0;
        left: 234px;
        display: grid;
        grid-template-rows: repeat(6, 1fr);
        grid-auto-flow: column;
        grid-auto-columns: 258px;
        min-width: 258px;
        height: 460px;
        padding: 0 10px;
        background-color: #fff;
        display: none;
        z-index: 1;
        box-shadow: 0 8px 16px rgb(0 0 0 / 18%);
        border: 1px solid #e0e0e0;

        a {
          display: flex;
          align-items: center;
          color: #2d2d2d;
          font-size: 14px;

          img {
            width: 35px;
            margin-right: 10px;
          }
        }
      }

      &:hover {
        .secondary_menu {
          display: grid;
        }
      }
    }
  }
}
</style>
