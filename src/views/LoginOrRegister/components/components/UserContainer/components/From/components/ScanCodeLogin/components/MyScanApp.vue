<template>
  <div class="scan-app">
    <div class="acan-app-title">支持扫码登录的App</div>
    <div class="scan-app-list">
      <a href="#">
        <div class="scan-app-icon">
          <img src="https://img2.baidu.com/it/u=3968576207,2375503299&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
            alt="">
        </div>
        <div class="scan-app-text">米家</div>
      </a>
      <a href="#">
        <div class="scan-app-icon">
          <img src="https://img0.baidu.com/it/u=751361387,889810108&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="">
        </div>
        <div class="scan-app-text">小米商城</div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.scan-app {
  max-width: 360px;
  margin: 48px auto 0;
  text-align: center;

  .acan-app-title {
    padding: 8px 0;
    font-size: 17px;
    line-height: 1.45;
    color: #aaa;
  }

  .scan-app-list {
    margin-top: 8px;

    a {
      vertical-align: top;
      display: inline-block;
      min-width: 80px;
      text-decoration: none;
      background-color: rgba(0, 0, 0, 0);
      outline: none;
      cursor: pointer;
      transition: color .3s;

      .scan-app-icon {
        width: 46px;
        height: 46px;
        margin: 0 auto;
        background-size: cover;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .acan-app-text {
        margin-top: 4px;
        text-align: center;
        font-size: 12px;
        color: #aaa;
        line-height: 12px;
      }

      &:hover {
        color: #aaa !important;
      }
    }
  }
}
</style>
