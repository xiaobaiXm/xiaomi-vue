<template>
  <div class="userInfo">
    <div class="shop_car">
      <router-link to="/cart">
        <em class="iconfont icon-xiazai1"></em>
        <em>购物车</em>
        <span> (0)</span>
      </router-link>
      <div class="cart_info">
        <div class="message">
          购物车中还没有商品，赶紧选购吧！
        </div>
      </div>
    </div>
    <div class="user">
      <ul>
        <li><span><router-link to="/login">登录</router-link></span></li>
        <li><span><router-link to="/register">注册</router-link></span></li>
        <li><span><a href="#">消息通知</a></span></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.topMain {
  position: relative;
  height: 40px;

  .userInfo {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 40px;

    .user {
      float: right;

      ul {
        li {
          position: relative;
          float: left;

          span {
            padding: 0 10px;

            a {
              &:hover {
                color: #fff !important;
              }
            }
          }

          &:nth-child(-n+2) {
            &::after {
              content: '';
              display: inline-block;
              position: absolute;
              top: 13px;
              width: 1px;
              height: 16px;
              background-color: #424242;
            }
          }
        }
      }
    }

    .shop_car {
      position: relative;
      float: right;

      a {
        display: block;
        width: 120px;
        height: 40px;
        margin-left: 15px;
        text-align: center;
        background-color: #424242;
        transition: all .5s;

        &:hover {
          background-color: #fff;
        }
      }

      .cart_info {
        display: none;
        position: absolute;
        top: 40px;
        left: -181px;
        width: 316px;
        height: 100px;
        padding: 20px 0 0;
        background-color: #fff;
        z-index: 99;
        transition: height .3s;
        box-shadow: 0 2px 10px rgb(0 0 0 / 15%);

        .message {
          padding: 20px 0;
          margin: 0 20px 20px;
          text-align: center;
          color: #424242;
        }
      }
    }
  }
}
</style>
