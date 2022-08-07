<template>
  <div class="page_nav">
    <span class="numbers first iconfont icon-xiangzuojiantou"></span>
    <!-- <a href="javascript:;" class="numbers first iconfont icon-xiangzuojiantou"></a> -->
    <span class="numbers">1</span>
    <span class="numbers">···</span>
    <span class="numbers">3</span>
    <span class="numbers">4</span>
    <span class="numbers current">5</span>
    <span class="numbers">7</span>
    <span class="numbers">8</span>
    <span class="numbers">···</span>
    <span class="numbers">27</span>
    <!-- <span class="numbers last iconfont icon-xiangyoujiantou"></span> -->
    <a href="javascript:;" class="numbers last iconfont icon-xiangyoujiantou"></a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  pageNo: number
  pageSize: number
  continues: number
}>()
</script>

<style lang="less" scoped>
.page_nav {
  height: 30px;
  padding: 15px 0;
  text-align: center;

  .numbers {
    display: inline-block;
    width: 48px;
    height: 30px;
    padding: 3px 0;
    margin: 0 5px;
    font-size: 18px;
    font-weight: 200;
    line-height: 24px;
    color: #b0b0b0;
    font-weight: 400;
    text-align: center;
    transition: all .2s linear;
    box-sizing: border-box;

    .iconfont {
      margin-top: -3px;
      margin-left: -1px;
      vertical-align: top;
      font-size: 24px;
    }
  }

  a {
    &:hover {
      background-color: #b0b0b0;
      color: #fff !important;

      .iconfont {
        color: #fff !important;
      }
    }
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
