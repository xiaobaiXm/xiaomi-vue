<template>
  <div class="promo_list">
    <ul>
      <li v-for="promo in store.heroBanner" :key="promo.id">
        <a href="#">
          <img v-lazy="promo.img" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useHeaderMainStore } from '@/store/Home/HeaderMain/index'
const store = useHeaderMainStore()
store.getHeroBanner()
</script>

<style lang="less" scoped>
.promo_list {
  position: absolute;
  top: 0;
  left: 234px;
  width: 1032px;
  height: 170px;

  ul {
    li {
      float: left;
      margin-left: 28px;

      a {
        display: block;
        width: 316px;
        height: 170px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
