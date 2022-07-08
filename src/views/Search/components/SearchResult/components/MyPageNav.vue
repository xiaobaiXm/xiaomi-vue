<template>
  <div class="page_nav">
    <a href="javascript:void(0)">
      <span class="iconfont icon-xiangzuojiantou"></span>
    </a>
    <a href="javascript:void(0)">1</a>
    <span>...</span>
    <a href="javascript:void(0)">3</a>
    <a href="javascript:void(0)" class="avtive">4</a>
    <a href="javascript:void(0)" class="current">5</a>
    <a href="javascript:void(0)">7</a>
    <a href="javascript:void(0)">8</a>
    <span>...</span>
    <a href="javascript:void(0)">27</a>
    <a href="javascript:void(0)">
      <span class="iconfont icon-xiangyoujiantou"></span>
    </a>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.page_nav {
  height: 30px;
  padding: 15px 0;
  text-align: center;

  a {
    display: inline-block;
    width: 48px;
    height: 24px;
    padding: 3px 0;
    margin: 0 5px;
    font-size: 18px;
    font-weight: 200;
    line-height: 24px;
    color: #b0b0b0;
    font-weight: 400;
    text-align: center;
    transition: all .2s linear;

    .iconfont {
      margin-top: -3px;
      margin-left: -1px;
      vertical-align: top;
      font-size: 24px;

    }

    &:hover {
      background-color: #b0b0b0;
      color: #fff !important;

      .iconfont {
        color: #fff !important;
      }
    }
  }

  span {
    display: inline-block;
    width: 48px;
    height: 24px;
    padding: 3px 0;
    margin: 0 5px;
    font-size: 18px;
    line-height: 24px;
    color: #b0b0b0;
    box-sizing: border-box;
  }

  .current {
    background-color: #757575;
    color: #fff;
  }

  .active {
    background-color: #b0b0b0;
    color: #fff;
  }
}
</style>
