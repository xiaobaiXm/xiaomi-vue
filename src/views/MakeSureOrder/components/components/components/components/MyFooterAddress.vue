<template>
  <div class="footer-address">
    <div class="selecter-address">
      <div class="address-name">潘贵会 131****3587</div>
      <div class="address-desc">
        <span class="info">广西 柳州市 鱼峰区 柳州职业技术学院</span>
        <a href="javascript:;">修改</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.footer-address {
  float: left;

  .selecter-address {
    .address-name {
      line-height: 20px;
      color: #424242;
    }

    .address-desc {
      line-height: 20px;
      color: #424242;

      a {
        color: #ff6700;
      }

    }
  }
}
</style>
