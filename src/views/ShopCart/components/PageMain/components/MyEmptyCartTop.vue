<template>
  <div class="empty-cart-top hide">
    <h2 class="title">您的购物车还是空的！</h2>
    <p class="login-desc">登录后将显示您之前加入的商品</p>
    <!-- 登录后移除 -->
    <a href="javascript:;" class="btn-primary btn-login">立即登录</a>
    <a href="#" class="btn-primary btn-shoping-nologin">马上去购物</a>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.empty-cart-top {
  height: 273px;
  margin: 65px 0 130px 0;
  padding-left: 558px;
  background: url(https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/cart/cart-empty.png) no-repeat 124px 0;
  color: #b0b0b0;
  overflow: hidden;

  .title {
    margin-top: 70px;
    font-size: 36px;
  }

  .login-desc {
    font-size: 20px;
  }

  .btn-primary {
    display: inline-block;
    width: 172px;
    height: 50px;
    margin-top: 20px;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    box-sizing: border-box;
  }

  .btn-login {
    margin-right: 10px;
    color: #fff;
    background-color: #ff6700;

    &:hover {
      color: #fff !important;
      background-color: #ff6700;
    }
  }

  .btn-shoping-nologin {
    color: #ff6700;
    border: 1px solid #ff6700;
  }
}
</style>
