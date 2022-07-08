<template>
  <div class="addonitems-tips">
    <div class="tip">还需 ？？ 元可免运费</div>
    <a href="javascript:;">去凑单<span class="iconfont icon-youjiantou"></span> </a>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.addonitems-tips {
  height: 20px;
  margin-bottom: 14px;
  line-height: 20px;
  text-align: right;
  color: rgba(0, 0, 0, .54);
  font-size: 14px;

  .tip {
    display: inline-block;
  }

  a {
    margin-left: 12px;
    color: rgba(0, 0, 0, .87);

    .iconfont {
      font-size: 12px;
    }

    &:hover {
      color: rgba(0, 0, 0, .87) !important;

    }
  }
}
</style>
