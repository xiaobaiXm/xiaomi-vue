<template>
  <div class="nav-info">
    <div class="container">
      <ul v-for="item in list.navChildren" :key="item.id">
        <li>
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
import { INavList } from '@/store/Home/Header/Type/NavList'
defineProps<{
  list: INavList[]
}>()

const productDetail = (productId: number | null): void => {
  console.log(productId)
}
</script>

<style lang="less" scoped>
.nav-info {
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 3px 4px rgba(0, 0, 0, .18);
  position: absolute;
  left: 0;
  top: 140px;
  height: 0;
  display: none;
  z-index: 300;
  transition: all .3s;

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
