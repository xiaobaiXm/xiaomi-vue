<template>
  <div class="selection-left">
    <a href="#" class="back-shoppinp">继续购物</a>
    <span class="cart-total">已选择<i>1</i>件</span>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.selection-left {
  float: left;
  line-height: 50px;

  .back-shoppinp {
    margin-left: 32px;
    transition: color .3s;
  }

  .cart-total {
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
    color: #757575;

    i {
      color: #ff6700;
    }
  }
}
</style>
