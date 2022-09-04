<template>
  <h2 class="recommend_title">
    <span>{{ title }}</span>
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style lang="less" scoped>
.recommend_title {
  position: relative;
  height: 50px;
  margin: 0;
  font-size: 30px;
  font-weight: 400;
  color: #757575;
  border-top: 1px solid #e0e0e0;

  span {
    position: absolute;
    top: -20px;
    left: 372px;
    height: 40px;
    width: 482px;
    line-height: 40px;
    text-align: center;
    display: block;
    background-color: #f5f5f5;
  }
}
</style>
