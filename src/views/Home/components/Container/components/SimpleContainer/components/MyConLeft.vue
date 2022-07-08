<template>
  <div class="con_left">
    <ul>
      <li class="hover_List_up">
        <a href="#">
          <!-- <img
            v-lazy="list?.containerChild[0].containerLeftImgUrl"
            alt=""> -->
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

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
