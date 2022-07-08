<template>
  <div class="category_tab">
    <h2 class="tab">
      <div class="iconfont icon-xiajiantou_huaban"></div>
      {{ categoryName }}
    </h2>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  categoryName: string
}>()

</script>

<style lang="less" scoped>
.category_tab {
  height: 74px;
  padding-top: 14px;
  box-sizing: border-box;

  .tab {
    display: block;
    box-sizing: border-box;
    color: #ff6700;
    font-weight: 400;
    cursor: pointer;

    .iconfont {
      display: inline-block;
      margin-right: 10px;
      font-size: 24px;
      vertical-align: middle;
      color: #b0b0b0;

    }
  }
}
</style>
