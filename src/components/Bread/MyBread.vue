<template>
  <div class="bread w">
    <router-link to="/">首页</router-link>
    <span class="horizontal">/</span>
    <span>全部商品分类</span>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.bread {
  line-height: 40px;

  a {
    color: #757575;
  }

  .horizontal {
    margin: 0 6px;
  }
}
</style>
