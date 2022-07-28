<template>
  <div class="con_right">
    <ul>
      <li class="hover_List_up" v-for="item in phoneRight" :key="item.id">
        <a href="#">
          <div class="img">
            <img v-lazy="item.img" alt="">
          </div>
          <h3 class="title">{{ item.name }}</h3>
          <p class="describe">{{ item.desc }}</p>
          <p class="price">
            <span class="num">{{ item.price }}元起</span>
            <span class="old_price" v-if="item.oldPrice">{{ item.oldPrice}}元</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { IPhoneChildren } from '@/store/Home/Container/Type/Phone'
defineProps<{
  phoneRight : IPhoneChildren
}>()
</script>

<style lang="less" scoped>
.con_right {
  position: absolute;
  top: 0;
  left: 234px;

  ul {
    li {
      width: 234px;
      height: 300px;
      float: left;
      padding: 0;
      margin: 0 0 14px 21px;
      background-color: #fff;
      transition: all .2s linear;

      a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 20px 0;
        text-align: center;
        box-sizing: border-box;

        .img {
          width: 160px;
          height: 160px;
          margin: 0 auto 18px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .title {
          margin: 0 10px 2px;
          color: #333;
          font-weight: 400;
        }

        .describe {
          margin: 0 10px 10px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 12px;
          color: #b0b0b0;
        }

        .price {
          margin: 0 10px 14px;

          .num {
            font-size: 14px;
            color: #ff6700;
          }

          .old_price {
            margin-left: 5px;
            font-size: 14px;
            text-decoration: line-through;
          }
        }

        &:hover {
          color: #b0b0b0 !important;
        }
      }
    }
  }
}
</style>
