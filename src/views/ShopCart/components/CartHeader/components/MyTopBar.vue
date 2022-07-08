<template>
  <div class="header-top-bar">
    <div class="top-bar-info">
      <a href="#" class="link">登录</a>
      <span class="sep">|</span>
      <a href="#" class="link">注册</a>
      <a href="#" class="link">我的订单</a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.header-top-bar {
  .top-bar-info {
    position: relative;
    float: right;
    margin-top: 30px;
    height: 40px;
    line-height: 40px;

    .link {
      padding: 0 5px;
      text-align: center;
      color: #757575;
    }
  }
}
</style>
