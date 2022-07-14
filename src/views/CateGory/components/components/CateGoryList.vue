<template>
  <div class="category_list">
    <ul>
      <li v-for="item in categoryChild" :key="item.id">
        <a href="#">
          <img v-lazy="item.img" alt="">
          <span>{{ item.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'

defineProps<{
  categoryChild:Array<{
    id: number
    name: string
    img: string
  }>
}>()

</script>

<style lang="less" scoped>
.category_list {
  transition: all .7s;

  ul {
    border-top: 1px solid #e0e0e0;

    li {
      width: 253px;
      height: 161px;
      float: left;
      padding-top: 24px;
      border-right: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
      text-align: center;

      a {
        display: block;
        width: 244px;
        height: 114px;
        box-sizing: border-box;
        color: #757575;
        font-size: 14px;

        img {
          display: block;
          width: 70px;
          height: 70px;
          margin: 0 auto 24px;
        }

        span {
          display: block;
          min-height: 20px;
        }
      }

      &:nth-child(5n) {
        border-right: none;
      }
    }
  }
}
</style>
