<template>
  <div>
    <div class="product_detail w">
      <div class="title">
        <h3>价格说明</h3>
      </div>
      <div class="img">
        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/43e2954feb6d1b108438481f1d5b0bd3.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
div {
  background-color: #f5f5f5;

  .product_detail {
    height: 316px;

    .title {
      padding: 22px 0;

      h3 {
        color: #333;
        font-size: 22px;
        font-weight: 400;
      }
    }

    .img {
      img {
        height: 189px;
      }
    }
  }
}
</style>
