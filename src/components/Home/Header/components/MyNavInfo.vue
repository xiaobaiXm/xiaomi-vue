<template>
  <teleport to="body">
    <div class="navBarInfo" :class="show == null ? 'hide' : 'slide-down'">
      <div class="container w">
        <ul :class="show == index ? 'show' : 'hide'" v-for="(v, index) in navList" :key="index">
          <li v-for="item in v.navChildren" :key="item.id">
            <a href="#">
              <div class="imgUrl">
                <img v-lazy="item.img" alt="">
              </div>
              <div class="text">{{ item.name }}</div>
              <p class="price">{{ item.price }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'

import { INavList } from '@/store/Home/Header/Type/NavList'

let show = ref<number | null>(null)

defineProps<{
  navList: INavList[]
}>()

const instance = getCurrentInstance()

instance?.proxy?.$Bus.on('navIndexChange', (index): void => {
  show.value = index as number | null
})

</script>

<style lang="less" scoped>
.slide-down {
  height: 229px;
}

.navBarInfo {
  position: absolute;
  top: 140px;
  width: 100%;
  height: 229px;
  margin: 0 0;
  border-top: 1px solid #e0e0e0;
  z-index: 9999;
  background-color: #fff;
  box-shadow: 0 3px 4px rgb(0 0 0 / 18%);
  transition: box-shadow .2s, all .3s;

  .container {
    ul {
      li {
        width: 204px;
        height: 201px;
        padding: 35px 12px 0;
        float: left;
        text-align: center;

        a {
          float: left;
          width: 180px;
          height: 166px;

          .imgUrl {
            width: 160px;
            height: 110px;
            margin: 0 auto 16px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .text {
            width: 180px;
            height: 20px;
            color: #333;
          }

          p {
            height: 20px;
            color: #ff6700;
          }
        }

        &::after {
          content: '';
          display: block;
          width: 1px;
          height: 100px;
          background-color: #e0e0e0;
        }

        &:nth-child(1) {
          &::after {
            content: none;
          }
        }
      }
    }
  }
}
</style>
