<template>
  <div class="login_notic">
    <div class="content w">
      为方便您购买，请提前登录
      <a href="#" class="login">立即登录</a>
      <a href="#" class="shut_down"><span class="iconfont icon-close"></span></a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.login_notic {
  height: 50px;
  background-color: #f7f7f7;

  .content {
    text-align: center;
    line-height: 50px;
    color: #333;
    font-size: 14px;

    .login {
      margin-left: 25px;
      color: #ff6700;
    }

    .shut_down {
      margin: 0 0 0 10px;

      .iconfont {
        color: #b5b5b5;
        font-size: 10px;
      }
    }
  }
}
</style>
