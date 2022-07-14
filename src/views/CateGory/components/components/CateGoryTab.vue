<template>
  <div class="category_tab">
    <h2 class="tab" @click="changeKistHeight">
      <div class="iconfont icon-xiajiantou_huaban"></div>
      {{ categoryTitle }}
    </h2>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  categoryTitle: string
}>()

const changeKistHeight = () => {
  console.log('ok')
}

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
