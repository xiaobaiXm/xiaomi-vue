<template>
  <div class="empty-list">
    <img src="https://m.mi.com/static/img/icon-search-empty.3d766c8b3f.png" alt="">
    <p class="empty">对应筛选条件下没有找到商品，换个筛选条件吧</p>
    <div class="btn">重置筛选条件</div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.empty-list {
  padding: 60px 0;
  width: 1226px;
  margin: 0 auto;
  text-align: center;

  img {
    width: 200px;
  }

  .empty {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .btn {
    display: inline-block;
    width: 158px;
    height: 38px;
    padding: 0;
    margin: 0;
    border: 1px solid #b0b0b0;
    font-size: 14px;
    line-height: 38px;
    text-align: center;
    color: #b0b0b0;
    cursor: pointer;
    transition: all .4s;
  }
}
</style>
