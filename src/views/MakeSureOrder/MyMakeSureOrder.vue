<template>
  <div class="main">
    <div class="cart-header-box">
      <div class="cart-header w">
        <div class="header-logo">
          <a href="#" title="小米官网"></a>
        </div>
        <div class="header-title">
          <h2 class="title">确认订单</h2>
          <!--    <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p> -->
        </div>
        <div class="header-top-bar">
          <div class="top-bar-info">
            <a href="#" class="link">登录</a>
            <span class="sep">|</span>
            <a href="#" class="link">注册</a>
            <a href="#" class="link">我的订单</a>
          </div>
        </div>
      </div>
    </div>
    <!-- page main  -->
    <MyPageMainVue></MyPageMainVue>
  </div>
</template>

<script setup lang="ts">
import MyPageMainVue from './components/MyPageMain.vue'
</script>

<style lang="less" scoped>
.main {
  .cart-header-box {
    height: 102px;
    background-color: #fff;
    border-bottom: 2px solid #ff6700;

    .cart-header {

      .header-logo {
        float: left;
        margin-top: 26px;
        width: 93px;

        a {
          display: block;
          width: 48px;
          height: 48px;
          background: url(https://s02.mifile.cn/assets/static/image/logo-mi2.png) no-repeat;
          background-size: 48px;
        }
      }

      .header-title {
        float: left;
        margin-top: 26px;
        height: 48px;

        .title {
          float: left;
          height: 48px;
          margin-bottom: 0;
          line-height: 48px;
          color: #424242;
          font-size: 28px;
          font-weight: 400;
        }

        p {
          float: left;
          height: 20px;
          line-height: 20px;
          margin-top: 20px;
          margin-left: 15px;
          color: #757575;
        }
      }

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
    }
  }

}
</style>
