<template>
  <div class="con_left">
    <ul>
      <li class="hover_List_up">
        <a href="#">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b99bcb716c8f76e1fc5475172bdfc27.jpg?thumb=1&w=234&h=614&f=webp&q=90" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// import { IPhoneChildren } from '@/store/Home/Container/Type/Phone'

// defineProps<{
//   phoneLeft :IPhoneChildren
// }>()

</script>

<style lang="less" scoped>
.con_left {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;

  ul {
    li {
      transition: all .2s linear;

      a {
        display: block;
        width: 234px;
        height: 614px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
