<template>
  <div class="no-select-tip">
    请勾选需要结算的商品
    <i class="arrow arrow-a"></i>
    <i class="arrow arrow-b"></i>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.no-select-tip {
  position: absolute;
  top: -54px;
  right: 0;
  width: 200px;
  height: 48px;
  line-height: 48px;
  background-color: #fff;
  border: 1px solid #ff6700;
  color: #ff6700;
  text-align: center;
  font-size: 14px;

  .arrow {
    display: block;
    width: 0;
    height: 0;
    border-style: solid dashed dashed;
    overflow: hidden;
    position: absolute;
    left: 50%;
  }

  .arrow-a {
    bottom: -8px;
    margin-left: -10px;
    border-width: 8px 10px 0;
    border-color: #ff6700 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    z-index: 1;
  }

  .arrow-b {
    bottom: -7px;
    margin-left: -8px;
    border-width: 7px 8px 0;
    border-color: #fff rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
    z-index: 2;
  }
}
</style>
