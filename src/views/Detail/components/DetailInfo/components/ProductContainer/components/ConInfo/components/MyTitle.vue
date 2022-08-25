<template>
  <h2 class="title">Redmi Note 11 Pro系列</h2>
  <p class="desc">
    三星AMOLED高刷屏 | JBL 对称式立体声 | 一亿像素超清影像 | 天玑920液冷芯 | VC液冷立体散热
  </p>
  <p title="" class="company_info">小米自营</p>
  <div class="price_info">
    <span class="price">1599元<del class="old_price">1799元</del></span>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.title {
  color: #212121;
  font-size: 24px;
  font-weight: 400;
}

.desc {
  margin-top: 8px;
  color: #b0b0b0;
  font-size: 14px;
}

.company_info {
  margin-top: 14px;
  color: #ff6700;
  font-size: 14px;
}

.price_info {
  padding: 12px 0 10px;

  .price {
    color: #ff6700;
    font-size: 18px;

    .old_price {
      margin-left: 5px;
      color: #b0b0b0;
      font-size: 14px;
    }
  }
}
</style>
