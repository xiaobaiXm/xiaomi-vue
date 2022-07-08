<template>
  <div class="con_title">
 <router-link to="/"><div class="logo"></div></router-link>小米账号
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.con_title {
  position: absolute;
  top: 20px;
  left: 20px;
  color: #333;
  font-size: 26px;

  .logo {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 10px;
    vertical-align: middle;
    background: url(https://s02.mifile.cn/assets/static/image/logo-mi2.png) no-repeat;
    background-size: 40px;
  }
}
</style>
