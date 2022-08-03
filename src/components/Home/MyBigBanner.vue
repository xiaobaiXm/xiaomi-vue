<template>
  <div class="big_banner">
    <a href="javascript:;">
      <img v-lazy="img" alt="">
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string
}>()
</script>

<style lang="less" scoped>
.big_banner {
  height: 120px;
  margin: 22px 0;

  a {
    img {
      width: 100%;
      height: 120px;
    }
  }
}
</style>
