<template>
  <div class="handle-action">
    <div class="operating-button">
      <a href="javaceript:;" class="btn btn-primary">立即下单</a>
      <a href="javaceript:;" class="btn btn-return">返回购物车</a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.handle-action {
  float: right;

  .operating-button {
    .btn {
      display: inline-block;
      width: 158px;
      height: 38px;
      padding: 0;
      border: 1px solid #b0b0b0;
      font-size: 14px;
      line-height: 38px;
      text-align: center;
      color: #b0b0b0;
      transition: all .4s;
    }

    a {
      float: right;
      margin-left: 30px;
      vertical-align: top;
    }

    .btn-primary {
      background: #ff6700;
      border-color: #ff6700;
      color: #fff;

      &:hover {
        color: #fff !important;
      }
    }

    .btn-return {
      &:hover {
        color: #b0b0b0 !important;
      }
    }
  }
}
</style>
