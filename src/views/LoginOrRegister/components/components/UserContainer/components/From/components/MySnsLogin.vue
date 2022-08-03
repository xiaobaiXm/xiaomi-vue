<template>
  <div class="sns-login clearfix">
    <div class="sns-login-title">其他方式登录</div>
    <div class="sns-login-content">
      <div class="sns-login-list">
        <div class="sns-login-item">
          <a href="#"><span class="iconfont icon-zhifubao" style="color:#1989fa"></span></a>
        </div>
        <div class="sns-login-item">
          <a href="#"><span class="iconfont icon-weixin1" style="color:#50b674"></span></a>
        </div>
        <div class="sns-login-item">
          <a href="#"><span class="iconfont icon-QQ" style="color:#18acfc"></span></a>
        </div>
        <div class="sns-login-item">
          <a href="#"><span class="iconfont icon-weibo" style="color:#ea5d5c"></span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.sns-login {
  .sns-login-title {
    text-align: center;
    line-height: 40px;
    color: #aaa;
    font-size: 17px;
    font-weight: 400;
  }

  .sns-login-content {
    height: 46px;
    margin-top: 10px;
    overflow: hidden;

    .sns-login-list {
      width: 100%;
      text-align: center;

      .sns-login-item {
        display: inline-block;
        margin: -10px 12px;
        width: 46px;
        width: 46px;

        .iconfont {
          font-size: 45px;
        }
      }
    }
  }
}
</style>
