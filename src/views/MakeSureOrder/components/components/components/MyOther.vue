<template>
  <div class="detail-section other">
    <div class="section-options section-shipment">
      <div class="options-desc options-header">
        <div class="title">配送方式</div>
      </div>
      <div class="options-desc options-body">
        <div class="options-list">
          <div class="options-item selected">{{ store.freight ===0  ? '包邮' : '快递配送（运费 10 元）' }}</div>
          </div>
        </div>
      </div>
      <div class="section-options section-invoice">
        <div class="options-desc options-header">
          <div class="title">发票</div>
        </div>
        <div class="options-desc options-body">
          <div class="options-list">
            <div class="options-item selected">电子普通发票</div>
            <div class="options-item selected">个人</div>
            <div class="options-item selected">商品明细</div>
            <a href="javascript:;" class="options-item selected">修改<span class="iconfont icon-youjiantou"></span></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useUserOrderStore } from '@/store/order'

const store = useUserOrderStore()
</script>

<style lang="less" scoped>
.other {
  .section-options {
    padding: 25px 0;

    .options-desc {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .options-header {
      width: 100px;

      .title {
        color: #333;
        font-size: 18px;
        line-height: 38px;
      }
    }

    .options-body {
      .options-list {
        width: 960px;

        .options-item {
          display: inline-block;
          height: 38px;
          line-height: 38px;
          margin-right: 14px;
          border: 1px solid #fff;
          color: #333;
          font-size: 14px;

          .iconfont {
            font-size: 12px;
          }
        }

        .selected {
          border-color: #fff;
          color: #ff6700;
        }
      }
    }

    &:nth-child(1) {
      border-bottom: 1px solid #e0e0e0;
    }
  }
}
</style>
