<template>
  <div class="nav-info" v-if="flag" :class="{ flag: 'nav-info-slide-active' }">
    <div class="container w">
      <ul v-show="flag">
        <li v-for="(item, index ) in list" :key="index">
          <a href="javascript:;" @click="productDetail(1)">
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
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { INavChild } from '@/model/NavList'
defineProps<{
  list: INavChild[],
  flag: boolean
}>()

const instance = getCurrentInstance()
let showIndex = ref<number>(-1)

const productDetail = (productId: number | null): void => {
  console.log(productId)
}
instance?.proxy?.$Bus.on('changeNavInfoShowFlag', (index): void => {
  showIndex.value = index as number
})
</script>

<style lang="less" scoped>
.nav-info-slide-active {
  box-shadow: 0 3px 4px rgb(0 0 0 / 18%);
  transition: box-shadow .3s, height .3s;
}

.nav-info {
  width: 100%;
  position: absolute;
  left: 0;
  top: 140px;
  height: 0;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  z-index: 1111100;

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
