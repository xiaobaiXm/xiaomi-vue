<template>
  <div class="section-discount">
    <div class="discount-coupon">
      <a href="javascript:;" class="coupon-title coupon-title_recommend">
        <span class="iconfont icon-jia"></span>
        <span>使用优惠券</span>
        <span class="anavailable-coupon-tip available-coupon-tip_empty">无可用</span>
      </a>
    </div>
    <div class="position-box">
      <div class="discount-ecard">
        <a href="javascript:;" class="coupon-title">
          <span class="iconfont icon-jia"></span>
          <span>使用小米礼品卡</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.section-discount {
  position: absolute;
  left: 0;
  top: 20px;

  .discount-coupon,
  .position-box {
    position: relative;

    .coupon-title {
      display: inline-block;
      height: 50px;
      line-height: 50px;
      color: #757575;
      font-size: 14px;

      .iconfont {
        margin: 0 10px 0 0;
        color: #ff6700;
        font-size: 22px;
        vertical-align: middle;
      }

      .anavailable-coupon-tip {
        height: 20px;
        margin: 0 0 0 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #fe6702;
      }

      .available-coupon-tip_empty {
        color: #999;
      }
    }

    .coupon-title_recommend {
      display: flex;
      align-items: center;
    }
  }
}
</style>
