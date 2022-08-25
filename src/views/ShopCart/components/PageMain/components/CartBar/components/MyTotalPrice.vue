<template>
  <div class="total-price">
    合计：<em>66</em>元
    <a href="javascript:;" class="btn-primary btn-disabled">去结算</a>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.total-price {
  height: 48px;
  line-height: 48px;
  padding-left: 13px;
  color: #ff6700;
  font-size: 14px;

  em {
    font-size: 30px;
  }

  .btn-primary {
    display: inline-block;
    width: 202px;
    height: 50px;
    margin-left: 50px;
    line-height: 48px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    background-color: #ff6700;
    border: 1px solid #b0b0b0;
    transition: color .3s;
    box-sizing: border-box;
    vertical-align: top;

    &:hover {
      color: #fff !important;
      background-color: #f25807;
    }
  }

  .btn-disabled {
    background: #e0e0e0 !important;
    border-color: #e0e0e0 !important;
    color: #b0b0b0 !important;
    cursor: default !important;

    &:hover {
      color: #b0b0b0 !important;
    }
  }
}
</style>
