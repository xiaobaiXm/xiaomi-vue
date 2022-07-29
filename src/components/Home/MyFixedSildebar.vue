<template>
  <div class="sideNavigationBar">
    <a href="#">
      <span class="iconfont icon-shouji"></span>
      <span class="text">手机APP</span>
    </a>
    <a href="#">
      <span class="iconfont icon-gerenzhongxin"></span>
      <span class="text">个人中心</span>
    </a>
    <a href="#">
      <span class="iconfont icon-weixiubanshou"></span>
      <span class="text">售后服务</span>
    </a>
    <a href="#">
      <span class="iconfont icon-kefu"></span>
      <span class="text">人工客服</span>
    </a>
    <a href="#">
      <span class="iconfont icon-xiazai1"></span>
      <span class="text">购物车</span>
    </a>
    <a href="#" class="goBackTop" style="display:none">
      <span class="iconfont icon-dingbu"></span>
      <span class="text">回顶部</span>
    </a>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.sideNavigationBar {
  position: fixed;
  bottom: 70px;
  right: 0;
  width: 84px;
  height: 455px;
  z-index: 99;
  a {
    display: block;
    width: 82px;
    height: 90px;
    padding-top: 18px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.3s;

    .iconfont {
      font-size: 30px;
      color: #757575;
    }

    .text {
      display: block;
      margin: 8px auto 0;
      font-size: 14px;
      color: #757575;
    }

    &:hover {
      color: #ff6700;

      span {
        color: #ff6700;
      }
    }
  }

  .goBackTop {
    margin-top: 14px !important;
  }
}
</style>
