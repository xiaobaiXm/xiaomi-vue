<template>
  <div class="order_list">
    <ul>
      <li class="order_item">
        <a href="#" class="active">综合</a>
      </li>
      <li class="order_item">
        <a href="#">新品</a>
      </li>
      <li class="order_item">
        <a href="#">销量</a>
      </li>
      <li class="order_item">
        <a href="#">价格<span class="iconfont icon-shang--jiantou"></span></a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.order_list {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  line-height: 30px;

  ul {
    .order_item {
      float: left;
      padding: 0 30px;
      font-size: 14px;

      a {
        color: #424242;
        transition: color 0.2s;

        .iconfont {
          font-size: 10px;
        }
      }

      &:nth-child(-n+3) {
        border-right: 1px solid #e0e0e0;
      }
    }

    .active {
      color: #ff6700 !important;
    }
  }
}
</style>
