<template>
  <div class="section-bill">
    <div class="bill-item">
      <div class="bill-name">商品件数：</div>
      <div class="bill-money">{{store.totalCount}}件</div>
    </div>
    <div class="bill-item">
      <div class="bill-name">商品总价：</div>
      <div class="bill-money">{{store.totalPrice}}元</div>
    </div>
    <div class="bill-item">
      <div class="bill-name">活动优惠：</div>
      <div class="bill-money">-0元</div>
    </div>
    <div class="bill-item">
      <div class="bill-name">优惠券抵扣：</div>
      <div class="bill-money">-0元</div>
    </div>
    <div class="bill-item">
      <div class="bill-name">运费：</div>
      <div class="bill-money">{{ store.freight ===0 ? '0' : '10' }}元</div>
    </div>
    <div class="bill-item total-price">
      <div class="bill-name">应付金额：</div>
      <div class="bill-money"><em>
          {{store.totalPrice + store.freight}}
        </em>元</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserOrderStore } from '@/store/order'

const store = useUserOrderStore()
</script>

<style lang="less" scoped>
.section-bill {
  position: absolute;
  bottom: 20px;
  right: 0;

  .bill-item {
    position: relative;
    padding-left: 126px;
    line-height: 2;
    text-align: right;
    font-size: 14px;

    .bill-name {
      position: absolute;
      top: 0;
      left: 0;
      width: 126px;
      white-space: nowrap;
      color: #757575;
    }

    .bill-money {
      color: #ff6700;

      em {
        font-style: normal;
        font-size: 30px;
        line-height: 1;
      }
    }
  }

  .total-price {
    margin: 10px 0 0;

    .bill-name {
      margin-top: 5px;
    }
  }
}
</style>
