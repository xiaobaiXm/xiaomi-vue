<template>
  <div class="empty-cart-wrap">
    <div class="empty-cart-top">
      <h2>您的购物车还是空的！</h2>
      <router-link to="/category">马上去购物</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.empty-cart-wrap {
  .empty-cart-top {
    height: 273px;
    padding-left: 558px;
    margin: 65px 0 0;
    background: url(https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/cart/cart-empty.png) no-repeat 124px 0;
    color: #b0b0b0;
    overflow: hidden;

    h2 {
      margin: 70px 0 0 0;
      font-size: 36px;
    }

    a {
      display: inline-block;
      width: 170px;
      height: 50px;
      line-height: 48px;
      padding: 0;
      margin-top: 15px;
      border: 1px solid #ff6700;
      font-size: 14px;
      text-align: center;
      background: #ff6700;
      color: #fff;
      cursor: pointer;
      transition: all .4s;

      &:hover {
        color: #fff !important;
        background-color: rgb(242, 88, 7);
      }
    }
  }
}
</style>
