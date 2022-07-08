<template>
  <div class="logo">
    <router-link to="/home"></router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.logo {
  position: absolute;
  top: 22px;
  left: 0;
  width: 56px;
  height: 56px;

  a {
    display: block;
    width: 100%;
    height: 100%;
    background: url(https://s02.mifile.cn/assets/static/image/logo-mi2.png)
      no-repeat;
    background-size: 56px;
  }
}
</style>
